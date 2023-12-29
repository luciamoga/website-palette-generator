import ColorPicker from "../components/ColorPicker";
import HarmonyPicker from "../components/HarmonyPicker";
import PaletteComponent from "../components/Palette";
import TemplateComponent from "../components/TemplateComponent";
import { generatePalette } from "../components/utils/paletteGenerator";
import { Color } from "../types/Color";
import { Harmony } from "../types/Harmony";
import { Palette } from "../types/Palette";
import "../style/style.css";
import React, { useEffect, useState } from "react";
import HeroComponent from "../components/HeroComponent";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const HomePage = () => {
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [selectedHarmony, setSelectedHarmony] = useState<Harmony | null>(null);
  const [palette, setPalette] = useState<Palette>();

  const handleSelectColor = (color: Color) => {
    setSelectedColor(color);
  };

  const handleSelectHarmony = (harmony: Harmony) => {
    setSelectedHarmony(harmony);
  };
  const handleCopyAll = () => {
    navigator.clipboard.writeText(JSON.stringify(palette?.getColors()));
    toast.info("Copied all colors");
  };

  useEffect(() => {
    if (selectedColor && selectedHarmony) {
      const newPalette = generatePalette(selectedColor, selectedHarmony);
      setPalette(newPalette);
    }
  }, [selectedColor, selectedHarmony]);

  const initialColor = new Color({ hex: "#a6a3ff", type: "primary" });

  return (
    <React.Fragment>
      <HeroComponent />
      <div className="paletteGenerator">
        <div className="paletteSettings">
          <ColorPicker
            initialColor={initialColor}
            onSelectColor={handleSelectColor}
          />
          <HarmonyPicker onSelectHarmony={handleSelectHarmony} />
          <Button
            variant="text"
            onClick={handleCopyAll}
            endIcon={<CopyAllIcon />}
          >
            Copy Palette
          </Button>
        </div>
        {palette ? (
          <PaletteComponent palette={palette} />
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <div className="example">
        {palette ? (
          <TemplateComponent palette={palette} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default HomePage;
