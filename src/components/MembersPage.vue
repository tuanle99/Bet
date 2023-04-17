<template>
  <the-title>
    <p>Members Page</p>
  </the-title>
  <ul>
    <li v-for="l in data" :key="l.description">
      <p>{{ l.name }}</p>
      <p>Owe:</p>
      <ul>
        <li v-for="o in l.owe_list" :key="o.owe">
          {{ o.owe }} to {{ o.person }}
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["data"],
};
</script>
