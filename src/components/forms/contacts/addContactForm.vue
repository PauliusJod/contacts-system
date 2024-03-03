<template>
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
            <div>
              <p class="text-xl text-black text-center">Redaguoti kontaktą:</p>
            </div>
            <div class="py-4">
              <p class="text-sm text-gray-800 dark:text-gray-400">Vardas:</p>
              <input
                v-model="username"
                class="border border-sm w-full outline-0 bg-gray-100 placeholder-gray-700 text-black text-sm text-normal p-2"
                placeholder="Įveskite vardą..."
              />
            </div>
            <div class="py-4">
              <p class="text-sm text-gray-800 dark:text-gray-400">Pavardė:</p>
              <input
                v-model="surname"
                class="border border-sm w-full outline-0 bg-gray-100 placeholder-gray-700 text-black text-sm text-normal p-2"
                placeholder="Įveskite pavardę..."
              />
            </div>
            <div class="py-4">
              <p class="text-sm text-gray-800 dark:text-gray-400">Pozicija:</p>
              <input
                v-model="position"
                class="border border-sm w-full outline-0 bg-gray-100 placeholder-gray-700 text-black text-sm text-normal p-2"
                placeholder="Įveskite poziciją..."
              />
            </div>
            <div class="py-4">
              <p class="text-black text-xl text-center">Kontaktinė informacija:</p>
            </div>
            <div class="py-4">
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
            <div class="py-4">
              <p class="text-sm text-gray-800 dark:text-gray-400">Telefono numeris:</p>
              <div class="flex justify-start cursor-pointer w-full">
                <input
                  type="tel"
                  v-model="phoneNumber"
                  class="border border-sm w-full outline-0 bg-gray-100 placeholder-gray-700 placeholder-xs text-black text-sm text-normal py-2 px-10"
                  placeholder="Įveskite telefono numerį..."
                />
                <div class="absolute my-3 mx-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="14"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-4">
            <div>
              <p class="text-black text-xl text-center">Įmonės detalės:</p>
            </div>
            <div class="py-4">
              <p class="text-sm text-gray-800">Įmonė:</p>
              <dropdownForm
                id="company"
                :key="
                  'companyC' + this.getContactCompanies.length + this.getContactCompanies[0]?.id
                "
                :options="getContactCompanies"
                :currentValue="contact.depend.company"
                :dropDownType="1"
                placeholder="Pasirinktine įmonę..."
                @handleValue="valueChange"
              ></dropdownForm>
            </div>
            <div class="py-4">
              <p class="text-sm text-gray-800">Ofisas:</p>
              <dropdownForm
                id="office"
                :key="
                  'officeC' +
                  this.getContactOffices.length +
                  this.getContactOffices[0]?.id +
                  this.companySelect
                "
                :options="getContactOffices"
                :currentValue="contact.depend.office"
                :dropDownType="2"
                placeholder="Pasirinktine ofisą..."
                @handleValue="valueChange"
              ></dropdownForm>
            </div>
            <div class="py-4">
              <p class="text-sm text-gray-800">Padalinys:</p>
              <dropdownForm
                id="division"
                :key="
                  'divisionC' +
                  this.getContactDivisions.length +
                  this.getContactDivisions[0]?.id +
                  this.companySelect +
                  this.officeSelect
                "
                :options="getContactDivisions"
                :currentValue="contact.depend.division"
                :dropDownType="3"
                placeholder="Pasirinktine padalinį..."
                @handleValue="valueChange"
              ></dropdownForm>
            </div>
            <div class="py-4">
              <p class="text-sm text-gray-800">Skyrius:</p>
              <dropdownForm
                id="department"
                :key="
                  'departmentC' +
                  this.getContactDepartments.length +
                  this.getContactDepartments[0]?.id +
                  this.companySelect +
                  this.officeSelect +
                  this.divisionSelect
                "
                :options="getContactDepartments"
                :currentValue="contact.depend.department"
                :dropDownType="4"
                placeholder="Pasirinktine skyrių..."
                @handleValue="valueChange"
              ></dropdownForm>
            </div>
            <div class="py-4">
              <p class="text-sm text-gray-800">Grupė:</p>
              <dropdownForm
                id="group"
                :key="
                  'groupC' +
                  this.getContactGroups.length +
                  this.getContactGroups[0]?.id +
                  this.companySelect +
                  this.officeSelect +
                  this.divisionSelect +
                  this.departmentSelect
                "
                :options="getContactGroups"
                :currentValue="contact.depend.group"
                :dropDownType="5"
                placeholder="Pasirinktine grupę..."
                @handleValue="valueChange"
              ></dropdownForm>
            </div>
            <div class="py-4">
              <!-- <input type="file" @change="previewFiles" multiple> -->
              <input
                type="file"
                id="fileInput"
                class="my-2 py-1 mx-2 px-16 w-3/4 text-white text-sm bg-blue-800 hover:bg-blue-700 focus:outline-none font-medium rounded-sm text-sm inline-flex items-centertext-center me-2"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 gap-4">
            <button
              @click="submitEdit"
              :disabled="submitEnable()"
              :class="submitEnable() ? 'bg-blue-900' : ''"
              class="absolute bottom-8 my -2 py-1 px-20 text-white text-sm bg-blue-800 hover:bg-blue-700 focus:outline-none dark:focus:ring-red-800 font-medium rounded-sm text-sm inline-flex items-centertext-center me-2"
            >
              Pridėti
            </button>
            {{ submitEnable() }}
          </div>
        </div>
        <div class="flex justify-start my-3"></div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import dropdownForm from "../dropdownForm.vue";
export default {
  name: "add-contact-form",
  components: {
    dropdownForm,
  },
  data() {
    return {
      data: { id: null, name: null },
      username: "",
      surname: "",
      position: "",
      email: "",
      phoneNumber: "",
      companySelect: null,
      officeSelect: null,
      divisionSelect: null,
      departmentSelect: null,
      groupSelect: null,
    };
  },
  computed: {
    //store getters define
    ...mapGetters({ isActive: "getVisible" }),
    ...mapGetters([
      "getContactCompanies",
      "getContactOffices",
      "getContactDivisions",
      "getContactDepartments",
      "getContactGroups",
    ]),
    ...mapGetters({ contact: "tempContact/getTempContact" }),
  },
  mounted() {
    this.data.id = "ID";
    this.data.name = "CompanyName";
  },
  methods: {
    // store action on add define
    submitEdit() {
      console.log({
        id: this.userId,
        name: this.username,
        surname: this.surname,
        email: this.email,
        phoneNumber: this.phoneNumber,
        company: this.companySelect,
        office: this.officeSelect,
        division: this.divisionSelect,
        department: this.departmentSelect,
        group: this.groupSelect,
      });
      const payload = {
        id: this.userId,
        name: this.username,
        surname: this.surname,
        email: this.email,
        phoneNumber: this.phoneNumber,
        company: this.companySelect,
        office: this.officeSelect,
        division: this.divisionSelect,
        department: this.departmentSelect,
        group: this.groupSelect,
      };
      this.editContact(payload);
    },
    submitEnable() {
      if (
        this.username.length < 3 ||
        this.surname.length < 3 ||
        this.phoneNumber.length < 3 ||
        this.emailValid() ||
        this.position.length < 3 ||
        this.companySelect == null ||
        this.officeSelect == null ||
        this.divisionSelect == null
      ) {
        return true;
      } else {
        return false;
      }
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
    toggleCloseModal() {
      this.$store.commit("REMOVE_MODAL");
      this.$store.commit("TOGGLE_VISIBLE");
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
