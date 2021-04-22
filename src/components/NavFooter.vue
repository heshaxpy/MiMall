<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.mi.com/index.html" target="_blank">小米商城</a
      ><span>|</span>
      <a href="https://home.mi.com/index.html" target="_blank">米家</a
      ><span>|</span>
      <a href="https://xiaomi.tmall.com/" target="_blank">小米天猫店</a
      ><span>|</span>
      <a
        href="https://b.mi.com/?client_id=180100031058&masid=17409.0358#/"
        target="_blank"
        >小米政企服务</a
      ><span>|</span>
      <a
        href="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f516fe9e2c01.html"
        target="_blank"
        >小米儿童信息保护规则</a
      ><span>|</span
      ><a href="https://privacy.mi.com/all/zh_CN/" target="_blank"
        >小米隐私政策</a
      ><span>|</span>
      <a href="https://static.mi.com/feedback/" target="_blank">问题反馈</a>
    </div>
    <div class="copyright">
      Copyright ©2021
      <span class="domain">mi.futurefe.com</span>
      All Rights Reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-footer",
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";

.footer {
  height: 234px;
  border-top: 4px solid $colorA;
  background-color: $colorB;
  color: $colorD;
  font-size: $fontI;
  text-align: center;

  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;

    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }

  .footer-link {
    margin-bottom: 13px;
    a {
      color: $colorD;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
  }

  .copyright {
    .domain {
      color: $colorA;
    }
  }
}
</style>