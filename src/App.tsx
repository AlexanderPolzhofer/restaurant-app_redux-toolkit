import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import ReservationCard from "./components/ReservationCard";
import { RootState } from './app/store';
import { addReservation } from "./features/reservationSlice";


function App() {

  const [reservationsNameInput, setReservationsNameInput] = useState('');

  const reservations = useSelector((state: RootState) => state.reservations.value)

  const dispatch = useDispatch();

  const handleAddReservations = () => {
    if (!reservationsNameInput) {
      return;
    }
    dispatch(addReservation(reservationsNameInput));
    setReservationsNameInput('');
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard name={name} index={index} />
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={reservationsNameInput}
              onChange={e => setReservationsNameInput(e.target.value)} />
            <button
              onClick={handleAddReservations}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <div className="customer-food-card-container">
            <p>Joker</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input />
                <button>Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;