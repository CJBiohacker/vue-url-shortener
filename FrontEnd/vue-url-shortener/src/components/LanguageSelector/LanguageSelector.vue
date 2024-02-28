<template>
  <div class="d-flex lang-container">
    <v-img :src="currentFlag" />
    <v-select
      :model-value="currentLanguage"
      :items="languages"
      item-title="name"
      density="compact"
      :label="$t('LANGUAGE_SELECT')"
      @update:modelValue="updateLanguage($event)"
    >
    </v-select>
  </div>
</template>

<script src="./LanguageSelector"></script>

<style lang="scss" scoped>
.lang-container {
  width: 280px;
  height: 45px;
}
</style>
