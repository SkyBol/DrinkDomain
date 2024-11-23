import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ActiveUserContext from "../../../contexts/ActiveUserContext";


const AutoLoginPage = () => {
  const { code } = useParams();
  const { login } = useContext(ActiveUserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      login('user@example.com', code)
        .then(() => navigate('/'))
        .catch(() => navigate('/login'));
    }
  }, [code]);

  return (
    <></>
  );
}

export default AutoLoginPage;