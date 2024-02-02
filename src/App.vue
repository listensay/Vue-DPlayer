<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <p>123</p>
    <DPlayer ref="DPlayer"/>
    <button @click="stop">暂停</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import DPlayer from './components/DPlayer.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    DPlayer
  },
  methods: {
    stop() {
      this.$refs.DPlayer.dp.pause();
    }
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) {
        this.$refs.DPlayer.dp.pause();
      } else {
        this.$refs.DPlayer.dp.play();
      }
    });

    observer.observe(this.$refs.DPlayer.$el);

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
