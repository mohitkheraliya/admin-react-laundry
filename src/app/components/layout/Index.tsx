import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../sidebar/Index";
import { Header } from "../header/Index";
import { Footer } from "../footer/Index";


const MasterLayout: React.FC = () => {
  return (
    <div className="flex grow">
      <Sidebar />
      <div className="wrapper flex grow flex-col">
        <Header />
        <main className="grow content pt-5" id="content" role="content">
          <div className="d-flex flex-column flex-column-fluid">
            <Outlet />
          </div>
          <div className="container-fixed"></div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MasterLayout;
