<template lang="pug">
  div.topbar
    div.container
      div.topbar__content
        mixin svg(svg_url, svg_id)
          if svg_id
            svg()&attributes(attributes)
              use(xlink:href= svg_url + '#' + svg_id)
          else
            svg()&attributes(attributes)
              use(xlink:href= svg_url)
        nuxt-link(to="/").brand-logo
          +svg("","logo")(class="")

        div#showMenu.show-menu
          +svg("","menu_ic")(class="")

        div#closeMenu.close-menu ×

        nav.menu#mobileMenu
          nuxt-link(:to="{name: 'index', hash: '#projects'}") projects
          nuxt-link(:to="{name: 'index', hash: '#about'}") about
          nuxt-link(:to="{name: 'index', hash: '#contact'}") contact

</template>

<script>
const TIMEOUT = 1;
  export default {
    name: "TopBar",
    components: {

    },
    mounted () {
      if (this.$route.hash) {
        setTimeout(() => this.scrollTo(this.$route.hash), TIMEOUT)
      }
    },
    methods: {
      scrollTo: function (hashtag) {
        setTimeout(() => { location.href = hashtag }, TIMEOUT)
      }
    }
  }
</script>

<style scoped lang="sass">
.topbar
  //position: absolute
  //width: 100%
  color: $color-white
  padding: 40px 0 20px
  @media (max-width: $phone)
    padding: 20px 0
  &__content
    display: flex
    align-items: center
    justify-content: space-between

.menu
  color: #fff
  font-size: 14px
  display: flex
  @media (max-width: $desktop)
    font-size: 24px
    flex-wrap: wrap
    align-items: center
    position: fixed
    left: 0
    top: 0
    height: 100%
    width: 100%

    backface-visibility: hidden
    overflow: auto
    transform: translateX(100%)
    transition-property: transform
    transition-duration: .4s

    flex-direction: column
    background-color: $color-default
    padding: 24px
    overflow-y: scroll
    &.visible
      transform: translateY(0)
      z-index: 3
  & a
    margin: 0 2rem
    font-size: inherit
    @media (max-width: $desktop)
      margin: 2rem 0
    &:hover
      text-decoration: underline

  & select
    margin-left: 2rem

.show-menu
  margin-left: auto
  & svg
    width: 30px
    height: 30px
  @media (min-width: $desktop)
    display: none

.close-menu
  display: none
  position: fixed
  z-index: 5
  font-size: 42px
  align-items: center
  justify-content: center
  text-align: center
  right: 0
  top: 0
  cursor: pointer
  height: 40px
  width: 40px
  color: #fff
  border-radius: 0 0 0 2px
  &.visible
    display: flex
    z-index: 4

  @media (min-width: $tablet-portrait)
    font-size: 64px
    height: 60px
    width: 60px

  @media (min-width: $desktop)
    display: none
</style>
