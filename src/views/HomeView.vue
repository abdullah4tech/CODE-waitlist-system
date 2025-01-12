<script setup lang="ts">
import Logo from '@/assets/header_logo_2.png';
import ComputerGuy from '@/components/ComputerGuy.vue';
</script>

<template>
  <main class="flex h-screen">

    <!-- First Sidebar -->
    <div class="hidden bg-blue-50 md:flex flex-col gap-16 p-10 px-36 w-[50%] fixed h-screen">
      <img :src="Logo" class="w-28" alt="Logo">
      <div class="text-4xl">
        <h1 class="leading-[1.450]">Nothing fits? <br> Here's the waitlist.</h1>
        <h1></h1>
        <p class="pt-7 text-sm font-poppins w-96">Tell us what kind of home you need and we'll reach you when it becomes available.</p>
        <div>
          <ComputerGuy class="w-80 p-0 h-80 " />
        </div>
      </div>
    </div>

    <!-- Second Sidebar -->
    <div class="md:ml-[50%] p-6 md:p-10 w-full md:w-[48%] gap-12 md:gap-16 font-poppins flex flex-col overflow-y-auto">

      <!-- Header -->
      <div class="flex sm:flex-row items-center justify-between gap-4">
        <a href="#" class="hover:underline text-sm sm:text-base">FAQ</a>
        <button class="bg-black text-white text-xs sm:text-sm hover:opacity-85 active:opacity-75 px-4 py-2 sm:py-3 shadow-lg sm:w-auto">GO BACK HOME</button>
      </div>

      <!-- Input Fields -->
      <div class="flex flex-col gap-5">
        <p class="font-medium text-sm sm:text-base">What home do you need?</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-7 text-xs sm:text-sm">
          <div class="flex flex-col gap-2">
            <label class="text-sm" for="">Full Name</label>
            <input class="border px-3 text-sm h-10 w-full transition-all outline-none rounded focus:border-black" placeholder="John Doe" type="text">
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm" for="">Email Address</label>
            <input class="border px-3 text-sm h-10 w-full transition-all outline-none rounded focus:border-black" placeholder="example@email.com" type="email">
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm" for="">Phone Number</label>
            <input class="border px-3 text-sm h-10 w-full transition-all outline-none rounded focus:border-black" placeholder="123-456-7890" type="tel">
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm" for="">Address</label>
            <input class="border px-3 text-sm h-10 w-full transition-all outline-none rounded focus:border-black" placeholder="123 Main St" type="text">
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm" for="">City</label>
            <input class="border px-3 text-sm h-10 w-full transition-all outline-none rounded focus:border-black" placeholder="City" type="text">
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm" for="">State</label>
            <input class="border px-3 text-sm h-10 w-full transition-all outline-none rounded focus:border-black" placeholder="State" type="text">
          </div>
          <div class="flex flex-col col-span-1 sm:col-span-2 gap-2">
            <label class="text-sm" for="">Message</label>
            <textarea name="" class="border px-3 py-2 text-sm h-24 w-full outline-none rounded focus:border-black transition-all resize-none" placeholder="Enter your message"></textarea>
          </div>
        </div>
        <div class="flex items-start gap-2">
          <input id="check" class="h-4 w-4" type="checkbox">
          <label for="check" class="text-xs sm:text-sm select-none">Yes, I would like to receive emails and text messages with news from CODESL</label>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="flex items-center justify-center mb-5">
        <button class="bg-black hover:opacity-85 active:opacity-75 transition-all text-white text-xs sm:text-sm px-6 py-3 sm:px-9 sm:py-3 shadow-md">SUBMIT TO WAITLIST</button>
      </div>
    </div>

    </main>
</template>
