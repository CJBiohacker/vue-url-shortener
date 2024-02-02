<template>
    <v-main id="main-content">
        <v-container align="center" justify="center">
            <v-card
            class="mx-auto"
            max-width="344"
            :variant="variant"
          >
            <v-card-item>
              <div>
                <div class="text-overline mb-1">
                  {{ variant }}
                </div>
                <div class="text-h6 mb-1">
                  Past the URL
                </div>
                <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div>
              </div>
            </v-card-item>
  
            <v-card-actions>
              <v-btn>
                Button
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-container>
    </v-main>
</template>

<script src="./Main-Section.js">
</script>

<style scoped lang="scss">
#main-content {
    height: 85dvh;
}
</style>
