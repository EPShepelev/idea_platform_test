import { Button } from "./Button";

export const Currencies = () => {
  return (
    <div>
      <p className="title">валюта</p>
      <div className="buttons">
        <Button name="RUB" mode="button--left button--active" />
        <Button name="USD" mode="button--middle" />
        <Button name="EUR" mode="button--right" />
      </div>
    </div>
  );
};
