<template>
  <!-- Page Preloder -->
  <div id="preloder">
    <div class="loader"></div>
  </div>

  <HeaderView />
  <SliderView />
  <ContentView />
  <FooterView />
</template>

<script>
import HeaderView from './components/Header.vue'
import SliderView from './components/Slider.vue'
import ContentView from './components/Content.vue'
import FooterView from './components/Footer.vue'

export default {
  components: {
    HeaderView,
    SliderView,
    ContentView,
    FooterView
  },
  mounted() {
    let main1 = document.createElement('script')
    let main2 = document.createElement('script')
    let main3 = document.createElement('script')
    let main4 = document.createElement('script')
    let main5 = document.createElement('script')
    let main6 = document.createElement('script')
    let main7 = document.createElement('script')
    let main8 = document.createElement('script')
    main1.setAttribute('src', 'js/jquery-3.3.1.min.js')
    main2.setAttribute('src', 'js/bootstrap.min.js')
    main3.setAttribute('src', 'js/player.js')
    main4.setAttribute('src', 'js/jquery.nice-select.min.js')
    main5.setAttribute('src', 'js/mixitup.min.js')
    main6.setAttribute('src', 'js/jquery.slicknav.js')
    main7.setAttribute('src', 'js/owl.carousel.min.js')
    main8.setAttribute('src', 'js/main.js')
    document.body.appendChild(main1)
    document.body.appendChild(main2)
    document.body.appendChild(main3)
    document.body.appendChild(main4)
    document.body.appendChild(main5)
    document.body.appendChild(main6)
    document.body.appendChild(main7)
    document.body.appendChild(main8)
  },
}
</script>

<style>

</style>
