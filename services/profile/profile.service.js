import axios from "axios";
import base from "../config";
import localStore from "../localStore";

class Profile {
  static headers() {
    const token = JSON.parse(localStore.getValueFromKey("twix_chunk"));
    return {
      headers: base.authH({
        entity: "twix_chunk",
        id: token,
      }),
    };
  }
  static async getProfile(userID) {
    const url = `${base.url}profile/${userID}`;
    return axios.get(url, this.headers());
  }
  static async updateProfile(body) {
    const url = `${base.url}profile`;
    return axios.patch(
      url,
      {
        ...body,
      },
      this.headers()
    );
  }
}

export default Profile;
