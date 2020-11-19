import React from "react";
import ReactDOM from "react-dom";

const seller = {
  marginLeft: "40px",
  marginTop: "20px"
};

const customer = {
  marginLeft: "10px"
};

const close = {
  marginLeft: "200px",
  position: "absolute",
  marginTop: "-59px"
};

const modal = {
  height: "300px",
  width: "500px",
  backgroundColor: "white"
};

const h4 = {
  marginLeft: "40px"
};

const register = {
  marginTop: "50px",
  marginLeft: "100px"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // modal should be closed on page load
      isModalOpen: false
    };

    // binding methods
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal} style={register}>
          Register
        </button>
        <Modal isOpen={this.state.isModalOpen} onClose={this.closeModal} />
      </div>
    );
  }
}

// <Modal />
class Modal extends React.Component {
  render() {
    const { isOpen, onClose } = this.props;

    return (
      <div className={isOpen ? "modal modal--is-open" : "modal"} style={modal}>
        <br />
        <h4 style={h4}>How do you want to register?</h4> <br />
        <button onClick={this.y} className="seller" style={seller}>
          As Seller
        </button>
        <button onClick={this.y} className="customer" style={customer}>
          As Customer
        </button>
        <button onClick={onClose} style={close}>
          X
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));


/*ADD THIS TO Styles.css
.modal {
  display: none;
}
.modal.modal--is-open {
  display: block;
  border: 1px solid green;
}
*/

/* ADD THESE SCRIPT IF NOT ADDED 
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react-dom.min.js"></script>
*/