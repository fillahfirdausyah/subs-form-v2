import React from "react";

function BillingAddress() {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h4>Alamat Penagihan</h4>
      </div>
      <div className="card-body">
        <form>
          <div className="mb-3">
            <textarea className="form-control"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BillingAddress;