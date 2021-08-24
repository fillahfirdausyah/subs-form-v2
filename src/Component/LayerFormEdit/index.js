import React, { useState } from "react";

// Asset
import "./style.css";
import Spinner from "../Spinner";

// Context
import { useAnimate } from "../../Helpers/Context/Animate";

// Component
import BackdropEdit from "../BackdropEdit";
import SubscriptionFee from "./Parts/SubscriptionFee";
import FilledBy from "./Parts/FilledBy";

function LayerFormEdit({ id, editData, loading }) {
  const { showLayerFormEdit, layerFormEdit, addBackdropEdit } = useAnimate();
  const [subscriptionFee, setSubscriptionFee] = useState({});
  const [filledBy, setFilledBy] = useState({});

  const closeForm = () => {
    showLayerFormEdit("down");
    addBackdropEdit("not-show");
  };

  const getSubscriptionFee = (data) => {
    setSubscriptionFee(data);
  };

  const getFilledBy = (data) => {
    setFilledBy(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      subscriptionFee,
      filledBy,
    };
    // e.target.reset();
    // postData(newData);
    editData(newData, id);
  };

  return (
    <BackdropEdit>
      <div className={`layer-form-edit ${layerFormEdit}`}>
        <hr onClick={closeForm} />
        <form onSubmit={handleSubmit}>
          <SubscriptionFee id={id} getSubscriptionFee={getSubscriptionFee} />
          <FilledBy id={id} getFilledBy={getFilledBy} />
          {loading ? (
            <button className="btn btn-simpan">
              <Spinner />
            </button>
          ) : (
            <button className="btn btn-simpan">Buat</button>
          )}
        </form>
      </div>
    </BackdropEdit>
  );
}

export default LayerFormEdit;
