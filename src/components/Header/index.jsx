import { useContext } from "react";
import { ClientContext } from "../../context/ClientContext";
import { Link } from "react-router-dom";
import { Button } from "../Button";

export const Header = ({ className, children }) => {
  const { client, setClient, setShowPass } = useContext(ClientContext);
  const handleLogout = () => {
    console.log("ok");
    setClient(null);
    localStorage.removeItem("@TOKEN");
    setShowPass(false);
  };

  return (
    <header>
      <nav className={className}>
        <h1>
          Contact <span> Manager</span>
        </h1>
        <div>
          {client && (
            <div>
              <h3 className="font-title-3">{`${client.name}`}</h3>
              <p className="font-headline-gray">{`Tel: ${client.telephone}`}</p>
              <p className="font-headline-gray">{`Email: ${client.email}`}</p>
            </div>
          )}
          <Link to={`#`}>
            <Button
              size="small"
              color="gray"
              onClick={() => handleLogout()}
              children={"Sair"}
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};
