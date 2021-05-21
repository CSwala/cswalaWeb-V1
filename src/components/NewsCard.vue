<template>
  <a class="NewsCard" v-if="data.title" :href="`${data.url}`">
    <img :src="`${data.urlToImage}`" alt="Thumbnail" v-if="data.urlToImage" />
    <img src="../assets/img/blank.png" alt="Thumbnail" v-else />
    <div class="info">
      <h4>
        {{ data.title }}
      </h4>
      <p>{{ data.description }}</p>
      <span>{{ data.source.name }}</span>
    </div>
  </a>
</template>

<script>
export default {
  name: "NewsCard",
  props: {
    data: Object,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.NewsCard {
  text-align: left;
  overflow: hidden !important;
  display: flex;
  align-items: flex-start;
  width: 100%;
  max-width: 900px;
  background: var(--backgroundLight);
  color: var(--textprimary);
  border-radius: 8px;
  transition: all ease 0.5s;
}
.NewsCard img {
  height: 180px;
  min-width: 280px;
  object-fit: cover;
  border-radius: 8px;
}
.NewsCard h4 {
  font-weight: bold;
  font-size: 1.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.NewsCard p {
  width: 100%;
  opacity: 0.7;
  margin: 0 0 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.NewsCard span {
  opacity: 0.4;
  font-size: 14px;
}
.NewsCard:hover {
  opacity: 0.6  ;
}
.info {
  border-left: 1px solid var(--border);
  height: 100%;
  padding: 4px 18px 18px 18px;
}
</style>
