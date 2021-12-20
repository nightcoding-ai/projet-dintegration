import axios from "axios";

const API_URL = "http://localhost:5000/api/user/";

class AuthService {
  login(mail, password) {
    return axios
      .post(API_URL + "login", {
        mail,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(name, mail, password) {
    return axios.post(API_URL + "register", {
      name,
      mail,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();