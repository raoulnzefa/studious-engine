<template>
  <div class="font-sans text-gray-900">
    <header class="flex items-center border-b border-gray-900/20">
      <a href="#">
        <Logo/>
      </a>
      <nav class="flex items-center space-x-10 text-sm font-medium text-gray-900">
        <a v-for="item in menu" href="#">{{ item }}</a>
      </nav>
    </header>
  </div>
</template>

<script setup>
import Logo from './assets/img/logo.svg'

const menu = ['shop', 'collections', 'new arrival', 'customers']
</script>

<style scoped>

</style>
