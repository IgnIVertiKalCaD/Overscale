<template>
  <v-card class="border-0" variant="outlined">
    <v-card-item class="corrector">
      <logo :title="title" />
    </v-card-item>

    <v-card-actions class="justify-center">
      <v-btn
        class="hover-effect"
        v-for="(soc, index) in social"
        :key="index"
        size="large"
        :href="soc.link"
        variant="outlined"
      >
        <v-icon slot="prepend-icon" class="v-icon-size-1">mdi-{{ soc.name }}</v-icon>
        {{ soc.name }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Logo from "@/components/UI/logo.vue";
export default {
  name: "card_outlined",
  components: { Logo },
  props: {
    //put value to next template on 4 string. Maked it потому что захотел
    title: String,
  },
  data: () => ({
    social: [
      {
        name: "github",
        link: "https://github.com/IgnIVertiKalCaD/Overscale",
      },
      {
        name: "discord",
        link: "https://discord.gg/naTFAzB45f",
      },
    ],
  }),
};
</script>

<style scoped lang="scss">
.hover-effect {
    transition: .3s;
    &:hover{
      background: rgba(255, 255, 255, 0.281);
    }
}
.v-icon-size-1 {
  font-size: 26px;
  margin: 0 5px;
}
.corrector {
  padding: 50px;
}
</style>
