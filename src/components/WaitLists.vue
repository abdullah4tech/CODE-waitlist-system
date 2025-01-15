<script setup lang="ts">

const users = [
  {
    name: 'James Brima',
    phone: '+23231353914'
  },
  {
    name: 'Mary Johnson',
    phone: '+23276543210'
  },
  {
    name: 'Paul Adams',
    phone: '+23278965432'
  },
  {
    name: 'Paul Adams',
    phone: '+23278965432'
  },
  {
    name: "John Franklin",
    phone: "+23279584876"
  }
]

</script>

<template>

  <!-- Waitlist Items -->
  <div class="space-y-4">
    <!-- Single Waitlist Entry -->
    <div
      v-for="(i, index) in users"
      :key="index"
      class="flex items-center justify-between p-4 bg-opacity-40 bg-gray-700 rounded-md shadow-sm"
    >
      <div>
        <p class="font-medium text-slate-200">{{ i.name }}</p>
        <p class="text-sm text-gray-500">+23231353914</p>
      </div>
      <div class="flex items-center gap-5">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
          Profile
        </button>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
          Call
        </button>
      </div>
    </div>
  </div>
</template>


