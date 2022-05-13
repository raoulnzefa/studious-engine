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
              class="py-1 hover:border-b hover:border-rose-500 hover:pt-1.75 hover:border-gray-900 hover:text-rose-500"
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
              <span class="text-3xl">$1499.00</span>
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
                  class="w-5 h-5 rounded-full bg-teal-500 hover:ring-4 hover:ring-gray-900/20"
              />
              <button
                  class="w-5 h-5 rounded-full bg-[#545454] hover:ring-4 hover:ring-gray-900/20"
              />
              <button
                  class="w-5 h-5 rounded-full bg-rose-500 hover:ring-4 hover:ring-gray-900/20"
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
              <button
                  class="py-4 text-sm font-bold text-white uppercase bg-rose-500 rounded-sm px-14 hover:bg-rose-600">
                Add to cart
              </button>
            </div>
            <div class="pt-8">
              Limited edition • High-End Classic • Free 5-7 day shipping
            </div>
            <div class="flex items-center justify-between pt-12">
              <button class="flex items-center px-4 py-2 space-x-2 text-rose-500 hover:text-rose-600">
                <LikeIcon class="stroke-current"/>
                <span>Add to wishlist</span>
              </button>
              <div class="flex items-center space-x-6">
                <button>
                  <TwitterIcon class="w-5 h-5"/>
                </button>
                <button>
                  <InstagramIcon class="w-5 h-5"/>
                </button>
                <button>
                  <FacebookIcon class="w-5 h-5"/>
                </button>
                <button>
                  <PinterestIcon class="w-5 h-5"/>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="relative flex flex-col items-end w-1/2">
          <div class="flex items-start pr-20 space-x-2">
            <span class="text-3xl font-bold leading-tight">01&nbsp;</span>
            <span class="text-xl">/ 05</span>
          </div>
          <div class="flex pr-10 space-x-16">
            <button class="p-3">
              <ChevronLeftIcon/>
            </button>
            <button class="p-3">
              <ChevronRightIcon/>
            </button>
          </div>
          <img class="max-h-96 pt-5 pr-[200px]" src="./assets/img/1.jpg" alt="">
          <div
              class="absolute w-[440px] h-[250px] bg-gradient-to-r from-transparent to-rose-500/30 top-24 right-0"
          />
          <div class="flex pt-5 pr-[200px] space-x-4">
            <div
                v-for="i in 3"
                class="w-24 h-24 pl-1 border-2 cursor-pointer border-gray-900/10 hover:border-rose-500"
            >
              <img :src="`./src/assets/img/${i + 1}.jpg`" alt="">
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import {ref} from "vue"
import Logo from './assets/icons/logo.svg'
import MenuIcon from './assets/icons/menu.svg'
import SearchIcon from './assets/icons/search.svg'
import CartIcon from './assets/icons/cart.svg'
import ArrowLeftIcon from './assets/icons/arrow-left.svg'
import StarIcon from './assets/icons/star.svg'
import MinusIcon from './assets/icons/minus.svg'
import PlusIcon from './assets/icons/plus.svg'
import LikeIcon from './assets/icons/like.svg'
import TwitterIcon from './assets/icons/twitter.svg'
import InstagramIcon from './assets/icons/instagram.svg'
import FacebookIcon from './assets/icons/facebook.svg'
import PinterestIcon from './assets/icons/pinterest.svg'
import ChevronLeftIcon from './assets/icons/chevron-left.svg'
import ChevronRightIcon from './assets/icons/chevron-right.svg'

const menu = ['shop', 'collections', 'new arrival', 'customers']
const count = ref(1)
</script>

<style scoped>

</style>
