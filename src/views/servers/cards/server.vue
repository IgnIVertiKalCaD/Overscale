<script>
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

export default defineComponent({
  name: 'serverCard',
  components: {
    Swiper, SwiperSlide,
  },
  data: () => ({
    searchIcon,
    chatInputText: '',
    chat: [
      {
        text: 'Need eat in after bla bla bla',
        head: 'headIgnI',
        nickname: 'IgnI',
      },
      {
        text: 'you sick my dick bitch',
        nickname: 'IgnI',
        head: 'headixyl',
      },
      {
        text: 'last massega pohyi',
        nickname: 'IgnI',
        head: 'headixyl',
      },
      {
        text: 'last massega pohyi',
        nickname: 'IgnI',
        head: 'headixyl',
      },
      {
        text: 'last massega pohyi',
        nickname: 'IgnI',
        head: 'headixyl',
      },
      {
        text: 'last massega pohyi',
        nickname: 'IgnI',
        head: 'headixyl',
      },
      {
        text: 'last massega pohyi',
        nickname: 'IgnI',
        head: 'headixyl',
      },
      {
        text: 'last massega pohyi',
        nickname: 'IgnI',
        head: 'headixyl',
      },
      {
        text: 'last massega pohyi',
        nickname: 'IgnI',
        head: 'headixyl',
      },
    ],
    patternForFilterPlayers: '',
    players: null,
  }),
  methods: {
    sendMessage() {
      console.log(this.chatInputText);
    },
    filterPlayer() {
      if (!this.players) return;
      this.players = this.players.filter(player => player.username.toLowerCase().includes(this.patternForFilterPlayers.toLowerCase()));
    },
  },
  computed: {
    ...mapGetters({
      servers: 'servers/getServers',
      monitoringServers: 'monitoringSocket/getServers',
      username: 'auth/getUsername',
      online: 'monitoringSocket/getOnline',
    }),
    server() {
      const server = this.servers.find(server => server.uniqueId === this.$route.params.uniqueId);
      if (server) return server;
    },
    currentPlayers() {
      const players = this.monitoringServers.find(players => players.serverId === this.$route.params.uniqueId);
      if (players) {
        this.players = players.info.players;
        this.filterPlayer();
        return players.info.players;
      }
    },
    onlineForCurrentServer() {
      return this.online ? this.online.find(online => {
        if (online.serverId === this.server.uniqueId) {
          return online;
        }
      }) : undefined;
    },
  },
});
</script>

<template>
  <div class='server-card' v-if='server'>
    <section class='information-section'>
      <div class='d-flex align-center header-section'>
        <div class='weather-side'>
          <div class='img-card' :style='`background-image: url(${server.icon})`'>
            <div class='weather-gradient'></div>
            <div class='date-container'>
              <h2 class='date-dayname'>{{ server.name }}</h2>
              <h3 class='version-server'>{{ server.version }}</h3>
            </div>
          </div>

          <div class='info-side'>
            <div class='today-info'>
              <div class='precipitation'><span class='title'>Description</span>
                <div class='clear'></div>
              </div>
              <div class='description'>{{ server.description }}</div>
            </div>
          </div>
        </div>

        <div class='information-cards'>
          <div class='section-card' :class='`div${index + 1}`' v-for='(i, index) of 4'>
            <span>Vaip: </span>
            <h1>pasito 2</h1>
          </div>
        </div>
      </div>

      <div class='carousel'>
        <swiper
          :loop='true'
          :speed='4000'
          :autoplay='{
          delay: 0,
          stopOnLastSlide: false,
          reverseDirection: false,
        }'
          :grabCursor='true'
          wrapper-class='wrapper-slide-carousel'
          class='position-absolute w-100 swiper'
          :slides-per-view='2'
          :simulate-touch='false'
          :space-between='20'
          :freeMode='true'
          :breakpoints='{
            1919: {
              slidesPerView: 5
            },
            900: {
              slidesPerView: 2
            }
          }'
        >
          <swiper-slide v-for='i of 10'>
            <div class='slide'>
              <div class='info-card'>
                <img src='https://cdn.modrinth.com/data/Z7LyISbI/6ef6795f1bd60c6d1271a4e44d08da6fd767425e.png' alt=''>
                <span>AEEEEE sasnii v2</span>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class='carousel'>
        <swiper
          :loop='true'
          :speed='4000'
          :autoplay='{
            delay: 0,
            reverseDirection: true,
            stopOnLastSlide: false,
        }'
          :grabCursor='true'
          wrapper-class='wrapper-slide-carousel'
          class='position-absolute w-100 swiper'
          :slides-per-view='2'
          :simulate-touch='false'
          :space-between='20'
          :freeMode='true'
          :breakpoints='{
            1919: {
              slidesPerView: 5
            },
            900: {
              slidesPerView: 2
            }
          }'
        >
          <swiper-slide v-for='i of 10'>
            <div class='slide'>
              <div class='info-card'>
                <img src='https://cdn.modrinth.com/data/Z7LyISbI/6ef6795f1bd60c6d1271a4e44d08da6fd767425e.png' alt=''>
                <span>AEEEEE sasnii v2</span>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class='position-relative fill-height'>
        <div class='chat-block'>
          <section>
            <div class='chat-field' v-for='chat of chat'>
              <img class='head'
                   src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABGUlEQVR4nO2aMW7DQAwE9yFq9wAWB31I3w+cRkXyAfoDAQn7bASQp9hOOFELcoeCJElZaYxRyva/qquvez5hgOiAZAREBiQhKCiQYFCPa5XTc85S3fnP1PzQHiAMEB0gRkBkgAhBQQFdEYNubrBa4LsNWDbQGGA6wIyAyQATgoYCBoN+OWcjotTl94DAgKADghEIMiAIwYACcUUMbttWahWD3fkYMOmAZAQmGZCE4IQCCQbnG/aA4zhKdR8e8ve71L7vpbrzu/ra/wiNAaYDzAiYDDAhaCjgT8TgaC74uX2V6t73OwM6ded39WHAoAOSERhkQBKCAwokGBx/7AF53nJJi5xf1mL9woCTDkhG4CQDkhA8oUB+Igbvts1iA797slIAAAAASUVORK5CYII='>
              <div class='bg-text-chat'>
                <p class='nickname'>{{ chat.nickname }}</p>
                <span>{{ chat.text }}</span>
              </div>
            </div>
          </section>
          <div class='chat-input'>
            <v-text-field
              @keyup.enter='sendMessage'
              v-model='chatInputText'
              density='compact'
              variant='solo'
              label='Hello guys'
              append-inner-icon='fa-solid fa-arrow-right'
              single-line
              hide-details
              bg-color='transparent'
              @click:append-inner='sendMessage'
            ></v-text-field>
          </div>
        </div>
      </div>
    </section>

    <section class='players-section'
             v-if='currentPlayers'>
      <div class='information'>
        <!--        <span>Online: {{onlineForCurrentServer?.count}}</span>-->
        <v-text-field
          @input='filterPlayer'
          v-model='patternForFilterPlayers'
          label='Search players'
          variant='outlined'
          density='compact'
          class='input-search-players'
        >
          <template #prepend-inner>
          </template>
        </v-text-field>
      </div>
      <div class='players'>
        <transition-group name='players-anim'>
          <div class='player'
               v-for='player of players' :key='player.username'>
            <img class='head'
                 :src='player.skinTexture'>
            <span>{{ player.username }} <p v-if='username === player.username' /></span>
          </div>
        </transition-group>
      </div>
    </section>

  </div>
</template>

<style lang='scss'>

.server-card {
  .swiper {
    border-radius: 16px;

    .wrapper-slide-carousel {
      transition-timing-function: linear !important;
    }
  }

  display: flex;
  align-items: stretch;
  height: 99%;
  padding-top: 70px;
  margin-left: 25px;

  .information-cards {
    margin-left: 1em;
    display: grid;
    height: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;

    .section-card {
      padding: 0.5em 3em;
      color: white;
      display: flex;
      align-items: center;
      margin-bottom: .2em;
      background: rgb(23, 23, 23);
      background: radial-gradient(circle, rgba(23, 23, 23, 0.9) 40%, rgba(40, 40, 40, 0.8) 100%);
      box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.16);
      border-radius: 15px;

      &.div1 { grid-area: 1 / 1 / 2 / 2; }
      &.div2 { grid-area: 1 / 2 / 2 / 3; }
      &.div3 { grid-area: 2 / 1 / 3 / 2; }
      &.div4 { grid-area: 2 / 2 / 3 / 3; }


      &:last-child {
        margin-bottom: 0;
      }
      span {
        font-size: 1.5em;
        font-weight: 500;
      }
    }
  }

  .information-section {
    position: relative;
    padding: 2px;
    display: flex;
    overflow: auto;
    flex-direction: column;

    .header-section {
      margin-bottom: .8rem;
    }

    .carousel {
      position: relative;
      min-height: 5.5em;
      margin-bottom: .9rem;

      &::before,
      &::after {
        background: linear-gradient(to right, rgba(0, 0, 0, 1) 0%, rgba(255, 255, 255, 0) 100%);
        content: "";
        height: 100px;
        position: absolute;
        width: 200px;
        z-index: 2;
        border-radius: 10px;
      }

      &::after {
        right: 0;
        top: 0;
        transform: rotateZ(180deg);
      }

      &::before {
        left: 0;
        top: 0;
      }

      .slide {
        background: rgb(23, 23, 23);
        background: radial-gradient(circle, rgba(23, 23, 23, 0.9) 40%, rgba(40, 40, 40, 0.8) 100%);
        box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.16);
        border-radius: 15px;
        overflow: hidden;
        color: white;
        width: 250px;

        .info-card {
          display: flex;
          align-items: center;

          span {
            padding-right: 15px;
            font-weight: 500;
            letter-spacing: 1.1px;
          }

          img {
            padding: .5em;
            border-radius: 17px;
            margin-right: .4em;
            height: 72px;
          }
        }

      }


    }

    .chat-block {
      background: linear-gradient(to bottom, rgba(44, 44, 44, 0.5), rgba(67, 67, 67, 0.25));
      box-shadow: 0 0 0 2px #ffffff38;
      backdrop-filter: blur(5px);
      border-radius: 25px;
      color: white;
      max-height: 100%;
      position: absolute;
      width: 100%;
      display: flex;
      flex-direction: column;
      min-height: 0;
      top: 0;
      left: 0;

      > span {
        font-size: 1.5rem;
        padding: .5rem 0;
        margin-left: 1rem;
        text-transform: uppercase;
      }

      section {
        overflow: auto;
        min-height: 0;
        border-bottom: 2px solid #ffffff38;
        border-radius: 25px 25px 0 0;

      }

      .chat-field {
        display: flex;
        padding: .5em 1em .5em 1em;
        margin-bottom: 5px;
        border-bottom: 2px solid #ffffff38;


        &:last-child {
          border-bottom: none;
          padding-bottom: 1em;
        }

        .bg-text-chat {
          width: 100%;
          border-radius: 10px;
          padding: 0 12px;

          span {
            //background-color: #1a1c1d;

          }

          &::before {
          }
        }

        img {
          width: 30px;
          height: 30px;
          border-radius: 50px;
          margin-right: .5em;
        }
      }

      .chat-input {
        //background: aliceblue;
        border-radius: 0 0 25px 25px;

        .v-field--variant-solo {
          box-shadow: none;
        }
      }
    }
  }

  .clear {
    clear: both;
  }

  .server-container {
    box-shadow: 0 0 70px -10px rgba(0, 0, 0, 0.2);
    color: #ffffff;
    position: relative;
  }

  .weather-side {
    display: flex;
    padding: 15px;
    flex-direction: row;
    flex-wrap: nowrap;
    //margin-bottom: .8rem;
    height: fit-content;
    backdrop-filter: blur(5px);
    background: linear-gradient(to right, rgba(44, 44, 44, 0.82), rgba(67, 67, 67, 0.24));
    box-shadow: 0 0 0 2px #ffffff38;
    border-radius: 30px 20px 20px 30px;

    .img-card {
      background-position: center;
      position: relative;
      min-width: 225px;
      min-height: 225px;
      max-height: 225px;
      border-radius: 20px;
      background-size: cover;
      box-shadow: 0 0 20px -10px rgb(200 182 182 / 65%);
      transition: transform 300ms ease;

      .weather-gradient {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-image: var(--gradient);
        border-radius: 20px;
        opacity: .5;
      }

      &:hover {
        transform: scale(1.05);
      }
    }
  }


  .date-container {
    position: absolute;
    top: 25px;
    left: 25px;
  }

  .date-day {
    display: block;
  }

  .location {
    display: inline-block;
    margin-top: 10px;
  }

  .location-icon {
    display: inline-block;
    height: 0.8em;
    width: auto;
    margin-right: 5px;
  }

  .players-section {
    margin-left: .8rem;

    .information {
      padding-bottom: .5em;
      display: flex;
      width: 100%;
      flex-direction: column;
      border-radius: 10px;

      .input-search-players {
        .v-input__details {
          display: none;
        }

        .v-field__outline__end {
          border-radius: 0 15px 15px 0 !important;
        }

        .v-field__outline__start {
          border-radius: 15px 0 0 15px !important;
        }
      }

      .v-input__prepend {
        .ionicon {
          width: 25px;
          color: white;

          :after {
            color: white;
          }
        }
      }
    }

    .players {
      position: relative;
      width: 200px;
      overflow-y: unset;
      padding: 3px 5px 0 3px;
      flex: 1 0 auto;
      overflow-x: hidden;

      .player {
        display: flex;
        flex-direction: row;
        margin-bottom: 10px;
        background: #2f3136;
        padding: 8px;
        border-radius: 10px;
        //backdrop-filter: blur(5px);
        background: linear-gradient(to right, rgba(44, 44, 44, 0.82), rgba(67, 67, 67, 0.24));
        box-shadow: 0 0 0 2px #ffffff38;

        &:first-child {
          margin-top: 0;
        }


        .head {
          margin-right: 5px;
          border-radius: 50px;
          width: 24px;
          height: 24px;
        }

        span {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          & p {
            height: 15px;
            width: 15px;
            background-color: #636363;
            border-radius: 30px;
          }
        }
      }
    }
  }

  .weather-icon.feather {
    height: 60px;
    width: auto;
  }

  .weather-temp {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-weight: 600;
    font-size: 2em;
    position: absolute;
    left: -70px;
    bottom: 30px;
    line-height: 32px;
  }

  .info-side {
    transition: all 0.5s ease;
    position: relative;
    height: min-content;
  }

  .today-info {
    padding: 0 10px;
    margin: 0 10px;
    border-radius: 10px;

    .title {
      font-size: 1.5rem;
      font-weight: 600;
    }

    .description {
      font-size: 1.1rem;
      height: 165px;
      overflow-y: auto;
    }
  }

  .today-info > div:not(:last-child) {
    margin: 0 0 .5em 0;
  }

  .players-anim-move,
  .players-anim-enter-active,
  .players-anim-leave-active {
    transition: all 0.4s ease;
  }

  .players-anim-enter-from,
  .players-anim-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .players-anim-leave-active {
    position: absolute;
    width: 95%;
  }
}


</style>