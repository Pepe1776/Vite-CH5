<template>
  <div class="living">
    <h1 class="text-8xl bl2">
      Living room
    </h1>
    <div class="container grid-rows-3 gap-1.5rem">
      <ph-music-notes-light class="btm icon-btn row-span-1 " width="6.5rem" height="6.5rem" label="Music" />
      <ph-video-camera-light class="btm icon-btn row-span-1 " width="6.5rem" height="6.5rem" label="Video" />
      <ph-lightbulb-filament-light class="btm icon-btn row-span-1 " width="6.5rem" height="6.5rem" label="Lighting" />
    </div>
    <div class="room bl2" />
  </div>
</template>

<script setup lang="ts">

</script>

<route lang="yaml">
meta:
  layout: home
</route>

<styles lang="scss" scoped>
.container {
  overflow: hidden;
  position: fixed;
  width: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
}
.room {
  height: 55rem;
  width: 86rem;
  margin-left: 15rem;
  margin-top: 2rem;
  border: solid 5px;
}
.btm {
  margin-top: 4%;
  margin-left:5%;
  margin-bottom: 4%;
}
h1 {
  font-family: "Prompt";
}
</styles>
