<template>
  <div>
    <Navbar></Navbar>
    <div class="columns">
      <div class="column is-10 is-offset-1">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="../assets/img1.jpg" alt="Placeholder image" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="../assets/head.jpg"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">文 亚 杰</p>
                <p class="subtitle is-6">909092921@qq.com</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a href="">@bulmaio</a>. <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">2021 年 1 月 1 日</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Home",
  components: {
    Navbar,
  },
};
</script>
