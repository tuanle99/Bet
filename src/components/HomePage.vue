<template>
  <div v-if="!createBet">
    <the-title>
      <p>Home Page</p>
    </the-title>
    <p>Current On Going Bet</p>
    <display-on-going-bets :data="data"></display-on-going-bets>
    <button @click="selectBet">Place Bet</button>
  </div>
  <div v-else>
    <button @click="selectBet">Return</button>
    <place-bet></place-bet>
    <button @click="selectBet">Bet!</button>
  </div>
</template>

<script>
import PlaceBet from "./PlaceBet.vue";
import DisplayOnGoingBets from "./DisplayOnGoingBets.vue";

export default {
  props: ["data"],
  data() {
    return {
      createBet: false,
    };
  },
  components: {
    PlaceBet,
    DisplayOnGoingBets,
  },
  methods: {
    selectBet() {
      this.createBet = !this.createBet;
    },
  },
};
</script>
