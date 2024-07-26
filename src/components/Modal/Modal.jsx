import "./Modal.css";
export default function Modal() {
  return (
    <div className="modal-wrapper">
      <div className="modal-info">
        <h2>Are you sure you want to remove product from cart?</h2>
        <button>No</button>
        <button>Confirm</button>
      </div>
    </div>
  );
}
