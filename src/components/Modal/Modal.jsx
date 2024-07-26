import "./Modal.css";
export default function Modal({ confirm, reject }) {
  return (
    <div className="modal-wrapper">
      <div className="modal-info">
        <h2>Are you sure you want to remove product from cart?</h2>
        <div className="modal-buttons">
          <button className="reject" onClick={reject}>
            No
          </button>
          <button className="confirm" onClick={confirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
