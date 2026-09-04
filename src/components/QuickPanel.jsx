import { useState } from "react";
import { CATEGORIES } from "../data/messages.js";
import { SearchIcon, PanelCopyIcon, ExpandIcon, CrossIcon } from "./SVGIcons.jsx";
import "../assets/simply_icon.png";

const iconImage = chrome.runtime.getURL("assets/simply_icon.png");

const FILTERS =CATEGORIES;

export default function QuickPanel({
  messages,
  onCopy,
  onClose,
  onExpand
}) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = messages.filter((m) => {
    const matchesFilter =
      activeFilter === "All" || m.category.includes(activeFilter);
    return (
      matchesFilter && m.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="simply-panel">
      <div className="simply-panel-header">
        <span className="simply-panel-title">
          <img src={iconImage} alt="simply icon" className="simply-icon-img" />
        </span>
        <button
          type="button"
          className="simply-icon-only-btn"
          onClick={onExpand}
          aria-label="Expand View"
        >
          <ExpandIcon size={20} color="#e6a029" className="expand-icon" />
        </button>
      </div>

      <div className="simply-search-wrap" aria-label="Search messages">
        <span className="simply-search-icon">
          <SearchIcon size={20} />
        </span>
        <input
          className="simply-search-input"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="simply-filter-row">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            className={`simply-filter-pill ${activeFilter === f ? "active" : ""}`}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="simply-message-list">
        {filtered.map((m) => (
          <div key={m.id} className="simply-message-card">
            <div className="simply-message-card-top">
              <span className="simply-message-title">{m.title}</span>

              <div className="simply-tag-group">
                {m.category
                  .filter((c) => c !== "All")
                  .map((c) => (
                    <span
                      key={c}
                      className={`simply-tag simply-tag-${c.toLowerCase()}`}
                    >
                      {c.slice(0, 3).toUpperCase()}
                    </span>
                  ))}
              </div>
              <button
                type="button"
                className="simply-copy-btn"
                onClick={() => onCopy(m)}
              >
                <PanelCopyIcon size={14} />
              </button>
            </div>
            <p className="simply-message-preview">{m.body}</p>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="simply-empty-state">No templates match.</p>
        )}
      </div>

      <div className="simply-bottom-bar">
        <button
          type="button"
          className="simply-icon-only-btn"
          onClick={onClose}
          aria-label="Close"
        >
          <CrossIcon size={16} color="#e00d2a" className="close-icon" />
        </button>
      </div>
    </div>
  );
}
