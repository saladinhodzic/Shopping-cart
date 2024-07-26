import "./Modal.css";
export default function Modal({ confirm, reject }) {
  return (
    <div className="modal-wrapper">
      <div className="modal-info">
        <h2>Are you sure you want to remove product from cart?</h2>
        <button onClick={reject}>No</button>
        <button onClick={confirm}>Confirm</button>
      </div>
    </div>
  );
}
