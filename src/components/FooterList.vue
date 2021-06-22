<template>
    <v-card
    class="mx-auto footer-list-card"
    max-width="500"
    outlined
  >
    <v-list>
      <v-list-group
        v-for="item in items"
        :key="item.title"
        v-model="item.active"
        no-action
        append-icon="mdi-chevron-right"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="child in item.items"
          :key="child.title"
          dense
        >
          <v-list-item-content>
            <v-list-item-title class="child-title" v-text="child.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
    name: "FooterList",
    data: () => ({
      items: [
        {
          items: [
            { title: "Who we are" },
            { title: "Our stores" },
            { title: "Customer Reviews" }
          ],
          title: "About Us",
        },
        {
          items: [
            { title: "Women fashion" },
            { title: "Accessories" },
            { title: "Kids" },
          ],
          title: "Categories",
        },
        {
          items: [
            { title: "Customer service" },
            { title: "Size guide" },
            { title: "Contact us" }
          ],
          title: "Help",
        },
        {
          items: [
            { title: "Purchase terms" },
            { title: "Guarantee" }
          ],
          title: "Payments & Delivery",
        },
      ],
    }),
}
</script>

<style lang="scss" scoped>
 .footer-list-card {
    font-family: "Cormorant Garamond";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 1.16364px;
    color: #000000;
 }
</style>