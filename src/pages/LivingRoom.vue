<template>
  <div class="living">
    <h1 class="text-8xl bl2">
      Living room
    </h1>
    <SideBar />
    <router-view />
  </div>
</template>

<script setup lang="ts">
</script>


<route lang="yaml">
meta:
  layout: home
</route>

<styles lang="scss" scoped>
.room {
  height: 55rem;
  width: 16rem;
  margin-left: 15rem;
  margin-top: 2rem;
  border: solid 5px;
  border-radius: 5rem;
}
h1 {
  font-family: "Prompt";
}
li {
  margin-top: 8rem;
}
</styles>
