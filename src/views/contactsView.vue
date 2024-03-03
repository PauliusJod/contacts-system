<template>
  <div class="px-12">
    <h1 class="flex text-4xl m-5">Kontaktų sistema</h1>
    <div class="flex right-0 px-5">
      <input
        type="text"
        v-model="searchValue"
        class="border rounded border-blue-800 bg-gray-100 px-4 py-2 leading-tight text-xs"
        placeholder="Ieškoti kontakto.."
      />
      <div>
        <button
          id="dropdown-amount-per-page"
          data-dropdown-toggle="dropdown"
          @click="showFilter = !showFilter"
          class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 my-1 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            class="fill-white"
            viewBox="0 0 512 512"
          >
            <path
              d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"
            />
          </svg>
        </button>
        <div
          id="dropdown"
          class="fixed z-10 bg-white divide-y divide-gray-100 rounded-lg mx-3 shadow w-12 dark:bg-gray-700"
          :class="{ '': showFilter, hidden: !showFilter }"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="#"
                class="block py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                @click="changeContactsPerPage(5)"
                >5</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                @click="changeContactsPerPage(10)"
                >10</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                @click="changeContactsPerPage(15)"
                >15</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                @click="changeContactsPerPage(20)"
                >20</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                @click="changeContactsPerPage(25)"
                >25</a
              >
            </li>
          </ul>
        </div>
      </div>
      <button
        @click="changeDisplay"
        class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 my-1 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          height="16"
          width="14"
          viewBox="0 0 448 512"
        >
          <path
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
          />
        </svg>
      </button>
    </div>

    <button
      @click="toggleOpenModal('add-contact-form')"
      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      Pridėti kontaktą (laikinas)
    </button>
    <p class="flex mx-5 py-2">
      Iš viso rasta: {{ contactsAmount }} {{ contactsAmount % 10 === 0 ? "kontaktų" : "kontaktai" }}
    </p>

    <div class="grid grid-cols-2 gap-6 sm:grid-cols-5">
      <p class="m-3 text-left rtl:text-right">Įmonė:</p>
      <p class="m-3 text-left rtl:text-right">Ofisas:</p>
      <p class="m-3 text-left rtl:text-right">Padalinys:</p>
      <p class="m-3 text-left rtl:text-right">Skyrius:</p>
      <p class="m-3 text-left rtl:text-right">Grupė:</p>
    </div>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-5">
      <Dropdown
        buttonText="Filtruoti įmones..."
        :dropdownId="1"
        :key="'company' + this.getCompanies.length"
        :data="getCompanies"
        @handleValue="companyChange"
      />
      <Dropdown
        buttonText="Filtruoti ofisus..."
        :dropdownId="2"
        :key="'office' + this.getOffices.length"
        :data="getOffices"
        @handleValue="officeChange"
      />
      <Dropdown
        buttonText="Filtruoti padalinius..."
        :dropdownId="3"
        :key="'division' + this.getDivisions.length"
        :data="getDivisions"
        @handleValue="divisionChange"
      />
      <Dropdown
        buttonText="Filtruoti skyrius..."
        :dropdownId="4"
        :key="'department' + this.getDepartments.length"
        :data="getDepartments"
        @handleValue="departmentChange"
      />
      <Dropdown
        buttonText="Filtruoti grupes..."
        :dropdownId="5"
        :key="'group' + this.getGroups.length"
        :data="getGroups"
        @handleValue="groupChange"
      />
    </div>
    <!-- CARDS -->
    <div v-if="displayDefault">
      <div v-if="contacts.length > 0" class="flex flex-wrap -mx-4" :key="contacts.length">
        <Contact
          v-for="(contact, index) in contacts"
          :key="contact.id + indexChilds + contact.name + contact.surname"
          v-bind:contactData="contact"
          :displayType="displayDefault"
        ></Contact>
      </div>
      <div v-else>
        <p class="flex items-center justify-center mt-4">Nėra įrašų</p>
      </div>
    </div>
    <!-- TABLE -->
    <div v-else class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Vardas pavardė</th>
            <th scope="col" class="px-6 py-3">Pozicija</th>
            <th scope="col" class="px-6 py-3">Telefono numeris</th>
            <th scope="col" class="px-6 py-3">Elektroninis paštas</th>
            <th scope="col" class="px-6 py-3">Adresas</th>
          </tr>
        </thead>
        <tbody v-if="contacts.length != 0">
          <Contact
            v-for="(contact, index) in contacts"
            :key="contact.id + indexChilds"
            v-bind:contactData="contact"
            :displayType="displayDefault"
          ></Contact>
        </tbody>
        <p v-else class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Nėra įrašų
        </p>
      </table>
    </div>
    <div v-if="contacts.length != 0">
      <Pagination
        :key="this.currentPage + this.totalPages"
        :currentPage="this.currentPage"
        :totalPages="this.totalPages"
        @PaginationValuesChanged="handlePaginationValues"
      ></Pagination>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import Contact from "../components/Contact.vue";
import Dropdown from "../components/Dropdown.vue";
import Pagination from "../components/Pagination.vue";
export default {
  name: "contactsView",
  components: {
    Contact,
    Dropdown,
    Pagination,
  },
  data() {
    return {
      searchValue: "",
      displayDefault: true,
      indexChilds: 0,
      data: 0,
      currentPage: 1,
      contactsPerPage: 5,
      showFilter: false,
      companySelect: "",
      officeSelect: "",
      divisionSelect: "",
      departmentSelect: "",
      groupSelect: "",
    };
  },
  watch: {
    searchValue: function () {
      if (this.timer != null) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.currentPage = 1;
        this.filterContacts();
        this.showFilter = false;
      }, 500);
    },
    contacts: function (newv) {
      if (this.contactsPerPage != newv.length) {
        setTimeout(() => {
          this.filterContacts();
        }, 500);
      }
    },
  },
  computed: {
    ...mapGetters({
      contacts: "getContacts",
      contactsAmount: "getContactsAmount",
      totalPages: "getContactsTotalPages",
      relationships: "getContactsRelationships",
    }),
    ...mapGetters(["getCompanies", "getOffices", "getDivisions", "getDepartments", "getGroups"]),
  },
  methods: {
    ...mapActions({
      contactsData: "getContactsData",
      contactsByCompany: "getContactsDataByCompany",
      contactsByOffice: "getContactsDataByOffice",
      contactsByDivision: "getContactsDataByDivision",
      contactsByDepartment: "getContactsDataByDepartment",
      contactsByGroup: "getContactsDataByGroup",
    }),
    ...mapActions([
      "fetchCompanies",
      "fetchOfficesByCompany",
      "fetchDivisionsByOffice",
      "fetchDepartmentsByDivision",
      "fetchGroupsByDepartment",
    ]),
    ...mapMutations([
      "CHANGE_SELECTED_COMPANY",
      "CHANGE_SELECTED_OFFICE",
      "CHANGE_SELECTED_DIVISION",
      "CHANGE_SELECTED_DEPARTMENT",
      "CHANGE_SELECTED_GROUP",
      "SET_OFFICES",
      "SET_DIVISIONS",
      "SET_DEPARTMENTS",
      "SET_GROUPS",
    ]),
    companyChange(companySelect) {
      this.hideFilter();
      if (this.companySelect != companySelect) {
        this.currentPage = 1;
      }
      this.companySelect = companySelect;
      this.selectedOffice = "";
      this.CHANGE_SELECTED_COMPANY(this.companySelect);
      this.CHANGE_SELECTED_OFFICE(null);
      this.officeSelect = "";
      this.CHANGE_SELECTED_DIVISION(null);
      this.divisionSelect = "";
      this.CHANGE_SELECTED_DEPARTMENT(null);
      this.departmentSelect = "";
      this.CHANGE_SELECTED_GROUP(null);
      this.groupSelect = "";
      this.SET_OFFICES([]);
      this.SET_DIVISIONS([]);
      this.SET_DEPARTMENTS([]);
      this.SET_GROUPS([]);
      if (this.companySelect) {
        this.fetchOfficesByCompany(this.companySelect);
        this.contactsByCompany({
          id: this.currentPage,
          by: this.companySelect,
          amount: this.contactsPerPage,
          search: this.searchValue,
        });
      } else {
        this.contactsData({
          id: this.currentPage,
          amount: this.contactsPerPage,
          search: this.searchValue,
        });
      }
    },
    officeChange(officeSelect) {
      this.hideFilter();
      if (this.officeSelect != officeSelect) {
        this.currentPage = 1;
      }
      this.officeSelect = officeSelect;
      this.CHANGE_SELECTED_OFFICE(this.officeSelect);
      this.CHANGE_SELECTED_DIVISION(null);
      this.divisionSelect = "";
      this.CHANGE_SELECTED_DEPARTMENT(null);
      this.departmentSelect = "";
      this.CHANGE_SELECTED_GROUP(null);
      this.groupSelect = "";
      this.SET_DIVISIONS([]);
      this.SET_DEPARTMENTS([]);
      this.SET_GROUPS([]);
      let a = new Date();
      this.indexChilds = a;
      if (this.companySelect && this.officeSelect) {
        this.fetchDivisionsByOffice(this.officeSelect);
        let payload = {
          id: this.currentPage,
          by: this.officeSelect,
          company: this.companySelect,
          amount: this.contactsPerPage,
          search: this.searchValue,
        };
        this.contactsByOffice(payload);
      } else {
        this.filterContacts();
      }
    },
    divisionChange(divisionSelect) {
      this.hideFilter();
      if (this.divisionSelect != divisionSelect) {
        this.currentPage = 1;
      }
      this.divisionSelect = divisionSelect;
      this.CHANGE_SELECTED_DIVISION(this.divisionSelect);
      this.CHANGE_SELECTED_DEPARTMENT(null);
      this.departmentSelect = "";
      this.CHANGE_SELECTED_GROUP(null);
      this.groupSelect = "";
      this.SET_DEPARTMENTS([]);
      this.SET_GROUPS([]);
      if (this.companySelect && this.officeSelect && this.divisionSelect) {
        this.fetchDepartmentsByDivision(this.divisionSelect);
        let payload = {
          id: this.currentPage,
          by: this.divisionSelect,
          company: this.companySelect,
          office: this.officeSelect,
          amount: this.contactsPerPage,
          search: this.searchValue,
        };
        this.contactsByDivision(payload);
      } else {
        this.filterContacts();
      }
    },
    departmentChange(departmentSelect) {
      this.hideFilter();
      if (this.departmentSelect != departmentSelect) {
        this.currentPage = 1;
      }
      this.departmentSelect = departmentSelect;
      this.CHANGE_SELECTED_DEPARTMENT(this.departmentSelect);
      this.CHANGE_SELECTED_GROUP(null);
      this.groupSelect = "";
      this.SET_GROUPS([]);
      if (this.companySelect && this.officeSelect && this.divisionSelect && this.departmentSelect) {
        this.fetchGroupsByDepartment(this.departmentSelect);
        let payload = {
          id: this.currentPage,
          by: this.departmentSelect,
          company: this.companySelect,
          office: this.officeSelect,
          division: this.divisionSelect,
          amount: this.contactsPerPage,
          search: this.searchValue,
        };
        this.contactsByDepartment(payload);
      } else {
        this.filterContacts();
      }
    },
    groupChange(groupSelect) {
      this.hideFilter();
      if (this.groupSelect != groupSelect) {
        this.currentPage = 1;
      }
      this.groupSelect = groupSelect;
      if (
        this.companySelect &&
        this.officeSelect &&
        this.divisionSelect &&
        this.departmentSelect &&
        this.groupSelect
      ) {
        let payload = {
          id: this.currentPage,
          by: this.groupSelect,
          company: this.companySelect,
          office: this.officeSelect,
          division: this.divisionSelect,
          department: this.departmentSelect,
          amount: this.contactsPerPage,
          search: this.searchValue,
        };
        this.contactsByGroup(payload);
        this.CHANGE_SELECTED_GROUP(this.groupSelect);
      } else {
        this.filterContacts();
        this.CHANGE_SELECTED_GROUP(null);
        this.SET_GROUPS([]);
      }
    },
    filterContacts() {
      this.hideFilter();
      if (this.groupSelect != "" && this.groupSelect != null) {
        this.groupChange(this.groupSelect);
      } else if (this.departmentSelect != "" && this.departmentSelect != null) {
        this.departmentChange(this.departmentSelect);
      } else if (this.divisionSelect != "" && this.divisionSelect != null) {
        this.divisionChange(this.divisionSelect);
      } else if (this.officeSelect != "" && this.officeSelect != null) {
        this.officeChange(this.officeSelect);
      } else if (this.companySelect != "" && this.companySelect != null) {
        this.companyChange(this.companySelect);
      } else {
        let payload = {
          id: this.currentPage,
          amount: this.contactsPerPage,
          search: this.searchValue,
        };
        this.contactsData(payload);
      }
    },
    handlePaginationValues(data) {
      this.currentPage = data;
      this.filterContacts();
    },
    changeDisplay() {
      this.showFilter = false;
      this.displayDefault = !this.displayDefault;
      let a = new Date();
      this.indexChilds = a;
    },
    changeContactsPerPage(value) {
      this.contactsPerPage = value;
      this.showFilter = false;
      this.filterContacts();
    },
    hideFilter() {
      this.showFilter = false;
    },

    toggleOpenModal(name, data) {
      this.$store.commit("SHOW_MODAL", name);
      this.$store.commit("TOGGLE_VISIBLE");
    },
  },
  async created() {
    await this.fetchCompanies();
    window.addEventListener("scroll", this.hideFilter);
  },
  mounted() {
    let payload = { id: 1, amount: this.contactsPerPage, search: this.searchValue };
    this.contactsData(payload);
  },
};
</script>
