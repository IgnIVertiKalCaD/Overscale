<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "svgImport",
  props: {
    className: {
      type: String,
      default: 'icon'
    },
    vhtmlIcon: String,
    color: Number,
    icon_svg_path: String,
    size: Number,
  }
})
</script>

<template>
  <span v-if="icon_svg_path" :class="className" class="ionicon corrector" :style='`background-image: url(${icon_svg_path});filter: invert(${color}); width: ${size}px; height: ${size}px;`'/>
  <span v-if="!icon_svg_path" :class="className" v-html="vhtmlIcon" />
</template>

<style lang='scss'>

.ionicon.corrector {
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center, 50%, 50%;
}
</style>