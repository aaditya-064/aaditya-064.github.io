import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} Component={() => <HomePage />} />
          <Route path={"/contact"} Component={() => <ContactForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
