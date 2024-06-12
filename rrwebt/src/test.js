import axios from "axios";

const rrweb = require("rrweb");
let events = [];
let stopFn = null;

// 创建一个代理来监听 events 的变化
events = new Proxy(events, {
  set(target, property, value) {
    console.log("events changed:", property, value);
    target[property] = value;
    return true;
  },
});


export const startRecording = () => {
  stopFn = rrweb.record({
    emit(event) {
      axios({
        method: "post",
        url: "http://localhost:5000/store",
        data: {
          key: 'kagfdsgkfagsfh',
          event,
        },
      }).then((res) => {
        events.push(res.data.event);
      });
    },
  });
};

axios({
  method: "post",
  url: "http://localhost:5000/retrieve",
  data: {
    key: 'kagfdsgkfagsfh',
  },

}).then((res) => {
  events = res.data.events;
});

export const stopRecording = () => {
  if (stopFn) {
    stopFn();
    stopFn = null;
  }
};

// 播放录制的事件
export const playRecording = (rrwebPlayer, target) => {
  stopRecording();
  setTimeout(() => {
    new rrwebPlayer({
      target,
      // 配置项
      props: {
        events,
      },
    });
  }, 1);
};
