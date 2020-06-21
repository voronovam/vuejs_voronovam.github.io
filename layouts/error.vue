<template lang="pug">
    div.er404
      div.container.er404__body
        div.er404__w ¯\_(ツ)_/¯
        nuxt-link(to="/").er404__link на главную
</template>

<script>
    export default {
      name: "error",
    }
</script>

<style scoped lang="sass">
.er404
  background: #5A3D5C
  color: #fff
  &__body
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    height: 100vh
  &__w
    font-size: 5rem
  &__link
    margin-top: 20px
    font-size: 1.5rem
    &:hover
      text-decoration: underline

</style>
