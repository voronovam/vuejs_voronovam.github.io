<template lang="pug">
  header.header
    div.container
      div.row
        div.col-lg-7
          h1.h1
            span {{spanText}}
            | {{title}}
          p.subtitle {{subtitle}}

          nuxt-link(to="/#form").btn ask me

        div.col-lg-4
          div.circle

        div.col-lg-1
          div.social-links
            mixin svg(svg_url, svg_id)
              if svg_id
                svg()&attributes(attributes)
                  use(xlink:href= svg_url + '#' + svg_id)
              else
                svg()&attributes(attributes)
                  use(xlink:href= svg_url)
            a(href="https://t.me/voronovacom" target="_blank")
              +svg("","telegram")(class="icon")

            a(href="mailto:voronova.dev@gmail.com?subject=Important!&body=WebDev" target="_blank")
              +svg("","email")(class="icon")

            a(href="skype:voronova.com?chat" target="_blank")
              +svg("","skype")(class="icon")
</template>

<script>
    export default {
      name: "Header",
      props: ['spanText', 'title', 'buttontext', 'subtitle'],
      data() {
        return {
          pagelist: {
            spanText: "",
            title: "",
            subtitle: "",
          },
        }
      }
    }
</script>

<style scoped lang="sass">
.header
  $self: &
  background-image: radial-gradient(circle at bottom right, $color-additional, $color-dark)
  color: #fff
  min-height: 100vh
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center

  & .h1
    font-size: 56px
    line-height: 1.1
    text-transform: uppercase
    position: relative
    z-index: 2
    color: $color-white
    //background: linear-gradient(45deg,lighten($color-dark, 20%) 0%,$color-accent 100%)
    //-webkit-background-clip: text
    //color: $color-accent
    //-webkit-text-fill-color: transparent
    //margin: 0 0 30px
    //display: inline-block
    @media (min-width: $tablet-portrait)
      font-size: 116px

  & span
    font-size: 24px
    display: block
    font-weight: 400
    text-transform: none
    @media (min-width: $tablet-portrait)
      font-size: 44px

  & .subtitle
    font-size: 18px
    text-transform: uppercase
    @media (min-width: $tablet-portrait)
      font-size: 24px

  & .circle
    width: 260px
    height: 260px
    background: $color-accent
    background: linear-gradient(-45deg, $color-accent 0%,  $color-dark 90%)
    border-radius: 100%
    margin: 0 auto
    position: absolute
    z-index: 1
    animation: nudge 8s linear infinite alternate
    @keyframes nudge
      0%, 100%
        transform: translate(0, 0)
      50%
        transform: translate(0, 25px)
      80%
        transform: translate(0, -25px)

    @media (min-width: $tablet-landscape)
      position: relative
      width: 370px
      height: 370px

  & .social-links
    display: flex
    align-items: center
    height: 100%
    justify-content: center
    position: relative
    z-index: 2
    @media (min-width: $tablet-portrait)
      flex-direction: column
      align-items: flex-end
      height: 100%
      justify-content: flex-end
    & a
      text-decoration: none
      margin: 4rem 2rem 0
      @media (min-width: $tablet-portrait)
        opacity: .5
        margin: 1rem 0
    & .icon
      width: 1.5rem
      height: 1.5rem

  &--inside
    min-height: 50vh


.social-links
  display: flex
  align-items: center
  height: 100%
  justify-content: center
  position: relative
  z-index: 2

  @media (min-width: $tablet-portrait)
    flex-direction: column
    align-items: flex-end
    height: 100%
    justify-content: flex-end

  & a
    text-decoration: none
    margin: 4rem 2rem 0


    @media (min-width: $tablet-portrait)
      opacity: .5
      margin: 1rem 0

    &:hover
      opacity: 1

  & .icon
    width: 1.5rem
    height: 1.5rem

.btn
  border: 2px solid $color-white
  font-size: 18px
  padding: 20px

  text-transform: uppercase
  margin-top: 24px

  display: inline-flex
  justify-content: center
  min-width: 270px

  align-items: center
  position: relative
  z-index: 2
  box-shadow: 0 4px 8px rgba($color-default, .4)

  cursor: pointer

  -webkit-tap-highlight-color: rgba(0,0,0,0)
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

  @media (max-width: $phone)
    width: 100%

  &:before
    content: ''
    z-index: 0
    position: absolute
    border: 2px solid $color-white
    top: 0
    right: 0
    bottom: 0
    left: 0
    -webkit-transition-duration: 0.3s
    transition-duration: 0.3s
    -webkit-transition-property: top, right, bottom, left
    transition-property: top, right, bottom, left


  &:hover
    text-decoration: none

    &:before
      top: -8px
      right: -8px
      bottom: -8px
      left: -8px


</style>
