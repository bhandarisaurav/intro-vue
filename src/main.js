import Vue from "vue";
import App from "./App.vue";
import TypeIt from "typeit";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");

new TypeIt("#inner-demo-2", {
  speed: 100,
  lifelike: true,
  cursor: true,
  cursorSpeed: 300,
  loop: true
})
  .pause(1000)
  .type('<span style="font-family: Segoe UI Emoji">👋</span>', {
    html: true
  })
  .type("&nbspHi&nbspthere!&nbspI'm&nbspSaurav")
  .pause(750)
  .type("&nbspBhandari")
  .pause(500)
  .move(-15)
  .type("https://")
  .move(1)
  .pause(300)
  .delete(1)
  .type("s")
  .move(7)
  .pause(300)
  .delete(2)
  .type("b")
  .move(7)
  .pause(250)
  .type(".")
  .pause(250)
  .type("com")
  .pause(250)
  .type(".np")
  .move("END")
  .pause(1000)
  .go();
