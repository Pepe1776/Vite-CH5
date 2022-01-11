<template>
  <h1 class="text-8xl bl2">
   LR Lighting
  </h1>
  <SideBar id="sd" />
  <div class="room bl2">
    <ul class="vid1">
      <li class="text-5xl">
        <button class="icon-btn">
          Room Hi
        </button>
      </li>
      <li class="text-5xl">
        <button class="icon-btn">
          Room Med
        </button>
      </li>
      <li class="text-5xl">
        <button class="icon-btn">
          Room Low
        </button>
      </li>
      <li class="text-5xl">
        <button class="icon-btn">
          Scenes
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
// #sd {
//     margin-top: 6rem;
// }
</style>

<route lang="yaml">
meta:
  layout: home
</route>
