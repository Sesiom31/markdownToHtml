import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import {
  faDownLeftAndUpRightToCenter,
  faMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({ isExpande, title }) {
  return (
    <div className="header-modal">
      <div className="datos-modal">
        <div className="icon">
          <FontAwesomeIcon icon={faHandshake} />
        </div>
        <h3 className="name-modal">{title}</h3>
      </div>
      <button type="button" className="btn-modal">
        {isExpande ? (
          <FontAwesomeIcon icon={faDownLeftAndUpRightToCenter} />
        ) : (
          <FontAwesomeIcon icon={faMaximize} />
        )}
      </button>
    </div>
  );
}

export default Header;
