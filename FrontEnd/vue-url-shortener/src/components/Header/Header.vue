<template>
    <header>
      <h1>
        {{ title }}
      </h1>
    </header>
</template>

<script src="./Header.js">
</script>

<style scoped lang="scss">
header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #9c5dfe;
    height: 10dvh;

    h1 {
        color: white;
    }
}
</style>
