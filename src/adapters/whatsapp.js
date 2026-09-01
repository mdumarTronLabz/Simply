export const selector = 'div[contenteditable="true"][role="textbox"]';

export function insertText(element, text) {
  element.focus();
  document.execCommand("insertText", false, text);
  element.dispatchEvent(new Event("input", { bubbles: true }));
}
