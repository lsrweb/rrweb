<script setup>
import axios from 'axios';
import rrwebPlayer from 'rrweb-player';
import 'rrweb-player/dist/style.css';
let events = [];

axios({
  method: "post",
  url: "http://localhost:5000/retrieve",
  data: {
    key: 'kagfdsgkfagsfh',
  },

}).then((res) => {
  events = res.data;
});


 const playRecording = () => {
  setTimeout(() => {
    new rrwebPlayer({
      target:document.querySelector('.player'),
      // 配置项
      props: {
        events,
      },
    });
  }, 1);
};

</script>

<template>
  <button @click="playRecording">开始</button>
  <div class="player">

  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
