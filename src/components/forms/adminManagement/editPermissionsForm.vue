<template>
  <!-- h-3/4 -->
  <div class="relative items-center bg-white rounded-sm shadow-xl dark:bg-gray-700 w-max">
    <div class="p-8 text-left">
      <div class="flex justify-end mb-10">
        <button
          data-modal-hide="popup-modal"
          type="button"
          @click="toggleCloseModal()"
          class="px-4 text-blue-900 w-11 h-10 text-xl bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-full text-sm font-medium hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
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
      <form>
        <div class="grid grid-cols-3 gap-8">
          <div class="grid grid-cols-1 gap-4">
            <div class="pb-4">
              <p class="text-sm text-gray-800 dark:text-gray-400">Vardas:</p>
              <input
                v-model="username"
                class="border border-sm w-full outline-0 bg-gray-100 placeholder-gray-700 text-black text-sm text-normal p-2"
                placeholder="Įveskite vardą..."
              />
            </div>
            <div class="pb-4">
              <p class="text-sm text-gray-800 dark:text-gray-400">Elektroninis paštas:</p>
              <div class="flex justify-start cursor-pointer w-full">
                <input
                  type="email"
                  v-model="email"
                  class="border border-sm w-full outline-0 bg-gray-100 placeholder-gray-700 text-black text-sm text-normal py-2 px-10"
                  placeholder="Įveskite el.paštą..."
                />
                <div class="absolute my-3 mx-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="pb-4">
              <input
                type="file"
                id="fileInput"
                class="my-2 py-1 text-xs mx-2 px-16 w-3/4 text-white text-sm bg-blue-800 hover:bg-blue-700 focus:outline-none font-medium rounded-sm text-sm inline-flex items-centertext-center me-2"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 gap-4">
            <div>
              <p class="text-black text-xl text-center">Administracinės teisės:</p>
            </div>
            <div class="flex items-center mb-1">
              <input
                id="ce-contacts"
                v-model="ce_contacts"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="ce-contacts"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Redaguoti ir kurti kontaktus</label
              >
            </div>
            <div class="flex items-center mb-1">
              <input
                id="r-contacts"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="r-contacts"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Trinti kontaktus</label
              >
            </div>
            <div class="flex items-center mb-1">
              <input
                id="ce-companies"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="ce-companies"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Redaguoti ir kurti įmones</label
              >
            </div>
            <div class="flex items-center mb-1">
              <input
                id="r-companies"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="r-companies"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Trinti įmones</label
              >
            </div>
            <div class="flex items-center mb-1">
              <input
                id="ce-offices"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="ce-offices"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Redaguoti ir kurti ofisus</label
              >
            </div>
            <div class="flex items-center mb-1">
              <input
                id="r-offices"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="r-offices"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Trinti ofisus</label
              >
            </div>
            <div class="flex items-center mb-1">
              <input
                id="ce-structures"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="ce-structures"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Redaguoti ir kurti struktūras</label
              >
            </div>
            <div class="flex items-center mb-1">
              <input
                id="r-structures"
                type="checkbox"
                value=""
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                for="r-structures"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Trinti struktūras</label
              >
            </div>
          </div>
          <div class="grid grid-cols-1 gap-4">
            <button
              class="absolute bottom-8 my -2 py-1 px-20 text-white text-sm bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-sm text-sm inline-flex items-centertext-center me-2"
            >
              Pridėti
            </button>
          </div>
        </div>
        <div class="flex justify-start my-3">
          <!-- <button data-modal-hide="popup-modal" type="button" @click="addItem()" class="my -2 py-1 px-16 text-white text-sm bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-sm text-sm inline-flex items-centertext-center me-2">
                    Pridėti
                </button> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import dropdownForm from "../dropdownForm.vue";
export default {
  name: "edit-permissions-form",
  components: {
    dropdownForm,
  },
  data() {
    return {
      data: { id: null, name: null },
      username: "",
      email: "",
      ce_contacts: null,
      r_contacts: null,
      ce_companies: null,
      r_companies: null,
      ce_offices: null,
      r_offices: null,
      ce_structures: null,
      r_structures: null,
    };
  },
  watch: {
    ce_contacts: function (newv) {
      console.log(newv);
    },
  },

  computed: {
    //store getters define
    ...mapGetters({ isActive: "getVisible" }),
  },
  mounted() {
    this.data.id = "ID";
    this.data.name = "CompanyName";
  },
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
    valueChange(type, value) {
      if (type == 1) {
        this.companySelect = value;
        return;
      }
      if (type == 2) {
        this.officeSelect = value;
        return;
      }
      if (type == 3) {
        this.divisionSelect = value;
        return;
      }
      if (type == 4) {
        this.departmentSelect = value;
        return;
      }
      if (type == 5) {
        this.groupSelect = value;
        return;
      }
      alert("type not found: ", type);
    },
    previewFiles(event) {
      console.log(event.target.files);
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
