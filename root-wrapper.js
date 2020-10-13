import { MDXProvider } from "@mdx-js/react";
import React from "react";
import { Code } from "./src/components/pageElements/Code";

const components = {
  h2: ({ children }) => <h2 style={{ color: "rebeccapurple" }}>{children}</h2>,
  "p.inlineCode": (props) => (
    <code {...props} style={{ backgroundColor: "lightgray" }}></code>
  ),
  pre: ({ children: { props } }) => {
    if (props.mdxType === "code") {
      const matches = props.className.match(/language-(?<lang>.*)/);
      const lang = matches?.groups?.lang;
      return <Code code={props.children.trim()} lang={lang} />;
    }
  },
};

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>;
};
