<template>
  <div class="header" v-cloak>
    <dock />
    <div class="inner-header flex">
      <transition name="transform-right" appear>
        <card_outline  :title="project_name" />
      </transition>
      <transition name="transform-left" appear>
        <section class="flex flex-column">
          <span
            class="design-text"
            :class="'heading-line heading-line-' + index"
            v-for="(item, index) of title_project"
            :key="index"
          >
            <span class="heading-line-gradient">{{ item.text }}</span>
          </span>
        </section>
      </transition>
    </div>

  </div>
  <div class="container-particles">
          <div class="particle-1"></div>
      </div>
</template>

<script>
import card_outline from "@/views/ar/UI/card_logo.vue";
import Dock from "@/components/dock.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "MainPage",
  data: () => ({
    windowWidth: window.innerWidth,
    project_name: "Phantom",
    title_project: [
      {
        text: "download.",
      },
      {
        text: "install.",
      },
      {
        text: "use.",
      },
    ],
  }),
  components: {
    Dock,
    card_outline,
  },
});
</script>

<style scoped lang="scss">
.transform-right-enter-active {
  transition: all 0.8s;
}

.transform-right-enter-from {
  transform: translateX(-40px);
  opacity: 0;
}

.transform-left-enter-active {
  transition: all 0.8s ease-out;
}

.transform-left-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

@import url("https://fonts.cdnfonts.com/css/bruno-ace-sc");
@import url(//fonts.googleapis.com/css?family=Lato:300:400);

.design-text {
  font-family: "Bruno Ace SC", sans-serif;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
}

h1 {
  font-family: "Lato", sans-serif;
  letter-spacing: 2px;
  font-size: 48px;
  font-weight: bold;
}

p {
  font-family: "Lato", sans-serif;
  letter-spacing: 1px;
  font-size: 14px;
  color: #333333;
}

.header {
  position: relative;
  text-align: center;
  background: black;
  height: 100%;
  color: white;
}

.inner-header {
  height: 100%;
}

.flex {
  display: flex;
  text-align: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

@import './styles/animation_heading_line.scss';
@import './styles/background_particles.scss';


</style>
