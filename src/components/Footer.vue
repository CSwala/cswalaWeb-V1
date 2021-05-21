<template>
  <!-- Footer -->
  <footer class=" text-center text-lg-start">
    <div class="container p-4 py-5 pb-3 ">
      <div
        class="Footcont d-flex justify-content-between align-items-center py-2"
      >
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">CSwala</h5>
          <p class="text-muted">
            We are a community of like-minded peeps from different areas of
            interests and are united by a single motive - "spread knowledge
            about the best resources that are available free on the Internet but
            are not used frequently".
          </p>
        </div>
        <div>
          <ul class="list-inline flex-start">
            <li class="list-inline-item">
              <a href="https://discord.gg/rAz3Eb8fsN">Discord</a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/CSwala">Github</a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/company/cswala">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- FooterBottom -->
    <div class="footer-bottom text-center p-3">
      <p>© CSwala</p>
      <div>
        <a href="mailto:cs.wala.guy@gmail.com">cs.wala.guy@gmail.com</a>
      </div>
    </div>
    <!-- FooterBottom -->
  </footer>
  <!-- Footer -->
</template>

<script>
export default {
  name: "Footer",
  setup() {
    return {};
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: var(--textprimary);
}
footer {
  background: var(--backgroundLight);
  font-family: "Roboto Mono", monospace;
}
.list-inline {
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.list-inline-item {
  opacity: 0.7;
  transition: all ease 0.3s;
}
.list-inline-item:hover {
  opacity: 1;
}
.footer-bottom {
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  font-family: "Roboto Mono", monospace;
  justify-content: space-around;
}
.footer-bottom p,
.footer-bottom a {
  margin: 0;
  font-family: "Roboto Mono", monospace;
  transition: all ease 0.3s;
  opacity: 0.5;
}
.footer-bottom a:hover {
  opacity: 0.8;
}
@media only screen and (max-width: 991px) {
  .list-inline {
    flex-direction: row;
  }
  .Footcont {
    flex-direction: column;
  }
}
</style>
