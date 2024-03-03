<template>
  <div class="px-16">
    <p class="text-4xl font-light flex px-5">Įmonės</p>
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
      <p class="py-3">Pridėti naują įmonę:</p>

      <button
        @click="toggleOpenModal('remove-company-form')"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Trinti (laikinas)
      </button>

      <button
        @click="toggleOpenModal('add-company-form')"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Pridėti įmonę (laikinas)
      </button>
      <button
        @click="toggleOpenModal('edit-company-form')"
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Redaguoti įmonę (laikinas)
      </button>
    </div>
    <p class="px-4 flex font-bold text-sm">Iš viso rasta: 152 įmonių</p>

    <div class="grid grid-cols-2 py-8">
      <div>
        <div class="col-span-3 px-6 py-3 flex justify-start bg-gray-50">Įmonės pavadinimas</div>
        <div class="px-6 py-4 text-md text-gray-900 dark:text-white bg-white border-b">
          <p class="py-2 flex justify-start">Įmonė1</p>
          <p class="py-2 flex justify-start">Įmonė2</p>
          <p class="py-2 flex justify-start">Įmonė3</p>
          <p class="py-2 flex justify-start">Įmonė4</p>
        </div>
      </div>
      <div>
        <div class="col-span-3 px-6 py-3 bg-gray-50">Veiksmai</div>
        <div class="col-span-1 px-6 py-4 bg-white border-b text-sm">
          <div class="py-2 my-auto h-10 flex justify-center">
            <button class="px-14 mx-2 bg-blue-900 text-white rounded-full">Redaguoti</button>
            <button class="px-4 mx-2 bg-red-800 text-white rounded-full">Ištrinti</button>
          </div>
          <div class="py-2 my-auto h-10 flex justify-center">
            <button class="px-14 mx-2 bg-blue-900 text-white rounded-full">Redaguoti</button>
            <button class="px-4 mx-2 bg-red-800 text-white rounded-full">Ištrinti</button>
          </div>
          <div class="py-2 my-auto h-10 flex justify-center">
            <button class="px-14 mx-2 bg-blue-900 text-white rounded-full">Redaguoti</button>
            <button class="px-4 mx-2 bg-red-800 text-white rounded-full">Ištrinti</button>
          </div>
          <div class="py-2 my-auto h-10 flex justify-center">
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
  name: "companiesView",
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
