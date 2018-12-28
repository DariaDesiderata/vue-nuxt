
<template>
    <div class='bio'>
        <p class='bio__tagline'>
            <span class='bio__tagline-italic'>Hello</span> my name is Daria</p>
        <p class='bio__main-left'>
            I am an Eastern European software developer and a creative risk taker. In my work and in life
            I enjoy patterns, organization, <span class='bio__tagline-italic'>A</span>lgorithms and spontaneity. I study the rules so i can later 
            efficiently break them.
        </p>
        <p class='bio__main-right'>
             My current professional interests involve front end eco-system (<span class='bio__tagline-italic'>V</span>ue, React, Apollo), 
            as well as backend technologies (GraphQL, Node, Postgres).
        </p>    
         <p class='bio__main'>
             I am open to collaboration, mentorship, public speaking and new  <span class='bio__tagline-italic'>I</span>ntersting gigs. Reach out!
         </p>    
    </div>    
</template>

<script>
export default {};
</script>

<style lang='scss'>
@import url("../static/assets/css/fonts.scss");
$beau: "Beau", sans-serif;
.bio {
  margin: 5% 15%;
  font-family: $beau;
  overflow: scroll;
}
.bio__tagline {
  font-family: $beau;
  font-size: 25px;
  letter-spacing: 2px;
}
.bio__tagline-italic {
  font-size: 40px;
  font-style: italic;
  letter-spacing: 2px;
}
.bio__main {
  font-size: 20px;
  line-height: 1.5em;
}
.bio__main-left {
  width: 85%;
  font-size: 20px;
  line-height: 1.5em;
}
.bio__main-right {
  width: 60%;
  margin-left: 30%;
  font-size: 20px;
  line-height: 1.2em;
}
</style>
>