<template>
  <div id="HomePage">
    <section id="hero">
      <div class="container py-5">
        <div class="row justify-content-between">
          <div
            class="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center"
          >
            <div data-aos="zoom-out">
              <h1>Gather all the knowledge With <span>CSWALA</span></h1>
              <h2>
                Find the best resources in one place, which are already present
                in this huge network called INTERNET.
              </h2>
              <div class="text-center text-lg-start">
                <a href="/explore" class="btn-get-started scrollto"
                  >Get Started</a
                >
              </div>
            </div>
          </div>
          <div
            class="col-lg-4 order-1 order-lg-2 hero-img"
            data-aos="zoom-out"
            data-aos-delay="300"
          >
            <img
              src="../assets/img/app-user.svg"
              class="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

    <svg
      class="hero-waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28 "
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="wave-path"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
        />
      </defs>
      <g class="wave1">
        <use xlink:href="#wave-path" x="50" y="3" fill="rgba(37, 38, 55, .4)" />
      </g>
      <g class="wave2">
        <use xlink:href="#wave-path" x="50" y="0" fill="rgba(37, 38, 55, .2)" />
      </g>
      <g class="wave3">
        <use xlink:href="#wave-path" x="50" y="9" fill="rgb(37, 38, 55)" />
      </g>
    </svg>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      apiReq();
    });
    function apiReq() {
      let url = "https://cswala-api.vercel.app/v1/cs";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("apiData", JSON.stringify(data));
        });
    }
  },
};
</script>

<style scoped>
.container {
  z-index: 999;
}
#HomePage {
  background: var(--backgroundDark);
}
#hero {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  position: relative;
  min-height: 800px;
  height: 100vh;
  background: var(--backgroundDark);
}
#hero h1 {
  margin: 0 0 20px 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
}

#hero h1 span {
  border-bottom: 4px solid var(--primary);
}

#hero h2 {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 400;
  font-family: "Roboto Mono", monospace;
}

#hero .btn-get-started {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 30px;
  text-decoration: none;
  border-radius: 50px;
  transition: 0.5s;
  color: #fff;
  background: var(--primary);
}

#hero .btn-get-started:hover {
  background: var(--primaryLight);
}

#hero .animated {
  animation: up-down 2s ease-in-out infinite alternate-reverse both;
}

@media (min-width: 1024px) {
  #hero {
    background-attachment: fixed;
  }
}

@media (max-width: 991px) {
  #hero {
    padding-top: 80px;
    text-align: center;
  }
  #hero .animated {
    -webkit-animation: none;
    animation: none;
  }
  #hero .hero-img {
    text-align: center;
  }
  #hero .hero-img img {
    max-width: 50%;
  }
  #hero h1 {
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 10px;
  }
  #hero h2 {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }
}

@media (max-width: 575px) {
  #hero .hero-img img {
    width: 80%;
  }
}
@media (max-width: 380px) {
  #hero .hero-img img {
    max-width: 80%;
  }
}

@-webkit-keyframes up-down {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}

@keyframes up-down {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
}

.hero-waves {
  display: block;
  margin-top: 60px;
  width: 100%;
  height: 60px;
  z-index: 5;
  position: relative;
}

.wave1 use {
  -webkit-animation: move-forever1 10s linear infinite;
  animation: move-forever1 10s linear infinite;
  -webkit-animation-delay: -2s;
  animation-delay: -2s;
}

.wave2 use {
  -webkit-animation: move-forever2 8s linear infinite;
  animation: move-forever2 8s linear infinite;
  -webkit-animation-delay: -2s;
  animation-delay: -2s;
}

.wave3 use {
  -webkit-animation: move-forever3 6s linear infinite;
  animation: move-forever3 6s linear infinite;
  -webkit-animation-delay: -2s;
  animation-delay: -2s;
}

@-webkit-keyframes move-forever1 {
  0% {
    transform: translate(85px, 0%);
  }
  100% {
    transform: translate(-90px, 0%);
  }
}

@keyframes move-forever1 {
  0% {
    transform: translate(85px, 0%);
  }
  100% {
    transform: translate(-90px, 0%);
  }
}

@-webkit-keyframes move-forever2 {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}

@keyframes move-forever2 {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}

@-webkit-keyframes move-forever3 {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}

@keyframes move-forever3 {
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
}
</style>
