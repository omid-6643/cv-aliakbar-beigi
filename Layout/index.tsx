import * as React from "react";
import { Header } from "@components";
import Props from "./Layout.props";

// eslint-disable-next-line react/display-name
const Layout = React.memo<Props>(({ children }) => (
  <>
    <Header />
    <main style={{ marginBottom: "16em" }}>{children}</main>
  </>
));

export default Layout;
