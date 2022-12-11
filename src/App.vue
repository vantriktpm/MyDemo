<template>
  <!-- Page Preloder -->
  <!-- <div id="preloder">
    <div class="loader"></div>
  </div> -->

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
  }
}
</script>

<style>

</style>
