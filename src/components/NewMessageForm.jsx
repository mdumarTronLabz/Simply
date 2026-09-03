import { useState } from "react";
import { CATEGORIES } from "../data/messages.js";
import {  BackIcon, CrossIcon } from "./SVGIcons.jsx";

export default function NewMessageForm({ onSave, onBack, onClose }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [customTags, setCustomTags] = useState([]);

  function togglePlatform(p) {
    setSelectedPlatforms((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p],
    );
  }

  function addCustomTag() {
    const tag = window.prompt("Custom tag name?");
    if (tag && !customTags.includes(tag))
      setCustomTags((prev) => [...prev, tag]);
  }

  function insertVariable() {
    setBody((prev) => `${prev}{{variable}}`);
  }

  function handleSave() {
    if (!title.trim() || !body.trim()) return;
    onSave({
      title,
      body,
      category: ["All", ...selectedPlatforms, ...customTags],
    });
  }

  return (
    <div className="simply-overlay">
      <div className="simply-form">
        <div className="simply-form-header">
          <button
            type="button"
            className="simply-icon-only-btn"
            onClick={onBack}
            aria-label="Back"
          >
            <BackIcon size={28}/>
          </button>
          <span className="simply-panel-title">New Template</span>
          <button
            type="button"
            className="simply-icon-only-btn"
            onClick={onClose}
            aria-label="Close"
          >
            <CrossIcon size={16}/>
          </button>
        </div>

        <label className="simply-form-label">Message Title</label>
        <input
          className="simply-form-input"
          placeholder="Intro Message"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="simply-form-row-label">
          <label className="simply-form-label">Message Content</label>
          <button
            type="button"
            className="simply-variable-btn"
            onClick={insertVariable}
          >
            {"{Variable}"}
          </button>
        </div>
        <textarea
          className="simply-form-textarea"
          placeholder="Type your message here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <label className="simply-form-label">Category Tags</label>
        <div className="simply-tag-select-row">
          {CATEGORIES.filter((c) => c !== "All").map((p) => (
            <button
              key={p}
              type="button"
              className={`simply-tag-select ${selectedPlatforms.includes(p) ? "active" : ""}`}
              onClick={() => togglePlatform(p)}
            >
              {selectedPlatforms.includes(p) ? "✓ " : "# "}
              {p}
            </button>
          ))}
          {customTags.map((tag) => (
            <button
              key={tag}
              type="button"
              className="simply-tag-select active"
              onClick={() =>
                setCustomTags((prev) => prev.filter((t) => t !== tag))
              }
            >
              ✓ {tag}
            </button>
          ))}
          <button
            type="button"
            className="simply-tag-select simply-tag-add"
            onClick={addCustomTag}
          >
            + Custom
          </button>
        </div>

        <button type="button" className="simply-save-btn" onClick={handleSave}>
          Save Message
        </button>
      </div>
    </div>
  );
}
