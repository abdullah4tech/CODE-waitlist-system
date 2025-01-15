<script setup lang="ts">
import Logo from '@/assets/header_logo_2.png';
import UserCalled from '@/components/UserCalled.vue';
import WaitListHistory from '@/components/WaitListHistory.vue';
import WaitLists from '@/components/WaitLists.vue';
import { ref } from 'vue';


const currentComponent = ref('');

const renderComponent = (component: string) => {
  currentComponent.value = component;
};

const isSpinning = ref(false);

const spinSVG = () => {
  isSpinning.value = true;
  setTimeout(() => {
    isSpinning.value = false;
  }, 1000);
};
</script>

<template>
  <section class="font-poppins flex h-screen text-indigo-100">
    <!-- Sidebar -->
    <div class="w-72 flex flex-col items-baseline p-12">
      <img class="w-22 pb-10" :src="Logo" alt="header_logo" />
      <div class="flex h-full m-5 justify-between flex-col gap-16 w-full">
        <div class="flex flex-col gap-2 w-full">
          <h1 class="text-2xl">Dashboard</h1>
          <a
            class="hover:font-semibold" href="#"
            @click.prevent="renderComponent('WaitLists')"
          >Users waitlist</a>
          <a
            class="hover:font-semibold" href="#"
            @click.prevent="renderComponent('UserCalled')"
          >Called users</a>
          <a
            class="hover:font-semibold" href="#"
            @click.prevent="renderComponent('WaitListHistory')"
          >Historys</a>
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
        <h2 class="text-xl ">Welcome Back, <span class="font-semibold">John Doe!</span></h2>
        <button class="bg-red-500 flex gap-2 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
          </svg>
          <span>Logout</span>
        </button>
      </div>

      <!-- Waitlist Section -->
      <div
        class="w-full h-[500px] rounded-3xl overflow-auto p-10 bg-opacity-40 bg-gray-700 shadow-lg"
      >
        <div class="sticky flex items-center pb-3 justify-between mb-4">
          <h2 class="text-2xl font-semibold">Waitlist</h2>
          <button @click="spinSVG" class="text-blue-500 flex gap-2 hover:text-blue-600 transition">
            <svg :class="{ 'svg-spin': isSpinning }" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            <span>Refresh</span>
          </button>
        </div>

        <div v-show="currentComponent === 'WaitLists'">
          <WaitLists />
        </div>
        <div v-show="currentComponent === 'UserCalled'">
          <UserCalled />
        </div>
        <div v-show="currentComponent === 'WaitListHistory'">
          <WaitListHistory />
        </div>
        <div v-show="currentComponent === ''" class="text-center text-gray-400">
          <WaitLists />
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

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.svg-spin {
  animation: spin 1s linear; /* Spins for 2 seconds */
}
</style>
