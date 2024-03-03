import PocketBase from "pocketbase";
const pb = new PocketBase(API_URL);
export const collectionsAPI = (store) => {
  (store.fetchCompaniesCollection = async function () {
    try {
      let companies = await pb.send(`/companies/records`);
      return companies;
    } catch (error) {
      throw new Error(error);
    }
  }),
    (store.fetchOfficesCollection = async function (id) {
      try {
        let officesList = [];
        let offices = await pb.send(`/companies/records/${id}`, {
          expand: `companies_offices(company_id).office_id`,
        });
        if (offices.expand != null) {
          for (const office of offices.expand["companies_offices(company_id)"]) {
            officesList.push(office.expand.office_id);
          }
        }
        return officesList;
      } catch (error) {
        throw new Error(error);
      }
    }),
    (store.fetchDivisionsCollection = async function (id) {
      try {
        let divisionsList = [];
        let divisions = await pb.send(`/offices/records/${id}`, {
          expand: `offices_divisions(office_id).division_id`,
        });
        if (divisions.expand != null) {
          for (const division of divisions.expand["offices_divisions(office_id)"]) {
            divisionsList.push(division.expand.division_id);
          }
        }
        return divisionsList;
      } catch (error) {
        throw new Error(error);
      }
    }),
    (store.fetchDepartmentsCollection = async function (id) {
      try {
        let departmentsList = [];
        let departments = await pb.send(`/divisions/records/${id}`, {
          expand: `divisions_departments(division_id).department_id`,
        });
        if (departments.expand != null) {
          for (const department of departments.expand["divisions_departments(division_id)"]) {
            departmentsList.push(department.expand.department_id);
          }
        }
        return departmentsList;
      } catch (error) {
        throw new Error(error);
      }
    }),
    (store.fetchGroupsCollection = async function (id) {
      try {
        let groupsList = [];
        let groups = await pb.send(`/departments/records/${id}`, {
          expand: `departments_groups(department_id).group_id`,
        });
        if (groups.expand != null) {
          for (const group of groups.expand["departments_groups(department_id)"]) {
            groupsList.push(group.expand.group_id);
          }
        }
        return groupsList;
      } catch (error) {
        throw new Error(error);
      }
    });
};
