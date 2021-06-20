<template>
    <div class="main-container">
        <p class="main-paragraph">New arrivals. Exclusive previews. First access to sales. Sign up to stay in the know.</p>
        <div class="d-flex">
            <v-text-field 
                class="main-email" 
                :label="emailPlaceholder" 
                filled 
                type="email" 
                solo
                background-color="#FFFFFF"
                hide-details
                flat
                outlined
                height="32" />
                <v-hover v-slot="{ hover }">
                    <v-btn
                        :class="{ 'on-hover': hover }"
                        depressed
                        color="#000000"
                        dark
                        ripple
                        x-small
                        height="32"
                        >
                        Register
                    </v-btn>
                </v-hover>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainAurora",
    data: () => ({
        emailPlaceholder: "Your email address"
    })
}
</script>

<style lang="scss" scoped>

@import "../scss/variables.scss";

.main {
    &-container {
        width: 439px;
        margin: 32px auto;
    }
    &-paragraph {
        font-weight: 500;
        font-size: $font-size;
        line-height: 18px;
        letter-spacing: 0.872727px;
        color: #000000;
        margin-bottom: 14px;
    }
    &-email {
        mix-blend-mode: normal;
        width: 334px;
        &.v-input {
            flex: unset;
        }
    }
}
</style>