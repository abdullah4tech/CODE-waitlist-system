<script setup lang="ts">
import Logo from '@/assets/header_logo_2.png';
</script>

<template>
  <section class="font-poppins flex h-screen text-indigo-100">
    <!-- Sidebar -->
    <div class="w-72 flex flex-col items-center bg-darkmode p-[20px]">
      <img class="w-22 m-5 pb-10" :src="Logo" alt="header_logo">
      <div class="flex m-5 flex-col items-center gap-16">
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl">Dashboard</h1>
          <a class="hover:font-semibold" href="#">Users waitlist</a>
          <a class="hover:font-semibold" href="#">Called users</a>
          <a class="hover:font-semibold" href="#">Historys</a>
        </div>
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl">Support</h1>
          <a class="hover:font-semibold" href="#">Having some issues?</a>
          <a class="hover:font-semibold" href="#">Feedback</a>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="bg-darkmode_secondary flex-1 p-[20px]">
      <div class="flex justify-between m-5">
        <div class="username">Joshua</div>
        <button class="topup">Top up</button>
      </div>
      <div class="w-full bg-darkmode h-96 rounded-3xl">
        <div>
          <h2>Usage history</h2>
          <button>Refresh</button>
        </div>
        <p>No data available</p>
      </div>
    </div>
  </section>
</template>

<!-- <style scoped>
.container {
  display: flex;
  height: 100vh;
}
.sidebar {
  width: 250px;
  background-color: #23233a;
  padding: 20px;
  box-sizing: border-box;
}
.sidebar a {
  display: block;
  color: #ffffff;
  text-decoration: none;
  margin-bottom: 15px;
  font-size: 16px;
}
.sidebar a:hover {
  color: #00ccff;
}
.main-content {
  flex: 1;
  padding: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.header .username {
  font-size: 18px;
}
.header .topup {
  background-color: #00ccff;
  color: #23233a;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.card {
  background-color: #2a2a42;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
.footer {
  margin-top: 20px;
}
.footer a {
  color: #00ccff;
  text-decoration: none;
  margin-right: 10px;
}
</style> -->
