<script>
import {defineComponent} from 'vue'

export default defineComponent({
    name: "igni-button",
    props: {
        className: {
            type: String,
            default: 'outlined-with-solid-button'
        }
    }
})
</script>

<template>
    <button :class="className"><slot/></button>
</template>

<style lang="scss">
@mixin default-button {
  transition: .2s cubic-bezier(.17,.84,.44,1);
  border-radius: 16px;
  letter-spacing: 1.15px;
  text-transform: none;
  border: none;
  outline: none;

  color: #fff;

  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;

  padding: 16px 80px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}
.outlined-with-solid-button {
    @include default-button;

    border: 1px solid rgba(255, 255, 255, 0.05);
    background: #6563EE;

    &:hover {
        opacity: 0.75;
    }

    &:hover:active {
      opacity: 0.5;
    }

    &.loading {
    }
}

.outlined-button {
  @include default-button;
  color: #FFFFFFBF;
  border: 1.5px solid #38383E;

  &:hover {
    border: 1.5px solid #FFF;
    color: #FFF;
  }
  &:hover:active {
    border: 1.5px solid rgba(255, 255, 255, 0.75);
    color: #FFFFFFBF;
  }
  &.loading {
  }
}

.navigation-btn {
  @include default-button;

  color: #8F8F94;

  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  padding: 8px;

  &:hover {

    i { path { fill: white; opacity: 0.75}}
    p { color: white; opacity: 0.75}

    box-shadow: inset 0 0 0 1.6px #6563EE;
  }
  &:hover:active {
  }

  &.loading {
  }
}
.news-btn {
  @include default-button;
  color: #FFF;
  padding: 0;


  &:hover {
  }
  &:hover:active {
  }

  &.loading {
  }
}

.delete-btn {

}

</style>