export function CollapsibleSection({ section, subItems }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4">
      {/* Titre cliquable */}
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center text-blue-300 font-semibold text-sm uppercase cursor-pointer hover:text-blue-400 px-2 py-1 rounded-md transition"
      >
        {section}
        <span
          className={`transform transition-transform ${open ? "rotate-90" : ""}`}
        >
          ▶
        </span>
      </div>

      {/* Sous-items */}
      {open && (
        <ul className="mt-2 space-y-1">
          {subItems.map((sub, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-blue-300 cursor-pointer hover:bg-blue-50 hover:text-blue-600 rounded-lg px-2 py-1 transition"
              onClick={sub.onClick ? sub.onClick : undefined}
            >
              {sub.icon}
              <span>{sub.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
