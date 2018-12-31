import { Router } from "express";

import contact from "./contact";

const router = Router();

// Add USERS Routes
router.use(contact);

export default router;
