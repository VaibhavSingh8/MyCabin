import { Outlet } from "react-router-dom";
import Container from "./components/Container";
import { Header, Sidebar } from "./exports.js";

// const OutletContainer = () => {
//   return <div className="flex flex-col gap-12 mx-0 my-auto max-w-7xl"></div>;
// };

function App() {
  return (
    <Container>
      <Sidebar />
      <div className="sm:col-span-10 flex flex-col">
        <Header />
        <main className="bg-gray-100 pt-16 px-20 overflow-auto h-screen">
          <Outlet />
        </main>
      </div>
    </Container>
  );
}

export default App;
