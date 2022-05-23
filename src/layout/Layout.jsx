import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const Location = useLocation();
  const urlActual = Location.pathname;

  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/6 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM-Clientes
        </h2>
        <nav className="mt-10">
          <Link
            to="/clientes"
            className={`${
              urlActual === "/clientes" ? "text-blue-200" : "text-white"
            } text-2xl block mt-2 hover:text-blue-200`}
          >
            Clientes
          </Link>
          <Link
            to="/clientes/nuevo"
            className={`${
                urlActual === "/clientes/nuevo" ? "text-blue-200" : "text-white"
              } text-2xl block mt-2 hover:text-blue-200`}
          >
            Nuevo Cliente
          </Link>
        </nav>
      </div>

      <div className="md:w-5/6 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
