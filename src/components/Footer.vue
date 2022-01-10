<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav class="flex justify-center text-xl mt-6 footer">
    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button>
    <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
      <carbon-campsite />
    </router-link>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/pepe1776" target="_blank" title="GitHub">
      <carbon-logo-github />
    </a>
    <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
      <carbon-language />
    </a>
  </nav>
</template>

  <styles lang="scss">
    .footer {
      position: fixed;
      bottom: 0px;
      display: flex;
      width: 100%;
      margin-bottom: 10px;
    }

  </styles>
