<script setup>
import { ref } from 'vue'
import { useMouse } from '../../public/hooks/useMouse'


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../../public/service-worker.js')
    .then(() => {
      console.log('SW registered')
    })
    .catch(err=>{
      console.log('SW not registered',err);
      
    })
}


const count = ref(0)
</script>

<template>
  <div>
123
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
