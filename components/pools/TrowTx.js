import HideOnMobile from "@layout/HideOnMobile";
import { useRouter } from "next/router";
import React from "react";

function TrowTx(data) {
  console.log("Show me data: ", data.data);
  const router = useRouter();
  return (
    <tr className="pos-r">
      <td>
        <span className="cap">{data?.data?.year}</span>
      </td>
      <td>
        <div className="grid_txt ">
          <span className="col-gra-d small">
            {data?.data?.number_of_students}
          </span>
        </div>
      </td>
      <HideOnMobile>
        <td>
          <div className="grid_txt upp">
            <p>{data?.data?.number_of_supervisors}</p>
          </div>
        </td>
        <td>
          <span>{data?.data?.studentSubmissions?.length}</span>
        </td>
        <td>
          <span>78</span>
        </td>
      </HideOnMobile>

      <td>
        <span className="badge_bg badge_gr upp">
          {" "}
          {data?.data?.locked ? "active" : "Inactive"}
        </span>
      </td>
      <td className="col-pri">
        <button
          className="btn_small btn_bord col-pri  weit-1 br"
          onClick={() =>
            router.push(`/pools/2023/undergraduate?id=${data?.data?.id}`)
          }
        >
          {" "}
          observe
        </button>
      </td>
    </tr>
  );
}

export default TrowTx;
