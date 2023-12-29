//A color picker component that contains a color input and sends the selected color to the parent component.

import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Color } from "../types/Color";
import iro from "@jaames/iro";

interface ColorPickerProps {
  onSelectColor: (color: Color) => void;
  initialColor: Color;
}

const ColorPicker = ({ onSelectColor, initialColor }: ColorPickerProps) => {
  const [color, setColor] = useState<Color>(initialColor);
  const colorPickerRef = useRef<any>(null);

  useEffect(() => {
    colorPickerRef.current = new (iro as any).ColorPicker("#picker", {
      color: initialColor.hex,
    });

    colorPickerRef.current.on("color:change", (color: any) => {
      setColor(new Color({ hex: color.hexString, type: "primary" }));
      onSelectColor(new Color({ hex: color.hexString, type: "primary" }));
    });

    onSelectColor(color);

    // Cleanup function
    return () => {
      colorPickerRef.current?.base?.remove();
    };
  }, []);

  return (
    <React.Fragment>
      <div id="picker"></div>
    </React.Fragment>
  );
};

export default ColorPicker;
