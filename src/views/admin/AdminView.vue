<template>
    <v-card class="fill-height">
      <v-layout class="fill-height">
        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          permanent
          @click="rail = false"
        >
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="John Leider"
            nav
          >
            <template v-slot:append>
              <v-btn
                variant="text"
                icon="mdi-chevron-left"
                @click.stop="rail = !rail"
              ></v-btn>
            </template>
          </v-list-item>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 250px">{{users}}</v-main>
      </v-layout>
    </v-card>
  </template>

  <script>
  import avatar from "@/assets/images/igni.webp"

  import discord from "@/assets/icons/social/discord.svg"
  import telegram from "@/assets/icons/social/telegram.svg"
  import youtube from "@/assets/icons/social/youtube.svg"
  import github from "@/assets/icons/social/github.svg"

  import { defineComponent } from "vue";
  import store from "@/store";
  import {mapActions, mapGetters} from 'vuex'
  export default defineComponent({
    name: "MainPage",
    data: () => ({
      drawer: true,
          items: [
            { title: 'Home', icon: 'mdi-home-city' },
            { title: 'My Account', icon: 'mdi-account' },
            { title: 'Users', icon: 'mdi-account-group-outline' },
          ],
          rail: true,
    }),
    methods: {
        ...mapActions(["fetchUsers"])
    },
    created() {
        this.fetchUsers()
    },
    components: {
    },
    computed: {
      ...mapGetters(["getUsers"]),
        users() {
          return this.getUsers
        }
    },
    mounted() {
    },
  });
  </script>

  <style scoped lang="scss">
  .bg-igni {
   background-color: rgba(128, 0, 128, 0.465);
  //  border: 5px solid white;
   border-radius: 2em;
  }
  </style>

  <style lang="scss">
  .v-application {
    // background-color: black;
  }
  </style>