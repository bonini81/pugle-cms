import { fireEvent, render, screen } from "@testing-library/react";

// import userEvent from "@testing-library/user-event";
import Modal from "./Modal";

const onClick = jest.fn();

test("Render correctly Modal description and title data", () => {
  const modalStatus = true;
  const descriptionModal = "Portfolio Item not Found";
  const titleModal = "Portfolio Item Status";
  const buttonModal = "Cerrar Modal";

  render(
    <Modal
      title={titleModal}
      description={descriptionModal}
      button={buttonModal}
      show={modalStatus}
      handleClose={onClick}
    />
  );
  expect(screen.getByText("Portfolio Item not Found")).toBeInTheDocument();
  expect(screen.getByText("Portfolio Item Status")).toBeInTheDocument();
});

test("Modal not present when show is false", () => {
  const modalStatus = false;
  const descriptionModal = "Sorry, not found";
  const titleModal = "Portfolio Item Status";
  const buttonModal = "Cerrar Modal";

  render(
    <Modal
      title={titleModal}
      description={descriptionModal}
      button={buttonModal}
      show={modalStatus}
      handleClose={onClick}
    />
  );
  expect(screen.queryByText("Sorry, not found")).not.toBeInTheDocument();
});

test("Check handleClose Click is working", () => {
  const modalStatus = true;
  const descriptionModal = "HomePage Service not Found";
  const titleModal = "Portfolio Item Status";
  const buttonModal = "Cerrar Modal";

  const handleClickToClose = jest.fn();

  render(
    <Modal
      title={titleModal}
      description={descriptionModal}
      button={buttonModal}
      show={modalStatus}
      handleClose={handleClickToClose}
    />
  );
  const button = screen.getByRole("button", { name: "Cerrar Modal" });
  fireEvent.click(button);
  expect(handleClickToClose).toHaveBeenCalledTimes(1);
});

/** test("Check handleClose Click to close Modal", async () => {
  const descriptionModal = "Modal description";
  const titleModal = "Portfolio Item Status";
  const buttonModal = "Cerrar Modal";

  let modalStatus = true;

  const handleClose = jest.fn(() => {
    modalStatus = false;
  });

  render(
    <Modal
      title={titleModal}
      description={descriptionModal}
      button={buttonModal}
      show={modalStatus}
      handleClose={handleClose}
    />
  );

  const button = screen.getByRole("button", { name: "Cerrar Modal" });
  fireEvent.click(button);
  await Promise.resolve();

  expect(screen.queryByText("Modal description")).not.toBeInTheDocument();
}); */
