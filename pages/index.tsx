import { MainResume } from "@themes";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

interface A4ContainerProps {
  children?: React.ReactNode;
  id: string;
  className: string;
}

const A4Container = styled.div<A4ContainerProps>`
  min-width: 28cm;
  width: 28cm;
  margin: 0 auto;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ali Akbar Beigi Resume</title>
        <meta name="description" content="Ali Akbar Beigi Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <A4Container id="resume-container" className="print-this">
        <MainResume />
      </A4Container>
    </>
  );
};

export default Home;
