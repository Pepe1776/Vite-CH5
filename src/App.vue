<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Aevio CH5',
  meta: [
    { name: 'description', content: 'Crestron UI' },
  ],
})
</script>

<template>
  <router-view />
</template>

<styles lang="scss">
html {
  font-size: 10px;
}
</styles>
