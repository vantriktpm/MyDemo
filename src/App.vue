<template>
  <div class="container">
    <HeaderView />
    <SliderView />
  </div>
</template>

<script>
import HeaderView from './components/Header.vue'
import SliderView from './components/Slider.vue'

export default {
  components: {
    HeaderView,
    SliderView
  }
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #0B0C2A;
  width: max-width;
}

.container {
  width: 100%;
  background-color: #0B0C2A;
}
</style>
