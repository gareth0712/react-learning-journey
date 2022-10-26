import { FC, PropsWithChildren } from "react";

type ComponentWithChildrenProps = PropsWithChildren;

const Products: FC<ComponentWithChildrenProps> = ({
  children,
}): JSX.Element => {
  return <h1>The Products page</h1>;
};

export default Products;
