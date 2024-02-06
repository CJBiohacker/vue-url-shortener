<template>
  <v-main id="main-content">
    <v-container align="center" justify="center">
      <v-sheet class="mt-10" :max-width="cardMaxWidth">
        <v-card class="mx-auto px-6 py-8" :max-width="cardMaxWidth">
          <h2 class="mb-8">
            {{ formTitle }}
          </h2>
          <v-form validate-on="submit lazy" @submit.prevent="shortenURL()">
            <v-text-field
              v-model="url"
              :rules="rules"
              label="URL"
              placeholder="Enter a valid URL. Example: http://www.example.com"
              clearable
            ></v-text-field>
            <v-btn
              class="mt-2 submit-btn"
              :loading="loading"
              type="submit"
              text="Shorten URL"
            ></v-btn>
          </v-form>
        </v-card>
      </v-sheet>
      <v-sheet
        v-show="showShortenedUrl"
        class="mt-10"
        :max-width="cardMaxWidth"
      >
        <v-card class="mx-auto px-6 py-8" :max-width="cardMaxWidth">
          <div class="text-h6">
            Here's your shortened URL<br />
            <a class="text-subtitle-1" :href="shortURL" target="_blank"> {{ shortURL }}</a>
          </div>
          <v-btn
            class="mt-2 submit-btn"
            text="Copy URL"
            @click="copyURL()"
          ></v-btn>
          <v-snackbar id="snackbar-container" v-model="snackbarStatus" multi-line="">
            {{ snackBarMsg }}
          </v-snackbar>
        </v-card>
      </v-sheet>
    </v-container>
  </v-main>
</template>

<script src="./Main-Section.js"></script>

<style scoped lang="scss">
#main-content {
  .submit-btn {
    background-color: #d15eff;
    color: white;
    width: 250px;
  }
}
</style>
