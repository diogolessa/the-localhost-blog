import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import React from "react";
import styled from "styled-components";
import { copyToClipboard } from "../../utils/copy-to-clipboard";

const Pre = styled.pre`
  position: relative;
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow-x: auto;
  border-radius: 3px;
  .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
  font-family: "Courier New", Courier, monospace;
`;

const LineNo = styled.span`
  display: inline-block;
  width: 3em;
  user-select: none;
  opacity: 0.3;
`;

const CopyCode = styled.button`
  position: absolute;
  right: 0.25rem;
  border: 0;
  border-radius: 3px;
  margin: 0.25rem;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;

export const Code = ({ lang = "", code }) => {
  const onCopyClick = () => {
    copyToClipboard(code);
  };

  return (
    <Highlight {...defaultProps} code={code} language={lang} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <CopyCode onClick={onCopyClick}>Copy</CopyCode>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <LineNo>{i + 1}</LineNo>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};
