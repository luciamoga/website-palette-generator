import { Link } from "react-router-dom";
import "../style/header.css";

interface HeaderComponentProps {
  navItems: string[];
  logo: string;
}

const HeaderComponent = ({ navItems, logo }: HeaderComponentProps) => {
  const logoBasePath = "/src/assets/";

  return (
    <div className="header">
      <Link to={"/"}>
        <div className="logo">
          <p>PoppinColor</p>
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
    </div>
  );
};

export default HeaderComponent;
