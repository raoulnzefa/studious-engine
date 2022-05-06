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
    <main class="pt-10 pb-12 pl-20">
      <button>
        <ArrowLeftIcon />
      </button>
      <div class="flex">
        <div class="flex flex-col w-1/2">
          <div class="max-w-md">
            <div class="flex items-center text-sm pt-9">
              <span class="text-gray-900/40">Chair&nbsp;</span>
              <span>/ Meryl Lounge Chair</span>
            </div>
            <div class="pt-10">
              <h1 class="text-4xl font-bold tracking-wide">Meryl Lounge Chair</h1>
            </div>
            <div class="flex items-center justify-between pt-4">
              <span class="text-3xl">$1449.99</span>
              <div>
                <div class="flex space-x-px">
                  <StarIcon v-for="i in 5"/>
                </div>
                <div>
                  4.9 / 5.0 <span class="text-gray-900/40">(556)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import Logo from './assets/img/logo.svg'
import MenuIcon from './assets/img/menu.svg'
import SearchIcon from './assets/img/search.svg'
import CartIcon from './assets/img/cart.svg'
import ArrowLeftIcon from './assets/img/arrow-left.svg'
import StarIcon from './assets/img/star.svg'

const menu = ['shop', 'collections', 'new arrival', 'customers']
</script>

<style scoped>

</style>
