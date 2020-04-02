<template>
  <div id="app">
    <Navbar/>
    <MainContent/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    MainContent,
    Footer
  },
  metaInfo: {
    title: "Headphones",
    titleTemplate: "%s • SiteName",
    meta: [
      { httpEquiv: "Content-Type", content: "text/html; charset=utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "The best headphones for exercise." },
    {property: 'og:title', content: 'Headphones • SiteName'},
    {property: 'og:site_name', content: 'SiteName'},
    {property: 'og:type', content: 'website'},
    {property: 'og:url', content: 'https://www.my-site.com/my-special-page'},
    {property: 'og:image', content: 'https://www.my-site.com/my-special-image.jpg'},
    {property: 'og:description', content: 'The best headphones for exercise.'},

    {name: 'twitter:card', content: 'summary'},
    {name: 'twitter:site', content: 'https://www.my-site.com/my-special-page'},
    {name: 'twitter:title', content: 'Headphones • SiteName'},
    {name: 'twitter:description', content: 'The best headphones for exercise.'},
    {name: 'twitter:creator', content: '@SiteName'},
    {name: 'twitter:image:src', content: 'https://www.my-site.com/my-special-image.jpg'},
    {itemprop: 'name', content: 'Headphones • SiteName'},
    {itemprop: 'description', content: 'The best headphones for exercise.'},
    {itemprop: 'image', content: 'https://www.my-site.com/my-special-image.jpg'}
    ]
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Merriweather|Poppins:400,700&display=swap");

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h2,
a {
  font-family: "Poppins", sans-serif !important;
  font-weight: 700;
}
p {
  font-family: "Merriweather", sans-serif !important;
}
</style>
