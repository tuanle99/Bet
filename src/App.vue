<template>
  <div>
    <button @click="selectPage('HomePage', data.onGoingBets)">Home</button>
    <button @click="selectPage('HistoryPage', data.previousBets)">
      History
    </button>
    <button @click="selectPage('MembersPage', data.members)">Members</button>
    <KeepAlive>
      <component :is="currentPage.page" :data="currentPage.data"></component>
    </KeepAlive>
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import HistoryPage from "./components/HistoryPage.vue";
import MembersPage from "./components/MembersPage.vue";

import record from "../record.json";

export default {
  components: {
    HomePage,
    HistoryPage,
    MembersPage,
  },
  data() {
    return {
      data: record,
      currentPage: { page: "HomePage", data: record.onGoingBets },
    };
  },
  methods: {
    selectPage(page, data) {
      this.currentPage = { page: page, data: data };
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
