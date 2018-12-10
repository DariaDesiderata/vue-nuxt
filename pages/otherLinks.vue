<template>
  <section class="container">
    <main class="landing">
      <div class="landing-inner">
        <top-nav/>
         <p> Section coming soon </p> 
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

<style scoped>
.landing {
  background: url("../static/assets/Background-1.png") no-repeat center center
    fixed;
  background-size: 100%;
}
.about {
  margin: 50px auto;
  width: calc(80% - 100px);
  color: hsla(339, 6%, 46%, 0.93);
}
</style>
