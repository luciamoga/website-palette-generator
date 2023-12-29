import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Container,
  CssBaseline,
  GlobalStyles,
  Grid,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/StarBorder";

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
    bgcolor: "background.surface",
    color: "text.surface",
    headerbgcolor: "primary.main",
    headercolor: "text.main",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
    bgcolor: "secondary.main",
    color: "text.secondary",
    headerbgcolor: "secondary.dark",
    headercolor: "text.secondary",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
    bgcolor: "background.surface",
    color: "text.surface",
    headerbgcolor: "primary.main",
    headercolor: "text.main",
  },
];

const PricingCard = ({ tier }: { tier: any }) => (
  <Grid
    item
    xs={12}
    sm={tier.title === "Enterprise" ? 12 : 6}
    md={4}
    key={tier.title}
  >
    <Card>
      <CardHeader
        title={tier.title}
        subheader={tier.subheader}
        titleTypographyProps={{ align: "center" }}
        action={tier.title === "Pro" ? <StarIcon /> : null}
        subheaderTypographyProps={{
          align: "center",
        }}
        sx={{
          bgcolor: tier.headerbgcolor,
          color: tier.headercolor,
        }}
      />
      <CardContent
        sx={{
          bgcolor: tier.bgcolor,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            mb: 2,
          }}
        >
          <Typography component="h2" variant="h3" color={tier.color}>
            ${tier.price}
          </Typography>
          <Typography variant="h6" color={tier.color}>
            /mo
          </Typography>
        </Box>
        <ul>
          {tier.description.map((line: string) => (
            <Typography
              component="li"
              variant="subtitle1"
              align="center"
              key={line}
              color={tier.color}
            >
              {line}
            </Typography>
          ))}
        </ul>
      </CardContent>
      <CardActions
        sx={{
          bgcolor:
            tier.title === "Pro" ? "secondary.main" : "background.surface",
        }}
      >
        <Button
          sx={{
            bgcolor:
              tier.title === "Pro" ? "secondary.dark" : "background.surface",
            color: tier.title === "Pro" ? "text.secondary" : "text.surface",
          }}
          fullWidth
          variant={tier.buttonVariant as "outlined" | "contained"}
        >
          {tier.buttonText}
        </Button>
      </CardActions>
    </Card>
  </Grid>
);

export default function PricingComponent() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />

      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.surface"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.surface"
          component="p"
        >
          Quickly build an effective pricing table for your potential customers
          with this layout. It&apos;s built with default MUI components with
          little customization.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <PricingCard key={tier.title} tier={tier} />
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        {/* <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.background" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.background">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid> */}
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
