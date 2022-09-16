<template>
  <div class="layout">
    <Menu
      ref="menu"
      :list="list"
      @handleClick="handleClick"
      @increace="increace"
    ></Menu>

    <div class="content">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import Content from './Content/index.vue'
import Header from './Header/index.vue'
import Menu from './Menu/index.vue'
const list = reactive([1, 2, 3, 4])
const menu = ref(null)

const handleClick = (val: number) => {
  console.log(menu.value)
  list.push(val)
}

const increace = (val: number) => {
  list.unshift(val)
}
</script>

<style lang="less" scoped>
.layout {
  display: flex;
  height: 100%;
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>
