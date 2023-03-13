import React from "react";
import "./Subtotal.css";
import accounting from 'accounting-js';

function Subtotal() {
    const currencyValue = 0;
    const formattedValue = accounting.formatMoney(currencyValue, '$', 2, ',', '.');
    return (
      <div className="subtotal">
        <p>
          Subtotal (0 items): <strong>{formattedValue}</strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>

        <button>Proceed to Checkout</button>
      </div>
    );
  }

export default Subtotal;