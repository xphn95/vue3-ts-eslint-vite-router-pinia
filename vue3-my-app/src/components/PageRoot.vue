<script setup>

</script>

<template>
  <div>
    <router-link to="/pagea">
      pageA
    </router-link>
    <router-link to="/pageb">
      pageB
    </router-link>
    <hr>
    <router-view />
    <router-view name="pageB" />
    <router-view name="pageC" />
  </div>
</template>
