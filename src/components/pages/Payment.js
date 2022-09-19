import React, { useState } from "react";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import { useHistory, useLocation } from "react-router-dom";
import Card from "./Card";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "./cardUtils";

const Payment = () => {
  const location = useLocation();

  const email = location.state ? location.state.email : null;
  const budget = location.state ? location.state.budget : null;
  return (
    <>
      {email ? (
        <PaymentForm email={email} budget={budget} />
      ) : (
        <PaymentForm
          email={"malikfarazahmed@gmail.com"}
          budget={"affordable"}
        />
      )}
    </>
  );
};

const PaymentForm = ({ email, budget }) => {
  const history = useHistory();
  const [payment, setPayment] = useState(false);

  const onSubmit = async (values) => {
    console.log(values);

    setPayment(true);

    setTimeout(() => {
      history.push("/");
    }, 3000);
  };

  return (
    <div className="payment" style={{ textAlign: "center" }}>
      {payment ? (
        <>
          <h1>
            Thank you for you payment. You will recieve a confirmation email
            shortly at {email}.
          </h1>
          <h3>Redirecting to Home Page...</h3>
        </>
      ) : (
        <>
          <h2>Kindly fill our payment form to pay your dues</h2>
          <h4>Your Package is: {String(budget).toUpperCase()}</h4>
          <h4>Tour Package: 15,000/-</h4>
          <h4>
            After Adding Package:{" "}
            {budget === "affordable"
              ? "15,000/-"
              : budget === "premium"
              ? "17,000/-"
              : "18,000/-"}
          </h4>

          <div style={{ padding: "60px 0" }}>
            <Styles>
              <Form
                onSubmit={onSubmit}
                render={({
                  handleSubmit,
                  form,
                  submitting,
                  pristine,
                  values,
                  active,
                }) => {
                  return (
                    <form onSubmit={handleSubmit}>
                      <Card
                        number={values.number || ""}
                        name={values.name || ""}
                        expiry={values.expiry || ""}
                        cvc={values.cvc || ""}
                        focused={active}
                      />
                      <div>
                        <Field
                          name="number"
                          component="input"
                          type="text"
                          pattern="[\d| ]{16,22}"
                          placeholder="Card Number"
                          format={formatCreditCardNumber}
                        />
                      </div>
                      <div>
                        <Field
                          name="name"
                          component="input"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                      <div>
                        <Field
                          name="expiry"
                          component="input"
                          type="text"
                          pattern="\d\d/\d\d"
                          placeholder="Valid Thru"
                          format={formatExpirationDate}
                        />
                        <Field
                          name="cvc"
                          component="input"
                          type="text"
                          pattern="\d{3,4}"
                          placeholder="CVC"
                          format={formatCVC}
                        />
                      </div>
                      <div className="buttons">
                        <button type="submit" disabled={submitting}>
                          Submit
                        </button>
                        <button
                          type="button"
                          onClick={form.reset}
                          disabled={submitting || pristine}
                        >
                          Reset
                        </button>
                      </div>
                    </form>
                  );
                }}
              />
            </Styles>
          </div>
        </>
      )}
    </div>
  );
};

export default Payment;
