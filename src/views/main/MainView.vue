<template>
  <div class='fill-height overflow-y-auto overflow-hidden'>

    <dock />

    <router-view v-slot='{ Component, route }'>
      <transition :name='route.meta.animation' mode='out-in'>
        <component :is='Component' />
      </transition>
    </router-view>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainPage',
});
</script>

<style lang='scss'>

</style>
