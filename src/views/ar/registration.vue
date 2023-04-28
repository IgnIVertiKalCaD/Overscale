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
      <v-main>
        <div class="container-fluid">
          <div class="background"></div>
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
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 3) || "Min 3 characters",
    ],
  }),
};
</script>

<style scoped>
/* ============= Animation background ========= */
.background {
  background: black;
  position: relative;
  height: 100vh;
  overflow: hidden;
}
</style>
