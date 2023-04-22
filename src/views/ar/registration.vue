<template>
    <v-card class="fill-height">
        <v-layout class="fill-height">
            <v-navigation-drawer location="right">
                <v-list nav>
                    <v-text-field
                            label="Login"
                            :rules="rules"
                            hide-details="auto"
                    ></v-text-field>
                    <v-text-field label="Password"></v-text-field>
                </v-list>
            </v-navigation-drawer>
            <v-main >
                <div class="container-fluid">
                    <div class="background">
                        <div class="cube"></div>
                        <div class="cube"></div>
                        <div class="cube"></div>
                        <div class="cube"></div>
                        <div class="cube"></div>
                    </div>
                </div>
            </v-main>
        </v-layout>
    </v-card>
</template>

<script>
export default {
    name: "registration",
    data: () => ({
        rules: [
            value => !!value || 'Required.',
            value => (value && value.length >= 3) || 'Min 3 characters',
        ],
    }),
}
</script>

<style scoped>
/* ============= Animation background ========= */
.background {
    background: black;
    position: relative;
    height: 100vh;
    overflow: hidden;
}
.cube {
    position: absolute;
    top: 80vh;
    left: 45vw;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    border: solid 1px #492bba;
    transform-origin: top left;
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    animation: cube 12s ease-in forwards infinite;
}
.cube:nth-child(2n) {
    border-color: #FFF ;
}
.cube:nth-child(2) {
    animation-delay: 2s;
    left: 25vw;
    top: 40vh;
}
.cube:nth-child(3) {
    animation-delay: 4s;
    left: 75vw;
    top: 50vh;
}
.cube:nth-child(4) {
    animation-delay: 6s;
    left: 90vw;
    top: 10vh;
}
.cube:nth-child(5) {
    animation-delay: 8s;
    left: 10vw;
    top: 85vh;
}
.cube:nth-child(6) {
    animation-delay: 10s;
    left: 50vw;
    top: 10vh;
}

/* Animate Background*/
@keyframes Gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
@keyframes cube {
    from {
        transform: scale(0) rotate(0deg) translate(-50%, -50%);
        opacity: 1;
    }
    to {
        transform: scale(20) rotate(960deg) translate(-50%, -50%);
        opacity: 0;
    }
}

</style>