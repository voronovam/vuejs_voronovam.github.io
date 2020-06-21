<template lang="pug">
  section#projects.projects.section
    div.container
      div.row
        div.col-lg-6
          div.section__description
            h2.headline {{title}}
            p This is where you can see the projects I've been involved in &rarr;

        div.col-lg-6
          div.projects__box
            div(v-if="project.disabled"
              v-for="(project, index) in projects"
              :key="index" ).projects__item.disabled {{project.name}}
            nuxt-link(no-prefetch :to='`/${project.url}`' v-else).projects__item {{project.name}}
</template>

<script>
    export default {
      name: "Projects",
      data() {
        return {
          title: 'projects',
          projects: [
            { name: 'webdev', url: 'webdev', disabled: false},
            { name: 'web design', url: '', disabled: true},
            { name: 'graphic design', url: '', disabled: true},
            { name: 'vector illustration', url: '', disabled: true},
          ],
        }
      },
    }
</script>

<style scoped lang="sass">
.projects
  &__box
    display: flex
    flex-direction: row
    flex-wrap: wrap
    justify-content: space-between
    @media (max-width: $phone)
      margin-top: 64px


  &__item
    position: relative
    border: 1px solid $color-dark
    background: #fff
    margin-bottom: 30px
    text-transform: uppercase
    font-size: 18px
    text-align: center
    min-height: 100px
    display: flex
    align-items: center
    justify-content: center
    padding: 14px
    font-weight: 700
    flex: 100%
    transition: all .3s ease

    @media (max-width: $desktop)
      word-break: break-word
      font-size: 16px

    @media (min-width: $tablet-portrait)
      flex: 0 0 calc(50% - 15px)
      min-height: 255px


    &:before
      content: '['
      margin-right: 10px
      transform: translateX(20px)


    &:after
      margin-left: 10px
      content: ']'
      transform: translateX(-20px)


    &:before,
    &:after
      display: inline-block
      opacity: 0
      transition: transform 0.3s, opacity 0.2s


    &:hover
      background: $color-additional
      color: #fff
      text-decoration: none

      &:before, &:after
        opacity: 1
        transform: translateX(0px)


    &.disabled
      opacity: .5


</style>
