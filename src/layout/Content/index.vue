<template>
  <div class="content">
    <Suspense>
      <template #default>
        <A></A>
      </template>
      <template #fallback>
        <div>...加载中</div>
      </template>
    </Suspense>
  </div>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const A = defineAsyncComponent(() => import('../A/index.vue'))
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  height: 100%;
  background-color: red;
}
</style>
