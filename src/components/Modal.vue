<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal">
      <transition name="modal-animation-inner">
        <div v-show="modalActive" class="modal-inner">
          <ph-backspace-light class="icon-btn closer" type="button" @click="close" />
          <!-- modal content -->
          <slot />
          <button class="btn btn-closer" type="button" @click="close">
            Close
          </button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  props: ['modalActive'],
  setup(props: any, { emit }) {
    const close = () => {
      emit('close')
    }
    return { close }
  },
}
</script>

<style lang="scss" scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(.52, .02, .19, 1.02);
}
.modal-animation-leave-to,
.modal-animation-enter-from  {
  opacity: 0;
}
.modal-animation-leave-from {
  opacity: 1;
}

.modal-animation-inner-enter-active {
 transition: opacity 0.3s cubic-bezier(.52, .02, .19, 1.02) 0.15s;
}
.modal-animation-inner-leave-active {
 transition: opacity 0.3s cubic-bezier(.52, .02, .19, 1.02);
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-animation-inner-leave-to {
  transform: scale(0.8);
}

.modal {
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 23, 24, 0.589);
}
.modal-inner {
  position: relative;
  max-width: 65rem;
  height: 50rem;
  width: 80%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: rgba(0, 0, 0, 0.698);
  color: #01c9c9;
  padding: 6.4rem 1.6rem;

&:hover {
  color: #2b8383
}

}

.closer {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
}
.btn-closer {
  margin-top: 25rem;
}
</style>
