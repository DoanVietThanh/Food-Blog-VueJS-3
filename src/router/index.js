import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealList from "../views/MealList.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import GuestLayout from "../components/GuestLayout.vue";

import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsByIngredient from "../views/MealsByIngredient.vue";
import Ingredients from "../views/Ingredients.vue";
import MealDetails from "../views/MealDetails.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/letter/:letter",
        name: "byLetter",
        component: MealList,
      },
      {
        path: "/by-name/:name?",
        name: "byName",
        component: MealsByName,
      },
      {
        path: "/by-letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/by-ingredient/:ingredient",
        name: "byIngredient",
        component: MealsByIngredient,
      },
      {
        path: "/ingredients",
        name: "ingredients",
        component: Ingredients,
      },
      {
        path: "/meal/:id",
        name: "mealDetails",
        component: MealDetails,
      },
    ],
  },
  {
    path: "/guest",
    component: GuestLayout,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
