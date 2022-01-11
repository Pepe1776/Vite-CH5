<template>
  <div class="container grid-rows-3 gap-1.5rem">
    <router-link to="rmm">
      <ph-music-notes-light class="btm icon-btn row-span-1 " width="6.5rem" height="6.5rem" label="Music" />
    </router-link>

    <router-link id="v1" to="rmv">
      <ph-video-camera-light class="btm icon-btn row-span-1 " width="6.5rem" height="6.5rem" label="Video" />
    </router-link>
    <router-link to="rml">
      <ph-lightbulb-filament-light class="btm icon-btn row-span-1 " width="6.5rem" height="6.5rem" label="Lighting" />
    </router-link>
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
