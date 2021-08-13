import React, { useState } from "react";

// Asset
import "./style.css";

// Context
import { useAnimate } from "../../Context/Animate";

// Component
import Backdrop from "../Backdrop/";
import Information from "./Parts/Information";
import SubscriptionFee from "./Parts/SubscriptionFee";
import FilledBy from "./Parts/FilledBy";

function LayerForm() {
  const { addAnimate, animate, addBackdrop } = useAnimate();
  const [information, setInformation] = useState({});
  const [subscriptionFee, setSubscriptionFee] = useState({});
  const [filledBy, setFilledBy] = useState({});

  const closeForm = () => {
    addAnimate("down");
    addBackdrop("not-show");
  };

  const getInformation = (data) => {
    setInformation(data);
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
      information,
      subscriptionFee,
      filledBy,
    };

    console.log(newData);
  };

  return (
    <Backdrop>
      <div className={`layer-form ${animate}`}>
        <hr onClick={closeForm} />
        <form onSubmit={handleSubmit}>
          <Information getInformation={getInformation} />
          <SubscriptionFee getSubscriptionFee={getSubscriptionFee} />
          <FilledBy getFilledBy={getFilledBy} />
          <button className="btn btn-simpan">Simpan</button>
        </form>
      </div>
    </Backdrop>
  );
}

export default LayerForm;
