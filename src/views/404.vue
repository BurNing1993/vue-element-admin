<template>
  <div :gutter="10" class="container">
    <div class="no-found-img">
      <img src="https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg" alt="not found">
    </div>
    <div class="no-found-text">
      <div class="text">
        <h2>404</h2>
      </div>
      <div class="desc">抱歉，你访问的页面不存在 !</div>
      <div class="home">
        <router-link to="/">
          <el-button type="primary" plain>返回首页</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404',
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-content: center;
  justify-content: center;
  height: 100vh;
  flex-wrap: wrap;
  margin-top:-20px;
  .no-found-img {
    padding-right: 20px;
    flex-shrink:0;
  }
  .no-found-text {
    .text {
      color: #434e59;
      font-size: 72px;
      font-weight: 600;
      line-height: 72px;
      margin-bottom: 24px;
    }
    .desc {
      color: rgba(0, 0, 0, 0.45);
      font-size: 20px;
      line-height: 28px;
      margin-bottom: 16px;
    }
  }
}
</style>
