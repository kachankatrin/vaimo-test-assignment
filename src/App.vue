<template>
  <div id="app">
    <header-aurora />
    <main-aurora />
    <footer-aurora />
  </div>
</template>

<script>
import HeaderAurora from "./components/HeaderAurora";
import MainAurora from "./components/MainAurora.vue";
import FooterAurora from "./components/FooterAurora.vue";

export default {
  name: "App",

  components: {
    HeaderAurora,
    MainAurora,
    FooterAurora
  },
};
</script>

<style lang="scss">

@keyframes pulse {
  0% { 
    box-shadow: 0 0 0 0 #E1E0E1; 
  }
}

#app {
    box-sizing: border-box;
    font-family: "Poppins";
    font-style: normal;
    .d-flex {
      display: flex;
      align-items: center;
      justify-content: space-between;
      &.mobile-nav {
          align-items: flex-start;
      }
      &.scrolled {
        .v-label, .theme--dark.v-input input {
          color: #000000 !important;
        }
        .theme--dark{
          &.v-icon:not(.header-container-active .d-flex.scrolled .theme--dark.v-icon) {
            color: #000000;
          }
        }
      }
    }
    li {
      list-style: none;
    }
    .on-hover {
      animation: pulse 1s;
      box-shadow: 0 0 0 1em rgba(#fff,0);
    }
}
.theme--dark {
  &.v-app-bar {
    &.v-toolbar{
      &.v-sheet {
        background-color: transparent;
        box-shadow: none;
      }
    }
  }
  &.v-overlay {
    background: #939393;
  }
}
.v-label {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px !important;
    letter-spacing: 0.8px !important;
    color: #FFFFFF !important;
}
.v-list-group--active {
  .v-list-group__header {
    .v-list-group__header__append-icon {
      .v-icon {
        transform: rotate(90deg);
      }
    }
  }
}
.header-container {
  .v-toolbar__content {
    flex-wrap: wrap;
  }
  .theme--light{
    &.v-icon{
      &:focus::after {
        opacity: 0;
      }
      &:hover::after {
        opacity: 0.12;
      }
    }
    &.v-overlay {
      background: #939393;
    }
    &.v-sheet {
      background: transparent;
      box-shadow: none;
    }
    &.v-navigation-drawer {
      .v-divider {
        &.nav-title-divider {
          border-color: #000000;
        }
      }
    }
  }
  &-active {
    .v-label {
      color: #000000 !important;
    }
    .v-slide-group__content {
        background: #FFFFFF;
    }
    .scrolled {
      .v-slide-group__content {
        background: transparent;
      }
    }
    .theme--light{
      &.v-icon {
        color: #000000;
      }
    }
  }
}
.main-container {
  .v-label {
    color: #4A4A4A !important;
    font-weight: 400;
  }
}
.footer-list-card {
  .theme--light{
    &.v-list {
      background: #F7F7F7;
    }
  }
  .v-list {
    padding: 4px 0 24px;
    &-group {
      &__header {
        border-bottom: 1px solid #E1E0E1;
      }
      padding-top: 6px;
    }
    &-item {
      &--dense {
        min-height: 32px;
      }
      &__content {
        padding: 6px 0;
      }
      &__title {
        &.child-title {
          font-family: "Poppins";
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 19px;
          letter-spacing: 0.1px;
        }
      }
    }
  }
}
input[type=search], input[type=email] {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
}
.v-text-field--outlined {
    fieldset {
      border: 1px solid #E1E0E1;
  }
}
.v-btn__content {
    font-family: "Poppins";
    line-height: 20px;
    text-align: center;
    letter-spacing: 1px;
    text-transform: uppercase;
}
.nav-drawer-tabs-wrapper {
  &.v-navigation-drawer--is-mobile:not(.v-navigation-drawer--close) {
    box-shadow: none;
  }
  &.v-navigation-drawer {
    max-width: unset;
    left: -8px;
  }
}
</style>