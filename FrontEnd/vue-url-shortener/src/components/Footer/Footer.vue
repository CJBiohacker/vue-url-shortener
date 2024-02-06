<template>
  <footer id="footer">
    <v-container fluid id="footer-container">
      <v-row justify="space-between">
        <v-col class="d-flex align-center">
          <p>@{{ currentYear }} - Made by {{ author }}</p>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="d-flex align-center justify-end ga-3">
          <v-btn
            class="icon-button"
            v-for="profile in profiles"
            @click="openProfileInNewTab(profile.url)"
            variant="plain"
          >
            <svg-icon
              type="mdi"
              :path="setSvgIconPath(profile.type)"
            ></svg-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<script src="./Footer.js"></script>

<style scoped lang="scss">
#footer {
  width: 100dvw;
  padding: 0 !important;
  font-family: "Roboto", sans-serif;
  color: white;

  #footer-container {
    background-color: #5e88ff;

    .icon-button {
      color: white !important;
      opacity: 1;
    }
  }
}
</style>
