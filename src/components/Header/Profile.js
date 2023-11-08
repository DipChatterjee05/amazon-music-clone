import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(path);
    setIsModalVisible(false);
  }

  return (
    <section>
      <section
        className="profile-container"
        onClick={() => setIsModalVisible(!isModalVisible)}
      >
        <FontAwesomeIcon icon={faUser} />
      </section>
      {isModalVisible && (
        <section className="auth-modal">
          <button onClick={()=> navigateHandler("/signin")}>Sign In</button>
          <button onClick={()=> navigateHandler("/signup")}>Sign Up</button>
        </section>
      )}
    </section>
  );
}

export default Profile;
