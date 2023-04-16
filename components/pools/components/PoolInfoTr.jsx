import HideOnMobile from "@layout/HideOnMobile";
import { useRouter } from "next/router";
import React from "react";

function PoolInfoTr({ student, index }) {
  const router = useRouter();
  return (
    <tr className="pos-r">
      <td>
        <span className="cap">{index + 1}</span>
      </td>
      <td>
        <span className="col-gra-d heading_small cap no-wrap">
          {student.temp_name}
        </span>
      </td>
      <HideOnMobile>
        <td>
          <div className="grid_txt cap heading_small col-col-gra-bt-d">
            <p>-</p>
          </div>
        </td>
        <td>
          <span>0</span>
        </td>
      </HideOnMobile>

      <td>
        <span className="badge_bg badge_gr upp">active</span>
      </td>
      <td className="col-pri">
        <button
          className="btn_small btn_bord col-pri  weit-1 br"
          onClick={() => router.push("/projects")}
        >
          {" "}
          view
        </button>
      </td>
    </tr>
  );
}

export default PoolInfoTr;
