import axios from "axios";

export default async function handler(req, res) {
  const response = await axios.get(`${process.env.PUBLIC_API_URL}/pool`);
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1200, stale-while-revalidate=600"
  );
  res.status(200).json(response.data);
}
