<template>
  <div class="mx-auto p-8 font-serif">
    <div class="container flex gap-8">
      <div class="flex-1 flex justify-center items-center">
        <img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="w-[400px] h-[auto] rounded-lg shadow-lg"
        />
      </div>
      <div class="flex-1 flex flex-col gap-8">
        <h1 v-if="meal.strMeal" class="text-4xl font-bold mb-5 text-orange-500">
          {{ meal.strMeal }}
        </h1>
        <p v-if="meal.strCategory">
          <span class="font-semibold">Category: </span>{{ meal.strCategory }}
        </p>
        <p v-if="meal.strArea">
          <span class="font-semibold">Area: </span>{{ meal.strArea }}
        </p>
        <p v-if="meal.strTags">
          <span class="font-semibold">Tags: </span>{{ meal.strTags }}
        </p>
        <div class="mt-4">
          <YtbButton :href="meal.strYoutube" />
          <a
            :href="meal.strSource"
            target="_blank"
            class="ml-3 px-3 py-2 rounded border-2 border-transparent text-indigo-600 transition-colors"
          >
            View Original Source
          </a>
        </div>
      </div>
    </div>

    <div class="my-3 mt-8 text-justify">
      <span class="font-bold">Description:</span> {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li :key="{ ind }" v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">Measures</h2>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li :key="{ ind }" v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YtbButton from "../components/YtbButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>
