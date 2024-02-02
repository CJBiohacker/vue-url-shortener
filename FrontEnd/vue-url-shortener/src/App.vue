<template>
  <v-app>
    <Header :title="headerTitle" />

    <MainSection />

    <Footer :author="name" :profiles="profiles" />
  </v-app>
</template>
<script>
import Header from "./components/Header/Header.vue";
import MainSection from "./components/MainSection/Main-Section.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  components: {
    Header,
    MainSection,
    Footer
  },
  data() {
    return {
      headerTitle: "Vue Shortener",
      name: "CJ",
      profiles: [
        {
          url: 'https://www.linkedin.com/in/carlosjunior137/',
          icon: 'fas fa-linkedin'
        },
        {
          url: 'https://github.com/CJBiohacker',
          icon: 'fas fa-github'
        },
        {
          url: 'https://www.instagram.com/cjrapscript/',
          icon: 'fas fa-instagram'
        },
        {
          url: 'https://twitter.com/CJBiohacker',
          icon: 'fas fa-x-twitte'
        }
      ]
    }
  },
  methods: {

  }
};
</script>

<style scoped></style>
<style lang="scss">
body {
  font-family: 'Fira Code', monospace;
  padding: 0;
  margin: 0;
}
</style>
