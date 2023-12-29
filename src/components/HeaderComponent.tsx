import { Link } from "react-router-dom";
import "../style/header.css";
import { Box } from "@mui/material";

interface HeaderComponentProps {
  navItems: string[];
  logo: string;
}

const HeaderComponent = ({ navItems, logo }: HeaderComponentProps) => {
  const logoBasePath = "/src/assets/";

  return (
    <Box className="header">
      <Link to={"/"}>
        <div className="logo">
          PoppinColor
          <img src={logoBasePath + logo} alt="logo" />
        </div>
      </Link>
      <div className="nav">
        {navItems.map((item) => (
          <div key={item} className="navItem">
            <Link to={`/${item}`}>{item}</Link>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default HeaderComponent;
