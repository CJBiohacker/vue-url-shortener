<template>
  <header class="d-flex align-center justify-center py-3 header-container">
    <h1>
      {{ this.$t("HEADER_TITLE") }}
    </h1>
  </header>
  <div class="lang-selector">
    <LanguageSelector />
  </div>
</template>

<script src="./Header.js"></script>

<style scoped lang="scss">
.header-container {
  background-color: #9c5dfe;

  h1 {
    color: white;
  }
}
.lang-selector {
  align-self: flex-end;
}
</style>
