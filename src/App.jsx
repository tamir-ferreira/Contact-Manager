import { BrowserRouter } from "react-router-dom";
import { Providers } from "./context/Providers";
import { PageRoutes } from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
      <Providers>
        <PageRoutes />
      </Providers>
    </BrowserRouter>
  );
};
