import { useState } from "react";
import { CATEGORIES } from "../data/messages.js";

export default function ExpandedWindow({
  messages,
  onCopy,
  onClose,
  onAdd,
  onDelete,
}) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const filtered = messages.filter((m) => {
    const matchesCategory =
      !activeCategory || m.category.includes(activeCategory);
    return (
      matchesCategory && m.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="simply-overlay">
      <div className="simply-expanded">
        <div className="simply-expanded-header">
          <div className="simply-header-icons">
            <button
              type="button"
              className="simply-icon-only-btn"
              aria-label="Fullscreen"
            >
              ⤢
            </button>
            <button
              type="button"
              className="simply-icon-only-btn"
              onClick={onClose}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <span className="simply-panel-title">Simply</span>
        </div>

        <div className="simply-platform-row">
          <span className="simply-platform-label">Category:</span>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              className={`simply-platform-pill simply-tag-${c.toLowerCase()} ${activeCategory === c ? "active" : ""}`}
              onClick={() => setActiveCategory(activeCategory === c ? null : c)}
            >
              {c}
            </button>
          ))}
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

        <div className="simply-expanded-list">
          {filtered.map((m) => (
            <div key={m.id} className="simply-expanded-row">
              <span className="simply-row-icon">💬</span>
              <span className="simply-row-title">{m.title}</span>
              <div className="simply-row-actions">
                <button
                  type="button"
                  className="simply-icon-only-btn"
                  onClick={() => onCopy(m)}
                  aria-label="Copy"
                >
                  ⧉
                </button>
                {/* Edit is wired up in Phase 2 once messages live in the DB — button is here now so the layout is final. */}
                <button
                  type="button"
                  className="simply-icon-only-btn"
                  disabled
                  aria-label="Edit (Phase 2)"
                >
                  ✎
                </button>
                <button
                  type="button"
                  className="simply-icon-only-btn"
                  onClick={() => onDelete(m.id)}
                  aria-label="Delete"
                >
                  🗑
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="simply-expanded-footer">
          <button
            type="button"
            className="simply-new-template-btn"
            onClick={onAdd}
          >
            + New Template
          </button>
        </div>
      </div>
    </div>
  );
}
