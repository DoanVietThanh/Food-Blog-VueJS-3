<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8">
    <MealItem v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
</template>

<script setup>
import MealItem from "./MealItem.vue";

const props = defineProps({
  meals: {
    required: true,
    type: Array,
  },
});
</script>
