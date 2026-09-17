import { useState,useEffect,useRef } from "react";
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
  const panelRef = useRef(null);
  const expandedRef = useRef(null);

  // Function to handle copying a message to the target element
  function handleCopy(message) {
    insertText(targetElement, message.body);
    setView("icon");
  }

  // Function to handle saving a new message
  function handleSaveMessage(newMessage) {
    setMessages((prev) => [...prev, { ...newMessage, id: String(Date.now()) }]);
    setView("expanded");
  }

  // Effect to handle clicks outside the quick panel
  useEffect(() => {
    if (view !== "panel") return;

    // Function to handle outside clicks
    function handleClickOutside(e) {
      const path = e.composedPath();
      if (panelRef.current && !path.includes(panelRef.current)) {
        setView("icon");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [view]);

  // Effect to handle clicks outside the expanded view
  useEffect(() => {
    if (view !== "expanded") return;

    // Function to handle outside clicks
    function handleClickOutside(e) {
      const path = e.composedPath();
      if (expandedRef.current && !path.includes(expandedRef.current)) {
        setView("icon");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [view]);



  if (view === "icon") return <Icon onClick={() => setView("panel")} />;

  if (view === "panel")
    return (
      <QuickPanel
        ref={panelRef}
        messages={messages}
        onCopy={handleCopy}
        onClose={() => setView("icon")}
        onExpand={() => setView("expanded")}
      />
    );

  if (view === "expanded")
    return (
      <ExpandedWindow
        ref={expandedRef}
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
