import { MDXProvider } from "@mdx-js/react";
import React from "react";

const components = {
  h2: ({ children }) => <h2 style={{ color: "rebeccapurple" }}>{children}</h2>,
  "p.inlineCode": (props) => (
    <code {...props} style={{ backgroundColor: "lightgray" }}></code>
  ),
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
