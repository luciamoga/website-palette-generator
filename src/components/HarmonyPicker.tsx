import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { HarmonyType } from "../types/HarmonyTypes";

// Define the enum

interface HarmonyPickerProps {
  selectedHarmony: HarmonyType;
  onHarmonyChange: (harmony: HarmonyType) => void;
}

const HarmonyPicker = ({
  selectedHarmony,
  onHarmonyChange,
}: HarmonyPickerProps) => {
  const harmonyOptions = Object.values(HarmonyType); // Directly use enum values

  const handleChange = (event: SelectChangeEvent<HarmonyType>) => {
    onHarmonyChange(event.target.value as HarmonyType);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="harmony-selector-label">Harmony Type</InputLabel>
      <Select
        labelId="harmony-selector-label"
        id="harmony-selector"
        value={selectedHarmony}
        label="Harmony Type"
        onChange={handleChange}
      >
        {harmonyOptions.map((harmony) => (
          <MenuItem key={harmony} value={harmony}>
            {harmony}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default HarmonyPicker;
