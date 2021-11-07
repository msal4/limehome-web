import SnackbarProvider from "react-simple-snackbar";
import { ReservationForm } from "./ReservationForm";

function App() {
  return (
    <div className="p-4">
      <SnackbarProvider>
        <ReservationForm />
      </SnackbarProvider>
    </div>
  );
}

export default App;
