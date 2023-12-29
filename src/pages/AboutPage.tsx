import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" gutterBottom>
          About PoppinColor
        </Typography>

        <Typography variant="h5" gutterBottom>
          Welcome to PoppinColor
        </Typography>
        <Typography paragraph>
          The ultimate online destination for designers, developers, and color
          enthusiasts seeking the perfect color palette for their creative
          projects. Our sophisticated and user-friendly color palette generator
          is designed to inspire creativity, enhance design workflows, and
          simplify the process of finding and applying the ideal color schemes.
        </Typography>

        <Typography variant="h5" gutterBottom>
          Our Mission
        </Typography>
        <Typography paragraph>
          Our mission is to provide a tool that not only generates aesthetically
          pleasing color combinations but also ensures that these combinations
          are accessible and practical for all users. We're dedicated to making
          the art and science of color theory accessible to everyone.
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Why PoppinColor?
              </Typography>
              <Typography paragraph>
                Innovative color algorithms, accessibility at heart, ease of
                use, and advanced customization are just a few reasons why
                creative professionals choose PoppinColor as their go-to color
                resource.
              </Typography>
              <Link to="/home">
                <Button variant="contained" color="primary">
                  Create Palette
                </Button>
              </Link>
            </Paper>
          </Grid>

          {/* Add more grid items for other sections */}
        </Grid>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Link to="/home">
            <Button variant="outlined" color="primary">
              Join Our Color Journey
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default AboutPage;
