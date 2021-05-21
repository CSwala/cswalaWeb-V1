<template>
  <div class="container-md">
    <div class="card_wrapper">
      <div class="cardTitle">
        <h2>{{ ResData.title }}</h2>
        <p>{{ ResData.tag }} &nbsp;</p>
        <a :href="`${ResData.documentation}`">📝 Docs</a>
      </div>
      <div class="cardData ">
        <h4>Courses</h4>
        <ul class="scroller">
          <li v-for="link in ResData.courses" :key="link">
            <LinkPreview :urlLink="`${link}`"></LinkPreview>
          </li>
        </ul>
        <h4>Youtube</h4>
        <ul class="scroller">
          <li v-for="link in ResData.youtube" :key="link">
            <LinkPreview :urlLink="`${link}`"></LinkPreview>
          </li>
        </ul>
        <h4>Github</h4>
        <ul class="scroller">
          <li v-for="link in ResData.github" :key="link">
            <LinkPreview :urlLink="`${link}`"></LinkPreview>
          </li>
        </ul>
        <h4>Websites</h4>
        <ul class="scroller">
          <li v-for="link in ResData.websites" :key="link">
            <LinkPreview :urlLink="`${link}`"></LinkPreview>
          </li>
        </ul>
        <h4>Tips</h4>
        <ul class="scroller">
          <li v-for="link in ResData.tips" :key="link">
            <LinkPreview :urlLink="`${link}`"></LinkPreview>
          </li>
        </ul>
      </div>
      <!-- <img :src="`${ResData.img}`" alt="roadmap" /> -->
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import LinkPreview from "../components/LinkPreview.vue";
export default {
  components: {
    LinkPreview,
  },
  props: {
    itemId: String,
  },
  setup(props) {
    let apiRetrive = [];
    let ResData = ref([]);

    onMounted(() => {
      apiReq();
      scroll();
    });

    function scroll() {
      const target = document.querySelectorAll(".scroller");

      target.forEach((ele) => {
        ele.addEventListener("wheel", (event) => {
          const toLeft = event.deltaY < 0 && ele.scrollLeft > 0;
          const toRight =
            event.deltaY > 0 &&
            ele.scrollLeft < ele.scrollWidth - ele.clientWidth;

          if (toLeft || toRight) {
            event.preventDefault();
            ele.scrollLeft += event.deltaY * 3;
          }
        });
      });
    }

    async function apiReq() {
      if (localStorage.apiData) {
        let langName = props.itemId;
        let apiRetrive = JSON.parse(localStorage.apiData).Resources;
        apiRetrive.forEach((ele) => {
          if (ele.title.replace(" ", "-").toLowerCase() === langName) {
            ResData.value = ele;
          }
        });
        console.log(ResData.value.title)
      } else {
        console.warn("Fetching from API....");
        let url = "https://cswala-api.vercel.app/v1/cs";
        await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            apiRetrive.push(data.Resources);
            let langName = props.langID;
            apiRetrive[0].forEach((ele) => {
              if (ele.title.replace(" ", "-").toLowerCase() === langName) {
                ResData.value = ele;
              }
            });
          });
      }
    }
    return {
      apiRetrive,
      ResData,
    };
  },
};
</script>

<style scoped>
.card_wrapper {
  margin: 50px;
  text-align: left;
}
.card_wrapper h2 {
  margin-bottom: 0;
}
ul {
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  gap: 12px;
  padding: 10px 0;
  text-decoration: none;
  list-style: none;
  scrollbar-width: none;
}
img {
  max-height: 480px;
  width: 100%;
}
.cardTitle {
  width: 100%;
  max-width: 1140px;
  background: var(--backgroundLight);
  padding: 24px;
  border-radius: 8px;
}
.cardTitle h2 {
  font-family: "Roboto Mono", monospace;
  margin-bottom: 0.5rem;
}
.cardTitle a{
  padding: 10px 16px;
  text-decoration: none;
  font-size: 14px;
  font-family: "Roboto Mono", monospace;
  font-weight: 600;
  border-radius: 25px;
  background: var(--buttontransparent);
  color: var(--textprimary);
}
.cardData {
  margin: 60px 0;
}
.cardData h4 {
  font-weight: bold;
  font-family: "Roboto Mono", monospace;
}
@media only screen and (max-width: 768px) {
  .card_wrapper {
    margin: 50px 16px;
  }
}
</style>
