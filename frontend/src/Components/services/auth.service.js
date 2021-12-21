import axios from "axios";

const API_URL = "http://localhost:5000/api/user/";

class AuthService {
  login(mail, password) {
    return axios
      .post(API_URL + "login", {
        mail,
        password
      }, {
        withCredentials:true,
      })
  }

  register(name, mail, password) {
    return axios.post(API_URL + "register", {
      name,
      mail,
      password
    });
  }

  getCurrentUser() {
    return axios.get(API_URL + "infos", {
      withCredentials:true,
    });
  }

  deleteCurrentUser() {
    return axios.get(API_URL + "removeCurrentUser", {
      withCredentials:true,
    });
  }
}

export default new AuthService();