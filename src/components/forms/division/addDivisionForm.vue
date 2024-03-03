<template>
  <div class="relative bg-white rounded-sm shadow-xl dark:bg-gray-700">
    <div class="p-8 text-left">
      <div class="flex justify-between mb-10">
        <p class="py-1 text-2xl text-black">Pridėti padalinį:</p>
        <button
          data-modal-hide="popup-modal"
          type="button"
          @click="toggleCloseModal()"
          class="px-4 text-blue-900 text-xl bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-full text-sm font-medium hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="12"
            fill="white"
            viewBox="0 0 384 512"
          >
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        </button>
      </div>
      <div class="grid grid-cols-2 gap-8 py-8">
        <div class="grid grid-cols-1 gap-4">
          <div class="pb-4">
            <p class="text-sm text-gray-800 dark:text-gray-400">Padalinio pavadinimas:</p>
            <input
              v-model="divisionValue"
              class="border border-sm outline-0 bg-gray-100 text-black text-sm text-normal p-2"
              placeholder="Įveskite padalinio pavadinimą..."
            />
          </div>
        </div>
        <div>
          <div class="h-fit" v-for="(option, index) in offices">
            <input
              :id="'office' + index"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              :for="'office' + index"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >{{ option.name }}</label
            >
          </div>
          <div class="p-4" v-if="divisionValue != ''">
            <button
              :disabled="divisionValue == ''"
              data-modal-hide="popup-modal"
              type="button"
              @click="addItem()"
              class="w-full my-2 py-1 px-16 text-white text-sm bg-blue-800 hover:bg-blue-700 focus:outline-none dark:focus:ring-red-800 font-medium rounded-sm text-sm inline-flex items-center justify-center text-center me-2"
            >
              Saugoti pakeitimus
            </button>
          </div>
          <div class="p-4" v-else>
            <button
              :disabled="divisionValue == ''"
              data-modal-hide="popup-modal"
              type="button"
              @click="addItem()"
              class="w-full my-2 py-1 px-16 text-white text-sm bg-gray-600 hover:bg-gray-700 focus:outline-none dark:focus:ring-red-800 font-medium rounded-sm text-sm inline-flex items-center justify-center text-center me-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                height="20"
                width="20"
                viewBox="0 0 512 512"
              >
                <path
                  d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "add-division-form",
  data() {
    return {
      divisionValue: "",
      offices: [{ name: "office1" }, { name: "office2" }],
    };
  },
  computed: {
    //store getters define
    ...mapGetters({ isActive: "getVisible" }),
  },
  // mounted(){
  // },
  methods: {
    // store action on add define
    toggleCloseModal() {
      this.$store.commit("REMOVE_MODAL");
      this.$store.commit("TOGGLE_VISIBLE");
    },
    addItem() {
      // add action
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
