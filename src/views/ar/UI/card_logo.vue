<template>
    <v-card
            class="ma-0 pa-10 mr-5"
            variant="outlined"
    >
        <v-card-item>
            <div>
                <div class="text-overline mb-1">
                    <v-img :src="image"></v-img>
                </div>
                <div class="mb-1 design-text">
                    {{ title }}
                </div>
                <div class="text-h5">CMS made with soul</div>
            </div>
        </v-card-item>

        <v-card-actions class="justify-center">
            <v-btn v-for="(soc, index) in social" :key="index" :href="soc.link" variant="outlined">
                {{ soc.name }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "card_outlined",
    props: {
        title: String,
        image: String,
    },
    data: () => ({
        social: [
            {
                name: 'github',
                link: 'textlink'
            },
            {
                name: 'discord',
                link: 'textlink'
            },
        ]
    })
}
</script>

<style scoped>
.design-text {
    font-family: 'Bruno Ace SC', sans-serif;
    font-size: 3rem;
    font-weight: bold;
    text-transform: uppercase;
}
</style>