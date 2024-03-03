<template>
  <div class="relative bg-white p-2 w-2/4 rounded-sm shadow dark:bg-gray-700">
    <div class="px-8 text-left">
      <p class="pt-9 text-xl text-black">Ar tikrai norite ištrinti kontaktą?</p>
      <h3 class="mb-1 mt-5 text-md font-normal text-gray-600 dark:text-gray-400">
        Vardas ir pavardė: {{ data.name }} {{ data.surname }}
      </h3>
      <h3 class="mb-5 text-md font-normal text-gray-600 dark:text-gray-400">
        Pozicija: {{ data.position }}
      </h3>
      <div class="flex justify-end">
        <button
          type="button"
          @click="toggleCloseModal()"
          class="text-blue-900 outline-0 text-xl bg-white hover:bg-gray-100 focus:outline-none rounded-sm text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          Ne
        </button>
        <button
          type="button"
          @click="deleteItem()"
          class="text-blue-900 text-xl bg-white hover:bg-gray-100 focus:outline-none font-medium rounded-sm text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
        >
          Taip
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "remove-contact-form",
  data() {
    return {
      data: { id: null, name: null, surname: null, position: null },
    };
  },
  computed: {
    ...mapGetters({ isActive: "getVisible" }),
    ...mapGetters({ contact: "tempContact/getTempContact" }),
  },
  mounted() {
    this.data.id = this.contact.id;
    this.data.name = this.contact.name;
    this.data.surname = this.contact.surname;
    this.data.position = this.contact.position;
  },
  methods: {
    ...mapActions({ removeContact: "tempContact/removeContact" }),
    toggleCloseModal() {
      this.$store.commit("REMOVE_MODAL");
      this.$store.commit("TOGGLE_VISIBLE");
    },
    deleteItem() {
      this.removeContact(this.data.id);
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
