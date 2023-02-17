import React, { useRef, useEffect } from "react";

function DomRef() {
  const targerRef = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    targerRef.current.focus();
  },[]);

  return <input type="text" ref={targerRef} />;
}

export default DomRef;
