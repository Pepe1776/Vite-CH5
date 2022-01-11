<template>
  <h1 class="text-8xl bl2">
   LR Music
  </h1>
  <SideBar id="sf" />
  <div class="room bl2">
    <ul class="vid1">
      <li class="text-5xl">
        <button class="icon-btn">
          Spotify
        </button>
      </li>
      <li class="text-5xl">
        <button class="icon-btn">
          Apple Music
        </button>
      </li>
      <li class="text-5xl">
        <button class="icon-btn">
          Pandora
        </button>
      </li>
      <li class="text-5xl">
        <button class="icon-btn">
          Direct Tv
        </button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
// #sf {
//     margin-top: 6rem;
// }
</style>

<route lang="yaml">
meta:
  layout: home
</route>
