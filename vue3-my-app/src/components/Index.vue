<script setup>
const msg = $ref('hello Index')

</script>

<template>
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
</template>
