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
      {/* <div className="flex flex-col lg:flex-row lg:h-screen">
        <Sidebar />
        <div className="flex flex-col w-full lg:flex-1">
          <Header />
          <main className="bg-gray-100 pt-16 px-6 overflow-auto flex-1 min-h-dvh">
            <Outlet />
          </main>
        </div>
      </div> */}
    </Container>
  );
}

export default App;
