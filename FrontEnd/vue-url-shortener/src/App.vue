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
      headerTitle: "URL Shortener",
      name: "CJ",
      profiles: [
        {
          url: 'https://www.linkedin.com/in/carlosjunior137/',
          type: 'linkedin'
        },
        {
          url: 'https://github.com/CJBiohacker',
          type: 'github'
        },
        {
          url: 'https://www.instagram.com/cjrapscript/',
          type: 'instagram'
        },
        {
          url: 'https://twitter.com/CJBiohacker',
          type: 'twitter'
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
