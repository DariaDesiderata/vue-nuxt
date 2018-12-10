<template>
  <main>
    <div class="landing-inner">
    <top-nav class="nav"/>
    <section 
      v-for="project in projects" 
      :key="project.id" 
      v-if='project.id === currentProject.id' 
      class="section">
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
  			<img :src="project.imgUrl" class="section__img-inner"/>
        <div class="section__more">
            <button @click="showPrev(project)" class="section__more-button">Previous</button>
    				<a :href="project.projectUrl" class="section__more-link">Explore</a>
            <button @click="showNext(project)" class="section__more-button">Next</button>
    		</div>
  		</div>
      <div class="section__project_id">{{project.id}}</div>
  		</section>
    </div>
    </main>
  </template>

<script>
import TopNav from "~/components/Nav.vue";
import projects from "~/common/projects";
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
    getIndex(currentProject) {
      return this.projects.findIndex(
        project => project.id === currentProject.id
      );
    },
    showNext: function(currentProject) {
      const index = this.getIndex(currentProject);
      if (index < this.projects.length - 1) {
        this.currentProject = projects[index + 1];
      } else {
        this.currentProject = projects[0];
      }
    },
    showPrev: function(currentProject) {
      const index = this.getIndex(currentProject);
      if (index > 0) {
        this.currentProject = projects[index - 1];
      } else {
        this.currentProject = projects[this.projects.length - 1];
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
  font-family: "Alegreya Sans";
  font-size: 20px;
  background-color: hsla(0, 0%, 98%, 0.68);
}

.section__img {
  border: 1px solid hsla(339, 6%, 46%, 0.3);
  z-index: 5;
  position: relative;
}
.section__img-inner {
  height: 397px;
}

.section__img img {
  filter: grayscale(60%);
  width: 90%;
  display: block;
  margin: 5% auto;
}
.section__img:hover img {
  filter: none;
  -webkit-transform: translate3d(0, 0, 0) scale(1);
  transform: translate3d(0, 0, 0) scale(1);
}

.section__project_id {
  font-size: 80px;
}
.section__more {
  font-family: "Alegreya Sans";
  height: 40px;
  margin: 0 1em;
  font-size: 20px;
  position: absolute;
  right: 5%;
  bottom: 5%;
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
  color: hsla(308, 52%, 59%, 0.9);
}
@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) {
  main {
    background: url("../static/assets/Stroke-5.png") no-repeat center center
      fixed;
    background-size: 90%;
    height: 100vh;
    display: grid;
    grid-template-rows: 10% 90%;
    grid-template-areas: "header-nav" "section";
  }
  .nav {
    grid-area: header-nav;
  }
  .section {
    height: 95%;
    grid-area: section;
    display: grid;
    grid-template-columns: 40% 10% 30% 10% auto;
    grid-template-rows: 10% 25% 50% auto;
    grid-template-areas:
      ". . . ."
      ". slide-image slide-image slide-image"
      "slide-content  slide-image slide-image slide-image"
      ". . . section-id";
  }
  .section__content {
    padding-left: 50px;
    width: 120%;
    grid-area: slide-content;
    z-index: 50;
  }
  .section__description-text {
    font-family: "Alegreya Sans";
    line-height: 1.5em;
    letter-spacing: 1.5px;
    background-color: hsla(13, 100%, 95%, 0.81);
    padding: 20px 0 20px 20px;
  }

  .section__img {
    height: auto;
    grid-area: slide-image;
    overflow: hidden;
  }
  .section__project_id {
    margin-left: 200px;
    grid-area: section-id;
  }
  .section__more {
    grid-area: more;
  }
}
</style>
