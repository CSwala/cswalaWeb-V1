<template>
  <nav class="navbar navbar-expand-lg py-4 navbar-dark">
    <div class="container-md px-4">
      <a class="navbar-brand" href="/">CSwala</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link non-active" href="/explore">Explore</a>
          </li>
          <li class="nav-item">
            <a class="nav-link non-active" href="/team">Meet the Team</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      let pageName = window.location.pathname.replace("/", "").toLowerCase();
      let navitem = document.querySelectorAll(".nav-link");
      navitem.forEach((ele) => {
        if (pageName.includes(ele.innerText.toLowerCase())) {
          ele.classList.add("active");
          ele.classList.remove("non-active");
        }
      });
    });
  },
};
</script>

<style scoped>
.navbar-brand {
  color: var(--textprimary);
}
.navbar {
  background: var(--backgroundLight);
}
ul{
  display:flex;
  align-items:center;
  justify-content:center;
}
.active {
  color: var(--primary) !important;
}
.active::after {
  content: " ";
  display: block;
  height: 2px;
  width: 10px;
  background: var(--primary);
}
.non-active {
  color: var(--textmuted) !important;
}
.non-active:hover {
  color: var(--primaryLight) !important;
}
.navbar-brand {
  font-family: "Roboto Mono", monospace;
  font-weight: bold;
}
.nav-link {
  font-family: "Roboto Mono", monospace;
  font-weight: 600;
  width: max-content;
}
</style>
