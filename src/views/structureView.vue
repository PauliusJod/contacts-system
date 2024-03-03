<template>
  <div class="px-16">
    <p class="text-4xl font-light flex px-5">Struktūra</p>
    <div class="flex py-4">
      <button class="px-4 py-3 mx-5 bg-blue-900 border border-blue-900 text-white rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="26"
          width="24"
          fill="white"
          viewBox="0 0 448 512"
        >
          <path
            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
          />
        </svg>
      </button>
      <p class="py-3">Pridėti naują struktūrą:</p>
    </div>

    <button
      @click="toggleOpenModal('add-office-form')"
      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      add office (laikinas)
    </button>
    <button
      @click="toggleOpenModal('edit-office-form')"
      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      edit office (laikinas)
    </button>

    <button
      @click="toggleOpenModal('add-division-form')"
      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      add division (laikinas)
    </button>
    <button
      @click="toggleOpenModal('edit-division-form')"
      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      edit division (laikinas)
    </button>

    <button
      @click="toggleOpenModal('add-department-form')"
      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      add department (laikinas)
    </button>
    <button
      @click="toggleOpenModal('edit-department-form')"
      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      edit department (laikinas)
    </button>

    <button
      @click="toggleOpenModal('add-group-form')"
      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      add group (laikinas)
    </button>
    <button
      @click="toggleOpenModal('edit-group-form')"
      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      edit group (laikinas)
    </button>

    <button
      @click="toggleOpenModal('remove-group-form')"
      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      remove group (laikinas)
    </button>
    <button
      @click="toggleOpenModal('remove-office-form')"
      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      remove office (laikinas)
    </button>

    <button
      @click="toggleOpenModal('remove-division-form')"
      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      remove division (laikinas)
    </button>
    <button
      @click="toggleOpenModal('remove-department-form')"
      class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      remove department (laikinas)
    </button>

    <div class="grid grid-cols-2 py-8">
      <div>
        <div class="col-span-3 px-6 py-3 flex justify-start bg-gray-50">Pavadinimas</div>
        <div class="px-6 py-4 text-xl text-gray-900 dark:text-white bg-white border-b">
          <p class="py-2 flex justify-start">Ofisas</p>
          <p class="py-2 flex justify-start">Padalinys</p>
          <p class="py-2 flex justify-start">Skyrius</p>
          <p class="py-2 flex justify-start">Grupė</p>
        </div>
      </div>
      <div>
        <div class="col-span-3 px-6 py-3 bg-gray-50">Veiksmai</div>
        <div class="col-span-1 px-6 py-2 bg-white border-b text-sm">
          <div class="py-3 my-auto h-12 flex justify-center">
            <button class="px-14 mx-2 bg-blue-900 text-white rounded-full">Redaguoti</button>
            <button class="px-4 mx-2 bg-red-800 text-white rounded-full">Ištrinti</button>
          </div>
          <div class="py-3 my-auto h-12 flex justify-center">
            <button class="px-14 mx-2 bg-blue-900 text-white rounded-full">Redaguoti</button>
            <button class="px-4 mx-2 bg-red-800 text-white rounded-full">Ištrinti</button>
          </div>
          <div class="py-3 my-auto h-12 flex justify-center">
            <button class="px-14 mx-2 bg-blue-900 text-white rounded-full">Redaguoti</button>
            <button class="px-4 mx-2 bg-red-800 text-white rounded-full">Ištrinti</button>
          </div>
          <div class="py-3 my-auto h-12 flex justify-center">
            <button class="px-14 mx-2 bg-blue-900 text-white rounded-full">Redaguoti</button>
            <button class="px-4 mx-2 bg-red-800 text-white rounded-full">Ištrinti</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "structureView",
  data() {
    return {
      test: false,
    };
  },
  methods: {
    toggleOpenModal(name, data) {
      // this.SET_TEMP_DATA({id: data.id, name: data.name})
      this.$store.commit("SHOW_MODAL", name);
      this.$store.commit("TOGGLE_VISIBLE");
    },
  },
};
</script>
