<template>
  <section class="container">
    <main class="landing">
      <div class="landing-inner">
        <top-nav/>
        <div>Hello my name is Daria</div>
      </div>
    </main>
  </section>
</template>

<script>
import TopNav from '~/components/Nav.vue';

export default {
  components: {
    TopNav
  }
};
</script>

<style scoped>
.landing {
  background: url('../assets/bw_rocks.jpg') no-repeat center center fixed;
  background-size: 100%;
}

</style>
