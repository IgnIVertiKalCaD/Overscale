<script>
import { mapGetters } from 'vuex';
import IgniButton from '@/components/UI/button.vue';

export default {
  name: 'profilePage',
  components: { IgniButton },
  data: () => ({
    desserts: [
      {
        name: 'Действующая группа:',
        title: 'Игрок',
      },
      {
        name: 'Регистрация аккаунта:',
        title: '18.06.2023',
      },
      {
        name: 'Последняя активность:',
        title: '18.07.2023',
      },
      {
        name: 'Почта аккаунта:',
        title: 'zalupa@phantom.org',
      },
    ],
  }),
  computed: {
    ...mapGetters({
      nickname: 'auth/getUsername',
    }),
  },
};
</script>

<template>
  <section class="profile ml-7 d-flex">

    <div class="d-flex flex-column w-100 mr-7">
      <div class="d-flex">
        <v-table class="table mr-5">
          <tbody>
            <tr v-for="item in desserts" :key="item.name" class="d-block">
              <td>{{ item.name }}</td>
              <td class="dots" />
              <td style="text-align: end; color: #6563ee">{{ item.title }}</td>
            </tr>
          </tbody>
        </v-table>

        <div class="add-money d-flex flex-column">
          <label class="mb-5"
            >Пополнить <br />
            Баланс</label
          >
          <b>ваш баланс:</b>
          <span><b>0</b>&nbspпопусков</span>
          <div class="bg" />
        </div>
      </div>

      <nav class="navigation w-100 h-100 mt-5">
        <span class='w-25 d-flex align-center justify-center'>Персонаж</span>
        <span class='w-25 d-flex align-center justify-center'>Донат</span>
        <span class='w-25 d-flex align-center justify-center'>Безопасность</span>
        <span class='w-25 d-flex align-center justify-center'>Статистика</span>
      </nav>
    </div>

    <div class="profile-info d-flex flex-column">
      <div class="avatar mb-3"></div>
      <span class="nickname">{{ nickname }}</span>
      <span class="status">Иван попуск</span>
      <igni-button class="mt-3 pa-3">Обновить статус</igni-button>
    </div>



  </section>
</template>

<style lang="scss">
.profile {
  .navigation {
    border-radius: 16px;
    background: #1e1e25;
    display: flex;

    span {
      text-align: center;
      border-radius: 16px;
      border: 1.5px solid rgba(255, 255, 255, 0.05);
      background: #6563EE;

      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px;

      margin: 16px 5px;

      &:first-child {
        margin: 16px 5px 16px 16px;
      }
      &:last-child {
          margin: 16px 16px 16px 5px;
      }

    }
  }

  .profile-info {
    padding: 18px;
    border-radius: 16px;
    background: #151519;

    min-width: 280px;

    font-style: normal;
    color: #fff;
    line-height: 30px;

    .nickname {
      font-size: 32px;
      font-weight: 600;
    }

    .status {
      font-size: 16px;
      font-weight: 400;
      opacity: 0.5;
    }

    .avatar {
      //dev
      height: 150px;

      display: flex;
      padding: 18px 54px 0 54px;
      justify-content: center;
      align-items: center;
      border-radius: 24px;
      background: #6563ee;
    }
  }

  .table {
    border-radius: 16px;
    background: #1e1e25;
    padding: 16px 16px 51px 16px;
    flex: 2 1 auto;

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;

    tr {
      padding-bottom: 6px;
    }

    .v-table__wrapper {
      overflow: hidden;
    }
  }

  .add-money {
    .bg {
      background-image: url('@/assets/add-money-bg.png');
      height: 137px;
      width: 200px;
      position: absolute;
      bottom: 0;
      right: 0;
    }

    position: relative;
    flex: 2.5 1 auto;
    padding: 16px;
    border-radius: 16px;
    background: #1e1e25;

    line-height: 28px;
    font-weight: 600;
    font-style: normal;
    text-transform: uppercase;

    label {
      color: #6563ee;
      font-size: 24px;
    }

    > b {
      color: #fff;
      font-size: 16px;
      font-weight: 600;
    }

    span {
      color: #fff;
      font-size: 16px;
      font-weight: 600;
      text-transform: none;

      b {
        color: #6563ee;
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
      }
    }
  }

  .v-table .v-table__wrapper > table > tbody > tr > td {
    border: none;
    padding: 0;
    white-space: pre;
    height: auto;

    &.dots {
      border-top: 2.5px dotted rgba(119, 124, 126, 0.3);
      width: 50%;
      top: 17.7px;
      height: max-content;
      position: relative;
    }
  }
}
</style>