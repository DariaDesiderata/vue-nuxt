<template>
  <main>
    <div class="landing-inner">
    <top-nav class="nav"/>
    <section v-for="project in projects"  v-if='project.id === currentProject.id' class="section">
  		<div  class="section__content">
  			<h3 class="section__title">{{ project.title }}</h3>
  			<h5 class="section__description">
        {{ project.description }}
        </h5>
        <p class='section__description-text'>
        {{ project.descriptionBody }}
        </p>
  		</div>
  		<div class="section__img">
  			<img :src="project.imgUrl" class="section__img-inner"></img>
  		</div>
  		<div class="section__more">
  				<a :href="project.projectUrl" class="section__more-link">Explore on Github</a>
          <button @click="showNext(project)" class="section__more-button">See next</button>
  		</div>
  		</section>
    </div>
    </main>
  </template>

<script>
import TopNav from '~/components/Nav.vue';
import projects from '~/common/projects';
export default {
  components: {
    TopNav
  },

  data() {
    return {
      currentProject: projects[0],
      projects: projects
    };
  },
  methods: {
    showNext: function(currentProject) {
      const index = this.$data.projects.findIndex(
        project => project.id === currentProject.id
      );
      if (index < this.$data.projects.length - 1) {
        this.$data.currentProject = projects[index + 1];
      } else {
        this.$data.currentProject = projects[0];
      }
    }
  }
};
</script>

<style scoped>

.section__title {
	font-size: 45px;
	margin: 0;
	position: relative;
}

.section__description {
  margin: 10px 0;
	overflow: hidden;
	position: relative;
	font-weight: 300;
  font-family: 'Alegreya Sans';
  font-size: 20px;
  background-color: hsla(0, 0%, 98%, 0.68);
}

.section__img {
	/*width: 90%;*/
  margin-left: 60px;
	height: 90%;
  box-shadow: 1px 5px 10px hsla(0, 0%, 48%, .5);
}

.section__img img {
  filter: grayscale(60%);
  width: calc(120% + 60px);
  height: 100%;
  transition: transform 0.35s;
	/*-webkit-transform: translate3d(-30px,0,0) scale(1.12);*/
	transform: translate3d(-30px,0,0) scale(1.12);
	/*-webkit-backface-visibility: hidden;*/
	backface-visibility: hidden;
}
.section__img:hover img{
  filter: none;
	-webkit-transform: translate3d(0,0,0) scale(1);
	transform: translate3d(0,0,0) scale(1);
}
.section__more {
  font-family: 'Alegreya Sans';
  height: 30%;
  margin: 0 1em;
  font-size: 20px;
  justify-self: end;
  display: flex;
  justify-content: space-between;
}
.section__more-link {
  margin: 0 1em;
  padding: 5px 10px;
  background-color: hsla(13, 100%, 95%, 0.81);
  text-decoration: none;
	cursor: pointer;
  color: inherit;

}
.section__more-button {
  padding: 5px 10px;
  background-color: hsla(13, 100%, 95%, 0.81);
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
		grid-template-columns: 40%  55% auto;
		grid-template-rows: 15% 15% 30% 20%;
		grid-template-areas: 	". . ."
                ".  slide-image ."
								"slide-content  slide-image ."
                "slide-content slide-image ."
								". more .";
	}
	.section__content {
		padding-left: 50px;
    width: 120%;
		grid-area: slide-content;
    z-index: 50;
	}
  .section__description-text {
    font-family: 'Alegreya Sans';
    line-height: 1.5em;
    letter-spacing: 1.5px;
    background-color: hsla(13, 100%, 95%, 0.81);
    padding: 20px 0 20px 20px;
  }

	.section__img {
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
