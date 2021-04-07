import React, { useRef, useEffect, useState } from "react";
import { withTheme } from "styled-components";

import {
  HeroCardWrapper,
  CodeCardWrapper,
  ColorPaletteWrapper,
  ColorBoxWrapper,
} from "./HeroCard.style";

function copyToClipboard(str: string) {
  let el: HTMLTextAreaElement = document.createElement("textarea");
  el.value = str;
  el.style.position = "absolute";
  el.style.left = "-9999px";
  el.setAttribute("readonly", "");
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

export const CodeCard = () => {
  const [text, setText] = useState(`new Date().getFullYear() - 1998;`);
  const age = new Date().getFullYear() - 1998;
  const changeText = () => {
    let space = " ".repeat(54);
    setText(age + ";" + space);
  };

  return (
    <CodeCardWrapper>
      <pre>
        1&nbsp;&nbsp;class <b>Person</b> {"{"}
      </pre>
      <pre>2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor() {"{"}</pre>
      <pre>
        3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = "
        <b>Pranjal Agnihotri</b>";
      </pre>
      <pre>
        4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits = ["
        <b>DEV</b>", "<b>JS</b>"];
      </pre>
      <pre onClick={changeText}>
        5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.age = {text}
      </pre>
      <pre>6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {"}"}</pre>
      <pre>7&nbsp;&nbsp;{"}"}</pre>
    </CodeCardWrapper>
  );
};

const ColorBox = ({ color }: { color: string }) => {
  const tooltipRef = useRef<HTMLDivElement>(null);

  const copy = () => {
    copyToClipboard(color);
    tooltipRef?.current?.classList?.add("tooltip-animate");
  };
  useEffect(() => {
    return tooltipRef?.current?.addEventListener("animationend", () => {
      tooltipRef?.current?.classList.remove("tooltip-animate");
    });
  });

  return (
    <ColorBoxWrapper
      ref={tooltipRef}
      onClick={copy}
      style={{ background: color }}
    />
  );
};

export const ColorPalette = withTheme(({ theme }) => {
  return (
    <ColorPaletteWrapper>
      <ColorBox color={theme.primaryColor} />
      <ColorBox color={"#6A98F0"} />
      <ColorBox color={theme.gradient} />
      <ColorBox color={theme.primaryBlack} />
      <ColorBox color={theme.accentColor} />
    </ColorPaletteWrapper>
  );
});

export const HeroCard = () => {
  return (
    <HeroCardWrapper>
      <CodeCard />
      <ColorPalette />
    </HeroCardWrapper>
  );
};
