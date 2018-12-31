<template>
  <section class="container">
    <main class="landing">
      <div class="landing-inner">
        <top-nav/>
          <bio></bio>
          <icon-section></icon-section>
        </div>
    </main>
  </section>
</template>

<script>
import TopNav from "~/components/Nav.vue";
import Bio from "~/components/Bio";
import { IconSection } from "~/components/icons";

export default {
  components: {
    TopNav,
    Bio,
    IconSection
  }
};
</script>

<style scoped>
.landing {
  background: url("../static/assets/img/Stroke-6.png") no-repeat center center
    fixed;
  background-size: 90%;
}

.about {
  height: 532px;
  margin: 10% auto;
  padding: 20px 100px;
  line-height: 32px;
  min-width: calc(60% - 100px);
  color: hsla(339, 6%, 46%, 0.93);
}
</style>
