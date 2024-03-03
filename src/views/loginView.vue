<template>
  <div class="relative">
    <section v-if="user == null" class="w-full bg-blue-900 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <button @click="redirectToHomePage" class="absolute top-10 left-10 rounded-full p-2">
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="18" viewBox="0 0 448 512">
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
          </svg>
        </button>
        <div
          class="w-[32rem] bg-white shadow dark:border md:mt-0 h-[52rem] xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8 m-9">
            <h1
              class="text-xl leading-tight tracking-tight text-gray-900 md:text-3xl dark:text-white mx-9 text-center"
            >
              Admin prisijungimas:
            </h1>
            <div class="space-y-4 md:space-y-6 mx-5 py-9">
              <form>
                <div>
                  <label for="email" class="flex mb-2 text-sm text-gray-900 dark:text-white"
                    >Elektroninis paštas</label
                  >
                  <input
                    v-model="emailData"
                    type="email"
                    name="email"
                    id="email"
                    maxlength="254"
                    minlength="5"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Įveskite el. pašto adresą..."
                    required=""
                  />
                </div>
                <div>
                  <label for="password" class="flex mb-2 text-sm text-gray-900 dark:text-white"
                    >Slaptažodis</label
                  >

                  <div class="flex justify-end cursor-pointer w-full">
                    <input
                      v-model="passwordData"
                      :type="showPassword ? 'password' : 'text'"
                      name="password"
                      id="password"
                      maxlength="254"
                      minlength="5"
                      placeholder="••••••••"
                      required=""
                      class="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <div class="absolute my-3 mx-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        @click="showPassword = !showPassword"
                        :class="{ hidden: !showPassword, '': showPassword }"
                        height="16"
                        width="20"
                        viewBox="0 0 576 512"
                      >
                        <path
                          d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        @click="showPassword = !showPassword"
                        :class="{ hidden: showPassword, '': !showPassword }"
                        class="flex"
                        height="16"
                        width="20"
                        viewBox="0 0 640 512"
                      >
                        <path
                          d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>

              <div class="flex items-center justify-between">
                <button
                  :disabled="emailData.length <= 5 || passwordData.length <= 5"
                  type="submit"
                  @click="triggerUserGet"
                  :class="
                    emailData.length <= 5 || passwordData.length <= 5
                      ? 'bg-gray-700 cursor-not-allowed'
                      : 'bg-blue-700 cursor-pointer'
                  "
                  class="w-full cursor-default mx-9 my-9 text-white hover:bg-primary-700 rounded-sm focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Prisijungti
                </button>
              </div>
              <div
                v-if="
                  (emailData.length <= 5 && emailData.length != 0) ||
                  (passwordData.length <= 5 && passwordData.length != 0) ||
                  emailValid
                "
                class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <p
                  v-if="(emailData.length <= 5 && emailData.length != 0) || emailValid"
                  class="font-medium"
                >
                  Wrong E-mail format!
                </p>
                <p v-if="passwordData.length <= 5 && passwordData.length != 0" class="font-medium">
                  Short password!
                </p>
              </div>
            </div>
            <div
              v-if="loginError"
              class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span class="font-medium">{{ loginError }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section v-else>
      <p>Esate prisijungęs</p>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "loginView",
  data() {
    return {
      showPassword: true,
      emailData: "",
      passwordData: "",
      emailValid: false,
    };
  },
  computed: {
    ...mapGetters({ user: "getUser", loginError: "getError" }),
  },
  methods: {
    ...mapActions({ getUserData: "getUserDataOnLogin" }),
    ...mapMutations(["SET_LOGIN_ERROR"]),
    async triggerUserGet() {
      const email = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
      let emailValidate = email.exec(this.emailData);
      if (emailValidate) {
        this.emailValid = false;
        const response = await this.getUserData({
          email: this.emailData,
          password: this.passwordData,
        });
        if (response && this.user) {
          this.redirectToHomePage();
        } else {
          // failed login notify
        }
      } else {
        this.emailValid = true;
      }
    },
    redirectToHomePage() {
      this.$router.replace({ path: "/" });
    },
  },
  watch: {
    loginError: function (newv) {
      if (newv) {
        setTimeout(() => {
          this.SET_LOGIN_ERROR(null);
        }, 3000);
      }
    },
  },
};
</script>

<style>
#password {
  position: relative;
}

#password:before {
  content: "";
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  width: 20px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 25 25' fill-rule='evenodd'%3E%3Cpath d='M16.036 18.455l2.404-2.405 5.586 5.587-2.404 2.404zM8.5 2C12.1 2 15 4.9 15 8.5S12.1 15 8.5 15 2 12.1 2 8.5 4.9 2 8.5 2zm0-2C3.8 0 0 3.8 0 8.5S3.8 17 8.5 17 17 13.2 17 8.5 13.2 0 8.5 0zM15 16a1 1 0 1 1 2 0 1 1 0 1 1-2 0'%3E%3C/path%3E%3C/svg%3E")
    center / contain no-repeat;
}
</style>
