import axios from "axios";
import base from "../config";
import localStore from "../localStore";

// import base64 from 'base-64';

class Auth {
  static async login(body) {
    const url = `${base.url}auth/passwordless`;
    return axios.post(
      url,
      {
        id: 2,
        ...body,
      },
      {
        headers: base.basicH,
      }
    );
  }

  static async verifyOtp(body) {
    const url = `${base.url}auth/verifyotp`;
    const response = await axios.post(
      url,
      {
        ...body,
      },
      {
        headers: base.basicH,
      }
    );

    return response;
  }
}

export default Auth;
