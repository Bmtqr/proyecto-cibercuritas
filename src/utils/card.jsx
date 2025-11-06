import { useState } from "react";


export default function Card({ frontClass, backClass, title, subtitle, description, items }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  const close = () => setOpen(false);

  return (
    <div
      className={`info-card ${open ? "is-open" : ""}`}
      tabIndex={0}
      onClick={toggle}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={close}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
        if (e.key === "Escape") close();
      }}
    >
      <div className={`cara ${frontClass}`}>
        <h3>{title}</h3>
      </div>
      <div className={`cara ${backClass}`}>
        <h4>{subtitle}</h4>
        <p>{description}</p>
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}