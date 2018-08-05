<template>
  <div class="progress-bar">
      <i-progress :percent="precent" :status="status"></i-progress>
      <h2 class="title">2018年已过去95天</h2>
    </div>
</template>

<script>
export default {
  props: {
    precent: Number,
    status: {
      type: String,
      default: "active"
    }
  }
};
</script>

<style scoped lang="stylus">
.progress-bar
  .title
    text-align: center;
    font-size: 14px;

</style>