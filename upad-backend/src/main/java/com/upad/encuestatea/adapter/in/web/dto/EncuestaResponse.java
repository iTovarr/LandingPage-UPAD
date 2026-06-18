package com.upad.encuestatea.adapter.in.web.dto;

import com.upad.encuestatea.domain.model.Encuesta;

import java.util.UUID;

public class EncuestaResponse {

    private UUID id;
    private UUID leadId;
    private String pregunta1Ansiedad;
    private String pregunta2HerramientaActual;
    private String pregunta3InteresCompra;

    public EncuestaResponse() {
    }

    public static EncuestaResponse fromDomain(Encuesta encuesta) {
        EncuestaResponse response = new EncuestaResponse();
        response.id = encuesta.getId();
        response.leadId = encuesta.getLeadId();
        response.pregunta1Ansiedad = encuesta.getPregunta1Ansiedad();
        response.pregunta2HerramientaActual = encuesta.getPregunta2HerramientaActual();
        response.pregunta3InteresCompra = encuesta.getPregunta3InteresCompra();
        return response;
    }

    public UUID getId() {
        return id;
    }

    public UUID getLeadId() {
        return leadId;
    }

    public String getPregunta1Ansiedad() {
        return pregunta1Ansiedad;
    }

    public String getPregunta2HerramientaActual() {
        return pregunta2HerramientaActual;
    }

    public String getPregunta3InteresCompra() {
        return pregunta3InteresCompra;
    }
}
