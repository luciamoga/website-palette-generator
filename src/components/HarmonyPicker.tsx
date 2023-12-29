//Harmony picker component that contains a list of color harmonies and radio buttons to select them. The component doesn't receive any data, but it sends the selected harmony to the parent component.
import React, { useEffect } from "react";
import { useState } from "react";
import { Harmony } from "../types/Harmony";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

const colorHarmonies: Harmony[] = [
  { name: "complementary", label: "Complementary" },
  { name: "analogous", label: "Analogous" },
  { name: "triad", label: "Triad" },
  { name: "monochromatic", label: "Monochromatic" },
  { name: "tetrad", label: "Tetrad" },
  // { name: "splitcomplement", label: "Split Complement" },
];

interface HarmonyPickerProps {
  onSelectHarmony: (harmony: Harmony) => void;
}

const HarmonyPicker = ({ onSelectHarmony }: HarmonyPickerProps) => {
  const [selectedHarmony, setSelectedHarmony] = useState<Harmony>(
    colorHarmonies[0]
  );

  useEffect(() => {
    const defaultHarmony = colorHarmonies[0];
    onSelectHarmony(defaultHarmony);
  }, []);

  const onHarmonyChange = (event: SelectChangeEvent<string>) => {
    //find the color harmony with the name that matches the event target value
    const harmony = colorHarmonies.find(
      (harmony) => harmony.name === event.target.value
    ) as Harmony;
    setSelectedHarmony(harmony);
    onSelectHarmony(harmony);
  };

  return (
    <React.Fragment>
      <Box className="harmonyPicker" sx={{ minWidth: 300 }}>
        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel id="harmony-select-label">Color harmony</InputLabel>
          <Select
            labelId="harmony-select-label"
            value={selectedHarmony.name}
            label="Color harmony"
            onChange={onHarmonyChange}
          >
            {colorHarmonies.map((harmony, index) => (
              <MenuItem key={index} value={harmony.name}>
                {harmony.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </React.Fragment>
  );
};

export default HarmonyPicker;
