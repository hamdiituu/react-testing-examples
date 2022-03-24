import { useState } from "react";

function Checkbox() {
  const [status, setStatus] = useState(false);
  return (
    <div>
      <span>{status ? "Seçildi" : "Seçilmedi"}</span>
      <input
        type="checkbox"
        checked={status}
        onChange={() => setStatus(!status)}
      />
    </div>
  );
}

export default Checkbox;
