<template>
  <div>
    <Navbar></Navbar>
    <div class="columns">
      <div class="column is-6 is-offset-1">
        <ul class="menu-list">
          <li>
            <ul>
              <li><a v-on:click="gotoJavaBook">java基础笔记</a></li>
              <li><a v-on:click="gotoGitBook">github笔记</a></li>
              <li><a v-on:click="gotoDockerBook">docker笔记</a></li>
              <li><a v-on:click="gotoIdeaBook">Intellij笔记</a></li>
              <li><a v-on:click="gotoSpringBook1">springboot笔记1</a></li>
              <li><a v-on:click="gotoSpringBook2">springboot笔记2</a></li>
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
  name: "Mynotebook",
  components: {
    Navbar,
  },
  methods: {
    gotoSpringBook2() {
      window.open("../../springboot2.html");
      // window.location.href = '../../springboot2.html'
    },
    gotoSpringBook1() {
      window.open("../../springboot1.html");
      // window.location.href = '../../springboot1.html'
    },
    gotoIdeaBook() {
      window.open("../../intellijnote.html");
      // window.location.href = '../../intellijnote.html'
    },
    gotoDockerBook() {
      window.open("../../dockernote.html");
      // window.location.href = '../../dockernote.html'
    },
    gotoGitBook() {
      window.open("../../gitnote.html");
      // window.location.href = '../../gitnote.html'
    },
    gotoJavaBook() {
      window.open("../../javabook.html");
      // window.location.href = '../../javabook.html'
    },
  },
};
</script>