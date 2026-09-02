import { initInjector } from "../engine/injector.js";
import * as facebookAdapter from "../adapters/facebook.js";
import * as instagramAdapter from "../adapters/instagram.js";
import * as whatsappAdapter from "../adapters/whatsapp.js";
// import { messages } from "../data/messages.js";


// function handleOpen(targetElement, insertText) {
//   const firstMessage = messages[0];
//   insertText(targetElement, firstMessage.body);
// }

const adapter = window.location.hostname.includes("instagram.com")
  ? instagramAdapter
  : (window.location.hostname.includes("facebook.com")?facebookAdapter: whatsappAdapter);

initInjector(adapter);

