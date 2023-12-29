import App from "./App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
