<script setup lang="ts">
import { ref } from 'vue'

const isVisible = ref<boolean>(false)
</script>

<template>
  <section class="font-poppins flex justify-center items-center h-screen">
    <div class="w-[25%] p-9 border border-gray-600">
      <div class="mb-5 flex flex-col gap-2">
        <h1 class="text-7xl">Login</h1>
        <p class="text-xs text-slate-700">Welcome back!</p>
      </div>
      <form action="">
        <div class="flex flex-col gap-5">
          <div class="flex flex-col gap-2">
            <label class="text-sm" for="">Username</label>
            <input
              class="border px-3 text-sm h-10 w-full transition-all outline-none rounded focus:border-black"
              placeholder="guest"
              type="text"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm" for="">Password</label>
            <input
              class="border px-3 text-sm h-10 w-full transition-all outline-none rounded focus:border-black"
              placeholder="-------------"
              :type="isVisible ? 'text' : 'password'"
            />
          </div>
          <div class="select-none text-xs flex items-center space-x-1">
            <input id="show_pwd" v-model="isVisible" type="checkbox" />
            <label for="show_pwd">Show password</label>
          </div>
        </div>
        <button type="submit" class="mt-5 left-full bg-black text-white p-2 px-5">Login</button>
      </form>
    </div>
  </section>
</template>
