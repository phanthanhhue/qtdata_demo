<template>
  <div class="the-footer">
    <div class="the-footer-content">
      <div class="content-widget">
        <span class="widget-img">
          <img src="https://secureservercdn.net/198.71.233.68/3xf.d8b.myftpupload.com/wp-content/uploads/2020/03/logo_qtgroup_004.png" alt="">
        </span>
        <p class="widget-copy-right">
          <span>Copyright © 2020 <a>QT-Group.</a></span>
          <span>Canada.</span>
          <span>All rights reverved.</span>
        </p>
      </div>
      <div class="content-category">
        <h3>Categories</h3>
          <ul>
            <li tag="none" to="/">Adventure</li>
            <li tag="none" to="/">Food For Thought</li>
            <li tag="none" to="/">Office</li>
            <li tag="none" to="/">Uncategorized</li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TheFooter',
  }
</script>

<style lang="scss" scoped>
  .the-footer {
    .widget-copy-right {
      span {
        display: block;
      }
    }
  }

</style>