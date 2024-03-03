import PocketBase from "pocketbase";
const pb = new PocketBase(BASE_API_URL);

export const contactsAPI = (store) => {
  (store.removeContactAPI = async function (payload) {
    try {
      const res = await pb.collection("employees").delete(payload);
      return res;
    } catch (error) {
      return new Error("Permission denied.");
    }
  }),
    (store.editContactDataAPI = async function (payload) {
      try {
        console.log("payload--------", payload);
        const data = {
          name: payload.name,
          surname: payload.surname,
          email: payload.email,
          phone_number: payload.phone_number,
          position: payload.position,
          company_id: payload.company,
          office_id: payload.office,
          division_id: payload.division,
          department_id: payload.department,
          group_id: payload.group,
        };

        const record = await pb.collection("employees").update(payload.id, data);
        return record;
      } catch (error) {
        throw new Error("Edit failed");
      }
    }),
    (store.getAllContacts = async function (data) {
      try {
        const res = await pb.collection("employees").getList(data.id, data.amount, {
          filter: `name?~"${data.search}" || surname?~"${data.search}" || phone_number?~"${data.search}" || email?~"${data.search}" || position?~"${data.search}"`,
          expand: "company_id,group_id,department_id,office_id,division_id",
          fields:
            "id,name,surname,email,phone_number,photo,position,created,updated," +
            "expand.company_id.name,expand.company_id.id,expand.company_id.collectionId,expand.company_id.collectionName," +
            "expand.group_id.name,expand.group_id.id,expand.group_id.collectionId,expand.group_id.collectionName," +
            "expand.department_id.name,expand.department_id.id,expand.department_id.collectionId,expand.department_id.collectionName," +
            "expand.office_id.name,expand.office_id.id,expand.office_id.collectionId,expand.office_id.collectionName," +
            "expand.division_id.name,expand.division_id.id,expand.division_id.collectionId,expand.division_id.collectionName",
        });
        return res;
      } catch (error) {
        return new Error(error);
      }
    }),
    (store.getContactDataByIdAPI = async function (data) {
      try {
        const res = await pb.collection("employees").getOne(data, {
          expand: "company_id,group_id,department_id,office_id,division_id",
          fields:
            "id,name,surname,email,phone_number,photo,position,created,updated," +
            "expand.company_id.name,expand.company_id.id,expand.company_id.collectionId,expand.company_id.collectionName," +
            "expand.group_id.name,expand.group_id.id,expand.group_id.collectionId,expand.group_id.collectionName," +
            "expand.department_id.name,expand.department_id.id,expand.department_id.collectionId,expand.department_id.collectionName," +
            "expand.office_id.name,expand.office_id.id,expand.office_id.collectionId,expand.office_id.collectionName," +
            "expand.division_id.name,expand.division_id.id,expand.division_id.collectionId,expand.division_id.collectionName",
        });
        return res;
      } catch (error) {
        return new Error(error);
      }
    }),
    (store.getAllContactsByCompany = async function (data) {
      try {
        const res = await pb.collection("employees").getList(data.id, data.amount, {
          filter: `company_id.id="${data.by}" && ( name?~"${data.search}" || surname?~"${data.search}" || phone_number?~"${data.search}" || email?~"${data.search}" || position?~"${data.search}" )`,
          expand: "company_id,group_id,department_id,office_id,division_id",
          fields:
            "id,name,surname,email,phone_number,photo,position,created,updated," +
            "expand.company_id.name,expand.company_id.id," +
            "expand.office_id.name,expand.office_id.id," +
            "expand.division_id.name,expand.division_id.id," +
            "expand.department_id.name,expand.department_id.id," +
            "expand.group_id.name,expand.group_id.id,",
        });
        return res;
      } catch (error) {
        return new Error(error);
      }
    }),
    (store.getAllContactsByOffice = async function (data) {
      try {
        const res = await pb.collection("employees").getList(data.id, data.amount, {
          filter: `(company_id.id="${data.company}" && office_id.id="${data.by}") && ( name?~"${data.search}" || surname?~"${data.search}" || phone_number?~"${data.search}" || email?~"${data.search}" || position?~"${data.search}" )`,
          expand: "company_id,group_id,department_id,office_id,division_id",
          fields:
            "id,name,surname,email,phone_number,photo,position,created,updated," +
            "expand.company_id.name,expand.company_id.id," +
            "expand.office_id.name,expand.office_id.id," +
            "expand.division_id.name,expand.division_id.id," +
            "expand.department_id.name,expand.department_id.id," +
            "expand.group_id.name,expand.group_id.id,",
        });
        return res;
      } catch (error) {
        return new Error(error);
      }
    }),
    (store.getAllContactsByDivision = async function (data) {
      try {
        const res = await pb.collection("employees").getList(data.id, data.amount, {
          filter: `(company_id.id="${data.company}" && office_id.id="${data.office}" && division_id.id="${data.by}") && ( name?~"${data.search}" || surname?~"${data.search}" || phone_number?~"${data.search}" || email?~"${data.search}" || position?~"${data.search}" )`,
          expand: "company_id,group_id,department_id,office_id,division_id",
          fields:
            "id,name,surname,email,phone_number,photo,position,created,updated," +
            "expand.company_id.name,expand.company_id.id," +
            "expand.office_id.name,expand.office_id.id," +
            "expand.division_id.name,expand.division_id.id," +
            "expand.department_id.name,expand.department_id.id," +
            "expand.group_id.name,expand.group_id.id,",
        });
        return res;
      } catch (error) {
        return new Error(error);
      }
    }),
    (store.getAllContactsByDepartment = async function (data) {
      try {
        const res = await pb.collection("employees").getList(data.id, data.amount, {
          filter: `(company_id.id="${data.company}" && office_id.id="${data.office}" && division_id.id="${data.division}" && department_id.id="${data.by}") && ( name?~"${data.search}" || surname?~"${data.search}" || phone_number?~"${data.search}" || email?~"${data.search}" || position?~"${data.search}" )`,
          expand: "company_id,group_id,department_id,office_id,division_id",
          fields:
            "id,name,surname,email,phone_number,photo,position,created,updated," +
            "expand.company_id.name,expand.company_id.id," +
            "expand.office_id.name,expand.office_id.id," +
            "expand.division_id.name,expand.division_id.id," +
            "expand.department_id.name,expand.department_id.id," +
            "expand.group_id.name,expand.group_id.id,",
        });
        return res;
      } catch (error) {
        return new Error(error);
      }
    });
  store.getAllContactsByGroup = async function (data) {
    try {
      const res = await pb.collection("employees").getList(data.id, data.amount, {
        filter: `(company_id.id="${data.company}" && office_id.id="${data.office}" && division_id.id="${data.division}" && department_id.id="${data.department}" && group_id.id="${data.by}") && ( name?~"${data.search}" || surname?~"${data.search}" || phone_number?~"${data.search}" || email?~"${data.search}" || position?~"${data.search}" )`,
        expand: "company_id,group_id,department_id,office_id,division_id",
        fields:
          "id,name,surname,email,phone_number,photo,position,created,updated," +
          "expand.company_id.name,expand.company_id.id," +
          "expand.office_id.name,expand.office_id.id," +
          "expand.division_id.name,expand.division_id.id," +
          "expand.department_id.name,expand.department_id.id," +
          "expand.group_id.name,expand.group_id.id,",
      });
      return res;
    } catch (error) {
      return new Error(error);
    }
  };
};
