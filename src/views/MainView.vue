<template>
    <div class="header" >
        <dock/>
        <div class="inner-header flex">
            <transition name="transform-right" appear>
                <card_outline
                        :image="logo"
                        :title="project_name"
                />
            </transition>
            <transition name="transform-left" appear>
                <section class="flex flex-column ">
                        <span class="design-text" :class="'title-word title-word-' + index"
                              v-for="(item, index) of title_project" :key="index">{{ item.text }}</span>
                </section>
            </transition>
            <!--<ardialog/>-->

        </div>
    </div>

</template>

<script>

import logo from "@/assets/logo.svg"
import ardialog from "@/views/ar/UI/ARDialog.vue"
import card_outline from "@/views/ar/UI/card_logo.vue"


import {defineComponent} from "vue";
import Dock from "@/views/ar/UI/dock.vue";

export default defineComponent({
    name: "MainPage",
    data: () => ({
        logo,
        project_name: 'Phantom',
        title_project: [
            {
                text: 'downloaded.'
            },
            {
                text: 'installed.'
            },
            {
                text: 'use.'
            }
        ],
        rains: 150
        //render waves
        // waves: [
        //     {
        //         x: 48,
        //         y: 0,
        //         color: '#1f1f1f'
        //     }
        // ]
    }),
    methods: {},
    created() {
    },
    components: {
        Dock,
        ardialog, card_outline
    },
    computed: {},

});
</script>


<style scoped lang="scss">


.transform-right-enter-active {
  transition: all .8s;
}

.transform-right-enter-from {
  transform: translateX(-40px);
  opacity: 0;
}

.transform-left-enter-active {
  transition: all .8s ease-out;
}


.transform-left-enter-from {
  transform: translateX(20px);
  opacity: 0;
}

@import url('https://fonts.cdnfonts.com/css/bruno-ace-sc');
@import url(//fonts.googleapis.com/css?family=Lato:300:400);

.design-text {
  font-family: 'Bruno Ace SC', sans-serif;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
}

h1 {
  font-family: 'Lato', sans-serif;
  letter-spacing: 2px;
  font-size: 48px;
  font-weight: bold;
}

p {
  font-family: 'Lato', sans-serif;
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

.title-word {
  animation: color-animation 12s infinite;
  animation-timing-function: linear;
  transition: .5s all;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-color: #FFF;
  background-size: 400% 400%;

}

.title-word-0 {
  --color-1: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);

}

.title-word-1 {
  --color-2: linear-gradient(135deg, #5572f5 0%, #9e4cf1 100%);
}

.title-word-2 {
  --color-3: linear-gradient(120deg, #f6d365 0%, #ee6f4b 100%);
}

@keyframes color-animation {
  0% {
    background-image: var(--color-1);
  }
  18% {
    background-position: 100% 50%;
    background-image: var(--color-1);
  }
  32% {
    background-image: var(--color-1)
  }
  33% {
    background-image: var(--color-2)
  }
  55% {
    background-image: var(--color-2);
    background-position: 50% 100%;
  }
  65% {
    background-image: var(--color-2)
  }
  66% {
    background-image: var(--color-3)
  }
  75% {
    background-position: 100% 50%;
    background-image: var(--color-3);
  }
  99% {
    background-image: var(--color-3)
  }
  100% {
    background-image: var(--color-1)
  }
}

</style>