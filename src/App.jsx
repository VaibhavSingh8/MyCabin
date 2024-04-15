import { Outlet } from "react-router-dom";
import Container from "./components/Container";
import { Header, Sidebar } from "./exports.js";

// const OutletContainer = () => {
//   return <div className="flex flex-col gap-12 mx-0 my-auto max-w-7xl"></div>;
// };

function App() {
  return (
    <Container>
      <Header />
      <Sidebar />
      <main className="bg-gray-100 pt-16 px-20 flex flex-col gap-12 mx-0 my-auto max-w-7xl">
        <Outlet />
      </main>
    </Container>
  );
}

export default App;
