<template>
    <div class="">
        <div class="header-wrapper">
            <div class="header-container">
                <div class="d-flex d-flex--column" ref="header" v-scroll="handleScroll">
                    <p class="header-text">We deliver Worldwide</p>
                    <div class="d-flex top-nav-bar">
                    <h2 class="header-logo-title">Aurora</h2>
                    <v-text-field 
                        class="header-search" 
                        :label="searchPlaceholder" 
                        filled 
                        type="search" 
                        solo
                        :dark="isDark"
                        background-color="rgba(247, 247, 247, 0.24)"
                        hide-details
                        flat
                        append-icon="mdi-magnify"
                        height="48" />
                    <div class="buttons-container d-flex">
                        <button class="sign-in-btn">Sign in</button>
                        <p class="divider">|</p>
                        <button class="register-btn">Register</button>
                        <v-icon :color="iconColor">mdi-shopping-outline</v-icon>
                    </div>
                    </div>
                </div>
            </div>
            <h1 class="header-title">Hello! Welcome to Aurora</h1>
        </div>
    </div>
</template>

<script>

export default {
    name: "HeaderAurora",
    data: () => ({
        searchPlaceholder: "What are you looking for?",
        iconColor: "#FFFFFF",
        isDark: true
    }),
    methods: {
        handleScroll: function () {
        if (window.scrollY > 560) {
            this.$refs.header.classList.add("scrolled");
            this.iconColor = "#1D1D1B";
            this.isDark = false;
        } else {
            this.$refs.header.classList.remove("scrolled");
            this.iconColor = "#FFFFFF";
            this.isDark = true;
        }
        return window.scrollY > 100
        }
    }
}
</script>
<style lang="scss" scoped>

.header {
    &-text {
        font-weight: 500;
        font-size: 11px;
        line-height: 16px;
        text-align: center;
        letter-spacing: 0.8px;
        color: #000000;
        background: #FFFFFF;
        padding: 4px 0px 3px;
        margin-bottom: 16px;
        width: 100%;
    }
    &-logo-title {
        font-weight: 700;
        font-size: 38px;
        line-height: 57px;
        letter-spacing: 0.95px;
        color: #FFFFFF;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    }
    &-wrapper {
        background: url("../assets/9193579.png");
        height: 657px;
    }
    &-container {
        background: linear-gradient(180deg, rgba(51, 51, 51, 0.024) 14.31%, rgba(27, 27, 27, 0.24) 10%, rgba(0, 0, 0, 0.0001) 100%);
        mix-blend-mode: normal;
        height: 164px;
    }
    &-search {
        mix-blend-mode: normal;
        padding: 16px;
        width: 584px;
        &.v-input {
            flex: unset;
            margin-top: 8px;
        }
    }
    &-title {
        font-weight: 700;
        font-size: 60px;
        line-height: 90px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 170px;
    }
}
.d-flex {
    &--column {
        flex-direction: column;
        position: fixed;
        width: 100%;
        background: transparent;
        z-index: 10;
        padding-bottom: 24px;
        .buttons-container {
            margin-top: 8px;
            height: fit-content;
            button, .divider {
                font-weight: 600;
                font-size: 11px;
                line-height: 16px;
                text-align: right;
                letter-spacing: 1px;
                color: #FFFFFF;
            }
            button {
                cursor: pointer;
                &.register-btn {
                    margin-right: 16px;
                }
            }
            .divider {
                margin: 0 10px;
            }
        }
        &.scrolled {
            background: #FFFFFF;
            .header{
                &-logo-title {
                    color: #333333;
                }
                &-search {
                    background-color: rgba(247, 247, 247, 1);
                    border: 1px solid #F2F2F2;
                }
                &-text {
                    background: #F7F7F7;
                }
            }
            .buttons-container {
                button, .divider {
                    color: #000000
                }
            }
        }
    }
    &.top-nav-bar {
        padding: 0 24px;
        align-items: unset;
        width: 100%;
    }
}
</style>