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
      &.scrolled {
        .v-label {
          color: #000000 !important;
        }
        .theme--dark{
          &.v-icon {
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
.v-label {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    line-height: 16px !important;
    letter-spacing: 0.8px !important;
    color: #FFFFFF !important;
}
.header-container-active {
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
.main-container {
  .v-label {
    color: #4A4A4A !important;
    font-weight: 400;
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
</style>