<template>
  <ul class="mainNav">
    <li><nuxt-link to="/">Main</nuxt-link></li>
    <li> / <li>
    <li><nuxt-link to="/projects">Projects</nuxt-link></li>
    <li> / <li>
    <li><nuxt-link to="/links">Links </nuxt-link></li>
    <li> / <li>
    <li><nuxt-link to="/about">Collaborate </nuxt-link></li>
  </ul>
</template>

<style lang='scss' scoped>
@import url("../static/assets/css/fonts.scss");

$beau: "Beau", sans-serif;

.mainNav {
  font-family: $beau;
  letter-spacing: 2px;
  list-style: none;
  text-align: center;
  display: flex;
  justify-content: center;
}
li,
a {
  font-size: 20px;
  margin: 5px 10px;
  transition: color 0.3s ease;
  text-decoration: none;
  color: hsla(230, 10%, 12%, 0.7);
}

a:hover {
  color: hsla(308, 52%, 59%, 1);
}
</style>
