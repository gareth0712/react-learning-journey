import { FC, PropsWithChildren } from "react";

// type SomeComponentProps = { a: string }; - for FC with props but without children
// type ComponentWithChildrenProps = PropsWithChildren<{ a: string }>; - For FC with children and props
type ComponentWithChildrenProps = PropsWithChildren;

const Products: FC<ComponentWithChildrenProps> = ({
  children,
}): JSX.Element => {
  return <h1>The Products page</h1>;
};

export default Products;
