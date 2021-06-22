<template>
    <div class="v-item-group--container">
        <v-tabs
            v-model="tab"
            :dark="isDark"
            :color="onScrollColor"
            background-color="transparent"
            optional
            >
            <v-tab
                v-for="(tab) in tabs"
                :key="tab.name"
            >
                {{ tab.name }}
            </v-tab>
        </v-tabs>      
        <v-tabs-items v-model="tab"  :class="isHeaderActive ? 'list-container-active' : ''">
            <v-tab-item
                v-for="tab in tabs"
                :key="tab.name">
                <v-card class="mx-auto"
                    max-width="500" flat>
                    <v-list v-show="tab.tabsItems.length">
                        <v-list-item-group>
                            <v-list-item
                                v-for="(li, i) in tab.tabsItems"
                                :key="i"
                            >
                                <v-list-item-content>
                                    <v-list-item-title class="d-flex" @click="(e) => handleTabs(e, li)">
                                        <p>{{li.name}}</p>
                                        <v-icon :color="chevronColor" :class="li.isOpen ? 'chevron-opened' : ''" v-if="li.items">mdi-chevron-right</v-icon>
                                    </v-list-item-title>
                                    <v-divider v-if="li.notLast"></v-divider>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>
                </v-card>
                <div class="items-wrapper" v-show="li.isOpen && li.items" v-for="(li) in tab.tabsItems" :key="li.name">
                    <ul class="list-container" v-if="li.isOpen && li.items">
                        <li v-for="listItem in li.items" :key="listItem.name">{{ listItem.name }}<v-divider v-if="listItem.notLast" class="divider"></v-divider></li>
                    </ul>
                </div>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<script>
export default {
    name: "NavigationMenu",
    props: {
        isDark: {
            type: Boolean,
            required: true
        },
        onScrollColor: {
            type: String,
            required: true
        },
        isHeaderActive: {
            type: Boolean,
            required: true
        },
        tabs: {
            type: Array,
            required: true
        }
    },
    data: () => ({
        tab: null,
        isVisible: false,
    }),
    computed: {
        chevronColor() {
            return this.isHeaderActive ? "#FFFFFF" : "#000000";
        }
    },
    methods: {
        handleTabs(e,li) {
            if ( (e.target.previousElementSibling && e.target.previousElementSibling.innerHTML === li.name && li.isOpen) 
                || (e.target.children[0] && e.target.children[0].innerHTML === li.name && li.isOpen) 
                || (e.target.innerHTML === li.name && li.isOpen) ) {
                li.isOpen = false;
            } else {
                this.tabs.map(tab => tab.tabsItems.map(item => item.isOpen = false));
                li.isOpen = !li.isOpen;
            }
        }
    }
}
</script>

<style lang="scss">
.v-item-group--container {
    .theme--light {
        &.v-tabs {
            margin: 9px 0;
            .v-tabs-bar {
                .v-tab:not(.v-tab--active) {
                    color: rgba(0, 0, 0, 1);
                }
            }
        }
        &.v-tabs-items {
            background: transparent;
            position: relative;
        }
        &.v-list,.v-card {
            background: rgba(247, 247, 247, 0.24);
        }
    }
    .v-window {
        overflow: visible;
    }
    .v-divider {
        max-width: unset;
    }
    .v-list-item {
        padding: 0;
        &__content {
            padding: 0;
        }
        &__title {
            padding: 12px 16px;
            font-weight: 600;
            font-size: 11px;
            line-height: 16px;
            letter-spacing: 1.2px;
            text-transform: uppercase;
            color: #000000;
        }
        &--link {
            &:before {
                top: -4px;
                bottom: 4px;
            }
            &:first-of-type {
                &:before {
                    top: -8px;
                }
            }
            &:last-of-type {
                &:before {
                    bottom: -8px;
                }
            }
        }
    }
    .list-container-active {
        .v-list-item {
            &__title {
                color: #FFFFFF;
            }
        }
        .list-container {
            li {
                color: #FFFFFF;
            }
        }
    }
    .theme--dark{
        &.v-tabs {
            margin: 9px 0;
            .v-tabs-bar {
                .v-tab:not(.v-tab--active) {
                    color: rgba(255, 255, 255, 1);
                }
            }
        }
    }
}
</style>
<style lang="scss" scoped>
.hidden {
    display: none;
}
.chevron-opened {
    transform: scaleX(-1);
}
.items-wrapper {
    position: absolute;
    left: 70%;
    top: 0;
    background: rgba(247, 247, 247, 0.48);
    padding: 0px;
    margin-left: 9px;
    border: 1px solid rgb(204, 193, 182);
    border-radius: 3px;
    .list-container {
        li {
            padding: 12px 16px 0px;
            font-size: 12px;
            font-weight: normal;
            &:hover {
                background: rgba(189, 189, 189, 0.24);
            }
            &:last-of-type {
                padding-bottom: 12px;
            }
            .divider {
                margin: 12px 0px 0px;
                width: calc(100% + 32px);
                margin-left: -16px;
            }
        }
    }
}
</style>