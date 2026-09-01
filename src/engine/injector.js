import React from "react";
import { createRoot } from "react-dom/client";
import Icon from "../components/Icon.jsx";
import contentCss from "../styles/content.css?inline";

/* 
  
  // Marks a chat box we've already handled, so the MutationObserver below
  // doesn't inject a second icon every time Facebook re-renders

*/
const HANDLED_ATTR = "data-simply-handled";

const trackedIcons = []; // { targetElement, host }
const ICON_SIZE = 24;
const OFFSET = 3;

function positionHost(targetElement, host) {
  const rect = targetElement.getBoundingClientRect();
  host.style.left = `${rect.right - ICON_SIZE}px`;
  host.style.top = `${rect.bottom - ICON_SIZE + OFFSET}px`;
}

function mountIconNextTo(targetElement, { insertText, onOpen }) {
  targetElement.setAttribute(HANDLED_ATTR, "true");
/* 
  // Mounted directly on <body>, completely outside the target site's own
  // layout & a manual rAF loop below keeps
  // it visually pinned to the chat box regardless of where it actually
  // lives in the site's DOM.
 */
  
  const host = document.createElement("div");
  host.style.position = "fixed";
  host.style.zIndex = "999999";
  document.body.appendChild(host);

  const shadowRoot = host.attachShadow({ mode: "open" });

  const style = document.createElement("style");
  style.textContent = contentCss;
  shadowRoot.appendChild(style);

  const mountPoint = document.createElement("div");
  shadowRoot.appendChild(mountPoint);

  const root = createRoot(mountPoint);
  root.render(
    React.createElement(Icon, {
      onClick: () => onOpen(targetElement, insertText),
    }),
  );

  positionHost(targetElement, host);
  trackedIcons.push({ targetElement, host });
}


function trackPositions() {
  trackedIcons.forEach(({ targetElement, host }) =>
    positionHost(targetElement, host),
  );
  requestAnimationFrame(trackPositions);
}
requestAnimationFrame(trackPositions);

export function initInjector(adapter, { onOpen }) {
  // Catch chat boxes that already exist on page load.
  document.querySelectorAll(adapter.selector).forEach((el) => {
    if (!el.hasAttribute(HANDLED_ATTR)) {
      mountIconNextTo(el, { insertText: adapter.insertText, onOpen });
    }
  });

  /* 
  // Facebook is a single-page app that adds/removes chat boxes  without a
  // page reload; a MutationObserver is how we catch those DOM changes.
*/

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (!(node instanceof HTMLElement)) continue;

        const matches = node.matches(adapter.selector)
          ? [node]
          : Array.from(node.querySelectorAll?.(adapter.selector) ?? []);

        matches.forEach((el) => {
          if (!el.hasAttribute(HANDLED_ATTR)) {
            mountIconNextTo(el, { insertText: adapter.insertText, onOpen });
          }
        });
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });

  return () => observer.disconnect();
}
