import PoolInfoHome from "@components/pools/poolinfo/PoolInfoHome";
import DashboardLayout from "@layout/DashboardLayout";
import SpaceBottom from "@layout/SpaceBottom";
import TopNav from "@sharedUi/TopNav";
import { useRouter } from "next/router";
import React from "react";

function Accessment() {
  const { query, isReady } = useRouter();

  const { year, type, id } = query;
  if (!isReady) {
    return <h2>loading</h2>;
  }
  return (
    <DashboardLayout>
      <SpaceBottom>
        <TopNav title={`${year} ${type} students`} />
        <PoolInfoHome id={id} />
      </SpaceBottom>
    </DashboardLayout>
  );
}

export default Accessment;
