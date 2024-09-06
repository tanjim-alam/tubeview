"use client"
import React, { useState } from 'react';

const OrderForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [orderDetails, setOrderDetails] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        const res = await fetch('/api/smtp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, orderDetails }),
        });

        const result = await res.json();
        setLoading(false);

        if (res.ok) {
            setSuccess(true);
        } else {
            setError(result.error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Order Details:</label>
                <textarea
                    value={orderDetails}
                    onChange={(e) => setOrderDetails(e.target.value)}
                    required
                />
            </div>
            <button type="submit" disabled={loading}>Send Order</button>
            {loading && <p>Sending...</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {success && <p style={{ color: 'green' }}>Order sent successfully!</p>}
        </form>
    );
};

export default OrderForm;
