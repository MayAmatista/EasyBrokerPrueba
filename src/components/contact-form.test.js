import React, { Component } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { mount } from "enzyme";
import { ContactForm } from './ContactForm';

const onSubmit = jest.fn();

beforeEach(() => {
    onSubmit.mockClear();
    render(<ContactForm onSubmit={onSubmit} />);
});

describe("the form renders correctly", () => {

    it(`must display a title "Deje su mensaje"`, () => {
        const title = screen.getByText(/deje su mensaje/i);
        expect(title).toBeInTheDocument();
    });

    it(`must display a title "Contáctese con nosotros"`, () => {
        const title = screen.getByText(/Contáctese con nosotros/i);
        expect(title).toBeInTheDocument();
    });

    it(`must display "Nombre" input`, () => {
        const nameInput = screen.getByPlaceholderText(/nombre/i);
        expect(nameInput).toBeInTheDocument();
    });

    it(`must display "Número de teléfono" input`, () => {
        const phoneInput = screen.getByPlaceholderText(/número de teléfono/i);
        expect(phoneInput).toBeInTheDocument();
    });

    it(`must display "Email" input`, () => {
        const EmailInput = screen.getByPlaceholderText(/email/i);
        expect(EmailInput).toBeInTheDocument();
    });

    it(`must display "Escriba su mensaje aquí...." textarea`, () => {
        const textArea = screen.getByPlaceholderText(/escriba su mensaje aquí..../i);
        expect(textArea).toBeInTheDocument();
    });

    it(`must display "Fuente de contacto" input`, () => {
        const input = screen.getByPlaceholderText(/Fuente de contacto/i);
        expect(input).toBeInTheDocument();
    });

    it(`must display a button "Enviar"`, () => {
        const button = screen.getByText(/enviar/i);
        expect(button).toBeInTheDocument();
    });
});
