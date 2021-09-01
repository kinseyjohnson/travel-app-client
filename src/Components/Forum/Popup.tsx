import React from 'react';
import './popup.css'

interface PopupProps {
    trigger: boolean
}

interface PopupState {
    trigger: boolean
    button: boolean
}
class Popup extends React.Component<PopupProps, PopupState> {
    constructor(props: PopupProps) {
        super(props)
    }
    render() {
      return (this.props.trigger) ? (
        <div className="popup">
            <div className="popup-inner"></div>
            <button className="close-button">Close</button>
            {this.props.children}
        </div>
      ) : "";
    }
  }
  
  export default Popup;
  