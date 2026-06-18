package com.upad.encuestatea.domain.model;

import java.util.UUID;

public class Encuesta {

    private UUID id;
    private UUID leadId;
    private String pregunta1Ansiedad;
    private String pregunta2HerramientaActual;
    private String pregunta3InteresCompra;

    public Encuesta(UUID id, UUID leadId, String pregunta1Ansiedad,
                    String pregunta2HerramientaActual, String pregunta3InteresCompra) {
        validarRespuesta(pregunta1Ansiedad, "pregunta sobre ansiedad");
        validarRespuesta(pregunta2HerramientaActual, "pregunta sobre herramienta actual");
        validarRespuesta(pregunta3InteresCompra, "pregunta sobre interés de compra");

        this.id = id;
        this.leadId = leadId;
        this.pregunta1Ansiedad = pregunta1Ansiedad.trim();
        this.pregunta2HerramientaActual = pregunta2HerramientaActual.trim();
        this.pregunta3InteresCompra = pregunta3InteresCompra.trim();
    }

    // ── Factory method ──
    public static Encuesta crear(UUID leadId, String pregunta1Ansiedad,
                                  String pregunta2HerramientaActual,
                                  String pregunta3InteresCompra) {
        return new Encuesta(null, leadId, pregunta1Ansiedad,
                pregunta2HerramientaActual, pregunta3InteresCompra);
    }

    // ── Validaciones de negocio ──
    private void validarRespuesta(String respuesta, String nombreCampo) {
        if (respuesta == null || respuesta.trim().isEmpty()) {
            throw new IllegalArgumentException(
                    "La respuesta a la " + nombreCampo + " es obligatoria");
        }
        if (respuesta.trim().length() > 500) {
            throw new IllegalArgumentException(
                    "La respuesta a la " + nombreCampo + " no puede exceder 500 caracteres");
        }
    }

    // ── Getters ──
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

    public void asignarId(UUID id) {
        this.id = id;
    }
}
