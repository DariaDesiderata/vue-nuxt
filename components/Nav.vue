<template>
  <ul class="mainNav">
    <li><nuxt-link to="/">Main</nuxt-link></li>
    <li> / <li>
    <li><nuxt-link to="/projects">Projects</nuxt-link></li>
    <li> / <li>
    <li><nuxt-link to="/otherLinks">Links </nuxt-link></li>
    <li> / <li>
    <li><nuxt-link to="/about">Collaborate </nuxt-link></li>
  </ul>
</template>

<style lang='scss' scoped>
@import url("../static/assets/css/fonts.scss");

$beau: "Beau", sans-serif;

.mainNav {
  font-family: $beau;
  letter-spacing: 3px;
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
  color: #1c1d22;
}

a:hover {
  color: #cd60be;
}
</style>
