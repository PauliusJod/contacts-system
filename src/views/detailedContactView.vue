<template>
  <div>
    <div v-if="contact != null" class="px-12" id="detailed">
      <h1
        class="mb-4 text-xl leading-none text-gray-900 md:text-4xl flex justify-start dark:text-white"
      >
        Detalesnė kontakto informacija:
      </h1>
      <button
        @click="toggleOpenModal('remove-contact-form')"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Trinti (laikinas)
      </button>

      <button
        @click="toggleOpenModal('add-contact-form')"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Pridėti kontaktą (laikinas)
      </button>
      <button
        @click="toggleOpenModal('edit-contact-form')"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Redaguoti kontaktą (laikinas)
      </button>

      <div class="w-full text-xl flex justify-start">
        <img
          v-if="contact.photo && contact.photo.length > 2"
          :src="`http://127.0.0.1:8090/api/files/employees/${contact.id}/${contact.photo}?thumb=100x300`"
          alt="Image"
          class="w-24 h-24 rounded"
        />
        <img
          v-else
          class="rounded-full w-20 h-20 m-5"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="image description"
        />
        <div class="py-4">
          <p class="px-2 py-1 flex justify-start text-xl">
            Vardas pavardė {{ contact.name != null ? contact.name : "Vardas" }}
            {{ contact.surname != null ? contact.surname : "Pavardė" }}
          </p>
          <p class="px-2 py-1 flex justify-start text-lg">
            Pozicija: {{ contact.position != null ? contact.position : "Nepaskirta" }}
          </p>
        </div>
      </div>
      <div
        class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">Kontaktinės detalės</th>
                <th scope="col" class="px-6 py-3">Kompanijos detalės</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  <p class="py-2">
                    Elektroninis paštas:
                    <a class="text-blue-800 hover:text-blue-600">{{
                      contact.email != null ? contact.email : "...@teltonika.lt"
                    }}</a>
                  </p>
                  <p class="py-2">
                    Telefono numeris:
                    <a class="text-blue-800 hover:text-blue-600">{{
                      contact.phone_number != null ? contact.phone_number : "+37000000000"
                    }}</a>
                  </p>
                </td>
                <td class="px-6 py-4 text-gray-900">
                  <p class="py-2">
                    Įmonė:
                    {{
                      contact.expand.company_id != null
                        ? contact.expand.company_id.name
                        : "Nepriskirta"
                    }}
                  </p>
                  <p class="py-2">
                    Ofisas:
                    {{
                      contact.expand.office_id != null
                        ? contact.expand.office_id.name
                        : "Nepriskirta"
                    }}
                  </p>
                  <p class="py-2">
                    Padalinys:
                    {{
                      contact.expand.division_id != null
                        ? contact.expand.division_id.name
                        : "Nepriskirta"
                    }}
                  </p>
                  <p class="py-2">
                    Skyrius:
                    {{
                      contact.expand.department_id != null
                        ? contact.expand.department_id.name
                        : "Nepriskirta"
                    }}
                  </p>
                  <p class="py-2">
                    Grupė:
                    {{
                      contact.expand.group_id != null ? contact.expand.group_id.name : "Nepriskirta"
                    }}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-else-if="getContactById.name != null" class="px-12">
      <h1
        class="mb-4 text-xl leading-none text-gray-900 md:text-4xl flex justify-start dark:text-white"
      >
        Detalesnė kontakto informacija:
      </h1>
      <div class="w-full text-xl flex justify-start">
        <img
          v-if="getContactById.photo != null && getContactById.photo.length > 2"
          :src="`http://127.0.0.1:8090/api/files/employees/${getContactById.id}/${getContactById.photo}?thumb=100x300`"
          alt="Image"
          class="w-24 h-24 rounded"
        />
        <img
          v-else
          class="rounded-full w-20 h-20 m-5"
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="image description"
        />
        <div class="py-4">
          <p class="px-2 py-1 flex justify-start text-xl">
            Vardas pavardė {{ getContactById.name != null ? getContactById.name : "Vardas" }}
            {{ getContactById.surname != null ? getContactById.surname : "Pavardė" }}
          </p>
          <p class="px-2 py-1 flex justify-start text-lg">
            Pozicija: {{ getContactById.position != null ? getContactById.position : "Nepaskirta" }}
          </p>
        </div>
      </div>
      <div
        class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
            >
              <tr>
                <th scope="col" class="px-6 py-3">Kontaktinės detalės</th>
                <th scope="col" class="px-6 py-3">Kompanijos detalės</th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                  <p class="py-2">
                    Elektroninis paštas:
                    <a class="text-blue-800 hover:text-blue-600">{{
                      getContactById.email != null ? getContactById.email : "...@teltonika.lt"
                    }}</a>
                  </p>
                  <p class="py-2">
                    Telefono numeris:
                    <a class="text-blue-800 hover:text-blue-600">{{
                      getContactById.phone_number != null
                        ? getContactById.phone_number
                        : "+37000000000"
                    }}</a>
                  </p>
                </td>
                <td class="px-6 py-4 text-gray-900">
                  <p class="py-2">
                    Įmonė:
                    {{
                      getContactById.expand.company_id != null
                        ? getContactById.expand.company_id.name
                        : "Nepriskirta"
                    }}
                  </p>
                  <p class="py-2">
                    Ofisas:
                    {{
                      getContactById.expand.office_id != null
                        ? getContactById.expand.office_id.name
                        : "Nepriskirta"
                    }}
                  </p>
                  <p class="py-2">
                    Padalinys:
                    {{
                      getContactById.expand.division_id != null
                        ? getContactById.expand.division_id.name
                        : "Nepriskirta"
                    }}
                  </p>
                  <p class="py-2">
                    Skyrius:
                    {{
                      getContactById.expand.department_id != null
                        ? getContactById.expand.department_id.name
                        : "Nepriskirta"
                    }}
                  </p>
                  <p class="py-2">
                    Grupė:
                    {{
                      getContactById.expand.group_id != null
                        ? getContactById.expand.group_id.name
                        : "Nepriskirta"
                    }}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <p v-else>Įrašo nėra.</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "detailedContactView",
  props: {
    contactId: { type: String },
  },
  methods: {
    ...mapActions({ getContactDataById: "getContactDataById" }),
    toggleOpenModal(name, data) {
      this.$store.commit("SHOW_MODAL", name);
      this.$store.commit("TOGGLE_VISIBLE");
    },
  },
  computed: {
    ...mapGetters({ contacts: "getContacts", getContactById: "getContactById" }),
    contact() {
      let value = this.contacts.find((item) => item.id == this.contactId);
      if (value == undefined) {
        this.getContactDataById(this.contactId);
        setTimeout(() => {
          if (!Object.hasOwn(this.getContactById, "surname")) {
            // this.$router.push({ path: '/'})
            this.$store.commit("ADD_NOTIFICATION", {
              message: "Contact not loaded!",
              type: "danger",
            });
          }
        }, 500);
      }
      return value;
    },
  },
};
</script>
