import BackButtonAndText from "@shared/SmallComponents/BackButtonAndText";
import Card from "@sharedUi/Card";
import SearchBox from "@sharedUi/SearchBox";
import axios from "axios";
import { BEARER } from "default";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import PoolInfoThead from "../components/PoolInfoThead";
import PoolInfoTr from "../components/PoolInfoTr";

function PoolInfoHome({ id }) {
  const router = useRouter();
  const [pool, setPool] = useState({});
  const getPool = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3002/api/v1/pool/${id}`,
        {
          headers: { Authorization: `Bearer ${BEARER}` },
        }
      );
      const data = await response.data;
      console.log("Data Data: ", data);
      if (data.success) {
        setPool(data.data);
      }
    } catch (error) {
      console.log("An error : ", error);
    }
  };

  useEffect(() => {
    getPool();
  }, []);
  return (
    <section>
      <div className="container">
        <aside className="grid_txt_2">
          <BackButtonAndText />
          <div className={"p-y-2 mb-2"}>
            {/* <div className="sp-btw flexi gap-25">
              <SearchBox placeholder={"search student"} full />
              <div className="con_1_1 gap-15">
                <button
                  className="btn_large btn_pri  weit-1 tablet"
                  onClick={() => router.push("/pools/update/3454")}
                >
                  edit pool
                </button>
                <button className="btn_large btn_bord  weit-1 tablet col-r bg-w">
                  delete pool
                </button>
              </div>
            </div> */}
          </div>
        </aside>
      </div>
      <div className="container">
        <Card xtraClassNames={"p-x-2"}>
          <table>
            <PoolInfoThead />
            {pool && Object.keys(pool).length > 0 && (
              <>
                {pool.students.map((student, index) => (
                  <PoolInfoTr
                    key={student.id}
                    index={index}
                    student={student.student}
                  />
                ))}
              </>
            )}
            {/* <PoolInfoTr />
            <PoolInfoTr />
            <PoolInfoTr /> */}
          </table>
        </Card>
      </div>
    </section>
  );
}

export default PoolInfoHome;
