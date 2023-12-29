//Footer component

import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../style/footer.css";

interface FooterComponentProps {
  logo: string;
  navItems: string[];
}

const FooterComponent = ({ navItems }: FooterComponentProps) => {
  function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" to="https://mui.com/">
          PopponColor
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <Box
      className="footer"
      sx={{ bgcolor: "background.default", p: 6 }}
      component="footer"
    >
      {/* <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography> */}
      <Box className="footerNav">
        {navItems.map((item) => (
          <Link to={item.toLowerCase()} key={item}>
            <Typography variant="body1">{item}</Typography>
          </Link>
        ))}
      </Box>
      <Copyright />
    </Box>
  );
};

export default FooterComponent;
