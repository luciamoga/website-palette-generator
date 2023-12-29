import { Stepper, Step, StepLabel } from "@mui/material";
import "../style/hero.css";
const steps = [
  {
    heading: "1. Pick Your Primary",
    description:
      "Pick a primary (main) color. Fine tune it to find the perfect hue.",
  },
  {
    heading: "2. Select a Harmony",
    description:
      "Choose from a variety of color harmonies to set the mood of your palette.",
  },
  {
    heading: "3. Discover Your Palette",
    description:
      "Get a complete website color palette, based on your selections, complete with ready-to-use color codes and example website elements.",
  },
];

const HeroComponent = () => {
  return (
    <div className="heroSection">
      <div className="heroText">
        <div className="heroHeading">Unleash Your Palette Potential</div>
        <div className="heroSubheading">
          Create stunning and accessible color palettes for your projects in
          seconds.
        </div>
        <div className="howItWorks">
          <h2>How it works</h2>
          <Stepper
            className="stepper"
            activeStep={steps.length}
            orientation="vertical"
          >
            {steps.map((step, index) => (
              <Step key={index}>
                <StepLabel>{step.heading}</StepLabel>
                <div>{step.description}</div>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
