<script setup lang="ts">
const msg = $ref('regist page')

// Const route = useRoute()
const router = useRouter()
// Console.log(history.state)
// const item = ref(history.state)
const props = defineProps<{
  name: string,
  id: string,
  price: string
}>()
</script>

<template>
  <div>
    {{ msg }}
  </div>
  <!-- <div>{{ route.query.name }}</div>
  <div>{{ route.query.price }}</div>
  <div>{{ route.query.id }}</div> -->
  <!-- <div>{{ item.name }}</div>
  <div>{{ item.id }}</div>
  <div>{{ item.price }}</div> -->
  <!-- <div>{{ route.params.name }}</div>
  <div>{{ route.params.id }}</div>
  <div>{{ route.params.price }}</div> -->
  <div>{{ props.name }}</div>
  <div>{{ props.id }}</div>
  <div>{{ props.price }}</div>
  <br>
  <button @click="router.back">
    返回
  </button>
</template>
