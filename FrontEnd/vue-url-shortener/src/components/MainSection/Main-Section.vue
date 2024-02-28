<template>
  <v-main id="main-content">
    <v-container align="center" justify="center">
      <v-sheet class="mt-10" :max-width="cardMaxWidth">
        <v-card class="mx-auto px-6 py-8" :max-width="cardMaxWidth">
          <h2 class="mb-8">
            {{ $t("FORM_TITLE") }}
          </h2>
          <v-form validate-on="submit lazy" @submit.prevent="shortenURL()">
            <v-text-field
              v-model="url"
              :rules="rules"
              label="URL"
              :placeholder="$t('VALID_URL_MSG')"
            ></v-text-field>
            <v-btn
              class="mt-2 submit-btn"
              :loading="loading"
              type="submit"
              :text="$t('SHORTEN_URL')"
            ></v-btn>
          </v-form>
        </v-card>
      </v-sheet>
      <v-expand-transition>
        <v-sheet
          v-show="showShortenedUrl"
          class="mt-10"
          :max-width="cardMaxWidth"
        >
          <v-card class="mx-auto px-6 py-8" :max-width="cardMaxWidth">
            <div class="text-h6">
              {{ $t("URL_SHORTENED_MSG") }}<br />
              <a class="text-subtitle-1" :href="shortURL" target="_blank">
                {{ shortURL }}</a
              >
            </div>
            <v-btn
              class="mt-2 submit-btn"
              :text="$t('COPY_URL_MSG')"
              @click="copyURL()"
            ></v-btn>
            <v-snackbar
              id="snackbar-container"
              v-model="snackbarStatus"
              multi-line=""
            >
              {{ snackBarMsg }}
            </v-snackbar>
          </v-card>
        </v-sheet>
      </v-expand-transition>
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
