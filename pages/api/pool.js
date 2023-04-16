import axios from "axios";

export default async function handler(req, res) {
  const response = await axios.post(`${process.env.PUBLIC_API_URL}/pool`, data);

  res.status(200).json(response.data);
}
