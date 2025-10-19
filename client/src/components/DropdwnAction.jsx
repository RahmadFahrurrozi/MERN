import { useState, useRef, useEffect } from "react";
import { Edit, Trash2, MoreHorizontal } from "lucide-react";

const SimpleDropdownMenu = ({ onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
      >
        <MoreHorizontal className="size-4 text-slate-400 hover:text-slate-600" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-40 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-10">
          <button
            onClick={() => {
              onEdit();
              setIsOpen(false);
            }}
            className="flex items-center gap-3 w-full px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
          >
            <Edit className="size-4" />
            <span>Edit</span>
          </button>
          {/* <button
            onClick={() => {
              onDownload();
              setIsOpen(false);
            }}
            className="flex items-center gap-3 w-full px-4 py-2 text-sm text-blue-600 hover:bg-blue-50"
          >
            <Download className="size-4" />
            <span>Download</span>
          </button> */}
          <button
            onClick={() => {
              onDelete();
              setIsOpen(false);
            }}
            className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            <Trash2 className="size-4" />
            <span>Hapus</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SimpleDropdownMenu;
