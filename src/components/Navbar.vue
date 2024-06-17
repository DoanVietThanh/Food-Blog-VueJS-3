<template>
  <header
    class="px-10 bg-white shadow h-16 flex justify-between items-stretch w-full"
  >
    <router-link
      :to="{ name: 'home' }"
      class="inline-flex items-center h-full px-5 text-orange-500 font-bold text-3xl"
    >
      Home
    </router-link>
    <div class="flex items-center gap-1 font-medium">
      <router-link
        :to="{ name: 'byName' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
        Search Meals
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
        Meals By Letter
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="inline-flex items-center px-2 h-full transition-colors hover:bg-orange-500 hover:text-white"
      >
        Meals By Ingredients
      </router-link>
    </div>
  </header>
</template>
