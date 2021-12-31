<template>
  <nav class="navbar is-white" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item"><p class="is-size-5">文亚杰</p></div>
      <a
        role="button"
        v-bind:class="{ 'is-active': isactive }"
        @click="turnactive"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      v-bind:class="{ 'is-active': isactive }"
    >
      <div class="navbar-end">
        <a class="navbar-item" v-on:click="goToHome">主页</a>
        <a class="navbar-item" v-on:click="goToProjects">项目</a>
        <a class="navbar-item">荣誉</a>
        <a class="navbar-item">我的笔记</a>
      </div>
    </div>
  </nav>
</template>

<script>
import "bulma/sass/utilities/_all.sass";
export default {
  name: "Navbar",
  data() {
    return {
      isactive: false,
    };
  },
  methods: {
    turnactive() {
      this.isactive = !this.isactive;
    },
    goToHome(){
      this.$router.push("/")
    },
    goToProjects(){
      this.$router.push("/projects")
    }
  },
};
</script>

<style >

</style>