<template>
  <div>
    <Navbar></Navbar>
    <div class="columns">
      <div class="column is-6 is-offset-1">
        <ul class="menu-list">
          <li>
            <ul>
              <li>
                <a v-on:click="goToBlod" style="color: black">我的c语言博客</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "Honor",
  components: {
    Navbar,
  },
  methods: {
    goToBlod() {
      window.open("https://blog.dotcpp.com/wenyajie/");
    },
  },
};
</script>