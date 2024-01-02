import ColorPicker from "../components/ColorPicker";
import HarmonyPicker from "../components/HarmonyPicker";
import PaletteComponent from "../components/PaletteComponent";
import { Color } from "../types/Color";
import { Palette } from "../types/Palette";
import "../style/style.css";
import React, { useEffect, useState } from "react";
import HeroComponent from "../components/HeroComponent";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HarmonyType } from "../types/HarmonyTypes";
import TemplateComponent from "../components/TemplateComponent";
const HomePage = () => {
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [selectedHarmony, setSelectedHarmony] = useState<HarmonyType>(
    HarmonyType.Complementary
  );

  const handleHarmonyChange = (harmony: HarmonyType) => {
    setSelectedHarmony(harmony);
    // Additional actions based on the selected harmony
  };
  const [palette, setPalette] = useState<Palette>();

  const handleSelectColor = (color: Color) => {
    setSelectedColor(color);
  };

  const handleCopyAll = () => {
    console.log("palette?.getColors()", palette?.getColors());
    navigator.clipboard.writeText(
      JSON.stringify(palette?.getColors(), undefined, 2)
    );
    toast.info("Copied all colors");
  };

  useEffect(() => {
    if (selectedColor && selectedHarmony) {
      const newPalette = new Palette({
        color: selectedColor,
        harmonyType: selectedHarmony,
      });
      setPalette(newPalette);
    }
  }, [selectedColor, selectedHarmony]);

  const initialColor = new Color({ hex: "#a6a3ff" });

  return (
    <React.Fragment>
      <HeroComponent />
      <div className="paletteGenerator">
        <div className="paletteSettings">
          <ColorPicker
            initialColor={initialColor}
            onSelectColor={handleSelectColor}
          />
          <HarmonyPicker
            selectedHarmony={selectedHarmony}
            onHarmonyChange={handleHarmonyChange}
          />
          <Button
            variant="text"
            onClick={handleCopyAll}
            endIcon={<CopyAllIcon />}
          >
            Copy Palette
          </Button>
        </div>
        {palette ? (
          <PaletteComponent harmony={palette.harmony} />
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <div className="example">
        {palette ? (
          <TemplateComponent harmony={palette.harmony} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

export default HomePage;
