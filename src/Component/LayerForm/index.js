import React, { useState } from "react";

// Asset
import "./style.css";
import Spinner from "../Spinner";

// Context
import { useAnimate } from "../../Helpers/Context/Animate";

// Component
import Backdrop from "../Backdrop/";
import Information from "./Parts/Information";
import ClientInformation from "./Parts/ClientInformation";
import SubscriptionFee from "./Parts/SubscriptionFee";
import FilledBy from "./Parts/FilledBy";

function LayerForm({ postData, loading }) {
  const { addAnimate, animate, addBackdrop } = useAnimate();
  const [information, setInformation] = useState({});
  const [clientInformation, setClientInformation] = useState({});
  const [subscriptionFee, setSubscriptionFee] = useState({});
  const [filledBy, setFilledBy] = useState({});

  const closeForm = () => {
    addAnimate("down");
    addBackdrop("not-show");
  };

  const getInformation = (data) => {
    setInformation(data);
  };

  const getClientInformation = (data) => {
    setClientInformation(data);
  };

  const getSubscriptionFee = (data) => {
    setSubscriptionFee(data);
  };

  const getFilledBy = (data) => {
    setFilledBy(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let token = (Math.random() + 1).toString(36).slice(-9);
    const newData = {
      information,
      clientInformation,
      subscriptionFee,
      filledBy,
      token,
      status: "unfilled",
    };
    e.target.reset();
    postData(newData);
  };

  return (
    <Backdrop>
      <div className={`layer-form ${animate}`}>
        <hr onClick={closeForm} />
        <form onSubmit={handleSubmit}>
          <Information getInformation={getInformation} />
          <ClientInformation getClientInformation={getClientInformation} />
          <SubscriptionFee getSubscriptionFee={getSubscriptionFee} />
          <FilledBy getFilledBy={getFilledBy} />
          {loading ? (
            <div className="row">
              <div className="col">
                <button className="btn btn-simpan">
                  <Spinner />
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-cancel"
                  type="button"
                  onClick={closeForm}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col">
                <button className="btn btn-simpan">Buat</button>
              </div>
              <div className="col">
                <button
                  className="btn btn-cancel"
                  type="button"
                  onClick={closeForm}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </Backdrop>
  );
}

export default LayerForm;
