<template>
    <v-footer border id="footer">
        <v-container fluid id="footer-container">
            <v-row justify="space-between">
                <v-col class="d-flex align-center">
                    <p>
                        @{{ currentYear }} - Made by {{ author }}
                    </p>
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="d-flex align-center justify-end">
                    <v-btn
                        class="icon-button"
                        v-for="profile in profiles"
                            @click="openProfileInNewTab(profile.url)"
                            variant="elevated"
                        >
                        <font-awesome-icon :icon="profile.icon" />
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script src="./Footer.js">
</script>

<style scoped lang="scss">
#footer {
    width: 100dvw;
    padding: 0 !important;
    font-family: 'Roboto', sans-serif;
    color: white;

    #footer-container {
        background-color: #5E88FF;

        .icon-button {
            color: black;
        }
    }
}
</style>
