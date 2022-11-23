import { forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useShoppingCart } from "../context/ShoppingCartContext";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackBar = () => {
  const { openSnack, closeSnackBar, snackMessage, snackSeverity } =
    useShoppingCart();

  return (
    <>
      <Snackbar
        open={openSnack}
        autoHideDuration={2000}
        onClose={closeSnackBar}>
        <Alert
          onClose={closeSnackBar}
          severity={snackSeverity === "success" ? "success" : "warning"}
          sx={{ width: "100%" }}>
          {snackMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackBar;
