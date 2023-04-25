<template>
    <v-layout class="overflow-visible position-absolute">
        <v-bottom-navigation
                bg-color="black"
                mode="shift"
        >
            <v-btn v-for="(item, index) of dockItems" :key="index"
                    class="rounded-lg"
                    :class="item.hover ? 'v-btn--selected' : '' "
                    @mouseleave="item.hover = false"
                    @mouseenter="item.hover = true">
                <v-icon>{{ item.icon }}</v-icon>

                <span>{{ item.title }}</span>
            </v-btn>

        </v-bottom-navigation>
    </v-layout>
</template>

<script>
export default {
    name: "dock",
    data: () => ({
        dockItems: [
            {
                icon: 'mdi-television-play',
                title: 'store',
                hover: false,
            },
            {
                icon: 'mdi-television-play',
                title: 'play',
                hover: false,
            },
            {
                icon: 'mdi-television-play',
                title: 'music',
                hover: false,
            },
            {
                icon: 'mdi-television-play',
                title: 'about',
                hover: false,
            },
        ]
    }),

    computed: {

    },
}
</script>

<style scoped>
.position-absolute {
    top: 1.2rem;
    left: 0;
    right: 0;
    height: 54px;
}
</style>