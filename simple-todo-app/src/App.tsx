import React, { VFC } from "react";
import styled from "styled-components";
import { Dashboard } from "./views";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App: VFC = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};

export default App;
