import React from 'react';

interface CustomerCardTypes {
    id: string,
    name: string,
    food: string[]
}

export default function CustomerCard({ id, name, food }: CustomerCardTypes) {

    return (
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
                <div className="customer-food"></div>
                <div className="customer-food-input-container">
                    <input />
                    <button>Add</button>
                </div>
            </div>
        </div>
    );
}