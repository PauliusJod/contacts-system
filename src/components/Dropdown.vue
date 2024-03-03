<template>
  <div class="my-1">
    <button
      :id="buttonText"
      data-dropdown-toggle="dropdown"
      data-dropdown-trigger="hover"
      @click="toggleButton()"
      class="max-h-10 w-full text-xs text-gray px-8 bg-gray-100 hover:bg-gray-100 border border-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      <p>{{ this.choosenValueText.length == 0 ? buttonText : this.choosenValueText }}</p>
      <svg
        class="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
    <div
      id="dropdown"
      class="fixed z-10 bg-gray-100 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 border border-gray-300"
      :class="opened ? `hidden` : ``"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li v-for="(val, index) in dataValues">
          <a
            href="#"
            :value="val.id"
            :key="val.id"
            @click="toggleValue(val.id, val.name)"
            class="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white"
            :class="val.id == choosenValue ? `bg-gray-500 text-white hover:text-white` : ''"
            >{{ val.name }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    buttonText: { type: String, default: "Button" },
    data: { type: Array, default: [] },
  },
  data() {
    return {
      opened: true,
      choosenValue: "",
      choosenValueText: "",
      dataValues: this.data,
    };
  },
  computed: {
    styleChoose() {
      return `bg-blue-200`;
    },
  },
  methods: {
    toggleButton: function () {
      this.opened = !this.opened;
    },
    emitEventChanged: function (val) {
      this.$emit("handleValue", val);
    },
    toggleValue: function (value, text) {
      if (this.choosenValue == value) {
        this.choosenValue = "";
        this.choosenValueText = "";
        this.emitEventChanged(null);
      } else {
        this.choosenValue = value;
        this.choosenValueText = text;
        this.emitEventChanged(value);
      }
      this.opened = true;
    },
    hideButton: function () {
      this.opened = true;
    },
  },
  created() {
    window.addEventListener("scroll", this.hideButton);
  },
};
</script>
