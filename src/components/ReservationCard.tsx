import React from 'react';
import { useDispatch } from 'react-redux';
import { removeReservation } from '../features/reservationSlice';
import { addCustomer } from '../features/customerSlice';

interface ReservationCardTypes {
    name: string,
    index: number
}

export default function ReservationCard({ name, index }: ReservationCardTypes) {

    const dispatch = useDispatch();

    const handleRemoveReservation = () => {
        dispatch(removeReservation(index))
        dispatch(addCustomer({
            id: new Date().getTime().toString(),
            name,
            food: []
        }))
    }

    return (
        <div>
            <div onClick={handleRemoveReservation}
                className="reservation-card-container">{name}</div>
        </div>
    )
}