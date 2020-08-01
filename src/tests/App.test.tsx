import React from "react";
import { render, waitForElement, fireEvent } from "@testing-library/react";
import App from "../App";

test("Teste 1", async () => {
  const { getByTestId } = render(<App />);
  const origemSelect = await waitForElement(() => getByTestId("origemSelect"));
  const destinoSelect = await waitForElement(() =>
    getByTestId("destinoSelect")
  );
  const tempoTextField = await waitForElement(() =>
    getByTestId("tempoTextField")
  );
  const planoSelect = await waitForElement(() => getByTestId("planoSelect"));

  const comFaleMaisTextField = await waitForElement(() =>
    getByTestId("comFaleMaisTextField")
  );

  const semFaleMaisTextField: HTMLElement = await waitForElement(() =>
    getByTestId("semFaleMaisTextField")
  );

  fireEvent.change(origemSelect, { target: { value: 11 } });
  fireEvent.change(destinoSelect, { target: { value: 16 } });
  fireEvent.change(tempoTextField, { target: { value: 20 } });
  fireEvent.change(planoSelect, { target: { value: 1 } });

  console.log(comFaleMaisTextField.value);
  console.log(semFaleMaisTextField.value);

  expect(comFaleMaisTextField.value).toEqual(0.00);
  expect(semFaleMaisTextField.value).toEqual(38.00);
});
