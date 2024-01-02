import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Container maxWidth="lg" className="about-container">
      <Box className="content-box">
        <Typography variant="h2" className="header">
          About PoppinColor
        </Typography>
        <Typography variant="h5" className="sub-header">
          Welcome to PoppinColor
        </Typography>
        <Typography className="paragraph">
          {" "}
          The ultimate online destination for designers, developers, and color
          enthusiasts seeking the perfect color palette for their creative
          projects. Our sophisticated and user-friendly color palette generator
          is designed to inspire creativity, enhance design workflows, and
          simplify the process of finding and applying the ideal color schemes.
        </Typography>
        <Typography variant="h5" className="sub-header">
          Our Mission
        </Typography>
        <Typography className="paragraph">
          {" "}
          Our mission is to provide a tool that not only generates aesthetically
          pleasing color combinations but also ensures that these combinations
          are accessible and practical for all users. We're dedicated to making
          the art and science of color theory accessible to everyone.
        </Typography>
        <Typography variant="h5" className="sub-header">
          Why PoppinColor?
        </Typography>
        <Typography className="paragraph">
          {" "}
          Innovative color algorithms, accessibility at heart, ease of use, and
          advanced customization are just a few reasons why creative
          professionals choose PoppinColor as their go-to color resource.
        </Typography>{" "}
        <Box className="bottom-box">
          <Link to="/home" className="link">
            <Button variant="outlined" className="join-button">
              Join Our Color Journey
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default AboutPage;
