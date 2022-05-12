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
            <MenuIcon/>
          </button>
          <button class="h-16 px-6">
            <SearchIcon/>
          </button>
        </div>
      </div>
      <button class="flex items-center justify-center h-16 px-6 border-l border-gray-900/20">
        <CartIcon/>
      </button>
    </header>
    <main class="pt-10 pb-12 pl-20">
      <button>
        <ArrowLeftIcon/>
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
              <div class="flex items-center">
                <div class="flex space-x-px">
                  <StarIcon v-for="i in 5"/>
                </div>
                <div class="pl-2 leading-none">
                  4.9 / 5.0 <span class="text-gray-900/40">(556)</span>
                </div>
              </div>
            </div>
            <p class="leading-relaxed pt-9">
              The gently curved lines accentuated by sewn details are kind to your body and pleasant to look at.
              Also, there’s a tilt and height-adjusting mechanism that’s built to outlast years of ups and downs.
            </p>
            <div class="flex pt-8 space-x-4">
              <button
                  class="w-5 h-5 rounded-full bg-[#58737d] hover:ring-4 hover:ring-gray-900/20"
              />
              <button
                  class="w-5 h-5 rounded-full bg-[#58737d] hover:ring-4 hover:ring-gray-900/20"
              />
              <button
                  class="w-5 h-5 rounded-full bg-[#545454] hover:ring-4 hover:ring-gray-900/20"
              />
              <button
                  class="w-5 h-5 rounded-full bg-[#cba5a5] hover:ring-4 hover:ring-gray-900/20"
              />
            </div>
            <div class="flex space-x-6 pt-9">
              <div class="flex items-center border rounded-sm border-gray-900/30">
                <button class="p-4" @click="count > 1 ? count-- : count">
                  <MinusIcon/>
                </button>
                <input
                    v-model="count"
                    type="text"
                    class="w-16 h-full text-center outline-none"
                />
                <button class="p-4" @click="count < 11 ? count++ : count">
                  <PlusIcon/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import {ref} from "vue"
import Logo from './assets/img/logo.svg'
import MenuIcon from './assets/img/menu.svg'
import SearchIcon from './assets/img/search.svg'
import CartIcon from './assets/img/cart.svg'
import ArrowLeftIcon from './assets/img/arrow-left.svg'
import StarIcon from './assets/img/star.svg'
import MinusIcon from './assets/img/minus.svg'
import PlusIcon from './assets/img/plus.svg'

const menu = ['shop', 'collections', 'new arrival', 'customers']
const count = ref(1)
</script>

<style scoped>

</style>
