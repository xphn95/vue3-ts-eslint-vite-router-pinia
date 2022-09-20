<script setup lang="ts">
let speed = $ref(1)
const bar = $ref<HTMLElement>()
const startLoading = () => {
	const dom = bar
	let timer = window.requestAnimationFrame(function fn () {
		if (speed < 90) {
			speed += 1
			dom.style.width = `${speed}%`
			timer = window.requestAnimationFrame(fn)
		} else {
			speed = 1
			window.cancelAnimationFrame(timer)
		}
	})
}

const endLoading = () => {
	const dom = bar
	const timer = setTimeout(() => {
		window.requestAnimationFrame(() => {
			speed = 100
			dom.style.width = `${speed}%`
			const timer = setTimeout(() => {
				dom.style.display = 'none'
				clearTimeout(timer)
			}, 600)
		})
		clearTimeout(timer)
	}, 500)
}

/* OnMounted(() => {
	startLoading()
	endLoading()
}) */

defineExpose({
	startLoading,
	endLoading
})
</script>

<template>
  <div
    fixed
    top-0
    w-full
    class="h-.5"
  >
    <div
      ref="bar"
      h-full
      w-0
      bg-blue-4
    />
  </div>
</template>
