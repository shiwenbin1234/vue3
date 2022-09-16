<template>
  <div class="menu">
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
    <button @click="clickTap">增加</button>
    <button @click="increace">减少</button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
type Prop = {
  list?: number[]
}
const name = ref('名字')
// defineProps<Prop>()
withDefaults(defineProps<Prop>(), {
  list: () => [],
})

const emit = defineEmits(['handleClick', 'increace'])

const clickTap = () => {
  emit('handleClick', 6)
}

const increace = () => {
  emit('increace', 8)
}
defineExpose({
  name,
})
</script>

<style lang="less" scoped>
.menu {
  height: 100%;
  width: 300px;
  background-color: pink;
}
</style>
