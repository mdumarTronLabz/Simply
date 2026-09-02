import { useState } from "react";
import { CATEGORIES } from "../data/messages.js";

const FILTERS =CATEGORIES;

export default function QuickPanel({
  messages,
  onCopy,
  onClose,
  onExpand,
  onAdd, //doubt what to do with this, we may not need this, but if we need to add new message then we can use this
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
        <span className="simply-panel-title">Simply</span>
        <button
          type="button"
          className="simply-icon-only-btn"
          aria-label="Settings"
        >
          ⚙
        </button>
      </div>

      <div className="simply-search-wrap">
        <span className="simply-search-icon">🔍</span>
        <input
          className="simply-search-input"
          placeholder="Search templates..."
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
            </div>
            <p className="simply-message-preview">{m.body}</p>
            <button
              type="button"
              className="simply-copy-btn"
              onClick={() => onCopy(m)}
            >
              Copy
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="simply-empty-state">No templates match.</p>
        )}
      </div>

      <div className="simply-bottom-bar">
        <button
          type="button"
          className="simply-close-pill"
          onClick={onClose}
          aria-label="Close"
        />
        <button
          type="button"
          className="simply-add-fab"
          onClick={onAdd}
          aria-label="Add new template"
        >
          +
        </button>
        <button
          type="button"
          className="simply-icon-only-btn"
          onClick={onExpand}
          aria-label="Expand"
        >
          ⤢
        </button>
      </div>
    </div>
  );
}
