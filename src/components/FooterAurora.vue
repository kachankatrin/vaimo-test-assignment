<template>
    <div class="footer-container">
        <ul class="footer-container-categories d-flex">
            <li class="category-items-container" v-for="category in categories" :key="category.header">
                <h3 class="category-items-header">{{ category.header }}</h3>
                <div v-if="category.header !== 'Social'">
                    <p class="category-item" v-for="item in category.items" :key="item">{{ item }}</p>
                </div>
                <div v-else>
                    <v-icon class="category-item" v-for="item in category.items" :key="item">mdi-{{ item }}</v-icon>
                </div>
            </li>
        </ul>
        <p class="footer-copyright">© Copyright, Aurora 2020. All Rights reserved.</p>
    </div>
</template>

<script>
export default {
    name: "FooterAurora",
    data: () => ({
        categories: [ 
            { header: "About Us", items: [ "Who we are", "Our stores", "Customer Reviews" ] },
            { header: "Categories", items: [ "Women fashion", "Accessories", "Kids" ] },
            { header: "Help", items: [ "Customer service", "Size guide", "Contact us" ] },
            { header: "Payments & Delivery", items: [ "Purchase terms", "Guarantee" ] },
            { header: "Social", items: [ "instagram", "twitter", "snapchat", "facebook", "youtube"] },
        ]
    })
}
</script>

<style lang="scss" scoped>
    .footer{
        &-container {
            padding: 26px 26px 14px;
            background: #F7F7F7;
            &-categories {
                width: 891px;
                margin: 0 auto 38px;
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