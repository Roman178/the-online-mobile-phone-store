import React from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import Footer from "../components/common/Footer";
import { Layout } from "antd";
// import HomePage from "./HomePage";
// import ApplePage from "./brands/ApplePage";
// import HonorPage from "./brands/HonorPage";
// import HuaweiPage from "./brands/HuaweiPage";
// import SamsungPage from "./brands/SamsungPage";
// import XiaomiPage from "./brands/XiaomiPage";
// import NotFoundPage from "./common/NotFoundPage";
import ROUTES, { RenderRoutes } from "../route";

const { Content } = Layout;

function App(props) {
  return (
    <Layout>
      <Header />
      <Layout style={{ marginTop: "64px" }}>
        {props.location.pathname === "/" ? undefined : <Sidebar />}
        <Content>
          <RenderRoutes routes={ROUTES} />

          {/* <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/apple" component={ApplePage} />
            <Route path="/honor" component={HonorPage} />
            <Route path="/huawei" component={HuaweiPage} />
            <Route path="/samsung" component={SamsungPage} />
            <Route path="/xiaomi" component={XiaomiPage} />
            <Route component={NotFoundPage} />
          </Switch> */}
        </Content>
      </Layout>
      <Footer />
    </Layout>
  );
}

export default withRouter(App);