<template>
    <section class="container">
      <main class="landing">
        <div class="landing-inner contact">
        <top-nav/>
          <h1 class="contact__header">
            <span class='contact__header-italic'>D</span>rop me a line
          </h1>
          <div class="contact__body">
            <form class="contact__form" name="contact" action="/thank-you"  method="post">
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
              <input class="form-button" type="submit" value="Send message" />
            </form>
          </div>
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
  font-size: 30px;
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
}
.contact__form {
  height: 350px;
  margin: 2% 25%;
  border: 1px solid hsla(339, 6%, 46%, 0.3);
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
</style>
