import React, { useState } from 'react';
import { services } from '../data/services';

export default function Booking() {
    const [bookingData, setBookingData] = useState({
        name: '',
        phone: '',
        service: '',
        date: '',
        time: ''
    });

    const handleSubmit = () => {
        if (!bookingData.name || !bookingData.phone || !bookingData.service || !bookingData.date || !bookingData.time) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        alert(`Agendamento solicitado!\n\nNome: ${bookingData.name}\nServiço: ${bookingData.service}\nData: ${bookingData.date}\nHorário: ${bookingData.time}\n\nEntraremos em contato para confirmar!`);
    };

    return ( <
            section className = "container mx-auto px-4 py-16" >
            <
            h2 className = "text-4xl font-bold text-center mb-12 text-gray-800" > Agende Seu Horário < /h2> <
            div className = "max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg" >
            <
            div className = "mb-6" >
            <
            label className = "block text-gray-700 font-semibold mb-2" > Nome Completo < /label> <
            input type = "text"
            value = { bookingData.name }
            onChange = {
                (e) => setBookingData({...bookingData, name: e.target.value })
            }
            className = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder = "Seu nome" /
            >
            <
            /div>

            <
            div className = "mb-6" >
            <
            label className = "block text-gray-700 font-semibold mb-2" > Telefone < /label> <
            input type = "tel"
            value = { bookingData.phone }
            onChange = {
                (e) => setBookingData({...bookingData, phone: e.target.value })
            }
            className = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder = "(00) 00000-0000" /
            >
            <
            /div>

            <
            div className = "mb-6" >
            <
            label className = "block text-gray-700 font-semibold mb-2" > Serviço < /label> <
            select value = { bookingData.service }
            onChange = {
                (e) => setBookingData({...bookingData, service: e.target.value })
            }
            className = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" >
            <
            option value = "" > Selecione um serviço < /option> {
            services.map((service, idx) => ( <
                option key = { idx }
                value = { service.name } > { service.name } - { service.price } < /option>
            ))
        } <
        /select> < /
        div >

        <
        div className = "grid md:grid-cols-2 gap-6 mb-6" >
        <
        div >
        <
        label className = "block text-gray-700 font-semibold mb-2" > Data < /label> <
    input type = "date"
    value = { bookingData.date }
    onChange = {
        (e) => setBookingData({...bookingData, date: e.target.value })
    }
    className = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" /
        >
        <
        /div>

    <
    div >
        <
        label className = "block text-gray-700 font-semibold mb-2" > Horário < /label> <
    select value = { bookingData.time }
    onChange = {
        (e) => setBookingData({...bookingData, time: e.target.value })
    }
    className = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500" >
        <
        option value = "" > Selecione < /option> <
    option value = "09:00" > 09: 00 < /option> <
    option value = "10:00" > 10: 00 < /option> <
    option value = "11:00" > 11: 00 < /option> <
    option value = "14:00" > 14: 00 < /option> <
    option value = "15:00" > 15: 00 < /option> <
    option value = "16:00" > 16: 00 < /option> <
    option value = "17:00" > 17: 00 < /option> < /
        select > <
        /div> < /
        div >

        <
        button onClick = { handleSubmit }
    className = "w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity" >
        Confirmar Agendamento <
        /button> < /
        div > <
        /section>
);
}