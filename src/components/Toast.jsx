import { CheckCircle } from "lucide-react";

export default function Toast({ show }) {
  return (
    <div className={`toast ${show ? "show" : ""}`}>
      <CheckCircle size={18} />
      <span>Pesan berhasil dikirim!</span>
    </div>
  );
}
