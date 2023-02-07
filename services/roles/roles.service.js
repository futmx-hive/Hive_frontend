import axios from "axios";
import base from "../config";

class Roles {
  static headers() {
    const token = JSON.parse(localStore.getValueFromKey("twix_chunk"));
    return {
      headers: base.authH({
        entity: "twix_chunk",
        id: token,
      }),
    };
  }
  static async getAdminsOrSupervisors(roleID) {
    const url = `${base.url}role/basic/${roleID}`;
    return axios.get(url, this.headers());
  }
  static async assignRole(body) {
    const url = `${base.url}role/basic/assign`;
    return axios.post(
      url,
      {
        ...body,
      },
      this.headers()
    );
  }
}

export default Roles;
