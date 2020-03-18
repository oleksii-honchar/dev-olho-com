/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { h, FunctionalComponent, Fragment } from "preact";

export function Root() {
  const url = "thestar.com";

  const jsChromeCommand = `javascript:window.open('googlechrome://${url}', '_system')`;
  const jsSafariCommand = `javascript:window.open('safari://app.com/${url}', '_system')`;

  return (
    <Fragment>
      <h1>R&d to open link from FB app in external browser</h1>
      <p>Link: {url}</p>
      <ul>
        <li>
          <a href={jsChromeCommand} target="_system">
            Open link in Chrome via: {jsChromeCommand}
          </a>
        </li>
        <li>
          <a href={jsSafariCommand} target="_system">
            Open link in Safari via: {jsSafariCommand}
          </a>
        </li>
      </ul>
    </Fragment>
  );
}
