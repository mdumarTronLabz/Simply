import { useState } from "react";
import Icon from "./Icon.jsx";
import QuickPanel from "./QuickPanel.jsx";
import ExpandedWindow from "./ExpandedWindow.jsx";
import NewMessageForm from "./NewMessageForm.jsx";
import { messages as initialMessages } from "../data/messages.js";

/*
    // App.jsx decides which view to render based on the current state.
*/
export default function App({ targetElement, insertText }) {
  const [view, setView] = useState("icon");
  const [messages, setMessages] = useState(initialMessages);

  function handleCopy(message) {
    insertText(targetElement, message.body);
    setView("icon");
  }

  function handleSaveMessage(newMessage) {
    setMessages((prev) => [...prev, { ...newMessage, id: String(Date.now()) }]);
    setView("expanded");
  }

  if (view === "icon") return <Icon onClick={() => setView("panel")} />;

  if (view === "panel")
    return (
      <QuickPanel
        messages={messages}
        onCopy={handleCopy}
        onClose={() => setView("icon")}
        onExpand={() => setView("expanded")}
        onAdd={() => setView("form")} //may we need here or not
      />
    );

  if (view === "expanded")
    return (
      <ExpandedWindow
        messages={messages}
        onCopy={handleCopy}
        onClose={() => setView("icon")}
        onAdd={() => setView("form")}
        onBack={() => setView("panel")}
        onDelete={(id) =>
          setMessages((prev) => prev.filter((m) => m.id !== id))
        }
      />
    );

  if (view === "form")
    return (
      <NewMessageForm
        onSave={handleSaveMessage}
        onBack={() => setView("expanded")}
        onClose={() => setView("icon")}
      />
    );

  return null;
}
