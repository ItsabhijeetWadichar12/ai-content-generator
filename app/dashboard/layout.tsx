
"use client"

import React, { useState } from "react";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";
import { TotalUsageContext } from "../(context)/TotalUsageContext";
import { UserPricingContext } from "../(context)/UserPricingContext";
import { UpdateUsageContext } from "../(context)/UpdateUsageContext";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const [totalUsage , setTotalUsage] = useState<Number>(0);
  const [userPriceing , setUserPriceing] = useState<boolean>(false);
  const [updateUsage , setUpdateUsage] = useState<any>();

  return (
    <TotalUsageContext.Provider value={{totalUsage , setTotalUsage}}>
      <UserPricingContext.Provider value={{userPriceing , setUserPriceing}}>
        <UpdateUsageContext.Provider value={{updateUsage , setUpdateUsage}}>
      <div className="bg-slate-100 h-screen">
        <div className="md:w-64 hidden md:block fixed">
          <SideNav />
        </div>
        <div className="md:ml-64">
          <Header />
          {children}
        </div>
      </div>
      </UpdateUsageContext.Provider>
      </UserPricingContext.Provider>
    </TotalUsageContext.Provider>
  );
};

export default layout;
