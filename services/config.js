import localStore from "./localStore";
import { encode } from "js-base64";
import axios from "axios";
const base = {
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3002/api/v1/"
      : "http://localhost:3002/api/v1/",

  basicH: {
    "Content-Type": "application/json",
  },
  authHBasic() {
    return {
      ...this.basicH,
      Authorization: `Bearer ${this.getToken()}`,
      DeviceId: localStore.getValueFromKey("dev_intel"),
    };
  },
  authH({ entity, id = "" }) {
    return {
      ...this.basicH,
      Authorization: `Bearer ${this.getToken()}`,
      Entity: entity,
      DeviceId: localStore.getValueFromKey("dev_intel"),
      Id: id,
    };
  },
  getToken() {
    let token = localStore.getValueFromKey("twix_chunk");
    localStore.removeKey("token");
    // let encodedToken = encode(token);
    // console.log(encodedToken);
    // return encodedToken;
    return token;
  },
  getMerchant() {
    const value = localStore.getValueFromKey("merchant");
    if (value) return JSON.parse(value);
    return false;
  },
  defaults: {
    getMerchant() {
      return this.getMerchant;
    },
    merchantSignup() {
      return {
        email: this.getMerchant() ? this.getMerchant().email : "",
        storeName: this.getMerchant() ? this.getMerchant().storeName : "",
        address: this.getMerchant() ? this.getMerchant().address : "",
        city: this.getMerchant() ? this.getMerchant().city : "",
        country: this.getMerchant() ? this.getMerchant().country : "",
        currency: this.getMerchant() ? this.getMerchant().currency : "",
        merchantId: this.getMerchant() ? this.getMerchant().merchantId : "",
      };
    },
    // merchantLogin() {
    // 	return {
    // 		deviceId: '15784528',
    // 		deviceModel: 'Samsung S20',
    // 		deviceOS: 'Android',
    // 		deviceOSVersion: '10',
    // 		notificationId: 'xyz',
    // 	};
    // },
  },
  async makeReq(callback) {
    try {
      const data = await callback();
      return data;
    } catch (error) {
      throw error;
    }
  },

  doCRUD(endpoint, headers) {
    return async (data, crud = "create", key = "crud", addHeaders = {}) => {
      const { id, ...rest } = data;
      data =
        crud === "create" || crud === "Add" || crud === "save" ? rest : data;
      // console.log ({crud});
      if (key !== "crud") {
        Reflect.deleteProperty(data, "crud");
      }
      const url = `${base.url}${endpoint}`;
      return this.makeReq(async () =>
        axios.post(
          url,
          { ...data, [key]: crud },
          {
            headers: headers
              ? { ...headers(), ...addHeaders }
              : { ...this.authHBasic(), ...addHeaders },
          }
        )
      );
    };
  },
};

export default base;
