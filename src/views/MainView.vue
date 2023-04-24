<template>
        <div class="header">

            <div class="inner-header flex ">
                <transition name="transform-right" appear>
                    <card_outline
                        :image="logo"
                        :title="project_name"
                    />
                </transition>
                <section class="flex flex-column ">
                    <span   class="design-text"
                        v-for="(item, index) of title_project" :key="index">{{item.text}}</span>
                </section>
<!--                <router-link :to="{name: 'admin'}">Go to Home</router-link>-->
<!--
      <ardialog/>-->

            </div>

<!--            <div>-->
<!--                <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">-->
<!--                    <defs>-->
<!--                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />-->
<!--                    </defs>-->
<!--                    <g class="parallax">-->
<!--                        <use xlink:href="#gentle-wave" v-for="(wave, index) of waves" :key="index" :x="wave.x" :y="wave.y" :fill="wave.color" />-->
<!--                    </g>-->
<!--                </svg>-->
<!--            </div>-->
        </div>
</template>

<script>

import logo from "@/assets/logo.svg"
import ardialog from "@/views/ar/UI/ARDialog.vue"
import card_outline from "@/views/ar/UI/card_logo.vue"


import { defineComponent } from "vue";
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
        //render waves
        // waves: [
        //     {
        //         x: 48,
        //         y: 0,
        //         color: '#1f1f1f'
        //     }
        // ]
    }),
    methods: {
    },
    created() {
    },
    components: { ardialog, card_outline
    },
    computed: {
    },
    mounted() {
    },
});
</script>


<style scoped lang="scss">
.frame-for-decorate {
    background: white;
    padding: 5px;
    border-radius: 50%;
}

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
    font-weight:300;
    letter-spacing: 2px;
    font-size:48px;
    font-weight: bold;
}
p {
    font-family: 'Lato', sans-serif;
    letter-spacing: 1px;
    font-size:14px;
    color: #333333;
}

.header {
    position:relative;
    text-align:center;
    background: black;
    height: 100%;
    color:white;
}
.logo {
    width:150px;
    max-height: 150px;
}

.inner-header {
    height:100%;
}

.flex {
    display: flex;
    text-align: center;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

//.waves {
//    position:relative;
//    width: 100%;
//}
//
//.content {
//    position:relative;
//    height:20vh;
//    text-align:center;
//    background-color: white;
//}
//.parallax {
//    max-height: 10px;
//}
//
//.parallax > use {
//    animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
//}
//.parallax > use:nth-child(1) {
//    animation-delay: -2s;
//    animation-duration: 20s;
//}
//.parallax > use:nth-child(2) {
//    animation-delay: -3s;
//    animation-duration: 10s;
//}
//.parallax > use:nth-child(3) {
//    animation-delay: -4s;
//    animation-duration: 13s;
//}
//.parallax > use:nth-child(4) {
//    animation-delay: -5s;
//    animation-duration: 20s;
//}
//@keyframes move-forever {
//    0% {
//        transform: translate3d(-90px,0,0);
//    }
//    100% {
//        transform: translate3d(85px,0,0);
//    }
//}
///*Shrinking for mobile*/
//@media (max-width: 768px) {
//    .waves {
//        height:40px;
//        min-height:40px;
//    }
//    .content {
//        height:30vh;
//    }
//    h1 {
//        font-size:24px;
//    }
//}
</style>