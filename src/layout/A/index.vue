<template>
  <div>
    <div v-for="(item, index) in res" :key="index">{{ item.name }}</div>
  </div>
</template>
<script setup lang="ts">
import { axios } from './test'
const res = await axios('./data.json')
console.log(res)
</script>

<style lang="less" scoped></style>
