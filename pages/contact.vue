<template>
    <section class="container">
      <main class="landing">
        <div class="landing-inner contact">
        <top-nav/>
          <h1 class="contact__header">
            <span class='contact__header-italic'>G</span>et in <span class='contact__header-italic'>t</span>ouch
          </h1>
          <form class="contact__form" name="contact" action="/contact"  method="post">
            <label class="contact__form-label" for="name">
              Name:
            </label>
            <input class="contact__form-field" name="name" id="name" />
            <label class="contact__form-label" for="email">
              Email:
            </label>
            <input class="contact__form-field" name="email" id="email" />
            <label class="contact__form-label" for="message">
              Message:
            </label>
            <textarea class="contact__form-field" name="message" id="message"></textarea>
            <input class="form-button" type="submit" value="This will eventually send a message" />
          </form>
      </div>
    </main>
  </section>
</template>

<script>
import TopNav from "~/components/Nav.vue";
export default {
  components: {
    TopNav
  }
};
</script>

<style scoped lang="scss">
@import url("../static/assets/css/fonts.scss");
$beau: "Beau", sans-serif;
.contact {
  font-family: $beau;
}
.contact__header {
  margin: 15px auto;
  font-size: 35px;
  letter-spacing: 2px;
  font-weight: 400;
}
.contact__header-italic {
  font-size: 40px;
  font-style: italic;
}
.contact__form {
  padding: 50px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 350px;
  margin: 2% 25%;
  background: hsla(339, 6%, 77%, 0.32);
  box-shadow: 5px 5px 25px hsla(339, 6%, 46%, 0.3);
  border-radius: 4px;
}
.contact__form-field {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid hsla(339, 6%, 46%, 0.3);
  outline: none;
}
.contact__form-field:focus {
  outline: none;
}
.contact__form-label {
  text-align: left;
}
.landing {
  background: url("../static/assets/bw_opacity10.jpg") no-repeat center center
    fixed;
  background-size: 90%;
}
</style>
