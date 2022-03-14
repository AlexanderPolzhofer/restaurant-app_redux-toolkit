import React from 'react';
import { useDispatch } from 'react-redux';
import { removeReservation } from '../features/reservationSlice';

interface ReservationCardTypes {
    name: string,
    index: number
}

export default function ReservationCard({ name, index }: ReservationCardTypes) {

    const dispatch = useDispatch();

    const handleRemoveReservation = () => {
        dispatch(removeReservation(index))
    }


    return (
        <div>
            <div onClick={handleRemoveReservation}
                className="reservation-card-container">{name}</div>
        </div>
    )
}