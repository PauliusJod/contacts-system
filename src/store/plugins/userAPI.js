import PocketBase from "pocketbase";
const pb = new PocketBase(BASE_API_URL);
import { jwtDecode } from "jwt-decode";
export const userAPI = (store) => {
  (store.checkHealth = async function () {
    try {
      const res = await pb.health.check();
      return res.code;
    } catch (error) {
      return new Error("Server down");
    }
  }),
    (store.getUserDataOnLoginAPI = async function (payload) {
      try {
        const authData = await pb
          .collection("users")
          .authWithPassword(payload.email, payload.password, { expand: "permissions_id" });
        return authData;
      } catch (error) {
        return new Error(error);
      }
    }),
    (store.confirmUserAPI = async function (token) {
      const decodedHeader = jwtDecode(token, { payload: true });
      const date = new Date(decodedHeader.exp * 1000);
      if (date > new Date()) {
        return true; //dar galioja
      } else {
        return false; //nebegalioja
      }
    }),
    (store.getUserPermissionsAPI = async function (id) {
      try {
        const permissions = await pb.collection("user_permissions").getFirstListItem(`id="${id}"`);
        return permissions;
      } catch (error) {
        return new Error(error);
      }
    }),
    (store.resetTokenAPI = async function () {
      pb.authStore.clear();
    });
};
