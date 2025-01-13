<script setup lang="ts">
import Logo from '@/assets/header_logo_2.png';
</script>

<template>
  <section class="font-poppins flex h-screen text-indigo-100">
    <!-- Sidebar -->
    <div class="w-72 flex flex-col items-baseline p-12">
      <img class="w-22 pb-10" :src="Logo" alt="header_logo">
      <div class="flex m-5 flex-col gap-16 w-full">
        <div class="flex flex-col gap-2 w-full">
          <h1 class="text-2xl">Dashboard</h1>
          <a class="hover:font-semibold" href="#">Users waitlist</a>
          <a class="hover:font-semibold" href="#">Called users</a>
          <a class="hover:font-semibold" href="#">Historys</a>
        </div>
        <div class="flex flex-col gap-2 w-full">
          <h1 class="text-2xl">Support</h1>
          <a class="hover:font-semibold flex-wrap" href="#">Having some issues?</a>
          <a class="hover:font-semibold" href="#">Feedback</a>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-[20px]">
      <div class="flex justify-between m-5 mb-10">
        <h2 class="text-xl">Welcome back! John Deo</h2>
        <button class="topup">Top up</button>
      </div>
      <div class="w-full h-96 rounded-3xl overflow-auto p-10" style="background-color: rgba(42, 42, 66, 0.4);">
        <div class="flex items-center justify-between">
          <h2 class="text-3xl pb-5">Usage history</h2>
          <button>Refresh</button>
        </div>
        <p class="font-light">No data available</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background: rgb(67,67,87);
  background: linear-gradient(120deg, rgba(35, 35, 58, 1) 0%, rgba(34, 48, 29, 1) 50%, rgba(35, 35, 58, 1) 100%);
}
</style>
