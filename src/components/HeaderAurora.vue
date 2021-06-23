<template>
    <div class="">
        <div :class="isHeaderActive ? 'header-wrapper-active' : '' " class="header-wrapper">
            <div :class="isHeaderActive ? 'header-container-active' : '' " class="header-container">
                <div v-if="window.width > 480" class="d-flex d-flex--column" ref="header" v-scroll="handleScroll">
                    <p v-if="window.width > 480" class="header-text">
                        <span>We deliver Worldwide</span>
                        <span><v-icon x-small color="#000000">$locationPin</v-icon>Our stores</span>
                    </p>
                    <div class="d-flex top-nav-bar">
                        <v-icon 
                            v-if="window.width < 480" 
                            @click="showSearchBar"
                            :color="iconColor"
                            small
                        >$magnify</v-icon>
                        <h2 class="header-logo-title">Aurora</h2>
                        <v-text-field 
                            class="header-search" 
                            v-show="isSearchVisible"
                            :label="searchPlaceholder" 
                            filled 
                            type="search" 
                            solo
                            :dark="isDark"
                            :background-color="inputBgColor"
                            hide-details
                            flat
                            append-icon="$magnify"
                            small
                            height="48" />
                        <div v-if="isHeaderActive" class="buttons-container d-flex">
                            <p v-if="window.width > 480">Hi, Angels!</p>
                            <div class="icon-container">
                                <v-icon :color="iconColor" small>$shopping</v-icon>
                                <div class="icon-top-pin">{{ shoppingItems }}</div>
                            </div>
                        </div>
                        <div v-else class="buttons-container d-flex">
                            <button v-if="window.width > 480" @click="toggleHeader" class="sign-in-btn">Sign in</button>
                            <p v-if="window.width > 480" class="divider">|</p>
                            <button v-if="window.width > 480" @click="toggleHeader" class="register-btn">Register</button>
                            <v-icon :color="iconColor" small>$shopping</v-icon>
                        </div>
                    </div>
                    <navigation-menu 
                        v-if="window.width > 480" 
                        class="navigation-menu"
                        :is-dark="isDark" 
                        :on-scroll-color="scrollColor" 
                        :is-header-active="isHeaderActive" 
                        :tabs="tabs"
                    />
                </div>
                <div v-else v-scroll="handleScroll" ref="header" class="d-flex d-flex--column mobile-nav">
                    <mobile-navigation-menu 
                        :is-search-visible="isSearchVisible" 
                        :search-placeholder="searchPlaceholder" 
                        :is-dark="isDark" 
                        :input-bg-color="inputBgColor"
                        @openSearchBar="showSearchBar"
                        :icon-color="iconColor"
                        :tabs="tabs"
                        @onToggle="toggleHeader"
                    />
                </div>
            </div>
            <h1 v-if="window.width > 480" class="header-title">Hello! Welcome to Aurora</h1>
        </div>
    </div>
</template>

<script>

import NavigationMenu from "./NavigationMenu.vue";
import resizeMixin from "../mixins/resize.mixin.js";
import MobileNavigationMenu from "./MobileNavigationMenu.vue";

export default {
    name: "HeaderAurora",
    components: { NavigationMenu, MobileNavigationMenu },
    mixins: [ resizeMixin ],
    data: () => ({
        searchPlaceholder: "What are you looking for?",
        iconColor: "#FFFFFF",
        isDark: true,
        scrollColor: "#FFFFFF",
        isHeaderActive: false,
        shoppingItems: 2,
        scrollBreakPoint: 285,
        isScrolledToBreakpoint: false,
        isSearchVisible: null,
        isClicked: false,
        isMobile: null,
        tabs: [ 
            { 
                name: "what’s new",
                isDrawerOpen: false, 
                tabsItems: [ 
                    { name: "women", notLast: true },
                    { name: "kids", notLast: true },
                    { name: "beauty", notLast: false }, 
                ] 
            }, 
            { 
                name: "women",
                isDrawerOpen: false,  
                tabsItems: [ 
                    { 
                        name: "clothing", 
                        isDrawerOpen: false,
                        items: [ 
                            { name: "T-shirts", notLast: true }, 
                            { name: "Sweatshirts", notLast: true }, 
                            { name: "Knitwear", notLast: true }, 
                            { name: "Jeans", notLast: true }, 
                            { name: "Jumpsuits", notLast: true }, 
                            { name: "Skirts", notLast: true }, 
                            { name: "Dresses", notLast: false } 
                        ], 
                        isOpen: false, 
                        notLast: true 
                    },
                    { 
                        name: "collections", 
                        isDrawerOpen: false,
                        items: [
                            { name: "Spring", notLast: true }, 
                            { name: "Summer", notLast: true }, 
                            { name: "Autumn", notLast: true }, 
                            { name: "Winter", notLast: false } 
                        ], 
                        isOpen: false, 
                        notLast: true 
                    },
                    { 
                        name: "collabs", isOpen: false, notLast: true },
                    { 
                        name: "brands", 
                        isDrawerOpen: false,
                        items: [ 
                            { name: "Zara", notLast: true }, 
                            { name: "Next", notLast: true }, 
                            { name: "Chanel", notLast: false } 
                        ], 
                        isOpen: false, 
                        notLast: false }
                ]
            }, 
            { 
                name: "accessories",
                isDrawerOpen: false,  
                tabsItems: [ 
                    { 
                        name: "winter accessories", 
                        isDrawerOpen: false,
                        items: [ 
                            { name: "Winter caps", notLast: true }, 
                            { name: "Gloves", notLast: true }, 
                            { name: "Scarfs", notLast: false } 
                        ], 
                        isOpen: false, 
                        notLast: true 
                    },
                    { 
                        name: "summer accessories", 
                        isDrawerOpen: false,
                        items: [ 
                            { name: "Hats", notLast: true }, 
                            { name: "Scrunchies", notLast: true }, 
                            { name: "Sunglasses", notLast: false } 
                        ], 
                        isOpen: false, 
                        notLast: false 
                    } 
                ]
            }, 
            { 
                name: "kids", 
                isDrawerOpen: false, 
                tabsItems: [ 
                    { 
                        name: "newborns", 
                        isDrawerOpen: false,
                        items: [ 
                            { name: "T-shirts", notLast: true }, 
                            { name: "Sweatshirts", notLast: true }, 
                            { name: "Knitwear", notLast: true }, 
                            { name: "Jeans", notLast: true }, 
                            { name: "Jumpsuits", notLast: true }, 
                            { name: "Skirts", notLast: true }, 
                            { name: "Dresses", notLast: false }
                        ], 
                        isOpen: false, 
                        notLast: true 
                    },
                    { 
                        name: "toddlers", 
                        isDrawerOpen: false,
                        items: [ 
                            { name: "T-shirts", notLast: true }, 
                            { name: "Sweatshirts", notLast: true }, 
                            { name: "Knitwear", notLast: true }, 
                            { name: "Jeans", notLast: true }, 
                            { name: "Jumpsuits", notLast: true }, 
                            { name: "Skirts", notLast: true }, 
                            { name: "Dresses", notLast: false }
                        ], 
                        isOpen: false, 
                        notLast: true 
                    },
                    { 
                        name: "kids", 
                        isDrawerOpen: false,
                        items: [ 
                            { name: "T-shirts", notLast: true }, 
                            { name: "Sweatshirts", notLast: true }, 
                            { name: "Knitwear", notLast: true }, 
                            { name: "Jeans", notLast: true }, 
                            { name: "Jumpsuits", notLast: true }, 
                            { name: "Skirts", notLast: true }, 
                            { name: "Dresses", notLast: false }
                        ], 
                        isOpen: false, 
                        notLast: false 
                    }
                ]
            }, 
            { 
                name: "beauty", 
                isDrawerOpen: false, 
                tabsItems: [ 
                    { 
                        name: "body", 
                        isDrawerOpen: false,
                        items: [ 
                            { name: "Creams", notLast: true }, 
                            { name: "Masks", notLast: true }, 
                            { name: "Shower Gels", notLast: false } 
                        ], 
                        isOpen: false, 
                        notLast: true 
                    },
                    { 
                        name: "face", 
                        isDrawerOpen: false,
                        items: [ 
                            { name: "Creams", notLast: true }, 
                            { name: "Masks", notLast: true }, 
                            { name: "Tonners", notLast: false } 
                        ], 
                        isOpen: false, 
                        notLast: true 
                    },
                    { 
                        name: "hairs", 
                        isDrawerOpen: false,
                        items: [ 
                            { name: "Shampoos", notLast: true }, 
                            { name: "Masks", notLast: true }, 
                            { name: "Conditioners", notLast: false } 
                        ], 
                        isOpen: false, 
                        notLast: false 
                    },
                ]
            }, 
            { 
                name: "outlet",
                isDrawerOpen: false,  
                tabsItems: [ 
                    { name: "Sale up to 30%", isOpen: false, notLast: true },
                    { name: "Sale up to 70%", isOpen: false, notLast: false }
                ]
            }, 
            { name: "stories", isDrawerOpen: false, tabsItems: [] }
        ]
    }),
    computed: {
        inputBgColor() {
            return this.isHeaderActive 
                ? this.isScrolledToBreakpoint 
                ? "rgba(247, 247, 247, 0.24)" : "rgba(247, 247, 247, 1)" : "rgba(247, 247, 247, 0.24)"
        }
    },
    created() {
        this.isSearchVisible = this.window.width > 480 ? true : false;
        this.isMobile = this.window.width > 480 ? false : true;
    },
    updated() {
        this.isSearchVisible = this.window.width < 480 ? this.isClicked ? true : false : true;
        this.isMobile = this.window.width > 480 ? false : true;
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
        },
        showSearchBar() {
            this.isClicked = !this.isClicked;
            this.isSearchVisible = !this.isSearchVisible;
        }
    }
}
</script>

<style lang="scss" scoped>

@import "../scss/mixins.scss";

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
        @include xs-block() {
            display: none;;
        }
    }
    &-logo-title {
        font-weight: 700;
        font-size: 38px;
        line-height: 57px;
        letter-spacing: 0.95px;
        color: #FFFFFF;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
        @include xs-block() {
            order: 1;
            line-height: 20px;
        }
    }
    &-wrapper {
        background: black;
        background: url("../assets/header-default.png");
        height: 681px;
        background-position: 0px 23px;
        background-repeat: no-repeat;
        @include xs-block() {
            background-image: url("../assets/header-default-mobile.png");
            background-position: 0px 0px;
            height: 480px;
        }
            &-active {
                background: url("../assets/header-active.png");
                background-position: 0px 35px;
            }
    }
    &-container {
        background: linear-gradient(180deg, rgba(51, 51, 51, 0.024) 14.31%, rgba(27, 27, 27, 0.24) 10%, rgba(0, 0, 0, 0.0001) 100%);
        mix-blend-mode: normal;
        height: 164px;
        @include xs-block() {
            background: linear-gradient(180deg, rgba(51, 51, 51, 0.024) 0%, rgba(27, 27, 27, 0.24) 0%, rgba(0, 0, 0, 0.0001) 100%);
            height: 72px;
        }
        .navigation-menu {
            @include xs-block() {
                display: none;;
            }
        }
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
        @include xs-block() {
            order: 3;
        }
        &.v-input {
            flex: unset;
            @include xs-block() {
                margin-top: 16px;
            }
        }
    }
    &-title {
        font-weight: 700;
        font-size: 60px;
        line-height: 90px;
        text-align: center;
        color: #FFFFFF;
        margin-top: 170px;
        @include xs-block() {
            display: none;;
        }
    }
}
.d-flex {
    &.top-nav-bar {
        padding: 0 24px;
        align-items: unset;
        width: 100%;
        @include xs-block() {
            flex-wrap: wrap;
            padding-top: 20px;
        }
    }
}
</style>

<style lang="scss">

@import "../scss/mixins.scss";

.d-flex {
    &--column {
        flex-direction: column;
        position: fixed;
        width: 100%;
        background: transparent;
        z-index: 10;
        padding-bottom: 24px;
        .buttons-container {
            height: fit-content;
            font-weight: 600;
            font-size: 11px;
            line-height: 16px;
            text-align: right;
            letter-spacing: 1px;
            @include xs-block() {
                order: 2;
                margin-top: 0px;
            }
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
            .btn--mobile {
                @include xs-block() {
                    display: none;
                }
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
        &.mobile-nav {
            pointer-events: none;
            &.scrolled {
                background: transparent;
                .app-bar--custom {
                    background-color: #FFFFFF !important;
                }
            }
        }
    }
}
.header-container-active {
    .d-flex {
        &--column {
            &.mobile-nav {
                &.scrolled {
                    .app-bar--custom {
                        background-color: transparent !important;
                    }
                }
            }
        }
        &.scrolled {
            .header-logo-title {
                color: #FFFFFF;
            }
        }
    }
}
</style>