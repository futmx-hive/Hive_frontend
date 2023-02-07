import axios from "axios";
import base from "../config";
import localStore from "../localStore";

const t =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2M2QxOTU3ODA2MzgwNGZjMjRiZTQyOTgiLCJlbWFpbCI6Imd1bWEubTE2MDA1MjFAc3QuZnV0bWlubmEuZWR1Lm5nIiwibm9uY2UiOiI5MDAwMGl1aXhrdyIsImlhdCI6MTY3NDY3OTc3MCwiZXhwIjoxNjc2MTE5NzcwLCJpc3MiOiJoaXZlYyJ9.FhNZSPIji15yr0lDPeIluqG5vPFgx-zTZbS4zTaFhuZzVtsTddO8rvO7EJcOUgmpgrWLdpkI5vxWvzyysqjfELSil6jFx-FdwXpVE-7WrM7evJw0Y63Ud1_3eSebfZ5Q5EqxT286_nEV3qdlMtN73lE4WHAke26pqGqMLwwJMSddufza4BD7f5j7Fxn1cl8Tif736IBbxITQEkwsgxnlJmfMzvZ3oRc7UB3qHW80HfKJV_-JSHA0C3CMygOTn49Da7dP0tlAdJ9R6ipZrmPCHaw3qDPmj0ud6fe-5NAzmmz8nuo-8BlkBr8CeDWlX4oXwmttB8lOTMwDvP_CXUMTtg";
class Pool {
  static headers() {
    const token = t ? t : JSON.parse(localStore.getValueFromKey("twix_chunk"));
    console.log("Token: ", token);
    return {
      headers: base.authH({
        entity: "twix_chunk",
        id: token,
      }),
    };
  }
  static async createPool(body) {
    const url = `${base.url}pool`;
    return axios.post(
      url,
      {
        ...body,
      },
      this.headers()
    );
  }
}

export default Pool;
