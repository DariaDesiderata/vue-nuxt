<template>
  <main>
    <div class="landing-inner">
    <top-nav class="nav"/>
    <section class="section">
  		<div class="section__content">
  			<h3 class="section__title">{{ project1.title }}</h3>
  			<h5 class="section__description">
        {{ project1.description }}
        </h5>
        <p class='section__description-text'>
        {{ project1.descriptionBody }}
        </p>

  		</div>
  		<div class="section__img">
  			<img :src="project1.imgUrl" class="section__img-inner"></img>
  		</div>
  		<div class="section__more">
  				<a :href="project1.projectUrl" class="section__more-link">Explore on Github</a>
          <button class="section__more-button">See next</button>
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
  },
  data() {
    return {
      project1: {
        title: 'Wanderers',
        description:
          'Explore the Solar System in virtual reality and enjoy stunning hi-res images',
        descriptionBody:
          'Solo project created with Three.js, Css animations and Express server.\
      Working on this project allowed me to learn various aspects of WebGL, manipulating objects\
      on Canvas and mapping data to visual display of objects.',
        imgUrl: './assets/Wanderers2.png',
        projectUrl: 'https://github.com/DariaDesiderata/wanderers'
      },
      project2: {
        title: 'E-Commerse',
        description:
          'Online shopping experience for users shopping across multiple stores with inventory split into different categories',
        descriptionBody:
          'As a UI developer on the Experiece Team at Baker Technologies I utilized React/Redux technologies to create a styled interfaced \
          to provide online shoppers with various filtering, sorting and viewing options for the specific products at different stores across the US and Canada.\
          Other tech used in the project are REST API, GraphQL/Apollo, Scss/Css/Keyframe animations, Webpack/Babel',
        imgUrl: './assets/Baker_shop.png',
        projectUrl: 'Private'
      },
      project3: {
        title: '',
        description: '',
        descriptionBody: '',
        imgUrl: '',
        projectUrl: ''
      },
      project4: {
        title: '',
        description: '',
        descriptionBody: '',
        imgUrl: '',
        projectUrl: ''
      }
    };
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
  height: 30%;
  margin: 0 1em;
  font-size: 1.3em;
  justify-self: end;
  display: flex;
  justify-content: space-between;
}
.section__more-link {
  margin: 0 1em;
  padding: 5px 10px;
  background-color: hsla(339, 57%, 94%, 0.9);
  text-decoration: none;
	cursor: pointer;
  color: inherit;

}
.section__more-button {
  padding: 5px 10px;
  background-color: hsla(339, 57%, 94%, 0.9);
  border: none;
  text-decoration: none;
	cursor: pointer;
}
.section__more-link:hover {
  color: hsla(308, 52%, 59%, .9);
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) {
  main {
    background-image: url('../static/assets/bw_opacity10.jpg');
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
    background-color: hsla(339, 57%, 94%, 0.9);
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
