import { useState } from "react";
import { CATEGORIES } from "../data/messages.js";
import { AddIcon, DeleteIcon, EditIcon, CopyIcon, BackIcon, CrossIcon, SearchIcon } from "./SVGIcons.jsx";
import "../assets/simply_icon.png";

const iconImage = chrome.runtime.getURL("assets/simply_icon.png");

export default function ExpandedWindow({
  messages,
  onCopy,
  onClose,
  onAdd,
  onDelete,
  onBack
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
          <span className="simply-panel-title">
            Simply{" "}
            <img
              src={iconImage}
              alt="simply icon"
              className="simply-icon-img"
            />
          </span>
          <div className="simply-header-icons">
            <button
              type="button"
              onClick={onBack}
              className="simply-icon-only-btn"
              aria-label="Back to Quick Panel"
            >
              <BackIcon size={28} />
            </button>
            <button
              type="button"
              className="simply-icon-only-btn"
              onClick={onClose}
              aria-label="Close"
            >
              <CrossIcon size={16} />
            </button>
          </div>
        </div>

        <div className="simply-search-wrap">
          <span className="simply-search-icon">
            <SearchIcon size={14} />
          </span>
          <input
            className="simply-search-input"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search messages"
          />
        </div>

        <div className="simply-platform-row">
          <span className="simply-platform-label">Categories : </span>
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

        <div className="simply-expanded-list">
          {filtered.map((m) => (
            <div key={m.id} className="simply-expanded-row">
              <div className="simply-row-header">
                <span className="simply-row-title">{m.title}</span>
                <div className="simply-row-actions">
                  <button
                    type="button"
                    className="simply-icon-only-btn"
                    onClick={() => onCopy(m)}
                    aria-label="Copy"
                  >
                    <CopyIcon size={14} />
                  </button>
                  {/* Edit is wired up in Phase 2 once messages live in the DB — button is here now so the layout is final. */}
                  <button
                    type="button"
                    className="simply-icon-only-btn"
                    disabled
                    aria-label="Edit (Phase 2)"
                  >
                    <EditIcon size={14} />
                  </button>
                  <button
                    type="button"
                    className="simply-icon-only-btn"
                    onClick={() => onDelete(m.id)}
                    aria-label="Delete"
                  >
                    <DeleteIcon size={14} />
                  </button>
                </div>
              </div>
              <p className="simply-row-message">{m.body}</p>
              <div className="simply-row-tag">
                {m.category
                  .filter((c) => c !== "All")
                  .map((c) => (
                    <span
                      key={c}
                      className={`simply-tag simply-tag-${c.toLowerCase()}`}
                    >
                      {c}
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="simply-expanded-footer">
          <button
            type="button"
            className="simply-add-fab"
            onClick={onAdd}
            aria-label="Add new message"
          >
            <AddIcon size={16}  color="#ffffff" />
          </button>
        </div>
      </div>
    </div>
  );
}
