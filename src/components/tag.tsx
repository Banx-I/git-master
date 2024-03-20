import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Tag = ({ children }: Props) => {
  return (
    <>
      <span className="tag">{children}</span>
    </>
  );
};

export default Tag;
