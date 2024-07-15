import { Outlet } from "react-router-dom";
import Container from "./components/Container";
import { Header, Sidebar } from "./exports.js";

function App() {
  return (
    <Container>
      <div className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="bg-gray-100 p-6 overflow-auto flex-1">
            <Outlet />
          </main>
        </div>
      </div>
    </Container>
  );
}

export default App;
