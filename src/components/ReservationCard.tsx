import React from 'react';

interface ReservationCardTypes {
    name: string
}

export default function ReservationCard({ name }: ReservationCardTypes) {
    return (
        <div>
            <div className="reservation-card-container">{name}</div>
        </div>
    )
}