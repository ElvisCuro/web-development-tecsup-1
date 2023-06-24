const Form = () => {
  return (
    <section className="col-md-4">
      <h3>🐶 Registrar cita 🐶</h3>
      <form>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="petName" placeholder="Nombre de la mascota" />
          <label htmlFor="petName">Nombre de la mascota</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="ownerName" placeholder="Nombre del propietario" />
          <label htmlFor="ownerName">Nombre del propietario</label>
        </div>
        <div className="form-floating mb-3">
          <input type="date" className="form-control" id="date" placeholder="Fecha" />
          <label htmlFor="date">Fecha</label>
        </div>
        <div className="form-floating mb-3">
          <input type="time" className="form-control" id="hour" placeholder="Hora" />
          <label htmlFor="hour">Hora</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" className="form-control" id="symptoms" placeholder="Síntomas" />
          <label htmlFor="symptoms">Síntomas</label>
        </div>
        <button className="btn btn-primary w-100">Registrar</button>
      </form>
    </section>
  );
}

export default Form;