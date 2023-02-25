import React, { useState } from "react";

interface Props {
  min: number;
  max: number;
  onChange: Function;
}

const Slider: React.FC<Props> = ({ min, max, onChange }) => {
  const [value, setValue] = useState<number>(1);

  return (
    <React.Fragment>
      {value}
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          const value = Number(e.target.value);
          onChange(value);
          setValue(value);
        }}
      />
    </React.Fragment>
  );
};

export default Slider;
