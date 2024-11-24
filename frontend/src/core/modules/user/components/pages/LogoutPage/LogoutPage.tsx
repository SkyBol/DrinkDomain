import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ActiveUserContext from "../../../contexts/ActiveUserContext";


const LogoutPage = () => {
  const { logout } = useContext(ActiveUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("HERER")

    logout()
    localStorage.clear();

    navigate("/")
  }, []);

  return (
    <></>
  );
}

export default LogoutPage;