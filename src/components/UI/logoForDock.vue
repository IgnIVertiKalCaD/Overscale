<template>
  <div class='decorate_name_project'
       :class='className'>
    <!--    preview name uncom-->
    <router-link :to="{name: 'news'}" class='logo_dock'>
      <!--      {{ $config.nameProject }}-->
      <svg-import :vhtml-icon='$config.nameProject' />
    </router-link>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'logoForDock',
  props: {
    className: String,
  },
});
</script>

<style lang='scss'>
.decorate_name_project {
  line-height: normal;
  display: flex;

  .logo_dock {
    color: white;
    text-decoration: none;
    background: #1E1E25;
    border-radius: 27px;
    padding: 18px 25px;
    transition: opacity 0.2s ease;

    span {

    }

    &:hover {
      opacity: 0.8;
    }
  }
}

</style>