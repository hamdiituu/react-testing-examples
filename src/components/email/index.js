import { useState } from "react";

function Email() {
  const [mail, setMail] = useState("");

  return (
    <div>
      <label htmlFor="emailInput">Email</label>
      <input
        id="emailInput"
        type="text"
        value={mail}
        onChange={(e) => setMail(e.target.value)}
      />
    </div>
  );
}

export default Email;
