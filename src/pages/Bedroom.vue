<template>
  <div class="Bedroom">
    <h1 class="text-8xl bl2">
      Bedroom
    </h1>
    <div class="container grid-rows-3 gap-1.5rem">
      <ph-music-notes-light class="btm icon-btn row-span-1 " width="6.5rem" height="6.5rem" label="Music" />
      <ph-video-camera-light class="btm icon-btn row-span-1 " width="6.5rem" height="6.5rem" label="Video" />
      <ph-lightbulb-filament-light class="btm icon-btn row-span-1 " width="6.5rem" height="6.5rem" label="Lighting" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  overflow: hidden;
  position: fixed;
  width: 20rem;
  height: 50rem;
  left: 0;
  display: flex;
  flex-direction: column;

}
.btm {
  margin-top: 30%;
  margin-left:5%;
  margin-bottom: 4%;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
