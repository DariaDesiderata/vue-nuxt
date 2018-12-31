import { Router } from "express";
import nodemailer from "nodemailer";
import validator from "validator";
import xssFilters from "xss-filters";
const router = Router();

router.post("/contact", (req, res) => {
  const attributes = ["name", "email", "msg"];
  const sanitizedAttributes = attributes.map(attr =>
    validateAndSanitize(attr, req.body[attr])
  );
  const someInvalid = sanitizedAttributes.some(r => !r);
  if (someInvalid) {
    // Throw a 422 with a neat error message if validation failed
    return res.status(422).json({ error: "Looks funky, unable to process" });
  }
  sendMail(...sanitizedAttributes);
  res.status(200).json({ message: "Success" });
});

const rejectFunctions = [
  ["name", v => v.length < 4],
  ["email", v => !validator.isEmail(v)],
  ["msg", v => v.length < 25]
];

const validateAndSanitize = (key, value) => {
  // If map has key and function returns false, return sanitized input. Else, return false
  return (
    rejectFunctions.has(key) &&
    !rejectFunctions.get(key)(value) &&
    xssFilters.inHTMLData(value)
  );
};

const sendMail = (name, email, msg) => {
  const transporter = nodemailer.createTransport({
    sendmail: true,
    newline: "unix",
    path: "/usr/sbin/sendmail"
  });
  transporter.sendMail({
    from: email,
    to: "daria.calwell@gmail.com",
    subject: "New contact form message",
    text: msg
  });
};
export default router;
