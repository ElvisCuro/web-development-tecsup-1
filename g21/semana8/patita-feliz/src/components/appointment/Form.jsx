import { useState } from "react";

const Form = () => {
  const [appointmentForm, setAppointmentForm] = useState({});
  const [appointment, setAppointment] = useState({});

  const handleFormInput = (e) => {
    setAppointmentForm({
      ...appointmentForm,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAppointment(appointmentForm);
  };

  return (
    <>
      <section className="col-md-4">
        <h3>🐱 Registrar cita 🐱</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="form-floating mb-3">
            <input type="text" name="petName" className="form-control" id="petName" placeholder="Nombre de la mascota" onInput={handleFormInput} />
            <label htmlFor="petName">Nombre de la mascota</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" name="ownerName" className="form-control" id="ownerName" placeholder="Nombre del propietario" onInput={handleFormInput} />
            <label htmlFor="ownerName">Nombre del propietario</label>
          </div>
          <div className="form-floating mb-3">
            <input type="date" name="date" className="form-control" id="date" placeholder="Fecha" onInput={handleFormInput} />
            <label htmlFor="date">Fecha</label>
          </div>
          <div className="form-floating mb-3">
            <input type="time" name="hour" className="form-control" id="hour" placeholder="Hora" onInput={handleFormInput} />
            <label htmlFor="hour">Hora</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" name="symptoms" className="form-control" id="symptoms" placeholder="Síntomas" onInput={handleFormInput} />
            <label htmlFor="symptoms">Síntomas</label>
          </div>
          <button className="btn btn-primary w-100">Registrar</button>
        </form>
      </section>
      <section className="col-md-6">
        <h3>🐶 Citas 🐶</h3>
        <ul className="list-group">
          {Object.keys(appointment).length && (
            <li className="list-group-item list-group-item-action" aria-current="false">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Mascota: {appointment.petName} 🐾</h5>
                <small>📆 {appointment.date} 🕤 {appointment.hour}</small>
              </div>
              <p className="mb-1">Síntomas: {appointment.symptoms} 🩺</p>
              <small>Dueño: {appointment.ownerName} 🤗</small>
            </li>
          )}
        </ul>
      </section>
    </>
  );
}

export default Form;