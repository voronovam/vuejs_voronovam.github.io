<template lang="pug">
  footer.footer
    div.container
      div.footer__content
        mixin svg(svg_url, svg_id)
          if svg_id
            svg()&attributes(attributes)
              use(xlink:href= svg_url + '#' + svg_id)
          else
            svg()&attributes(attributes)
              use(xlink:href= svg_url)

        nuxt-link(to="/").brand-logo
          +svg("","logo")(class="")

        div.footer__links
          a(href="https://t.me/voronovacom" target="_blank")
            +svg("","telegram")(class="icon")
          a(href="mailto:voronova.dev@gmail.com?subject=Important!&body=WebDev" target="_blank")
            +svg("","email")(class="icon")
          a(href="skype:voronova.com?chat")
            +svg("","skype")(class="icon")
          a(href="https://github.com/voronovam" target="_blank")
            +svg("","git")(class="icon")
          a(href="https://www.linkedin.com/in/voronovam/" target="_blank")
            +svg("","linked")(class="icon")
          a(href="https://www.instagram.com/_voronovam/" target="_blank")
            +svg("","insta")(class="icon")
          a(href="https://www.behance.net/voronovam" target="_blank")
            +svg("","behance")(class="icon")

      div 2014 - {{getYear}}

</template>

<script>
  export default {
    name: "Footer",
    computed: {
      getYear (){
        let getYear = new Date().getFullYear();
        return getYear;
      },
    }
  }
</script>

<style scoped lang="sass">
.footer
  background: $color-default
  color: #fff
  padding: 80px 0

  @media (max-width: $phone)
    text-align: center

  &__content
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    align-items: center
    margin-bottom: 80px

  & .brand-logo
    @media (max-width: $phone)
      margin-bottom: 80px
      width: 100%

  &__links
    display: flex

    flex-wrap: wrap
    flex-direction: row

    @media (max-width: $phone)
      width: 100%


    & a
      display: block

      @media (max-width: $phone)
        flex: 0 0 calc(25% - 15px)
        margin-bottom: 60px


      @media (min-width: $tablet-portrait)
        margin-left: 1rem


      & svg
        width: 1.5rem
        height: 1.5rem
        transition: all .2s ease
        opacity: .5


      &:hover
        text-decoration: none

        & svg
          color: $color-accent
          opacity: 1


</style>
