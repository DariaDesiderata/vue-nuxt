<template>
  <main>
    <div class="landing-inner">
    <top-nav class="nav"/>
    <section class="section">
  		<div class="section__content">
  			<h3 class="section__title">Wanderers</h3>
  			<h5 class="section__description">
          Explore the Solar System in virtual reality and enjoy stunning hi-res images
        </h5>
        <p class='section__description-text'>
          Solo project created with Three.js, Css animations and Express server.
          Working on this project allowed me to learn various aspects of WebGL, manipulating objects
          on Canvas and mapping data to visual display of objects.
        </p>

  		</div>
  		<div class="section__img">
  			<img src="../assets/Wanderers2.png" class="section__img-inner"></img>
  		</div>
  		<div class="section__more">
  				<a href="https://github.com/DariaDesiderata/wanderers" class="section__more-link">Explore on Github</a>
  		</div>
  		</section>
    </div>
    </main>
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

.section__title {
	font-size: 6vw;
	margin: 0;
	position: relative;
}

.section__description {
	line-height: 1.75;
  margin: 0 1.5em 0 0;
	overflow: hidden;
	position: relative;
	padding: 0 2em 0 0;
	font-weight: 300;
}

.section__img {
	height: 45vh;
}

.section__img-inner {
  filter: grayscale(50%);
	width: 100%;
	height: auto;
}
.section__img-inner:hover {
  filter: none;
}
.section__more {
  background-color: hsla(308, 52%, 59%, .3);
	width: 50%;
  height: 20%;
  padding: .5em;
  margin: 0 1em;
  font-size: 1.3em;
  justify-self: end;
}
.section__more-link {
  text-decoration: none;
	cursor: pointer;
	font-weight: 300;
}
.section__more-link:hover {
  color: hsla(308, 52%, 59%, .9);
}
@media screen and (min-width: 55em) and (min-height: 40em) {
	  main {
      background-image: url('../assets/bw_opacity10.jpg');
      background-size: cover;
		  height: 100vh;
  		display: grid;
  		grid-template-rows: 10% 90%;
  		grid-template-areas: 	"header-nav" "section"
	}
  .nav {
    grid-area: header-nav;
  }
  .section {
    height: 100%;
		grid-area: section;
		display: grid;
		grid-template-columns: 40% auto 40%;
		grid-template-rows: 15% 15% 30% 20%;
		grid-template-areas: 	". . ."
                ". slide-image slide-image"
								"slide-content slide-image slide-image"
                ". slide-image slide-image"
								". . more";
	}
	.section__content {
		padding: 0 4em;
    width: 120%;
		grid-area: slide-content;
    z-index: 50;
	}
  .section__description-text {
    background-color: hsla(230, 10%, 83%, 1);
    padding: 10px;
  }

	.section__img {
    padding: 0 1em;
    height: auto;
		grid-area: slide-image;
		overflow: hidden;
		z-index: 1;
	}
	.section__more {
		grid-area: more;
	}
}


</style>
