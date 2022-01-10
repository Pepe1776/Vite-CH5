<script lang="ts">
export default {
  name: 'Card',
}
</script>

<template>
  <div class="nav grid-cols-5 gap-1.5rem">
    <router-link
      to="LivingRoom"
      class="btm icon-btn "
      label="Living Room"
    >
      <ph-house-line-light class="btm icon-btn col-span-1 " width="6.5rem" height="6.5rem" label="Home" />
    </router-link>
    <router-link to="Kitchen" class="btm icon-btn " width="6.5rem" height="6.5rem" label="Kitchen">
      <ph-fork-knife-light class="btm icon-btn col-span-1 " width="6.5rem" height="6.5rem" />
    </router-link>
    <router-link to="Bedroom" class="btm icon-btn " width="6.5rem" height="6.5rem" label="Bedroom">
      <ph-bed-light class="btm icon-btn col-span-1" width="6.5rem" height="6.5rem" />
    </router-link>
    <router-link to="Theater" class="btm icon-btn " width="6.5rem" height="6.5rem" label="Theater">
      <ph-film-slate-light class="btm icon-btn col-span-1 " width="6.5rem" height="6.5rem" />
    </router-link>
    <router-link to="Office" class="btm icon-btn " width="6.5rem" height="6.5rem" label="Office">
      <ph-printer-light class="btm icon-btn col-span-1 " width="6.5rem" height="6.5rem" />
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.nav {
  overflow: hidden;
  position: fixed;
  bottom: 0;
  margin-bottom: 20px;
  width: 100%;

}
// .btm {
//   margin-left: 50px;
//    text-align: center;
//    display: inline-block;
// }
.btm {
  margin-left:5%;
  margin-right:5%;
}

  </style>
