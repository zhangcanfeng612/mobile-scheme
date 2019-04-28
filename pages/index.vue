<template>
  <div :class="$style['component']">
    <img src="@/assets/image/01.png" alt="">
    <div :class="$style['component-item']">
      <img src="@/assets/image/02.png" alt="">
      <div :class="$style['component-item-button']">立即下载</div>
    </div>
    <img src="@/assets/image/03.png">
    <img src="@/assets/image/04.jpg">
    <img src="@/assets/image/05.png">
    <img src="@/assets/image/06.png">
    <img src="@/assets/image/07.jpg">
    <div class>
      <h1></h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    mounted () {
      console.error(this.$style);
    },
  };
</script>

<style lang="less" module>
  @svg 1px-border {
    width: 4px;
    height: 4px;
    @rect {
      fill: transparent;
      width: 100%;
      height: 100%;
      stroke-width: 25%;
      stroke: var(--color, black);
    }
  }

  .component {
    &-item {
      position: relative;

      &-button {
        position: absolute;
        top: 500px;
        left: 50%;
        transform: translate(-50%, 0);
        width:280px;
        height:80px;
        line-height: 80px;
        background:linear-gradient(90deg,rgba(214,19,63,1),rgba(240,158,84,1));
        border-radius:8px;
        font-size: 26px;
        color: #ffffff;
        text-align: center;
        border: 1px solid transparent;
        border-image: svg(1px-border param(--color #00b1ff)) 2 2 stretch;
      }
    }

    img {
      width: 100%;
    }
  }


  @svg 1px-border {
    height: 2px;
    @rect {
      fill: var(--color, black);
      width: 100%;
      height: 50%;
    }
  }


</style>
