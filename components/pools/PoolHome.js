import { TabBtn, TabPanel, Tabs } from "@sharedUi/Tabs";
import Card from "@sharedUi/Card";
import UseTabs from "@hooks/UseTabs";
import TheadTx from "./TheadTx";
import TrowTx from "./TrowTx";
import _ from "./style.module.scss";
import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { BEARER } from "default";

function TxHome() {
  const [active, setActive] = UseTabs(0);
  const [pools, setPools] = useState({});

  const getPools = async () => {
    try {
      const response = await axios.get("http://localhost:3002/api/v1/pool", {
        headers: { Authorization: `Bearer ${BEARER}` },
      });
      const data = await response.data;
      console.log("Data Data: ", data);
      if (data.success) {
        setPools(data.data);
      }
    } catch (error) {
      console.log("An error : ", error);
    }
  };

  useEffect(() => {
    getPools();
  }, []);

  useEffect(() => {
    console.log("Pools: ", pools);
  }, [pools]);
  return (
    <section className={`${_.tx_sec}`}>
      <div className="container-lg">
        <Card xtraClassNames={"grid_txt_2 p-"}>
          <div className="sp-btw flexi p-x-2 pt-2">
            <Link href={"/pools/create"}>
              <a className="btn_large btn_pri tablet">create pool</a>
            </Link>
          </div>
          <table className="table_t mt-2">
            <TheadTx />
            <tbody>
              {pools &&
                pools.length > 0 &&
                pools?.map((pool, index) => <TrowTx key={index} data={pool} />)}
            </tbody>
          </table>
        </Card>
      </div>
    </section>
  );
}

export default TxHome;
