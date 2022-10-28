import { FC } from "react";
import { Link } from "react-router-dom";

const Home: FC = (): JSX.Element => {
  return (
    <>
      <h1>The Home page</h1>
      <Link to="/basics-and-components">Chapter 1: Basics and Components</Link>
    </>
  );
};

export default Home;
