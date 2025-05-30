"use client";

import { useState } from "react";
import { CheckBox } from "@/components/core/checkbox";

const CheckBoxPreview = () => {
  const [states, setStates] = useState(Array(4).fill(false));

  const toggle = (index: number) => {
    const updated = [...states];
    updated[index] = !updated[index];
    setStates(updated);
  };

  return (
    <div className="flex gap-6 items-end">
      <CheckBox checked={states[0]} onClick={() => toggle(0)} size={32} />
      <CheckBox
        checked={states[1]}
        onClick={() => toggle(1)}
        size={40}
        color="#3b82f6"
      />
      <CheckBox
        checked={states[2]}
        onClick={() => toggle(2)}
        size={56}
        color="#facc15"
      />
      <CheckBox
        checked={states[3]}
        onClick={() => toggle(3)}
        size={64}
        color="#ef4444"
      />
    </div>
  );
};

export default CheckBoxPreview;
