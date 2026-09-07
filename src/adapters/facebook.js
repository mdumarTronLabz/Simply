export const selector = 'div[contenteditable="true"][role="textbox"]';

export function insertText(element, text) {
  element.focus();


  element.dispatchEvent(
    new InputEvent("input", {
      bubbles: true,
      inputType: "insertText",
      data: text,
    }),
  );
}
