<template>
    <div class="">
        <div :class="isHeaderActive ? 'header-wrapper-active' : '' " class="header-wrapper">
            <div :class="isHeaderActive ? 'header-container-active' : '' " class="header-container">
                <div class="d-flex d-flex--column" ref="header" v-scroll="handleScroll">
                    <p class="header-text">
                        <span>We deliver Worldwide</span>
                        <span><v-icon x-small color="#000000">$locationPin</v-icon>Our stores</span>
                    </p>
                    <div class="d-flex top-nav-bar">
                        <h2 class="header-logo-title">Aurora</h2>
                        <v-text-field 
                            class="header-search" 
                            :label="searchPlaceholder" 
                            filled 
                            type="search" 
                            solo
                            :dark="isDark"
                            :background-color="inputBgColor"
                            hide-details
                            flat
                            append-icon="$magnify"
                            height="48" />
                        <div v-if="isHeaderActive" class="buttons-container d-flex">
                            <p>Hi, Angels!</p>
                            <div class="icon-container">
                                <v-icon :color="iconColor" small>$shopping</v-icon>
                                <div class="icon-top-pin">{{ shoppingItems }}</div>
                            </div>
                        </div>
                        <div v-else class="buttons-container d-flex">
                            <button @click="toggleHeader" class="sign-in-btn">Sign in</button>
                            <p class="divider">|</p>
                            <button @click="toggleHeader" class="register-btn">Register</button>
                            <v-icon :color="iconColor" small>$shopping</v-icon>
                        </div>
                    </div>
                    <navigation-menu :is-dark="isDark" :on-scroll-color="scrollColor" :is-header-active="isHeaderActive" />
                </div>
            </div>
            <h1 class="header-title">Hello! Welcome to Aurora</h1>
        </div>
    </div>
</template>

<script>

import NavigationMenu from "./NavigationMenu.vue";

export default {
    name: "HeaderAurora",
    components: { NavigationMenu },
    data: () => ({
        searchPlaceholder: "What are you looking for?",
        iconColor: "#FFFFFF",
        isDark: true,
        scrollColor: "#FFFFFF",
        isHeaderActive: false,
        shoppingItems: 2,
        scrollBreakPoint: 285,
        isScrolledToBreakpoint: false
    }),
    computed: {
        inputBgColor() {
            return this.isHeaderActive 
                ? this.isScrolledToBreakpoint 
                ? "rgba(247, 247, 247, 0.24)" : "rgba(247, 247, 247, 1)" : "rgba(247, 247, 247, 0.24)"
        }
    },
    methods: {
        handleScroll: function () {
        if (window.scrollY > this.scrollBreakPoint) {
            this.isScrolledToBreakpoint = true;
            this.$refs.header.classList.add("scrolled");
            this.iconColor = this.isHeaderActive ? "#FFFFFF" : "#1D1D1B";
            this.scrollColor = this.isHeaderActive ? "#FFFFFF" : "#000000";
            this.isDark = this.isHeaderActive ? true : false;
        } else {
            this.isScrolledToBreakpoint = false;
            this.$refs.header.classList.remove("scrolled");
            this.iconColor = this.isHeaderActive ? "#000000" : "#FFFFFF";
            this.isDark = this.isHeaderActive ? false : true;
            this.scrollColor = this.isHeaderActive ? "#000000" : "#FFFFFF";
        }
        return window.scrollY > 100
        },
        toggleHeader() {
            this.isHeaderActive = true;
            this.isDark = false;
            this.iconColor = "#000000";
            this.scrollColor = "#000000";
            this.scrollBreakPoint = 99;
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
        display: flex;
        width: 100%;
        span {
            &:first-of-type {
               justify-self: center;
                margin-left: auto; 
            }
            &:last-of-type {
                justify-self: flex-end;
                margin-left: auto;
                font-size: 10px;
                line-height: 15px;
                text-align: right;
                letter-spacing: 0.0833333px;
                color: #000000;
                padding-right: 24px;
            }
            .v-icon {
                margin-right: 6px;
            }
        }
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
        background: black;
        background: url("../assets/header-default.png");
        height: 681px;
        background-position: 0px 23px;
        background-repeat: no-repeat;
            &-active {
                background: url("../assets/header-active.png");
                background-position: 0px 35px;
            }
    }
    &-container {
        background: linear-gradient(180deg, rgba(51, 51, 51, 0.024) 14.31%, rgba(27, 27, 27, 0.24) 10%, rgba(0, 0, 0, 0.0001) 100%);
        mix-blend-mode: normal;
        height: 164px;
        &-active {
            background: #FFFFFF;
            .header-logo-title {
                color: #333333;
            }
            .buttons-container {
                margin-right: 24px;
            }
            .d-flex--column {
                &.scrolled {
                    background: transparent;
                    .header{
                        &-logo-title {
                            color: #FFFFFF;
                        }
                        &-search {
                            background-color: rgba(247, 247, 247, 0.24);
                            border: none;
                        }
                        &-text {
                            background: #FFFFFF;
                        }
                    }
                    .buttons-container {
                        p {
                            color: #FFFFFF;
                        }
                    }
                }
            }
        }
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
            font-weight: 600;
            font-size: 11px;
            line-height: 16px;
            text-align: right;
            letter-spacing: 1px;
            .icon-container {
                position: relative;
                .icon-top-pin {
                    width: 22px;
                    height: 22px;
                    border-radius: 50%;
                    background: #F2DA91;
                    position: absolute;
                    top: 0;
                    right: 0%;
                    transform: translateX(calc(100% + 4px));
                    font-weight: 600;
                    font-size: 11px;
                    line-height: 16px;
                    text-align: center;
                    letter-spacing: 0.2px;
                    text-transform: uppercase;
                    color: #000000;
                    padding: 2px 0;
                }
            }
            button, .divider {
                color: #FFFFFF;
            }
            p {
                margin-right: 16px;
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