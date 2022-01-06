<script lang="ts">
export default {
  name: 'Card',
}
</script>

<template>
  <div class="nav">
    <router-link
      whh-home
      to="LivingRoom"
      class="btm icon-btn mx-2"
      width="75px"
      height="75px"
      label="Living Room"
    >
      <whh-home class="btm icon-btn mx-2" width="75px" height="75px" label="Home" />
    </router-link>
    <router-link to="Kitchen" class="btm icon-btn mx-2" width="75px" height="75px" label="Kitchen">
      <whh-circlefork class="btm icon-btn mx-2" width="75px" height="75px" />
    </router-link>
    <router-link to="Bedroom" class="btm icon-btn mx-2" width="75px" height="75px" label="Bedroom">
      <whh-bed class="btm icon-btn mx-2" width="75px" height="75px" />
    </router-link>
    <router-link to="Theater" class="btm icon-btn mx-2" width="75px" height="75px" label="Theater">
      <whh-facetimevideo class="btm icon-btn mx-2" width="75px" height="75px" />
    </router-link>
    <router-link to="Office" class="btm icon-btn mx-2" width="75px" height="75px" label="Office">
      <whh-desklamp class="btm icon-btn mx-2" width="75px" height="75px" />
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
  left: -4%;
  margin-bottom: 60px;
  width: 100%;

}
.btm {
  margin-left: 70px;
   text-align: center;
}

  </style>
