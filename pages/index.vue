<template>
  <section class="container">
    <main class="landing">
      <div class="landing-inner">
        <ul class="menu">
          <li><nuxt-link to="/projects">Projects</nuxt-link></li>
          <li> / <li>
          <li><nuxt-link to="/links">Links </nuxt-link></li>
          <li> / <li>
          <li><nuxt-link to="/about">About me </nuxt-link></li>
        </ul>
        <div class="star">
          <h1 class="title">DC</h1>
          <p class="title-small">React developer</p>
        </div>

      </div>
    </main>
    <!-- <h1 class="title">
      USERS
    </h1> -->
    <!-- <ul class="users">
      <li v-for="(user, index) in users" :key="index" class="user">
        <nuxt-link :to="{ name: 'id', params: { id: index }}">
          {{ user.name }}
        </nuxt-link>
      </li>
    </ul> -->
  </section>
</template>

<script>
import axios from '~/plugins/axios';

export default {
  async asyncData() {
    let { data } = await axios.get('/api/users');
    return { users: data };
  },
  head() {
    return {
      title: 'Users'
    };
  }
};
</script>

<style scoped>
.landing-inner {
  position: relative;
  height: calc(100vh - 40px);
  margin: 20px;
  border: 4px double hsla(360, 100%, 100%, 1);
}
.star{
  position: relative;
  opacity: 0.6;
  top: 20%;
  left: 40%;
	width: 300px;
	height: 300px;
  border: 4px double hsla(360, 100%, 100%, 1);
}
.star::before {
	content: " ";
	width: 300px;
	height: 300px;
  background-color: hsla(360, 100%, 100%, 1);
  opacity: 1;
	transform:rotate(45deg);
	position: absolute;
  	top:0px;
  	left:0px;
  	border: 4px double hsla(360, 100%, 100%, 1);
}
.title {
  font-size: 100px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.title-small {
  position: relative;
  top: 25%;
  transform: translateY(-25%);
}
.menu {
  list-style: none;
  text-align: center;
  display: flex;
  justify-content: center;
}
li, a{
  font-size: 25px;
  margin: 5px 10px;
  text-decoration: none;
  transition: color 0.3s ease;
}
a:hover {
  color: hsla(329, 100%, 45%, 1);
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
</style>
