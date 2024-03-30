import { Outlet } from "react-router-dom";
import Container from "./components/Container";
import { Header, Sidebar } from "./exports.js";

function App() {
  return (
    <Container>
      <Header />
      <Sidebar />
      <main className="bg-gray-100 pt-16 px-20">
        <Outlet />
      </main>
    </Container>
  );
}

export default App;
