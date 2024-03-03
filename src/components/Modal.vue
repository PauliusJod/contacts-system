<template>
  <div :class="`${isActive ? '' : 'hidden'}`">
    <div
      class="shadow-2xl items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 bg-gray-900/60 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)]"
    >
      <div class="flex m-auto p-4 justify-center">
        <component v-bind:is="component"></component>
      </div>
      <button
        class="button is-danger m-3 p-3 rounded-lg bg-blue-900 text-white"
        @click="toggleCloseModal()"
      >
        Back
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import removeCompanyForm from "./forms/company/removeCompanyForm.vue";
import addCompanyForm from "./forms/company/addCompanyForm.vue";
import editCompanyForm from "./forms/company/editCompanyForm.vue";
import removeContactForm from "./forms/contacts/removeContactForm.vue";
import addContactForm from "./forms/contacts/addContactForm.vue";
import editContactForm from "./forms/contacts/editContactForm.vue";
import editPermissionsForm from "./forms/adminManagement/editPermissionsForm.vue";
//office
import addOfficeForm from "./forms/office/addOfficeForm.vue";
import editOfficeForm from "./forms/office/editOfficeForm.vue";
import removeOfficeForm from "./forms/office/removeOfficeForm.vue";
//division
import addDivisionForm from "./forms/division/addDivisionForm.vue";
import editDivisionForm from "./forms/division/editDivisionForm.vue";
import removeDivisionForm from "./forms/division/removeDivisionForm.vue";
//department
import addDepartmentForm from "./forms/department/addDepartmentForm.vue";
import editDepartmentForm from "./forms/department/editDepartmentForm.vue";
import removeDepartmentForm from "./forms/department/removeDepartmentForm.vue";
//group
import addGroupForm from "./forms/group/addGroupForm.vue";
import editGroupForm from "./forms/group/editGroupForm.vue";
import removeGroupForm from "./forms/group/removeGroupForm.vue";
export default {
  name: "Modal",
  components: {
    "remove-company-form": removeCompanyForm,
    "add-company-form": addCompanyForm,
    "edit-company-form": editCompanyForm,
    "remove-contact-form": removeContactForm,
    "add-contact-form": addContactForm,
    "edit-contact-form": editContactForm,
    "edit-permissions-form": editPermissionsForm,
    "add-office-form": addOfficeForm,
    "edit-office-form": editOfficeForm,
    "remove-office-form": removeOfficeForm,
    "add-division-form": addDivisionForm,
    "edit-division-form": editDivisionForm,
    "remove-division-form": removeDivisionForm,
    "add-department-form": addDepartmentForm,
    "edit-department-form": editDepartmentForm,
    "remove-department-form": removeDepartmentForm,
    "add-group-form": addGroupForm,
    "edit-group-form": editGroupForm,
    "remove-group-form": removeGroupForm,
  },
  data() {
    return {
      component: this.isComponent,
      isOpened: true,
    };
  },
  computed: {
    ...mapGetters({ isComponent: "getComponent", isActive: "getVisible" }),
  },
  watch: {
    isComponent: function (newv) {
      this.component = newv;
      console.log("this.component: ", this.component);
    },
  },
  methods: {
    toggleOpenModal() {
      this.$store.commit("TOGGLE_VISIBLE");
    },
    toggleCloseModal() {
      this.$store.commit("REMOVE_MODAL");
      this.$store.commit("TOGGLE_VISIBLE");
    },
  },
};
</script>
