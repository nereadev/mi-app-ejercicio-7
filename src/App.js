function App() {
  return (
    <>
      <div className="d-flex m-0 p-0 w-100">
        <div className="central d-flex-row m-0 p-0 col-8 vh-100">
          <button className="boton gt30 btn btn-warning text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Equipos asignados a mayores de 30</button>
          <button className="boton tarragona btn btn-warning text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Equipos asignados a personas de Tarragona</button>
          <button className="boton provincias btn btn-warning text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Provincias donde hay equipos</button>
          <button className="boton puestos btn btn-warning text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Puestos de trabajadores con equipo</button>
          <button className="boton edad-media btn btn-warning text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Media de edad de trabajadores</button>
          <button className="boton orden-edad btn btn-warning text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Equipos ordenador por edad</button>
          <button className="boton sobremesa btn btn-warning text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Equipos de tipo sobremesa</button>
          <button className="boton trabajadores-portatil btn btn-warning text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Trabajadores con equipo portátil</button>
          <button className="boton equipos-tipo btn btn-warning text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Equipos organizados por tipo</button>
          <button className="boton portatiles-tarragona btn btn-warning text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Equipos portátiles asigandos en Tarragona</button>
          <button className="boton resumen btn btn-warning text-wrap p-1 m-2" style={{ width: "10rem" }}>
            Resumen de equipos asignados</button>
        </div>
        <aside className="lado d-flex flex-row justify-content-center align-items-center col-4">
          <div className="consola container overflow-auto rounded"></div>
        </aside>
      </div>
    </>
  );
};

export default App;
