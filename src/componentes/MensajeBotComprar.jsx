import React, { useEffect, useState } from "react";

export default function Toast({ message, duration = 3000 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const hide = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(hide);
  }, [duration]);

  return (
    <div className="toast" style={{ opacity: visible ? 1 : 0 }}>
      {message}
    </div>
  );
}