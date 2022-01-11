<template>
  <div class="kitchen">
    <h1 class="text-8xl bl2">
      Kitchen
    </h1>
    <div class="container grid-rows-3 gap-1.5rem">
      <ph-music-notes-light class="btm icon-btn row-span-1 " width="6.5rem" height="6.5rem" label="Music" />
      <ph-video-camera-light class="btm icon-btn row-span-1 " width="6.5rem" height="6.5rem" label="Video" />
      <ph-lightbulb-filament-light class="btm icon-btn row-span-1 " width="6.5rem" height="6.5rem" label="Lighting" />
    </div>
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
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
