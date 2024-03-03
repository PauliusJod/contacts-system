<template>
  <div class="flex justify-center">
    <button
      :disabled="dataPage == 1 || dataTotalPages == 1"
      @click="emitEventChanged('back')"
      :class="disabledButtonBack"
      class="flex items-center justify-end rounded w-52 px-3 h-8 m-2 text-sm font-medium text-white bg-blue-900 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
    >
      Praeitas puslapis
    </button>
    <p class="m-3 font-bold">{{ dataPage }}/{{ dataTotalPages }}</p>
    <button
      :disabled="dataPage == dataTotalPages"
      @click="emitEventChanged('forward')"
      :class="disabledButtonForward"
      class="flex items-center justify-start rounded px-3 h-8 w-52 m-2 ms-3 text-sm font-medium text-white bg-blue-900 border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
    >
      Kitas puslapis
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["currentPage", "totalPages"],
  data() {
    return {
      dataPage: this.currentPage,
      dataTotalPages: this.totalPages,
    };
  },
  computed: {
    disabledButtonBack() {
      if (this.dataPage == 1 || this.dataTotalPages == 1) {
        return `disabled:cursor-not-allowed disabled:opacity-50`;
      } else {
        return `hover:bg-blue-700 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white`;
      }
    },
    disabledButtonForward() {
      if (this.dataPage == this.dataTotalPages) {
        return `disabled:cursor-not-allowed disabled:opacity-50`;
      } else {
        return `hover:bg-blue-700 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white`;
      }
    },
  },
  methods: {
    emitEventChanged(payload) {
      if (payload == "forward" && this.dataPage < this.dataTotalPages) {
        this.dataPage += 1;
        this.$emit("PaginationValuesChanged", this.dataPage);
      }
      if (payload == "back" && this.dataPage > 1) {
        this.dataPage -= 1;
        this.$emit("PaginationValuesChanged", this.dataPage);
      }
    },
  },
};
</script>
