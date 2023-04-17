<template>
  <ul>
    <li v-for="l in data" :key="l.description">
      <p>{{ l.bettor1 }}</p>
      <p>{{ l.bettor2 }}</p>
      <p>{{ l.description }}</p>
      <p>{{ l.reward }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["data"],
};
</script>
