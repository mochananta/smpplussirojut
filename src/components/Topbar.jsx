import { Mail, Phone, MapPin } from "lucide-react";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container topbar-container">
        <div className="topbar-left">
          <span><Mail size={16} /> info@smpplus.com</span>
          <span><Phone size={16} /> 0812-3456-7890</span>
        </div>

        <div className="topbar-right">
          <span><MapPin size={16} /> Banyuwangi, Jawa Timur</span>
        </div>
      </div>
    </div>
  );
}
