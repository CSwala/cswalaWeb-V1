<template>
  <section
    class="team container py-5 my-3 d-flex flex-column align-items-center justify-content-center"
  >
    <h2 class="my-4">Meet the Team! <span>⚡</span></h2>
    <p class="quote">
      "Coming together is a beginning. Keeping together is progress. Working
      together is success."
      <br />
      <b> - Henry Ford</b>
    </p>
    <div class="d-flex gap-5">
      <div
        class="row featurette py-4 my-5 d-flex flex-column align-items-center justify-content-center"
      >
        <div>
          <img
            class="featurette-image  mx-auto"
            src="https://github.com/riturajjain2000.png"
            alt="Generic placeholder image"
          />
        </div>
        <div class="d-flex flex-column justify-content-center">
          <h4>Rituraj Jain</h4>
          <span class="text-muted">Founder</span>
          <p>
            Android Developer | Game Developer | Competitive Coder | UI /UX
            Designer"
          </p>
          <div class="socials mx-auto py-3 pb-1 d-flex justify-content-between">
            <a href="mailto:rrjain20122000@gmail.com"
              ><img src="../assets/img/gmail.svg" alt=""
            /></a>
            <a href="https://www.github.com/riturajjain2000/"
              ><img src="../assets/img/github.png" alt=""
            /></a>
            <a href="https://www.linkedin.com/in/rituraj-jain-bb374a194/"
              ><img src="../assets/img/linkedin.svg" alt=""
            /></a>
          </div>
        </div>
      </div>
      <div
        class="row featurette py-4 my-5 d-flex flex-column align-items-center justify-content-center"
      >
        <div>
          <img
            class="featurette-image  mx-auto"
            src="https://github.com/5tupidbrain.png"
            alt="Generic placeholder image"
          />
        </div>
        <div class="d-flex flex-column justify-content-center">
          <h4>Saransh Hardaha</h4>
          <span class="text-muted">Web Dev Lead</span>
          <p>
            Web developer | UI /UX Designer | Learner
          </p>
          <div class="socials mx-auto py-3 pb-1 d-flex justify-content-between">
            <a href="mailto:hellosaranshh@gmail.com"
              ><img src="../assets/img/gmail.svg" alt=""
            /></a>
            <a href="https://www.github.com/5tupidbrain/"
              ><img src="../assets/img/github.png" alt=""
            /></a>
            <a href="https://www.linkedin.com/in/5tupidbrain/"
              ><img src="../assets/img/linkedin.svg" alt=""
            /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
section {
  min-height: 800px;
  height: calc(100vh - 120px);
}
.quote {
  color: #fff;
  width: 480px;
  opacity: 0.7;
}
.featurette {
  width: 280px;
  background: var(--backgroundLight);
  padding: 16px;
  border-radius: 8px;
}
.featurette-image {
  height: 180px;
  border-radius: 50%;
  margin-bottom: 12px;
}
.featurette h4 {
  margin-bottom: 4px;
}
.featurette p {
  margin-bottom: 4px;
  font-size: 0.9rem;
}
.socials {
  max-width: 120px;
  gap: 16px;
}
.socials img {
  height: 24px;
  filter: invert(1);
  opacity: 0.5;
}
.socials img:hover {
  opacity: 0.8;
}
</style>
