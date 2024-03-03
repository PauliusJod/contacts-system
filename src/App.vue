<template>
  <div>
    <Navbar></Navbar>
    <div id="app">
      <Modal></Modal>
      <router-view></router-view>
      <NotificationsList />

      <!-- <contactsView/> -->
    </div>
    <!-- <loginView/> -->
  </div>
</template>
<script>
import NotificationsList from "./components/NotificationsList.vue";
import contactsView from "./views/contactsView.vue";
import Navbar from "./components/Navbar.vue";
import Modal from "./components/Modal.vue";
import loginView from "./views/loginView.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    NotificationsList,
    Modal,
    contactsView,
    Navbar,
    loginView,
  },
  data() {
    return {
      timer: null,
    };
  },
  computed: {
    ...mapGetters({ user: "getUser" }),
  },
  methods: {
    ...mapActions({ confirmUser: "confirmUser" }),
    countDownTimer() {
      this.timer = setTimeout(() => {
        if (this.user != null) {
          this.confirmUser();
          this.countDownTimer();
        }
      }, 300000);
    },
  },
  watch: {
    user: function (value) {
      if (value != null) {
        this.countDownTimer();
      } else {
        clearTimeout(this.timer);
      }
    },
  },
  // created () {
  //     this.countDownTimer()
  // }
};
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 800px;
}
</style> -->
