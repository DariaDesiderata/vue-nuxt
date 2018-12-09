<template>
  <section class="container">
    <main class="landing">
      <div class="landing-inner">
        <top-nav/>
        <div class="about">
          <h3>Hello my name is Daria</h3>
          <p>Seitan blue bottle shabby chic freegan stumptown literally.
            Gluten-free neutra farm-to-table plaid ugh enamel pin chia
            scenester keytar pok pok tumeric messenger bag meh actually
            glossier. Jean shorts 8-bit organic mlkshk. Tote bag affogato
            selvage roof party shabby chic kombucha raclette beard everyday
            carry small batch next level cloud bread portland.
            Meh af literally plaid, raclette jean shorts chambray synth.
            Small batch bushwick etsy kombucha venmo post-ironic master
            cleanse wolf bitters la croix iceland tbh YOLO retro.</p>
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

<style scoped>
.landing {
  background: url("../static/assets/about_me.jpg") no-repeat center center fixed;
}
.about {
  margin: 50px auto;
  min-width: calc(80% - 100px);
  color: hsla(339, 6%, 46%, 0.93);
}
</style>
