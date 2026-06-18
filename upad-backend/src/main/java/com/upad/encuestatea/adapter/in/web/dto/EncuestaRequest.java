package com.upad.encuestatea.adapter.in.web.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

import java.util.UUID;

public class EncuestaRequest {

    private UUID leadId;

    @NotBlank(message = "La respuesta sobre ansiedad es obligatoria")
    @Size(max = 500, message = "La respuesta no puede exceder 500 caracteres")
    private String pregunta1Ansiedad;

    @NotBlank(message = "La respuesta sobre herramienta actual es obligatoria")
    @Size(max = 500, message = "La respuesta no puede exceder 500 caracteres")
    private String pregunta2HerramientaActual;

    @NotBlank(message = "La respuesta sobre interés de compra es obligatoria")
    @Size(max = 500, message = "La respuesta no puede exceder 500 caracteres")
    private String pregunta3InteresCompra;

    public EncuestaRequest() {
    }

    public EncuestaRequest(UUID leadId, String pregunta1Ansiedad,
                           String pregunta2HerramientaActual, String pregunta3InteresCompra) {
        this.leadId = leadId;
        this.pregunta1Ansiedad = pregunta1Ansiedad;
        this.pregunta2HerramientaActual = pregunta2HerramientaActual;
        this.pregunta3InteresCompra = pregunta3InteresCompra;
    }

    public UUID getLeadId() {
        return leadId;
    }

    public void setLeadId(UUID leadId) {
        this.leadId = leadId;
    }

    public String getPregunta1Ansiedad() {
        return pregunta1Ansiedad;
    }

    public void setPregunta1Ansiedad(String pregunta1Ansiedad) {
        this.pregunta1Ansiedad = pregunta1Ansiedad;
    }

    public String getPregunta2HerramientaActual() {
        return pregunta2HerramientaActual;
    }

    public void setPregunta2HerramientaActual(String pregunta2HerramientaActual) {
        this.pregunta2HerramientaActual = pregunta2HerramientaActual;
    }

    public String getPregunta3InteresCompra() {
        return pregunta3InteresCompra;
    }

    public void setPregunta3InteresCompra(String pregunta3InteresCompra) {
        this.pregunta3InteresCompra = pregunta3InteresCompra;
    }
}
