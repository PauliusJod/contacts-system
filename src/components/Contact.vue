<template>
  <!-- CARDS -->
  <div
    v-if="displayDefault"
    class="flex w-full my-auto sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-4"
  >
    <div class="bg-white w-full p-1 h-50 overflow-hidden rounded-lg shadow-md">
      <div @click="redirectToContact()" class="cursor-pointer">
        <div class="flex justify-between items-center mb-4">
          <div class="w-1/3">
            <img
              v-if="contactData.photo.length > 2"
              :src="`http://127.0.0.1:8090/api/files/employees/${contactData.id}/${contactData.photo}?thumb=100x100`"
              alt="Image"
              class="w-10 h-auto rounded"
            />
            <img
              v-else
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="Image"
              class="w-10 h-auto rounded"
            />
          </div>
          <p class="w-2/3 text-right h-max">{{ contactData.name }} {{ contactData.surname }}</p>
        </div>
        <p class="text-sm">{{ contactData.position }}</p>
        <p class="text-sm">{{ contactData.phone_number }}</p>
        <p class="text-sm">{{ contactData.email }}</p>
        <p class="text-sm">{{ contactData.expand.office_id.name }}</p>
      </div>
      <!-- <div class="column" @click="toggleOpenModal('confirm-delete-article');" title="Remove"><a>Remove</a></div> -->

      <div @submit.prevent class="flex justify-content m-1">
        <button @click="toggleEdit" class="bg-blue-800 rounded-full p-3 m-1 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            height="16"
            width="16"
            viewBox="0 0 512 512"
          >
            <path
              d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"
            />
          </svg>
        </button>
        <button @click="toggleDelete" class="bg-red-800 rounded-full p-3 m-1 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            height="16"
            width="14"
            viewBox="0 0 448 512"
          >
            <path
              d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- TABLE -->
  <tr
    v-else
    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    @click="redirectToContact()"
  >
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      {{ contactData.name }} {{ contactData.surname }}
    </th>
    <td class="px-6 py-4">
      {{ contactData.position }}
    </td>
    <td class="px-6 py-4">
      {{ contactData.phone_number }}
    </td>
    <td class="px-6 py-4">
      {{ contactData.email }}
    </td>
    <td class="px-6 py-4">
      {{ contactData.expand.office_id.name }}
    </td>
    <td>Edit, delete</td>
  </tr>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "Contact",
  props: {
    contactData: { type: Object },
    displayType: { type: Boolean },
  },
  data() {
    return {
      displayDefault: this.displayType,
      data: this.contactData,
    };
  },
  mounted() {
    console.log("newwwwwwwwwwww", this.contactData);
    this.data = this.contactData;
  },
  methods: {
    ...mapMutations("tempContact", ["SET_TEMP_CONTACT"]),
    redirectToContact() {
      this.$router.push({
        name: "detailedContactView",
        params: { contactId: this.contactData.id },
      });
    },
    openModal(modalName) {
      let dependencies = {
        company: this.data.expand.company_id,
        office: this.data.expand.office_id,
        division: this.data.expand.division_id,
        department: this.data.expand.department_id,
        group: this.data.expand.group_id,
      };
      console.log(dependencies);
      this.SET_TEMP_CONTACT({
        id: this.data.id,
        name: this.data.name,
        surname: this.data.surname,
        position: this.data.position,
        email: this.data.email,
        phoneNumber: this.data.phone_number,
        depend: dependencies,
      });
      this.$store.commit("SHOW_MODAL", modalName);
      this.$store.commit("TOGGLE_VISIBLE");
    },
    toggleEdit() {
      console.log("toggleEdit", this.data.expand.company_id.id);
      this.openModal("edit-contact-form");
    },
    toggleDelete() {
      console.log("toggleDelete", this.data);
      this.openModal("remove-contact-form");
    },
  },
};
</script>
