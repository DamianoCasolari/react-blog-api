import { useState } from "react";

export function AppOverlay() {
  const [showOverlay, setshowOverlay] = useState(false);

  return (
    <div className="overlay absolute z-20 bg-slate-300 h-full w-10/12 rounded-2xl"></div>
  );
}
