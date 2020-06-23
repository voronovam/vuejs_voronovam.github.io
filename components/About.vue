<template lang="pug">
  section#about.about.section
    div.container
      div.row
        div.col-sm-12.col-lg-6
          div.section__description
            h2.headline {{title}}
            div
              p(v-html="text" ) {{text}}}
              p {{textTitle}}
              ul
                li(v-for="(t, index) in tech" :key="index") {{t.item}}

        div.col-sm-12.col-lg-6.order-lg-first
          div.about__photo(:style="photo")

</template>

<script>
    export default {
      name: "About",
      data(){
          return {
            title: 'about',
            text: 'Hi! My name is Marina. <br> My main line of work is frontend - layout of components and pages. <br> Most often I implement the interface by ready-made design layouts, but sometimes I create the design from scratch (by Figma). And I also draw illustrations in Adobe Illustrator. <br> There is little experience in creating screens for mobile application for iOS and Android by Flutter (just for fun).',
            textTitle: 'The tools and technologies that I use in my work:',
            photo: {
              backgroundImage: `url(${require('@/assets/img/img.png')})`
            },
            tech: [
              { id: 1, item: 'Npm, Gulp, Sass, Pug;' },
              { id: 2, item: 'Vue.js, Nuxt.js, Bootstrap(bootstrap.vue.js);' },
              { id: 3, item: 'WordPress, October Cms, Magento 1&2.' },
            ]
          }
      }
    }
</script>

<style scoped lang="sass">
.about
  &__photo
    min-height: 300px
    width: 100%
    background-repeat: no-repeat
    background-size: cover
    background-position: center
    margin-bottom: 64px

    @media (max-width: $phone)
      margin-top: 64px


    @media (min-width: $tablet-portrait)
      min-height: 460px
      margin-bottom: unset

  ul li
    margin-bottom: 1rem
</style>
