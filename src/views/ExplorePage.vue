<template>
  <div id="ExplorePage" class="container">
    <div class="card_wrapper">
      <VCard v-for="(data, index) in apiRetrive" :key="index" :data="data" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import VCard from "../components/VCard.vue";

export default {
  components: {
    VCard,
  },
  setup() {
    let apiRetrive = ref("");
    if (localStorage.apiData) {
      apiRetrive.value = JSON.parse(localStorage.apiData).Resources;
    }
    return { apiRetrive };
  },
};
</script>

<style scoped>
#ExplorePage{
  border-bottom:  1px  solid var(--border);
}
.card_wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  flex-direction: column;
  gap: 18px;
  width: 100%;
  padding: 12px;
  margin: 60px 0;
}
@media only screen and (min-width: 1400px) {
  .card_wrapper {
    grid-template-columns: repeat(4, 1fr) !important;
  }
}
@media only screen and (max-width: 990px) {
  .card_wrapper {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}
</style>
