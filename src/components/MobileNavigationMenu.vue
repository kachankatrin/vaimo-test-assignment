<template>
    <v-card
      class="mx-auto overflow-hidden"
      height="100vh"
      width="100%"
    >
        <v-app-bar
            dark
            class="app-bar--custom"
        >
            <v-app-bar-nav-icon 
                prepend-icon="$menu" 
                :color="iconColor" 
                x-small 
                class="btn-menu--open"
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>
            <v-btn icon>
                <v-icon 
                    small 
                    class="btn-search--open"
                    @click="showSearchBar"
                    :color="iconColor"
                >{{iconNavBar}}</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-toolbar-title class="header-logo-title">Aurora</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon small :color="iconColor">$shopping</v-icon>
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
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            temporary
            absolute
            height="100%"
            width="320px"            
        >
            <v-list-item class="header-logo-title header-logo-title__nav-drawer">
                <v-list-item-content>
                    <v-icon class="close-icon" @click="drawer=false; innerDrawer=false" v-if="innerDrawer">mdi-close</v-icon>
                    <v-list-item-title class="text-h6">
                        Aurora
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list
                nav
                dense
            >
                <v-list-item-group>
                    <v-list-item 
                        @click.stop="tab.isDrawerOpen = !tab.isDrawerOpen"
                        v-for="(tab, i) in tabs"
                        :key="tab.name" 
                    >
                        <v-list-item-title class="nav-list-item-title__custom">{{ tab.name }}<v-divider></v-divider></v-list-item-title>
                        <v-list-item-icon v-if="tab.tabsItems.length">
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-list-item-icon>
                        <v-navigation-drawer
                            v-model="tab.isDrawerOpen"
                            v-show="tab.tabsItems.length"
                            absolute
                            temporary
                            height="100vh"
                            width="320px"
                            class="nav-drawer-tabs-wrapper"
                            :style="{top: `calc(-45px * ${i}) !important`}"
                        >
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title class="text-h6 d-flex nav-list-item-title__custom">
                                        {{ tab.name }} 
                                        <a class="nav-link">View all</a>
                                    </v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider class="nav-title-divider"></v-divider>
                            <v-list
                                nav
                                dense
                            >
                                <v-list-item-group>
                                    <v-list-item 
                                        v-for="(li, k) in tab.tabsItems"
                                        :key="k" 
                                        @click.stop="li.items ? ((li.isDrawerOpen = !li.isDrawerOpen) && (innerDrawer = !innerDrawer)) : ''"
                                    >
                                        <v-list-item-title class="nav-list-item-title__custom">{{li.name}}
                                            <v-divider></v-divider>
                                        </v-list-item-title>
                                        <v-list-item-icon v-if="li.items">
                                            <v-icon>mdi-chevron-right</v-icon>
                                        </v-list-item-icon>
                                        <v-navigation-drawer
                                            v-model="li.isDrawerOpen"
                                            v-show="li.items"
                                            absolute
                                            temporary
                                            height="100vh"
                                            width="320px"
                                            class="nav-drawer-tabs-wrapper"
                                            :style="{ top: `calc(-45px * ${k + 1}) !important`} "
                                        >
                                            <v-list-item>
                                                <v-list-item-content>
                                                    <v-list-item-title class="text-h6 d-flex nav-list-item-title__custom">
                                                        <v-list-item-icon class="icon-title-container">
                                                            <v-icon>mdi-chevron-left</v-icon>
                                                            {{ li.name }} 
                                                        </v-list-item-icon>
                                                        <a class="nav-link">View all</a>
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </v-list-item>
                                            <v-divider class="nav-title-divider"></v-divider>
                                            <v-list
                                                nav
                                                dense
                                            >
                                                <v-list-item-group>
                                                    <v-list-item 
                                                        v-for="(listItem, j) in li.items"
                                                        :key="j" 
                                                    >
                                                        <v-list-item-title class="nav-list-item-title__custom--small">{{listItem.name}}
                                                            <v-divider></v-divider>
                                                        </v-list-item-title>
                                                    </v-list-item>
                                                </v-list-item-group>
                                            </v-list>
                                            <nav-footer @toggled="toggleHeader"/>
                                        </v-navigation-drawer>

                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                            <nav-footer @toggled="toggleHeader"/>
                        </v-navigation-drawer>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <nav-footer @toggled="toggleHeader"/>
        </v-navigation-drawer>
    </v-card>
</template>

<script>

import NavFooter from "./NavFooter.vue";

export default {
    name: "MobileNavigationMenu",
    components: { NavFooter },
    props: {
        isSearchVisible: {
            type: Boolean,
            required: true
        },
        searchPlaceholder: {
            type: String,
            required: true
        },
        isDark: {
            type: Boolean,
            required: true
        },
        inputBgColor: {
            type: String,
            required: true
        },
        iconColor: {
            type: String,
            required: true
        },
        tabs: {
            type: Array,
            required: true
        }
    },
    data: () => ({
        drawer: null,
        group: null,
        innerDrawer: false,
    }),
    computed: {
        iconNavBar() {
            return this.isSearchVisible ? "mdi-close" : "$magnify"
        }
    },
    methods: {
        showSearchBar() {
            this.$emit("openSearchBar");
        },
        toggleHeader() {
            this.$emit("onToggle");
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    &-logo-title {
        font-weight: 700;
        font-size: 30px;
        letter-spacing: 0.95px;
        color: #FFFFFF;
        text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
        line-height: 20px;
        &__nav-drawer {
            text-align: center;
        }
        .close-icon {
            position: absolute;
        }
    }
    &-search {
        pointer-events: all;
    }
}
.btn-menu--open, .btn-search--open {
    pointer-events: all;
}
.nav {
    &-drawer-tabs-wrapper {
        .nav-link {
            text-decoration: underline;
            font-weight: normal;
            text-transform: initial;
        }
    }
    &-list-item-title__custom {
        font-weight: 600 !important;
        font-size: 11px !important;
        line-height: 16px !important;
        letter-spacing: 1.2px;
        text-transform: uppercase;
        color: #000000;
        .icon-title-container {
            align-items: center;
        }
        &.d-flex {
            padding: 0 16px 0 32px;
        }
        &--small {
            font-weight: normal !important;
            font-size: 12px !important;
            letter-spacing: 0.1px;
            line-height: 19px !important;
        }
    }
}
</style>