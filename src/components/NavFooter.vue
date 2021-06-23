<template>
    <v-list-item-content class="nav-list-items-container">
        <v-list-item-title class="text-h6 nav-list-item-title-footer">
            <div class="buttons-container--nav d-flex">
                <button @click="toggleHeader" class="sign-in-btn">Sign in</button>
                <p class="divider">|</p>
                <button @click="toggleHeader" class="register-btn">Register</button>
            </div>
        </v-list-item-title>
        <v-list-item-title class="nav-list-item-title-footer">
            <v-icon x-small color="#000000">$locationPin</v-icon>
            Our stores
        </v-list-item-title>
        <v-list-item-title class="nav-list-item-title-footer">We deliver Worldwide</v-list-item-title>
    </v-list-item-content>
</template>

<script>
export default {
    name: "NavFooter",
    methods: {
        toggleHeader() {
            console.log("toggle")
            this.$emit("toggled");
        }
    }
}
</script>

<style lang="scss" scoped>
.nav {
    &-list-item-title-footer {
        font-size: 10px !important;
        &:not(:last-of-type) {
            height: 48px;
            background: #F7F7F7;
            margin-bottom: 1px;
            padding: 18px 16px;
        }
        &:last-of-type {
            height: 62px;
            padding: 16px 0 32px;
            text-align: center;
        }
    }
    &-list-items-container {
        position: absolute;
        bottom: 0;
        padding: 0;
    }
}
.buttons-container--nav {
    font-size: 10px;
    font-weight: 600;
    justify-content: flex-start !important;
    button, .divider {
        color: #000000;
    }
    .divider {
        margin: 0 10px
    }
}
</style>