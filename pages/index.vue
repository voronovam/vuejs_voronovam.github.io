<template lang="pug">
  div
    SvgSprite
    div.header-wrap
      TopBar
      Header(spanText="i do" title="frontend" subtitle="websites and mobile apps")
    main.main
      Projects
      div.container
        hr.separator
      About
      div.container
        hr.separator
      Contact
    Footer
</template>

<script>
import SvgSprite from '~/components/SvgSprite'
import TopBar from '~/components/TopBar'
import Header from '~/components/Header'
import Projects from '~/components/Projects'
import About from '~/components/About'
import Contact from '~/components/Contact'
import Footer from '~/components/Footer'
export default {
  components: {
    SvgSprite,
    TopBar,
    Header,
    Projects,
    About,
    Contact,
    Footer,
  }
}
</script>

<style lang="sass">
.header-wrap
  background-image: radial-gradient(circle at bottom right, $color-additional, $color-dark)
  min-height: 100vh
  display: flex
  flex-direction: column
</style>

