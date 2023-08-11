<template>
    <svg>
        <defs>
            <clipPath id="clip" clipPathUnits="objectBoundingBox">
                <polygon
                        points="1 0.4, 1 -0.2, 0 -0.2, 0 0.4, 1 0.4, 1 0.84, 0 0.84, 0 1, 1 1"
                />
            </clipPath>
        </defs>
    </svg>

    <div id="logo">
        <h1 class="mb-1 design-text">{{title}}</h1>
        <span>CMS made with soul</span>

        <svg viewBox="0 0 250 280" id="triangle">
            <defs>
                <path
                        id="tri"
                        fill="#ffffff"
                        d="M125,30L0,280H250zM125,70L218,260H32z"
                />
            </defs>

            <svg id="wrap">
                <use xlink:href="#tri"></use>
            </svg>
        </svg>
    </div>
</template>

<script>
export default {
    name: "logo",
    props: {
        title: String,
    },
    data: () => ({}),
};
</script>

<style scoped lang="scss">
.design-text {
  font-size: 2.5rem;
  font-weight: bold;
  text-transform: uppercase;
}

.corrector {
  padding: 50px;
}

#logo {
  position: absolute;
  left: 0;
  top: 5rem;
  color: #fff;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 0.3rem;
    background: #fff;
    border-radius: 50%;
    bottom: 1rem;
    left: 50%;
    opacity: 1;
  }

  &:after {
    top: 3rem;
    height: 0.6rem;
  }

  svg#triangle {
    position: absolute;
    top: -6.9rem;
    left: 50%;
    height: 16rem;
    transform: translate(-50%, 0);
    clip-path: polygon(
                    100% 46%,
                    100% 0,
                    0 0,
                    0 46%,
                    100% 46%,
                    100% 84%,
                    0 84%,
                    0 100%,
                    100% 100%
    );
    // this would have been enough for chrome, but firefox makes it all really complicated...

    #wrap {
      clip-path: url(#clip); //firefox only supporting inline svg clip-path
      clip-path: polygon(
                      0 0,
                      0 100%,
                      100% 100%,
                      100% 0
      ); //so chrome does'nt use firefox clip-path
    }

    // Triangle animation
    #tri {
      transform: translate(0, 0);
    }
  }

  h1 {
    letter-spacing: 0.2rem;

    &:before {
      content: "";
      display: block;
      position: absolute;
      height: 2px;
      background: #fff;
      bottom: 75px;
      width: 81%;
      left: 9%;
    }
  }

  span {
    display: block;
    font-weight: bold;
    font-size: 1.4rem;
    letter-spacing: 1rem;
    text-transform: uppercase;
    line-height: 150%;
    text-align: center;
    margin-left: 0.8rem;
  }
}
</style>
