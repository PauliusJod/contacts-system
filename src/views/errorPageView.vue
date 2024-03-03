<template>
  <div class="container">
    <h3 class="title is-3">Error 404</h3>
  </div>
</template>

<script>
export default {
  name: "errorPage",
  mounted() {
    setTimeout(() => {
      this.$router.push({ path: "/" });
    }, 2500);
  },
};
</script>
