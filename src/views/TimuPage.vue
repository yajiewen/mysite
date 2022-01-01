<template>
  <div id="TimuPage">
    <div class="box">
      <p>文本 案例</p>
      <div v-on:click="getAnli" class="button">
        <span class="icon-text">
          <span class="icon">
            <i class="fas fa-cloud-download-alt"></i>
          </span>
          <span>获取案例</span>
        </span>
      </div>
      <textarea
        class="textarea"
        placeholder="10 lines of textarea"
        rows="10"
        v-model="text"
      ></textarea>
    </div>
    <div class="box">
      <div class="columns">
        <div class="column">提取信息</div>
      </div>
      <div v-on:click="showInfo" class="button">
        <span class="icon-text">
          <span class="icon">
            <i class="fas fa-chevron-down"></i>
          </span>
          <span>展开</span>
        </span>
      </div>
      <div v-show="showinfo">
        <div class="control column">
          <p>案例标题</p>
          <div class="notification is-primary">
            <span
              style="white-space: pre-wrap"
              v-for="value in title"
              v-bind:key="value"
              >{{ value }}</span
            >
          </div>
        </div>

        <div class="control column">
          <p>事故经过</p>
          <div class="notification is-primary">
            <span
              style="white-space: pre-wrap"
              v-for="value in story"
              v-bind:key="value"
              >{{ value }}</span
            >
          </div>
        </div>

        <div class="control column">
          <p>事故原因</p>
          <div class="notification is-link">
            <span
              style="white-space: pre-wrap"
              v-for="value in reason0"
              v-bind:key="value"
              >{{ value }}</span
            >
          </div>
        </div>

        <div class="control column">
          <p>直接原因</p>
          <div class="notification is-link">
            <span
              style="white-space: pre-wrap"
              v-for="value in reason1"
              v-bind:key="value"
              >{{ value }}</span
            >
          </div>
        </div>

        <div class="control column">
          <p>间接原因</p>
          <div class="notification is-info">
            <span
              style="white-space: pre-wrap"
              v-for="value in reason2"
              v-bind:key="value"
              >{{ value }}</span
            >
          </div>
        </div>

        <div class="control column">
          <p>主要原因</p>
          <div class="notification is-info">
            <span
              style="white-space: pre-wrap"
              v-for="value in reason3"
              v-bind:key="value"
              >{{ value }}</span
            >
          </div>
        </div>

        <div class="control column">
          <p>次要原因</p>
          <div class="notification is-info">
            <span
              style="white-space: pre-wrap"
              v-for="value in reason4"
              v-bind:key="value"
              >{{ value }}</span
            >
          </div>
        </div>

        <div class="control column">
          <p>整改措施</p>
          <div class="notification is-warning">
            <span
              style="white-space: pre-wrap"
              v-for="value in dealway0"
              v-bind:key="value"
              >{{ value }}</span
            >
          </div>
        </div>

        <div class="control column">
          <p>防范措施</p>
          <div class="notification is-warning">
            <span
              style="white-space: pre-wrap"
              v-for="value in dealway1"
              v-bind:key="value"
              >{{ value }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="box">
      <p>题目</p>
      <div v-on:click="getTimu" class="button">
        <span class="icon-text">
          <span class="icon">
            <i class="fas fa-marker"></i>
          </span>
          <span>生成</span>
        </span>
      </div>
      <div class="block" v-for="(timu, index) in timulist" v-bind:key="index">
        <p>{{ index + 1 }}. {{ timu.subject }}</p>
        <p>A:{{ timu.rightAnswer }}</p>
        <p>B:{{ timu.wrongAnswer1 }}</p>
        <p v-if="timu.hasOwnProperty('wrongAnswer2')">
          C:{{ timu.wrongAnswer2 }}
        </p>
        <p v-if="timu.hasOwnProperty('wrongAnswer3')">
          D:{{ timu.wrongAnswer3 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TimuPage",
  data() {
    return {
      text: "",
      title: "",
      story: "",
      reason0: "",
      reason1: "",
      reason2: "",
      reason3: "",
      reason4: "",
      dealway0: "",
      dealway1: "",
      showinfo: false,
      timudict: {},
      timulist: [],
    };
  },
  methods: {
    showInfo() {
      this.showinfo = !this.showinfo;
    },
    getAnli() {
      axios({
        method: "get",
        url: "/api/anli",
      }).then((res) => {
        this.text = res.data;
      });
    },
    getTimu() {
      this.timulist = [];
      let upaxios = axios.create({
        headers: {
          "Content-Type": "multipart/form-data",
        },
        transformRequest: [
          function (data) {
            return data;
          },
        ],
      });
      let formdata = new FormData();
      formdata.append("text", this.text);
      upaxios.post("/api/quesgetter", formdata).then((res) => {
        this.timudict = res.data;
        for (let key in this.timudict) {
          if (key == "case") {
            let caseObj = this.timudict[key];
            for (let key1 in caseObj) {
              this.timulist.push(...caseObj[key1]);
            }
          } else {
            let tiObj = this.timudict[key];
            for (let key2 in tiObj) {
              this.timulist.push(tiObj[key2]);
            }
          }
        }
      });
    },
  },
  watch: {
    text() {
      let title_pattern = /^(\s*)《.*?》\s/g;
      this.title = this.text.match(title_pattern);

      let story_pattern = /(?<=((.*)事故经过(\n)*))(.*\n)*?\n/g;
      this.story = this.text.match(story_pattern);

      let reason0_pattern =
        /(?<=(((.*)事故原因(\s)*)))((.*)([1-9][.．、])(.*)(\n)*)*/g;
      this.reason0 = this.text.match(reason0_pattern);

      let reason1_pattern =
        /(?<=(((.*)直接原因(\s)*)))((.*)([1-9][.．、])(.*)(\n)*)*/g;
      this.reason1 = this.text.match(reason1_pattern);

      let reason2_pattern =
        /(?<=(((.*)间接原因(\s)*)))((.*)([1-9][.．、])(.*)(\n)*)*/g;
      this.reason2 = this.text.match(reason2_pattern);

      let reason3_pattern =
        /(?<=(((.*)主要原因(\s)*)))((.*)([1-9][.．、])(.*)(\n)*)*/g;
      this.reason3 = this.text.match(reason3_pattern);

      let reason4_pattern =
        /(?<=(((.*)次要原因(\s)*)))((.*)([1-9][.．、])(.*)(\n)*)*/g;
      this.reason4 = this.text.match(reason4_pattern);

      let dealway0_pattern =
        /(?<=(((.*)整改措施(\s)*)))((.*)([1-9][.．、])(.*)(\n)*)*/g;
      this.dealway0 = this.text.match(dealway0_pattern);

      let dealway1_pattern =
        /(?<=(((.*)防范措施(\s)*)))((.*)([1-9][.．])(.*)(\n)*)*/g;
      this.dealway1 = this.text.match(dealway1_pattern);

      console.log(this.dealway2);
    },
  },
};
</script>