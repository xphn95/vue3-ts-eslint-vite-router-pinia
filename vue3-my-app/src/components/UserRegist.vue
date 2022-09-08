<script setup lang="ts">
import { data } from './data.json'
const msg = $ref('regist page')

// Const route = useRoute()
const router = useRouter()
// Console.log(history.state)
// const item = ref(history.state)

const { price } = defineProps<{
  name?: string,
  id?: number,
  price?: number
}>()
const dataItem = data.find(item => item.price === price)
console.log(dataItem)
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
  <div>{{ dataItem?.name }}</div>
  <div>{{ dataItem?.id }}</div>
  <div>{{ dataItem?.price }}</div>
  <br>
  <button @click="router.back">
    返回
  </button>
</template>
