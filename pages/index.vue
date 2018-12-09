<template>
  <section class="container">
    <main class="landing">
      <div class="landing-inner">
        <top-nav/>
        <div class="title-section">
          <h1 class="title">Daria Calwell</h1>
          <p class="title-small">Web UI developer</p>
        </div>

        <div class="landing-tagline">
          <transition appear appear-class="fadeIn" appear-active-class="fadeInEnterActive-1">
            <span><span class="landing-tagline__italic">A</span>dventurous </span>
          </transition>  
           <transition appear appear-class="fadeIn" appear-active-class="fadeInEnterActive-2">
            <span key='2'><span class="landing-tagline__italic anim-2">W</span>arm </span>
           </transition> 
           <transition appear appear-class="fadeIn" appear-active-class="fadeInEnterActive-3">
            <span class="anim-3" key='3'><span class="landing-tagline__italic anim-3">E</span>xploring</span>
           </transition> 
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

<style lang="scss" scoped>
@import url("../static/assets/css/fonts.scss");
$tuesday-night: "Tuesday night", sans-serif;
$beau: "Beau", sans-serif;

.landing-tagline {
  font-family: $beau;
  font-weight: 400;
  letter-spacing: 2px;
  font-size: 1.5em;
  margin-top: 157px;
}

.landing-tagline__italic {
  font-style: italic;
  font-size: 1.5em;
  padding-left: 20px;
}
.fadeInEnterActive-1,
.fadeInEnterActive-2,
.fadeInEnterActive-3 {
  transition: opacity 0.25s ease-in;
}
.fadeIn {
  opacity: 0;
}

.fadeInEnterActive-2 {
  transition-delay: 0.4s;
}
.fadeInEnterActive-3 {
  transition-delay: 0.8s;
}
.title-section {
  font-family: $tuesday-night, sans-serif;
  border-radius: 7px;
  position: relative;
  opacity: 0.6;
  top: 20%;
  left: 40%;
  width: 300px;
  height: 300px;
  border: 4px double hsla(230, 10%, 12%, 0.5);
}
.title-section::before {
  border-radius: 7px;
  content: " ";
  width: 300px;
  height: 300px;
  background-color: hsla(339, 57%, 94%, 0.5);
  opacity: 1;
  transform: rotate(45deg);
  position: absolute;
  top: 0px;
  left: 0px;
  border: 4px double hsla(230, 10%, 12%, 0.5);
}
.title {
  white-space: nowrap;
  letter-spacing: 3px;
  margin-left: -90px;
  font-size: 100px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: hsla(314, 42%, 11%, 1);
}
.title-small {
  position: relative;
  font-size: 30px;
  transform: translateY(-25%);
}
.users {
  list-style: none;
  margin: 0;
  padding: 0;
}
.user {
  margin: 10px 0;
}
@keyframes fadeInAnim {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes grow-left {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
</style>
