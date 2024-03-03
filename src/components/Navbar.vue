<template>
  <nav class="bg-blue-900 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
    <div class="max-w-screen-xl flex flex-wrap items-center just ify-between mx-auto p-4">
      <router-link to="/"
        ><img
          width="250"
          height="400"
          id="O365_MainLink_TenantLogoImg"
          alt="Organizacijos logotipas"
          title="Organizacijos logotipas"
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjguMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDI0Ny4xOCA0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQ3LjE4IDQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cgkuc3Qxe2ZpbGw6IzAwMUE3Nzt9Cgkuc3Qye2NsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMTc2NzYyMDU0MDAwNjIzMDcwMTYwMDAwMDAxOTUzNTQ5Mzg0ODE4MzQ1ODgxXyk7fQoJLnN0M3tmaWxsOiNGMUY0Rjg7fQoJLnN0NHtmaWxsOm5vbmU7fQoJLnN0NXtmaWxsOm5vbmU7c3Ryb2tlOiNGNDNGNUU7c3Ryb2tlLXdpZHRoOjQuODE5NztzdHJva2UtbWl0ZXJsaW1pdDoxMDt9Cjwvc3R5bGU+CjxnIGlkPSJMYXllcl8xIj4KCTxnPgoJCTxnPgoJCQk8Zz4KCQkJCTxnPgoJCQkJCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iOTQuMDQsMjcuNjMgOTUuNjgsMjIuNjQgODYuMzgsMjIuNjQgODcuMzEsMTkuNzQgOTguMzUsMTkuNzQgMTAwLjA1LDE0LjU0IDgxLjk5LDE0LjU0IAoJCQkJCQk3NC44NiwzNi4yOSA5My4zOCwzNi4yOSA5NS4xMSwzMC45OSA4My42NCwzMC45OSA4NC43MywyNy42MyAJCQkJCSIvPgoJCQkJCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNzkuNCwxNC41NCA1OC4yMywxNC41NCA1Ni4zNSwyMC4yNSA2My41NCwyMC4yNSA1OC4yOCwzNi4yOSA2NS4zMSwzNi4yOSA3MC41NiwyMC4yNSAKCQkJCQkJNzcuNTMsMjAuMjUgCQkJCQkiLz4KCQkJCQk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjExMSwxNC41NCAxMDMuOTgsMTQuNTQgOTYuODUsMzYuMjkgMTE0LjA3LDM2LjI5IDExNS45NSwzMC41MSAxMDUuNzcsMzAuNTEgCQkJCQkiLz4KCQkJCQk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE5NC45MywxNC41NCAxODcuOCwzNi4yOSAxOTQuOTgsMzYuMjkgMjAyLjExLDE0LjU0IAkJCQkJIi8+CgkJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTI0Ni45NSwzNi4yOWwtMS4yNC0yMS43NWgtNy4xMmwtMTUuMjYsMjEuNDdsLTUuMDYtMTMuNDZsMTEuMi04LjAxaC04LjQ1bC05LjgzLDcuMmwyLjM1LTcuMmgtNi45NQoJCQkJCQlsLTcuMTIsMjEuNzVoNi45M2wyLjI4LTYuOTNsMi45Mi0xLjc5bDMuMTksOC43MWgxNS4yMWwxLjg3LTIuODdoOC4xNWwtMC4wNCwyLjg3SDI0Ni45NXogTTIzNC44LDI4Ljg0bDUuMTQtNy41M2wwLjIyLDcuNTMKCQkJCQkJSDIzNC44eiIvPgoJCQkJCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTgzLjc1LDE0LjU0IDE3OS43LDI3Ljc2IDE3Ni4wNywxNC41NCAxNjkuNCwxNC41NCAxNjIuMjgsMzYuMjkgMTY4Ljk0LDM2LjI5IDE3Mi45NiwyMy4xMyAKCQkJCQkJMTc2LjYzLDM2LjI5IDE4My4yOSwzNi4yOSAxOTAuNDIsMTQuNTQgCQkJCQkiLz4KCQkJCQk8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjE0MS41MSwxNC41NCAxMjAuMzQsMTQuNTQgMTE4LjQ2LDIwLjI1IDEyNS42NCwyMC4yNSAxMjAuMzksMzYuMjkgMTI3LjQyLDM2LjI5IDEzMi42NywyMC4yNSAKCQkJCQkJMTM5LjYzLDIwLjI1IAkJCQkJIi8+CgkJCQkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE2Mi45LDI0LjE5YzAuMDctMC4yOCwwLjE1LTAuNzUsMC4yNS0xLjRjMC40Mi0yLjc2LTAuMS00LjkyLTEuNTgtNi40OGMtMS40Ny0xLjU2LTMuNzQtMi4zNS02LjgtMi4zNQoJCQkJCQljLTMuNTEsMC02LjY0LDEuMDUtOS4zOSwzLjEzYy0yLjc2LDIuMDktNC43MSw0Ljg3LTUuODcsOC4zNGMtMC4zMiwwLjk3LTAuNTMsMS44Mi0wLjYzLDIuNTRjLTAuNDIsMi43NiwwLjEsNC45MywxLjU3LDYuNTEKCQkJCQkJYzEuNDcsMS41OSwzLjc0LDIuMzgsNi43OSwyLjM4YzMuNTcsMCw2LjcxLTEuMDIsOS40MS0zLjA3YzIuNzEtMi4wNSw0LjY2LTQuODQsNS44NC04LjM2CgkJCQkJCUMxNjIuNjksMjQuODksMTYyLjgyLDI0LjQ3LDE2Mi45LDI0LjE5eiBNMTU1Ljk5LDIzLjMxYy0wLjA5LDAuNTctMC4yNiwxLjI4LTAuNTQsMi4xMmMtMC42LDEuODItMS4zNSwzLjIxLTIuMjUsNC4xOAoJCQkJCQljLTEuMTIsMS4yMS0yLjQ5LDEuODEtNC4xMywxLjgxYy0xLjMyLDAtMi4yMi0wLjM4LTIuNjktMS4xNGMtMC40LTAuNjMtMC41LTEuNTMtMC4zMS0yLjczYzAuMDUtMC4zNCwwLjEzLTAuNjksMC4yMi0xLjA2CgkJCQkJCWMwLjA5LTAuMzYsMC4yLTAuNzEsMC4zMS0xLjA2YzAuNjEtMS44MiwxLjM1LTMuMiwyLjIyLTQuMTdjMS4xMi0xLjIyLDIuNTEtMS44Miw0LjE3LTEuODJjMS4zMiwwLDIuMjEsMC4zOSwyLjY4LDEuMTUKCQkJCQkJQzE1Ni4wNywyMS4yMSwxNTYuMTcsMjIuMTEsMTU1Ljk5LDIzLjMxeiIvPgoJCQkJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00Ni40MywzOS43M0wzMC43LDI0TDQ2LjQzLDguMjdsNS42NCw1LjY0bDYuOTYtNi45Nkw1Mi4wOCwwbC02Ljk2LDYuOTZMMzguMTUsMGwtNi45Niw2Ljk2TDI0LjIzLDAKCQkJCQkJbC0yNCwyNGwyNCwyNGw2Ljk2LTYuOTZMMzguMTUsNDhsNi45Ni02Ljk2TDUyLjA4LDQ4bDYuOTYtNi45NmwtNi45Ni02Ljk2TDQ2LjQzLDM5LjczeiBNMTguNTksMzkuNzNMMi44NiwyNEwxOC41OSw4LjI3CgkJCQkJCWw1LjY1LDUuNjRMMTQuMTUsMjRsMTAuMDksMTAuMDlMMTguNTksMzkuNzN6IE0zMi41MSwzOS43M0wxNi43OCwyNEwzMi41MSw4LjI3bDUuNjUsNS42NEwyOC4wOCwyNGwxMC4wNywxMC4wOUwzMi41MSwzOS43M3oiCgkJCQkJCS8+CgkJCQk8L2c+CgkJCTwvZz4KCQk8L2c+Cgk8L2c+CjwvZz4KPGcgaWQ9IkxheWVyXzIiPgo8L2c+Cjwvc3ZnPgo="
      /></router-link>
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="w-full md:block md:w-auto m-auto" id="navbar-dropdown">
        <ul
          v-if="user != null"
          class="flex flex-col font-bold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-24 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blue-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link
              to="/contacts"
              class="block py-2 px-3 text-white rounded hover:bg-blue-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              aria-current="page"
              >Kontaktai</router-link
            >
          </li>
          <li>
            <router-link
              to="/companies"
              class="block py-2 px-3 text-white rounded hover:bg-blue-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Įmonės</router-link
            >
          </li>
          <li>
            <router-link
              to="/structure"
              class="block py-2 px-3 text-white rounded hover:bg-blue-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Struktūra</router-link
            >
          </li>
          <li v-if="this.checkPermissions">
            <router-link
              to="/accounts"
              class="block py-2 px-3 text-white rounded hover:bg-blue-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >Paskyros</router-link
            >
          </li>
        </ul>
        <ul
          v-else
          class="flex flex-col font-bold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-24 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-blue-900 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <router-link
              to="/contacts"
              class="block py-2 px-3 text-white rounded hover:bg-blue-900 md:hover:bg-transparent md:border-0 md:hover:text-blue-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              aria-current="page"
              >Kontaktai</router-link
            >
          </li>
        </ul>
      </div>
      <!-- Not logged in dropdown -->
      <div
        v-if="user == null"
        class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse"
      >
        <button
          type="button"
          @click="redirectToLogin"
          :class="{
            'bg-blue-900 text-white hover:text-blue-200': !show,
            'mx-1 bg-white text-sm text-gray-900 font-normal': show,
          }"
          data-dropdown-toggle="loggedIn-dropdown-menu"
          class="inline-flex items-center font-bold justify-center px-4 py-2 dark:text-white rounded-lg cursor-pointer dark:hover:bg-gray-700 dark:hover:text-gray-200"
        >
          Prisijungti
        </button>
      </div>
      <!-- Logged in dropdown -->
      <div v-else class="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
        <button
          type="button"
          @click="show = !show"
          :class="{
            'bg-blue-900 text-white hover:text-blue-200': !show,
            'mx-1 bg-white text-sm text-gray-900 font-normal': show,
          }"
          data-dropdown-toggle="loggedIn-dropdown-menu"
          class="inline-flex items-center font-bold justify-center px-4 py-2 dark:text-white rounded-lg cursor-pointer dark:hover:bg-gray-700 dark:hover:text-gray-200"
        >
          <img
            v-if="user.avatar.length > 2"
            :src="`http://127.0.0.1:8090/api/files/users/${user.id}/${user.avatar}?thumb=100x100`"
            alt="Image"
            class="w-10 h-auto rounded"
          />
          <img
            v-else
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Image"
            class="w-10 h-auto rounded"
          />
        </button>
        <div
          :class="{ hidden: !show, block: show }"
          class="fixed top-10 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
          id="loggedIn-dropdown-menu"
        >
          <ul class="py-2 font-medium" role="none">
            <li>
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div class="inline-flex items-center">Keisti slaptažodį</div>
              </a>
            </li>
            <li>
              <a
                @click="resetUserData"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div class="inline-flex items-center">Atsijungti</div>
              </a>
            </li>
          </ul>
        </div>
        <button
          data-collapse-toggle="navbar-language"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-language"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      show: false,
      loggedIn: false,
    };
  },
  computed: {
    ...mapGetters({ user: "getUser", checkPermissions: "getSuperAdminPermissions" }),
  },
  methods: {
    ...mapActions(["resetUserToken"]),
    ...mapMutations({ resetUser: "RESET_USER" }),
    hideButton: function () {
      this.show = false;
    },
    redirectToLogin: function () {
      this.$router.push({ path: "/login" });
    },
    resetUserData: function () {
      this.hideButton();
      this.resetUser();
      this.resetUserToken();
      this.$router.push({ path: "/login" });
    },
  },
  created() {
    window.addEventListener("scroll", this.hideButton);
  },
};
</script>
