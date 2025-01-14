<script setup lang="ts">
import Logo from '@/assets/header_logo_2.png'
</script>

<template>
  <section class="font-poppins flex h-screen text-indigo-100">
    <!-- Sidebar -->
    <div class="w-72 flex flex-col items-baseline p-12">
      <img class="w-22 pb-10" :src="Logo" alt="header_logo" />
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
    <div class="flex-1 p-5">
  <!-- Header Section -->
  <div class="flex justify-between items-center mb-10">
    <h2 class="text-xl font-bold">Welcome Back, John Doe!</h2>
    <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
      Top Up
    </button>
  </div>

  <!-- Waitlist Section -->
  <div
    class="w-full h-96 rounded-3xl overflow-auto p-6 bg-opacity-40 bg-gray-700 shadow-lg"
  >
    <div class="flex items-center border-b pb-3 justify-between mb-4">
      <h2 class="text-2xl font-semibold">Waitlist</h2>
      <button class="text-blue-500 hover:text-blue-600 transition">
        Refresh
      </button>
    </div>

    <!-- Waitlist Items -->
    <div class="space-y-4">
      <!-- Single Waitlist Entry -->
      <div
        class="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-sm"
      >
        <div>
          <p class="font-medium text-slate-900">James Brima</p>
          <p class="text-sm text-gray-500">+23231353914</p>
        </div>
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Call
        </button>
      </div>

      <div
        class="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-sm"
      >
        <div>
          <p class="font-medium text-slate-900">Mary Johnson</p>
          <p class="text-sm text-gray-500">+23276543210</p>
        </div>
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Call
        </button>
      </div>

      <div
        class="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-sm"
      >
        <div>
          <p class="font-medium text-slate-900">Paul Adams</p>
          <p class="text-sm text-gray-500">+23278965432</p>
        </div>
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Call
        </button>
      </div>
      <div
        class="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-sm"
      >
        <div>
          <p class="font-medium text-slate-900">Paul Adams</p>
          <p class="text-sm text-gray-500">+23278965432</p>
        </div>
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Call
        </button>
      </div>
      <div
        class="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-sm"
      >
        <div>
          <p class="font-medium text-slate-900">Paul Adams</p>
          <p class="text-sm text-gray-500">+23278965432</p>
        </div>
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Call
        </button>
      </div>
    </div>
  </div>
</div>

  </section>
</template>

<style scoped>
section {
  background: rgb(67, 67, 87);
  background: linear-gradient(
    120deg,
    rgba(35, 35, 58, 1) 0%,
    rgba(34, 48, 29, 1) 50%,
    rgba(35, 35, 58, 1) 100%
  );
}
</style>
