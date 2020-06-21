<template lang="pug">
  div
    SvgSprite
    TopBar
    Header(title="webdev" subtitle="html/css/js")
    main.main
      div.container
        div.back-link
          nuxt-link(no-prefetch to="/") &larr; back
        section.section
          h2.page-headline Static components for web apps and pages
          div.work
            div.row
              div.col-sm-12.col-md-6.col-lg-4(v-for="(project, index) in projects" :key="index")
                div.work__item
                  a.title(:href="`${project.url}`" target="_blank") {{project.title}}
                  a.img(:href="`${project.url}`",
                    :style="{backgroundImage: (project.imgUrl)}" target="_blank")
                  p {{project.description}}

          div.back-link
            nuxt-link(no-prefetch to="/") &larr; back
    Footer
</template>

<script>
  import SvgSprite from '~/components/SvgSprite';
  import TopBar from '~/components/TopBar';
  import Header from '~/components/Header';
  import Footer from '~/components/Footer';
  export default {
    //transition: 'bounce',
    head: {
      title: 'WebDev'
    },
    name: "webDev",
    components: {
      SvgSprite,
      TopBar,
      Header,
      Footer,
    },
    data() {
      return {
        projects: [
          { title: 'stmoritz.com',
            url: 'https://www.stmoritz.com/en/hotels/',
            description: 'Booking page - static components for ReactJs App (hotel card, filters, hero block, footer)',
            imgUrl: `url(${require('@/assets/img/stmoritz.png')})`
          },
          { title: 'engadin.ch',
            url: 'https://www.engadin.ch/en/hotels/',
            description: 'Booking page - static components for ReactJs App (hotel card, filters, hero block, footer)',
            imgUrl: `url(${require('@/assets/img/engadin.png')})`
          },
          { title: 'xiag.ch',
            url: 'https://www.xiag.ch/',
            description: 'Corporate website for International IT-Company on CMS WordPress',
            imgUrl: `url(${require('@/assets/img/xiag.png')})`
          },
          { title: 'grandorf',
            url: 'https://voronovam.bitbucket.io/grandorf_master/',
            description: 'Landing page - html/css/js',
            imgUrl: `url(${require('@/assets/img/grandorf.png')})`
          },
          { title: 'bezboli54.ru',
            url: 'http://bezboli54.ru/',
            description: 'Dental website - html/css/js',
            imgUrl: `url(${require('@/assets/img/bezboli.png')})`
          },
        ],
      }
    },
  }
</script>

<style scoped lang="sass">
.page-headline
  @include h2

.work
  &__item
    margin-bottom: 64px
    border-top: 1px solid $color-default
    padding: 14px
    transition: all .2s ease
    display: flex
    flex-direction: column

    &:hover
      border-color: $color-accent

      & a.title
        color: $color-accent


    & a.title
      text-align: center
      font-size: 18px
      margin-bottom: 24px


    & a.img
      display: block
      height: 250px
      background-repeat: no-repeat
      background-position: center
      background-size: cover


    & p
      margin-top: 14px

</style>
