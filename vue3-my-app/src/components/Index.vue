<script setup>
const msg = $ref('hello Index')

</script>

<template>
  <div>
    <div
      mb-100
      mt-100
      bg-black
      h-25
    >
      hello router
    </div>
    <div
      id="message"
      mb-1000
    >
      {{ msg }}
    </div>
    <router-link :to="{ name: 'Demo1' }">
      demo1
    </router-link>
    <router-link :to="{ name: 'Demo2' }">
      demo2
    </router-link>
    <router-link :to="{ name: 'Demo3' }">
      demo3
    </router-link>
  </div>
</template>
