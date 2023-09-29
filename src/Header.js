import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import {
  faDownLeftAndUpRightToCenter,
  faMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ onState, stateView, title }) {
  const handleClick = () => {
    if (stateView === "normal") onState("maxim");
    if (stateView === "maxim") onState("normal");
  };

  return (
    <div className="header-modal">
      <div className="datos-modal">
        <div className="icon">
          <FontAwesomeIcon icon={faHandshake} />
        </div>
        <h3 className="name-modal">{title}</h3>
      </div>
      <button type="button" className="btn-modal" onClick={handleClick}>
        {stateView === "maxim" ? (
          <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
        ) : (
          <FontAwesomeIcon icon={faMaximize} />
        )}
      </button>
    </div>
  );
}

export default Header;
