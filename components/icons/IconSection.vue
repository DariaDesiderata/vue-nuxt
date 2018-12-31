<template>
  <div class='icons__section'>
     <a target="_blank" rel="noopener noreferrer" href="https://github.com/DariaDesiderata">
      <icon-base 
        width="80"
        height="80"
        icon-name="github"
        class="icon__section-icon"
        >
          <icon-github/>
      </icon-base>
    </a> 
    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/daria-calwell/"> 
      <icon-base 
        width="80"
        height="80"
        icon-name="linkedin"
        class="icon__section-icon"
        >
          <icon-linkedin/>
      </icon-base>
    </a> 
    <router-link to="/contact"> 
      <icon-base 
        width="80"
        height="80"
        icon-name="gmail"
        class="icon__section-icon"
        >
          <icon-gmail/>
      </icon-base>
    </router-link>  
    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/milknhonnee_art/"> 
      <icon-base 
        width="80"
        height="80"
        icon-name="instagram"
        class="icon__section-icon">
          <icon-instagram/>
      </icon-base>
    </a>  
  </div>  
</template>

<script>
import {
  IconBase,
  IconGithub,
  IconGmail,
  IconInstagram,
  IconLinkedin
} from "./";

export default {
  components: {
    IconBase,
    IconGithub,
    IconGmail,
    IconInstagram,
    IconLinkedin
  }
};
</script>
  
<style scoped>
.icons__section {
  margin: 0% 30%;
  display: flex;
  justify-content: space-around;
}
</style>
