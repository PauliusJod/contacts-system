<template>
  <div :key="this.options.length + this.options[0]?.id">
    <button
      id="dropdownDefaultButton"
      data-dropdown-toggle="dropdown"
      @click="toggleButton()"
      class="text-gray-800 justify-between w-full bg-white hover:bg-gray-100 shadow-lg border border-gray-100 focus:text-black focus:outline-none rounded-md text-xs px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      {{ choosenValueText }}
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
    <!-- Dropdown menu -->
    <div
      id="dropdown"
      class="fixed z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      :class="opened ? `` : `hidden`"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li v-for="(option, index) in chooseOptions">
          <a
            href="#"
            :class="option.id == choosenValue ? 'bg-gray-300' : ''"
            class="block px-4 py-2 hover:bg-gray-100 hover:text-black text-xs"
            @click="
              choosenValue = option.id;
              choosenValueText = option.name;
              emitEventChanged();
              toggleClose();
            "
            >{{ option.name }}</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdownForm",
  props: {
    placeholder: { type: String },
    dropDownType: { type: Number },
    options: { type: Array, default: [] },
    currentValue: { type: Object },
  },
  data() {
    return {
      opened: false,
      type: this.dropDownType,
      chooseOptions: this.options,
      choosenValue: "",
      choosenValueText: "",
      timer: null,
    };
  },
  created() {
    this.choosenValue = this.currentValue?.id || null;
    this.choosenValueText = this.currentValue?.name || this.placeholder;
  },
  computed: {},
  methods: {
    emitEventChanged: function () {
      this.$emit("handleValue", this.type, this.choosenValue);
    },
    toggleButton: function () {
      this.opened = !this.opened;
    },
    toggleClose: function () {
      this.opened = false;
    },
  },
  watch: {
    opened: function () {
      if (this.opened) {
        if (this.timer != null) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          this.toggleClose();
        }, 2500);
      }
    },
    options: function (newv) {
      // console.log("options update",newv)
      this.choosenValue = null;
      this.choosenValueText = this.placeholder;
    },
  },
};
</script>

<style></style>
