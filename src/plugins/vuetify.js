import "@fortawesome/fontawesome-free/css/all.css";
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

const shoppingBag = "M8.96061 1.09091e-05C7.8648 0.00107728 6.81416 0.442131 6.0378 1.22729C5.26243 2.01245 4.82642 3.07781 4.82432 4.18885V6.229H1.45907C1.16173 6.229 0.921143 6.47296 0.921143 6.77446V20.7273C0.921143 22.5351 2.36681 24 4.14869 24H13.7724C15.5543 24 17 22.5351 17 20.7273V6.77446C17 6.62957 16.9432 6.49106 16.8424 6.38879C16.7415 6.28652 16.6049 6.22899 16.462 6.22899H13.0968V4.18884C13.0947 3.07769 12.6587 2.01233 11.8833 1.22728C11.1069 0.442121 10.0562 0.00106364 8.96049 0L8.96061 1.09091e-05ZM5.9001 4.18885C5.9001 2.4747 7.27013 1.08547 8.96061 1.08547C10.6511 1.08547 12.0211 2.4747 12.0211 4.18885V6.229H5.9001V4.18885ZM15.9243 7.31978V20.7271C15.9243 21.3056 15.6974 21.8606 15.2939 22.2697C14.8905 22.6788 14.3431 22.9089 13.7726 22.9089H4.14888C2.9606 22.9089 1.99718 21.932 1.99718 20.7271V7.31978H4.82451V10.2707C4.82451 10.5722 5.0651 10.8162 5.36243 10.8162C5.65872 10.8162 5.90036 10.5722 5.90036 10.2707V7.31978H12.0214V10.2707C12.0214 10.5722 12.2631 10.8162 12.5593 10.8162C12.8567 10.8162 13.0973 10.5722 13.0973 10.2707V7.31978H15.9243Z";
const magnifySvg = "M7.33743 0C9.29823 0 11.1418 0.732088 12.5279 2.06084C15.2135 4.63432 15.3793 8.72258 13.0264 11.4835L16.475 14.789C16.7648 15.0668 16.7648 15.5169 16.475 15.7947C16.3301 15.9337 16.1402 16.0031 15.9504 16.0031C15.7605 16.0031 15.5707 15.9337 15.4257 15.7947L11.9772 12.4892C10.6707 13.5144 9.04896 14.0721 7.3373 14.0721C5.3765 14.0721 3.53294 13.3401 2.14684 12.0113C-0.715515 9.26837 -0.715515 4.8044 2.14684 2.06075C3.5332 0.732106 5.37663 0 7.33743 0ZM3.19623 11.0057C4.30274 12.0663 5.7731 12.6498 7.33747 12.6498C8.90184 12.6498 10.3722 12.0656 11.4787 11.0057C13.7621 8.817 13.7621 5.25524 11.4787 3.06673C10.3722 2.00681 8.90184 1.42266 7.33747 1.42266C5.7731 1.42266 4.30278 2.00681 3.19623 3.06673C0.912839 5.25595 0.912839 8.81717 3.19623 11.0057Z";
Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(fas);
Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: ["fa", "faSvg"],
        values: {
            snapchat: "fab fa-snapchat-ghost",
            facebook: "fab fa-facebook-f",
            instagram: "fab fa-instagram",
            twitter: "fab fa-twitter",
            youtube: "fab fa-youtube",
            shopping: shoppingBag,
            locationPin: "fas fa-map-marker-alt",
            magnify: magnifySvg
        }
      }
});
