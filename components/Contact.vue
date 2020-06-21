<template lang="pug">
  section#contact.contact.section
    div.container
      div.row
        div.col-lg-6
          div.section__description
            h2.headline {{title}}
            p Ask me anitime by telegram or by email voronova.dev@gmail.com &rarr;

        div.col-lg-4.offset-lg-1
          div#form.contact-form
            div.contact-form__title ask a question

            mixin svg(svg_url, svg_id)
              if svg_id
                svg()&attributes(attributes)
                  use(xlink:href= svg_url + '#' + svg_id)
              else
                svg()&attributes(attributes)
                  use(xlink:href= svg_url)
            div.contact-form__link
              a(href="https://t.me/voronovacom" target="_blank")
                +svg("","telegram")(class="icon")
            div.contact-form__link
              a(href="mailto:voronova.dev@gmail.com?subject=Important!&body=WebDev" target="_blank")
                +svg("","email")(class="icon")

</template>

<script>
    export default {
        name: "Contact",
      data(){
          return {
            title: 'contact',
          }
      }
    }
</script>

<style scoped lang="sass">
.contact-form
  text-align: center

  @media (max-width: $phone)
    margin-top: 84px

  &__title
    text-transform: uppercase
    text-align: center
    font-size: 28px
    font-weight: 700
    margin-bottom: 60px

  &__item
    margin-bottom: 30px

    & .input
      border-bottom: 2px solid $color-default
      position: relative

    & input[type="text"],
    & input[type="email"]
      position: relative
      width: 100%
      color: $color-default
      padding: 16px
      border: none
      background: transparent

      @mixin placeholder
        &::placeholder
          @content

        &:-ms-input-placeholder
          @content

        &::-ms-input-placeholder
          @content


      @mixin placeholder-style
        opacity: 1
        transition: opacity 0.3s ease
        color: lighten($color-default, 50%)
        font-style: normal


      @mixin placeholder-style-focus
        opacity: 0
        transition: opacity 0.3s ease


      @include placeholder
        @include placeholder-style


      &:focus
        @include placeholder
          @include placeholder-style-focus


    & textarea
      border: 2px solid $color-default
      width: 100%
      resize: vertical
      padding: 16px
      color: $color-default

      @mixin placeholder
        &::placeholder
          @content

        &:-ms-input-placeholder
          @content

        &::-ms-input-placeholder
          @content


      @mixin placeholder-style
        opacity: 1
        transition: opacity 0.3s ease
        color: lighten($color-default, 50%)
        font-style: normal


      @mixin placeholder-style-focus
        opacity: 0
        transition: opacity 0.3s ease


      @include placeholder
        @include placeholder-style


      &:focus
        @include placeholder
          @include placeholder-style-focus


  & .btn-form
    background: $color-default
    color: #fff
    text-transform: uppercase
    width: 100%
    padding: 16px
    transition: all .2s ease

    &:hover
      background: $color-dark


    &:disabled
      opacity: .5


  &__link
    display: inline-flex
    margin: 0 1rem 60px

    & a
      display: block

      & svg
        width: 3rem
        height: 3rem
        transition: all .2s ease


      &:hover
        text-decoration: none

        & svg
          color: $color-accent




</style>
