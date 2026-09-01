import "../assets/simply_icon.png";
const iconImage = chrome.runtime.getURL("assets/simply_icon.png")

export default function Icon({ onClick }) {
  return (
    <button
      type="button"
      className="simply-icon-btn"
      onClick={onClick}
      aria-label="Open Simply quick messages"
      title="Quick messages"
    >
      <img src={iconImage} alt="simply icon" className="simply-icon-img" />
    </button>
  );
}
