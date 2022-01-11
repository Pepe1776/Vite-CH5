<template>
  <h1 class="text-8xl bl2">
    LR Video
  </h1>
  <SideBar id="se" />
  <div class="room bl2">
    <ul class="vid1">
      <li class="text-5xl">
        <button class="icon-btn">
          Direct TV
        </button>
      </li>
      <li class="text-5xl">
        <button class="icon-btn">
          Apple Tv
        </button>
      </li>
      <li class="text-5xl">
        <button class="icon-btn">
          Roku
        </button>
      </li>
      <li class="text-5xl">
        <button class="icon-btn">
          BlueRay
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
// #se {
//     margin-top: 6rem;
// }
</style>

<route lang="yaml">
meta:
  layout: home
</route>
