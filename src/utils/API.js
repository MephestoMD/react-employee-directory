import axios from "axios";

const URL = "https://randomuser.me/api/?results=200&nat=us";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getEmployees: function () {
    return axios.get(URL);
  },
};
