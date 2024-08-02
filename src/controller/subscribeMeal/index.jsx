import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faMoneyCheckDollar,
  faCreditCard,
  faNetworkWired,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

const SubscribeMeal = () => {
  return (
    <>
      <div className="h-full mt-[90px] w-full">
        <div></div>
        <div>
          <p>Payment Method</p>
          <div className="flex gap-2">
            <div>
              <div className="flex flex-col gap-2 py-4 pl-2 bg-black text-white">
                <p className="flex justify-center items-center gap-3">
                  <FontAwesomeIcon icon={faHandHoldingDollar} />
                  <span>Cash On Delivery</span>
                </p>
                <p className="flex justify-center items-center gap-3">
                  <FontAwesomeIcon icon={faMoneyCheckDollar} />
                  <span>Credit Card</span>
                </p>
                <p className="flex justify-center items-center gap-3">
                  <FontAwesomeIcon icon={faCreditCard} />
                  <span>Debit Card</span>
                </p>
                <p className="flex justify-center items-center gap-3">
                  <FontAwesomeIcon icon={faNetworkWired} />
                  <span>Net Banking</span>
                </p>
                <p className="flex justify-center items-center gap-3">
                  <FontAwesomeIcon icon={faWallet} /> <span>UPI & Wallets</span>
                </p>
              </div>
              <div>process</div>
            </div>
            <div>offer</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeMeal;
