<template>
  <a :href="`${urlLink}`" class="LinkPreview" v-if="apiRes">
    <img :src="`${apiRes.image}`" alt="Thumbnail" v-if="apiRes.image" />
    <img src="../assets/img/blank.png" alt="Thumbnail" v-else />
    <div class="info">
      <h2>{{ apiRes.title }}</h2>
      <p>{{ apiRes.description }}</p>
      <span>{{ apiRes.source }}</span>
    </div>
  </a>
</template>

<script>
import { ref, toRef } from "vue";

export default {
  name: "LinkPreview",
  props: {
    urlLink: String,
  },
  setup(props) {
    const url = toRef(props, "urlLink");
    setTimeout(function() {
      apiRetrive(url.value);
    }, 2);

    let apiRes = ref("");

    async function apiRetrive(urlID) {
      let uri = "https://api.5tupidbrain.in/v1/url-meta?url=" + urlID;

      await fetch(uri)
        .then((response) => response.json())
        .then((data) => {
          apiRes.value = data.urlMeta;
        });
    }
    return {
      apiRes,
    };
  },
};
</script>

<style scoped>
.LinkPreview {
  position: relative;
  height: 248px;
  display: block;
  max-width: 280px;
  min-width: 280px;
  overflow: hidden;
  text-decoration: none;
  background: var(--backgroundLight);
  color: var(--textprimary);
  border-radius: 0.45rem;
  border: 1px solid var(--border);
}

.LinkPreview img {
  width: 280px;
  height: 140px;
  object-fit: cover;
  border-radius: 0.25rem 0.25rem 0 0;
  outline: none;
  border: none;
}
.info {
  position: absolute;
  bottom: 0;
  height: 105px;
  width: 100%;
  padding: 8px 16px;
  border-top: 2px solid var(--border);
}
.info h2 {
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info p {
  font-size: 12px;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.info span {
  opacity: 0.5;
  font-size: 12px;
}
@media only screen and (max-width: 576px) {
  .LinkPreview {
    width: 220px;
    min-width: 220px;
  }
  .LinkPreview img {
    width: 220px;
  }
}
</style>
