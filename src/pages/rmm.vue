<template>
  <h1 class="text-8xl bl2">
    LR Music
  </h1>
  <SideBar id="sf" />
  <div class="room bl2">
    <ul class="vid1">
      <li class="text-5xl">
        <button type="button" class="icon-btn" @click="toggleModal">
          Spotify
        </button>
      </li>
      <li class="text-5xl">
        <button class="icon-btn" type="button" @click="toggleModal">
          Apple Music
        </button>
      </li>
      <li class="text-5xl">
        <button class="icon-btn" type="button" @click="toggleModal">
          Pandora
        </button>
      </li>
      <li class="text-5xl">
        <button class="icon-btn" type="button" @click="toggleModal">
          Direct Tv
        </button>
      </li>
    </ul>
  </div>
  <div class="music">
    <Modal :modal-active="modalActive" @close="toggleModal">
      <div class="modal-content grid-cols-5 gap-1.5rem">
        <h1 class="text-7xl">
          Source 1
        </h1>
        <button class="btn col-span-1 mr-10 mt-20">
          Button
        </button>

        <button class="btn col-span-1 mr-10 mt-20">
          Button
        </button>

        <button class="btn col-span-1 mr-10 mt-20">
          Button
        </button>

        <button class="btn col-span-1 mr-10 mt-20">
          Button
        </button>

        <button class="btn col-span-1 mr-10 mt-20">
          Button
        </button>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Modal from '../components/Modal.vue'
export default {
  name: 'Music',
  components: {
    Modal,
  },
  setup() {
    const modalActive = ref(false)

    const toggleModal = () => {
      modalActive.value = !modalActive.value
    }

    return { modalActive, toggleModal }
  },
}
</script>

<style lang="scss" scoped>
.music {
// background-color: rgba(0, 176, 234, 0.5);
height: 100vh;
}
.model-content {
  display: flex;
  flex-direction: column;
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
