<template>
  <div class='d-flex'>
    <div>
      <v-text-field
        variant='solo'
        hide-details
        bg-color='#09090C'
        class='input-for-create-news-Admin flex-0-0 mx-7 mb-4'
        single-line
        placeholder='Что происходит?'
        :maxlength='250'

      >
        <template #append-inner>
          <span class='append-inner-icon'><i v-html='icon_for_send_comment' /></span>
        </template>
      </v-text-field>
      <section class='news-section mx-7 mb-6 pa-4' v-for='i of 10'>
        <span class='title'>Lorem pizda</span>
        <span class='description mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam.</span>

        <div class='img-container mt-4 d-flex overflow-hidden flex-0-0'>
          <img :src='default_server_img' alt='1'
               class='w-100' />
        </div>

        <div class='rating-div mt-4 d-flex align-center justify-space-between'>
          <div class='d-flex align-center'>
            <div class='rating'>
              <igni-button class='pl-2' :class-name='`news-btn`'><i v-html='icon_arrow_up' /></igni-button>
              <b>30</b>
              <igni-button class='pr-2' :class-name='`news-btn`'><i v-html='icon_arrow_down' /></igni-button>
            </div>

            <span class='data ml-4'>03.08.2023, 20:21</span>
          </div>

          <span
          v-if='isAuth'
          ><i class='icon-edit-news' v-html='icon_for_edit_news'/></span>

        </div>

        <div class='comments mt-4'>
          <section class='d-flex mb-4' v-for='i of 3'>
            <img
              src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHCgcIBwgRCggJDQoICAkJDhUICQgKGBEWIhUdHx8kHCggJCYlGx8TITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFQ0PFysZFR0tKy0rLSsrNysrLTc2KystNy0tNysrKystKy0rLS0tKysrKysrKys3LSsrKysrKysrK//AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQIEBQYDCAf/xABMEAEAAAIDBQ8QCQUBAAAAAAAAAQIDBBESFDEysQUGExUWIVNUY3Fyk6Hh4gciNFJiZHOBg5Kio7LBwtEzQUJDVWGCkdIXRFGU0yP/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAnEQEAAgAEBgIDAQEAAAAAAAAAARECAxIhBBMUMUFRYWIFFUIyIv/aAAwDAQACEQMRAD8A/K3ldwACKiBAAEigAImEVAAB5qAAJgCQAAXQSACIqAAAALMqAARUQIAAkUABEwioAAPNQABMASAAC6CQARFQAAABZlQBQiCBAAEigAImEVAAB5qoACYFIkAAVdESACIqAAAAJtRS0C0AAQAAtFLQLQTCF14gToYGhhRoYUvesnbR5GbaovWTto8hZResnbR5DUUXtL20eRbSi9pe2iWaS9pe2iWaS9pe2iFPKMLNb/DSAgCIggAAEglAAAAAAAAABajFXQAAe7DoAALCSKAAMObD422AQBEQQgAAsAAAAAAAAAAC1GKugAA92HQAAWEkUAAYc2HxtsAgCIghAABYAAAVejoqWl+iopp7MOhy3dm/YTNEWteta2rSeZN8ktdMl61ratJ5k3yLNMl61ratJ5k3yLNMpvStbWpOKm+S3BpkvStbWpOKm+RZpkvStbWpOKm+RZplajqla2tScVN8ktNMr3pWtrUnFzfxJa0yXpWtrUnFzfxNk0yXpWtrUnFzfxNl0y9r2p9gn4uLDppkvan2Cfi4hpkvan2Cfi4hUl7U+wUnFxWGZiS9qfYKTi4hpkvan2Ck4uIaZL2p9gpOLiJUsOarU9v0E+HY4tRLM4ZRe1Y2Cfi4rcJRe1Y2Cfi4lwUrSUVLJrz0U0sI4Izy3MI/ulkxLzsUosAsBYAQAB2vU5xM1uFVsk7GOXoyqdja5OtQWm5UFputQ9rS5KgtS5KgtW5Kh6UUcf8ASsSVD0tUqC0KgtCoYtrLVFoUWhsmERNk2hsWhsWiVDWTR15t+YtqoRabqWm45zPt2PVPCzezFrBLhnU5B2l5hABCjyEAD2O16nWJmtwqtknc8zw9GU7FydgAHqKAA9KL7fiaHooAAxmVQACYCJAABrY4Z9+KNIABzmfbseqeFm9mLWBwz+0OQd3m8iACFHkIAHsdr1OsTNbhVbJO55nh6Mp2Lk7AAPUUAB6UX2/E0PRQABjMqgAEwESAADWxwz78UaQADnM+3Y9U8LN7MW8Dhn9ocg7PN5EAEKOs1FUW3puKh82NbtyTUVRbem4qHzNZyTUVRbem4qHzNRym7zuZjSZjQrcslPGm0eNHNGM0uh3NzdfNjFLrhw03FrNNFpQWlCL57nlKC+e55VLL57nlC15K1Z9nlWILWvzueVaLL87nlKLL87nlKLYl/blypRZf25cqUWX9uXKUW9qtWNFjPC5ssufrtKIl7XQpdAm6Bp56fXn6365vrRpGj9zyoGj9zyg1+bNS01koaOaaNFCjmu7qWF3brWWLhxM48GpqdS9Ftybi+dvmOPJNS9Ftybi+c5hyDUvRbcm4vnOYclj6n5Nsx8yH8l5icp3LLqAA9KJFjdcUAB4KyAAmVYFlAAGFERACDLqGGfeh70lqGYjQADST40+/NlQVQAFURAAGArLoGkAAelEiwuKAA8FZAATKsCyggAwoggAGXUMM+9D3pKwzEaAAaSfGn35sqCqAAAAADAVh0DQAA9KKGOg9LCluCwouCxaLhj2rpn0llppn0WWmmfRaZSpjuLKCADCiAADKqOtGe3W1pSplYZdqaZ9Flppn0WWmmfRbTTw66bDhm+r82alq4VuZ+1j+xRcFzP2sf2KLgjCzDrBaEAAGArDp1aAAdl1PcXNLfq+SZ6Mny8fE94djY9FPMWArNgjvEK+XqGWS4ouDLkfbiIqNm7XuUqPRZclR6LbvOzCyNes1vofifK/JxEaaerhvLevlS9QKAyrRgtAtBoc9mvJVLdfrqTDvQfT/AB0ROLE82f4c3cvr1Hp5rLkqPRaJ5ZLJ96YnDFdi30vmZ2JUvA0PsQfFxd5c2VYUFhQ5DqidjVHw03sRcM7s9HD93CPO9fgABrlG4ZaAD0eHZdT3FzS36vkmejI8vHxPeHYvQ8wCs+CbeiQPl+hxKHgy5H2/TouIA3ednDW/I/E+V+U/l6+F8t4+S9YADKGQQFaHPXiVThUmSD6n43/WJ5c/w5x9d5QFZ8E+9MT2H0vmZ2JUfA0PsQfFxd5YZSADkOqJ2NUfDTexFwzuz0cP3cI871+AAGtVG5ZaACR2XU9xc0t+r5JnoyXk4nvDsXoeYBWfBNvRIIfL9DiUPBlyPt+IdIXEAbvOzhrfkfifK/J/zu9nC+W8fJqYeoLAsZRbIWBG/lJndoc9eJVOFSZIPqfjf9Ynm4js5x9d5QFZ8E+9Mvgl9L5mdi1LwND7EHxMXeWJZKADkeqJ2NUfDR9iLhnO/DuEeZ7BQBrVRl6Ybl6XRc7ddJphuXpdEs0mmG5el0SycLfZ2M82lkK1CWqaJosaLDS3FzZddzH/AC65ebpcc7I1U3mryf8ADIcf0HTqPhy6X7Gryf8ADIcf0DqPg6X7Ec/c0dbSyGvu/QWOIiJOl+X5nJnauYSy35bcwllt0LD6b3R+SqP8r03ytqb789V01/ZfU6f5NTffnqumfsvqdP8AKs0ukGv2RfPkNDuf3ttuvReTieJ5+nanTLwaJlGqHvX1vM8umPLpr2NUPevreYo1mqHvX1vMUa3pqn7z9b0Ck1J1T95+u6BRqNU/efrugaf+qg1Giaov/Psa9+vurb40S61rPqswPRkcRyJurYxYNZqZ789T03r/AGn1c+n+TUz356npn7T6nT/KI52LYWX5h3Hpk/k7/k6b5d7V8/09Wo6Kg0rhNoMstFdXxc22QstsuPyeCeKv+U6T5en9RpvwqH+xH/mnVfC9J9j+o034VD/Yj/zOq+DpPs0mejPjHNSiq9HNmfoWh0kZ7YU13b1sYWYsGMWdqawZGhzmm24enzMS6mm24enzFhptuHp8xYx773L0jUj3ZdgAGXUfvv0+9YRlAAA9nRkABoc9f9j5b4FhnE0CsgAAAAN9nTx61waPLFjG1hdIw2AA0s+NPvzZWGkIAMWv4su/7moZlhNMAAJQbEdQAGXUfvv0+9YRlAAA9nRkABoc9f8AY+W+BYZxNArIAAAADfZ08etcGjyxYxtYXSMNgB4Glnxp9+bKw0hABi1/Fl3/AHNQzLCaYAASg2I6gAMuofffp96wjKsAsAsUe9y2zZchZchbQZ64WXjbrfTYf0Kzi3aC1Wdy0Wi0KLQotCi0N2+zpa89es1+tosG/FjEuDZ0tyw6XBcoXBcm6XDSz40+/NlZaVQAYtfxZd/3NQzLCbYAASyMpWwARMElUooAsSk9nBS4Jd6V2cJlIlyBctvnfw1vyXxI65e7cK7bAVAFQBUAVAE01Wb2LV+FNkgjlj2adacdwo3REmFt21DiUXBlyOLquNAPKmweNYZl5KgACgM1GgAEwSVhKKAEDgpcEu9K7vKkAG3zv4a35L4kl2y24IdgAAAAlWqzexavwpskCHHN8NOriAiIrtqHEouDLkcZdIXGgHlTYPGsJLyVAAFAZqNAAJgkrCUUAIHBS4Jd6V3eVIANvnfw1vyXxJLtltwQ7AAAABKtVm9i1fhTZIEOOb4adXEBERXbUOJRcGXI4y6QuNAPKmweNYSXkqAAKAtf25cpRZf25cpRZf25cpRZf9n3XpFLZphuUfOSjWaYblHzijWaYblHziicTj4YHVxlIgDMzOr15aNbRRn0S5wRubLLfmOmDEzNPJNgj5/MN8w08k2CPn8xRzDTyTYI+fzFHMW06l2CPn8yUcz4NOpdgj5/MUcw06l2CPn8wc2mJmhXpK5CihCijLcRmm143VtqsYsVsIYAREV2VFSdZJ1n2Zfr/JydYX0XueUos0XueUot501JbBYR5XYF2BdgrdqMYZAAIioAAEc7BthIgCIiwgUUAeiIAAB2AAREV11FiScGXIw6LoAKUuAHkSAgCFHgIAARBAoADnYNuSQAREWECgAPQQAAAABERXXUWJJwZcjEui6AClLgB5CAAIaHgiAAIiCBQARz0ItuZaBaBGIsItFLQLQXtELQLQLQLQLQIxFddRYknBlyMS6LIAKUuAHmIAAhobBWAAERBAAB5GkdHMAAiLCABQFwAAAAAIg6aixZODLkc3SFhQFKXAJLzEAAAf/Z'>
            <div class='comment-child-section d-flex flex-column'>
              <div class='title'>
                <span>XJIuPa</span>
                <b>08.08.2023, 23:51</b>
              </div>
              <div class='text'>
                Когда секс?
              </div>
            </div>
          </section>
        </div>

        <div class='logics-comments'>
          <span class='loader-comments' @click='handlerShowMoreComments'>посмотреть все комментарии</span>

          <v-text-field
            variant='solo'
            hide-details
            bg-color='#09090C'
            class='input-comment flex-0-0 mb-0 mt-4'
            single-line
            placeholder='Добавить комментарий'
            :maxlength='250'
          >
            <template #append-inner>
              <span class='append-inner-icon'><i v-html='icon_for_send_comment' /></span>
            </template>
          </v-text-field>
        </div>

      </section>
    </div>

    <nav class='right'>
      <v-select
        hide-details
        :open-on-click='false'
        v-model='timeSelector'
        variant='solo'
        :menu-props='{closeOnContentClick: true}'
        bg-color='#09090C'
        color='#fff'
        item-value='dt_local'
        label='Сортировка'
        :items='timeItems'
        menu-icon='icon-for-select-up-to-down'
      >
        <template #item='{ item, index, props }'>
          <div class='v-select-item-div'
               :class='{ active: timeSelector?.value === item.value}'
               @click="selectItem('timeSelector', item)">
            <span>{{ item.value }}</span>
          </div>
        </template>
      </v-select>

      <v-select
        class='mt-4'
        hide-details
        :open-on-click='false'
        v-model='typeSortSelector'
        variant='solo'
        :menu-props='{closeOnContentClick: true}'
        bg-color='#09090C'
        color='#fff'
        item-value='dt_local'
        label='Сортировка'
        :items='typeSortItems'
        menu-icon='icon-for-select-up-to-down'
      >
        <template #item='{ item, index, props }'>
          <div class='v-select-item-div'
               :class='{ active: typeSortSelector?.value === item.value}'
               @click="selectItem('typeSortSelector', item)">
            <span>{{ item.value }}</span>
          </div>
        </template>
      </v-select>
    </nav>
  </div>
</template>

<script>
import IgniButton from '@/components/UI/button.vue';
import { legacyIcons } from '@/mixin/legacyIcons';
import default_server_img from '@/assets/server-card.png';
import { mapGetters } from 'vuex';

export default {
  name: 'newsPage',
  mixins: [legacyIcons],
  data: () => ({
    typeSortItems: ['Лучшее', 'Новые'],
    typeSortSelector: 'Новые',
    timeItems: ['За всё время', 'За последний день', 'За последнюю неделю', 'За последний месяц'],
    timeSelector: 'За всё время',
    default_server_img,
  }),
  methods: {
    handlerShowMoreComments() {
      console.log('cocmments');
    },
    selectItem(typeData, item) {
      this[typeData] = item;
    },
  },
  computed: {
    ...mapGetters({
      isAuth: 'auth/getStatusAuth'
    })
  },
  components: { IgniButton },
};
</script>

<style lang='scss'>
@import "@/views/styles/mixin";

.input-for-create-news-Admin {
  i {
    @include icon-style(32px)
  }
}

.icon-for-select-up-to-down {
  width: 16px;
  height: 11px;
  opacity: .5 !important;
  background-image: url('@/assets/icons/input.svg')
}

.v-menu > .v-overlay__content > .v-card, .v-menu > .v-overlay__content > .v-sheet, .v-menu > .v-overlay__content > .v-list {
  margin-top: 10px;
  padding: 0;
  border-radius: 16px;
  background: #09090C;
  box-shadow: inset 0 0 0 1.6px #6563EE;

}

div {
  &.v-select-item-div {
    margin: 5px 10px;
    padding: 10px;
    transition: background-color .2s ease;
    border-radius: 8px;

    cursor: pointer;

    &:first-child {
      margin: 10px 10px 5px 10px;
    }

    &:last-child {
      margin: 5px 10px 10px 10px;
    }

    &:hover {
      background: #1E1E25;
    }

    &.active {
      background: #1E1E25;
    }
  }
}

nav {
  &.right {
    width: 280px !important;

    .v-input {
      width: inherit;

      .v-input__control {
        .v-field {
          transition: all .2s ease;
          border-radius: 16px;
          box-shadow: none;

          .v-label {
            @include font-config;
          }

          &:hover {
            box-shadow: inset 0 0 0 1.6px #6563EE;

            i {
              &.icon-for-select-up-to-down {
                opacity: 1 !important
              }
            }

          }
        }
      }

      .v-list-item {
        border-radius: 16px;
        background: #09090C;
      }
    }
  }
}

.news-section {
  display: flex;
  border-radius: 16px;
  background: #151519;
  flex-direction: column;

  font-style: normal;
  line-height: 24px;

  .logics-comments {
    text-align: center;

    .loader-comments {
      color: #6563EE;
      text-align: center;
      font-size: 16px;
      font-weight: 600;
      text-decoration: none;
      text-transform: none;
      cursor: pointer;
    }

    .append-inner-icon {
      width: 32px;
      height: 32px;

      i {
        @include icon-style(32px)
      }
    }
  }

  .comments {
    img {
      width: 50px;
      height: 50px;
      border-radius: 8px;
      object-fit: cover;
    }

    .comment-child-section {
      margin-left: 10px;

      .title {
        span {
          margin-right: 10px;
          font-size: 20px;
          font-weight: 600;
        }

        b {
          font-weight: 400;
          font-size: 16px;
          opacity: 0.5;
        }
      }
    }

  }

  .title {
    font-size: 24px;
    font-weight: 600;
  }

  .description {
    font-size: 16px;
    font-weight: 400;
  }

  .img-container {
    border-radius: 16px;

    img {
      &:hover {
        transform: scale(1.06);
      }

      transition: all .3s ease;
      object-fit: cover;
      height: 250px;
    }
  }

  .rating-div {
    align-items: center;

    .icon-edit-news {
      padding: 7px;

      i {
        @include icon-style(18px)
      }
    }

    .data {
      font-size: 16px;
      font-weight: 400;
      line-height: 28px;
      opacity: .5;
    }

    .rating {
      padding: 5px;
      border-radius: 8px;
      display: flex;
      background: #1E1E25;

      i {
        display: flex;
        align-items: flex-start;
      }

      b {
        padding: 0 5px;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
}
</style>