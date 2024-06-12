<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <input type="text" v-model="msg">
  <!-- 开始录制  -->
  <button @click="start">开始录制</button>
  <!-- 结束录制  -->
  <button @click="stop">结束录制</button>
  <!-- 播放录制  -->
  <button @click="play">播放录制</button>

  <!-- file input -->
  <input type="file" @change="fileChange" />
  <img :src="imgUrl" alt="">


  <div class="replay"></div>
</template>

<script>
import { startRecording,stopRecording,playRecording } from '@/test';
import HelloWorld from './components/HelloWorld.vue'
import rrwebPlayer from 'rrweb-player';
import 'rrweb-player/dist/style.css';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      msg: 'Hello World',
      imgUrl: ''
    }
  },
  methods: {
    start() {
      startRecording();
    },
    stop() {
      stopRecording();
    },
    play() {
      playRecording(rrwebPlayer, document.querySelector('.replay'));
    },
    fileChange(e) {
      // 获取文件
      const file = e.target.files[0];
      // file 转为 url
      this.imgUrl = URL.createObjectURL(file);

    }
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
