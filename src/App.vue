<template>
  <div class="font-sans text-gray-900">
    <header class="flex items-center border-b border-gray-900/20">
      <div class="flex items-center justify-between flex-1 pl-20 pr-4">
        <a href="#">
          <Logo/>
        </a>
        <nav class="flex items-center space-x-10 text-sm font-medium text-gray-900 uppercase">
          <a
              href="#"
              v-for="item in menu"
              class="py-1 hover:border-b hover:border-gray-900"
          >
            {{ item }}
          </a>
        </nav>
        <div class="flex items-center">
          <button class="h-16 px-6">
            <MenuIcon />
          </button>
          <button class="h-16 px-6">
            <SearchIcon />
          </button>
        </div>
      </div>
      <button class="flex items-center justify-center h-16 px-6 border-l border-gray-900/20">
        <CartIcon />
      </button>
    </header>
    <main>
      
    </main>
  </div>
</template>

<script setup>
import Logo from './assets/img/logo.svg'
import MenuIcon from './assets/img/menu.svg'
import SearchIcon from './assets/img/search.svg'
import CartIcon from './assets/img/cart.svg'

const menu = ['shop', 'collections', 'new arrival', 'customers']
</script>

<style scoped>

</style>
