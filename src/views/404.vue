<template>
  <div id="Error" class="container">
    <div>
      <h4>ooops,<br />something went wrong</h4>
      <a href="/"> - Back to Home</a>
      <img src="../assets/img/error-404.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
#Error {
  min-height: calc(100vh - 88px);
  display: flex;
  text-align: left;
  justify-content: center;
  font-family: "Roboto Mono", monospace;
  align-items: center;
}
h4 {
  text-align: left;
  font-weight: 600;
  text-transform: uppercase;
  margin: 0;
}
a {
  text-decoration: none;
  font-size: 14px;
}
img {
  max-height: 420px;
  margin-top: 50px !important;
  width: 100%;
}
</style>
