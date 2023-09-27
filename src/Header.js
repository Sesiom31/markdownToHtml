import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import {
  faDownLeftAndUpRightToCenter,
  faMaximize,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header({onStateEditor, stateEditor}) {
  let isExpande = true;

  const handleClick = ()=>{
    if(stateEditor === 'normal') onStateEditor('maxim')
    if(stateEditor === 'maxim') onStateEditor('normal')
    if(stateEditor === 'hidden') onStateEditor('')
  }

  return (
    <div className="header-modal">
      <div className="datos-modal">
        <div className="icon">
          <FontAwesomeIcon icon={faHandshake} />
        </div>
        <h3 className="name-modal">{"Free"}</h3>
      </div>
      <button type="button" className="btn-modal" onClick={handleClick}>
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
