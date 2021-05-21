<template>
  <router-link
    class="VCard"
    v-if="data.title"
    :to="{
      name: 'DetailPage',
      params: { itemId: langId },
    }"
  >
    <h6>
      {{ data.title }}
    </h6>
    <p>{{ data.type }}</p>
  </router-link>
</template>

<script>
import { ref } from "vue";
export default {
  name: "VCard",
  props: {
    data: Object,
  },
  setup(props) {
    console.log(props.data);
    let langId = ref("");
    langId.value = props.data.title.replace(" ", "-").toLowerCase();
    return { langId };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.VCard {
  padding: 32px;
  border: 1px solid var(--border);
  text-align: left;
  font-family: "Roboto Mono", monospace;
  overflow: hidden !important;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  background: var(--backgroundLight);
  color: var(--textprimary);
  border-radius: 8px;
  transition: all ease 0.5s;
}
.VCard h6 {
  margin: 0;
  font-weight: bold;
}
.VCard p {
  width: 100%;
  opacity: 0.5;
  margin: 0;
  overflow: hidden !important;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--textsecondary);
}
.VCard:hover {
  background: var(--backgroundDark);
  box-shadow: 3px 3px 15px -5px rgba(98, 98, 105, 0.2);
  transform: scale(1.02);
}
@media only screen and (max-width: 480px) {
  .VCard {
    padding: 22px 18px !important;
  }
}
</style>
