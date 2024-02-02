<template>
  <div class="myVideo">
      <div id="dplayer" ref="player" class="dplayer video-box"></div>
  </div>
</template>

<script>
import Hls from "hls.js";
import DPlayer from "dplayer";
/*
npm i dplayer -S // 视频播放器插件
npm i hls.js -S  // 播放hls流插件
*/
export default {
  data() {
    return {
      dp: null,
      videoInfo: {
        img: "https://cn.bing.com/th?id=OHR.MeotoIwa_ZH-CN3126370410_1920x1080.jpg&rf=LaDigue_1920x1080.jpg", // 视频封面
        url: "https://customer-x89dpgudcc728vbd.cloudflarestream.com/775cfc40855a745cc5e5b66c9d8cc71a/manifest/video.m3u8", // 播放视频的路径'
      },
    };
  },
  created() {
    this.$nextTick(() => {
      this.loadVideo(this.videoInfo);
    });
  },
  methods: {
    loadVideo(videoInfo) {
      this.dp = new DPlayer({
        element: this.$refs.player,
        loop: false,
        live: true,
        autoplay: true,  // 自动播放
        volume: 0,
        video: {
          pic: videoInfo.img, // 封面
          url: videoInfo.url,
          type: "customHls",
          customType: {
            customHls: function (video) {
              const hls = new Hls();
              hls.loadSource(video.src);
              hls.attachMedia(video);
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
.video-box {
  width: 100%;
  max-width: 500px;
  max-height: 500px;
}
</style>
