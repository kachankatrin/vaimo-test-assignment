<template>
    <div class="footer-container">
        <ul v-if="window.width > 480" class="footer-container-categories d-flex">
            <li class="category-items-container" v-for="category in categories" :key="category.header">
                <h3 class="category-items-header">{{ category.header }}</h3>
                <div v-if="category.header !== 'Social'">
                    <p class="category-item" v-for="item in category.items" :key="item">{{ item }}</p>
                </div>
                <div v-else class="d-flex">
                    <v-icon 
                        small 
                        class="category-item" 
                        v-for="item in category.items" 
                        :key="item"
                        :color="'#000000'"
                        dark
                    >${{ item }}</v-icon>
                </div>
            </li>
        </ul>
        <footer-list v-else />
        <div class="d-flex icons-container" v-if="window.width < 480">
            <v-icon 
                small 
                class="category-item" 
                v-for="item in categories[4].items" 
                :key="item"
                :color="'#000000'"
                dark
            >${{ item }}</v-icon>
        </div>
        <p class="footer-copyright">© Copyright, Aurora 2020. All Rights reserved.</p>
    </div>
</template>

<script>

import FooterList from "./FooterList.vue";
import resizeMixin from "../mixins/resize.mixin.js";

export default {
    name: "FooterAurora",
    mixins: [ resizeMixin ],
    components: { FooterList },
    data: () => ({
        categories: [ 
            { header: "About Us", items: [ "Who we are", "Our stores", "Customer Reviews" ] },
            { header: "Categories", items: [ "Women fashion", "Accessories", "Kids" ] },
            { header: "Help", items: [ "Customer service", "Size guide", "Contact us" ] },
            { header: "Payments & Delivery", items: [ "Purchase terms", "Guarantee" ] },
            { header: "Social", items: [ "instagram", "twitter", "snapchat", "facebook", "youtube"] },
        ]
    }),
}
</script>

<style lang="scss" scoped>

@import "../scss/mixins.scss";

    .footer{
        &-container {
            padding: 26px 26px 14px;
            background: #F7F7F7;
            .icons-container {
                width: 185px;
                margin: 0 auto 16px;
            }
            &-categories {
                width: 891px;
                margin: 0 auto 38px;
                @include xs-block() {
                    display: none !important;
                }
            }
            @include xs-block() {
                padding: 0px 16px 23px;
            }
            .category {
                &-items {
                    &-header {
                        max-width: 19ch;
                        font-family: "Cormorant Garamond";
                        font-weight: 700;
                        font-size: 16px;
                        line-height: 19px;
                        letter-spacing: 1.16364px;
                    }
                    &-container {
                        flex: 1;
                        height: 105px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .d-flex {
                            width: 140px;
                        }
                        &:last-of-type {
                            justify-content: flex-start;
                            .category-items-header {
                                margin-bottom: 17px;
                            }
                            .category-item {
                                margin-bottom: 0;
                                &:last-of-type {
                                    font-size: 18px !important;
                                }
                            }
                        }
                    }
                }
                &-item {
                    font-size: 12px;
                    font-weight: 400;
                    cursor: pointer;
                    &:not(:last-of-type) {
                        margin-bottom: 6px;
                    }
                }
            }
        }
        &-copyright {
            margin: auto;
            width: fit-content;
            font-size: 9px;
            font-weight: 400;
        }
    }
</style>