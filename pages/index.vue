<template>
  <section class="container">
    <main class="landing">
      <div class="landing-inner">
        <top-nav/>
        <div class="star">
          <h1 class="title">DC</h1>
          <p class="title-small">Web UI developer</p>
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
import TopNav from '~/components/Nav.vue';

export default {
  components: {
    TopNav
  },
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
.star{
  border-radius: 7px;
  position: relative;
  opacity: 0.6;
  top: 20%;
  left: 40%;
	width: 300px;
	height: 300px;
  border: 4px double hsla(230, 10%, 12%, .5);
}
.star::before {
  border-radius: 7px;
	content: " ";
	width: 300px;
	height: 300px;
  background-color: hsla(339, 57%, 94%, 0.5);
  opacity: 1;
	transform:rotate(45deg);
	position: absolute;
  	top:0px;
  	left:0px;
  	border: 4px double hsla(230, 10%, 12%, .5);
}
.title {
  font-size: 100px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  color: hsla(314, 42%, 11%, 1)
}
.title-small {
  position: relative;
  top: 25%;
  transform: translateY(-25%);
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
