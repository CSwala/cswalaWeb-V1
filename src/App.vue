<template>
  <NavBar />
  <router-view />
  <Footer />
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;600;800&display=swap");

:root {

  --primary: #0858f9;
  --primaryLight: #388afc;

  --buttontransparent: #ffffff0d;
  
  --textprimary: #f0f0f0;
  --textmuted: #ffffff59;

  --backgroundLight: rgb(37, 38, 55);
  --backgroundDark: #1E1D2C;

  --border: #30363d;
  --border2: #161B22;





  --bgWH05: rgba(255, 255, 255, 0.05);
  --bgWH10: rgba(255, 255, 255, 0.10);
  --bgWH25: rgba(255, 255, 255, 0.25);
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: var(--backgroundDark);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--textprimary);
}
</style>
