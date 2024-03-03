<template>
  <div class="notifications-list">
    <NotificationMessage v-for="notify in notifications" :key="notify.id" :notification="notify" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import NotificationMessage from "./Notification.vue";
export default {
  name: "NotificationsList",
  components: {
    NotificationMessage,
  },
  computed: {
    ...mapGetters({ notifications: "getNotifications" }),
  },
};
</script>
<style>
.notifications-list {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  padding: 5px;
  width: 320px;
}
</style>
