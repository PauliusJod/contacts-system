<template>
  <div class="relative bg-white p-2 w-2/4 rounded-sm shadow dark:bg-gray-700">
    <div class="p-8 text-left">
      <p class="py-5 text-xl text-black">Ar tikrai norite ištrinti skyrių?</p>
      <h3 class="mb-5 text-lg font-normal text-gray-600 dark:text-gray-400">
        Skyriaus pavadinimas: {{ data.name }}
      </h3>
      <div class="flex justify-end">
        <button
          data-modal-hide="popup-modal"
          type="button"
          @click="toggleCloseModal()"
          class="text-blue-900 text-xl bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-sm text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          Ne
        </button>
        <button
          data-modal-hide="popup-modal"
          type="button"
          @click="deleteItem()"
          class="text-blue-900 text-xl bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-sm text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
        >
          Taip
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "remove-department-form",
  data() {
    return {
      data: { id: null, name: null },
    };
  },
  computed: {
    //store getters define
    ...mapGetters({ isActive: "getVisible" }),
  },
  mounted() {
    this.data.id = "ID";
    this.data.name = "DepartmentName";
  },
  methods: {
    // store action define
    toggleCloseModal() {
      this.$store.commit("REMOVE_MODAL");
      this.$store.commit("TOGGLE_VISIBLE");
    },
    deleteItem() {
      // remove action
      this.toggleCloseModal();
    },
  },
};
</script>

<style>
.text {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: auto;
}
</style>
