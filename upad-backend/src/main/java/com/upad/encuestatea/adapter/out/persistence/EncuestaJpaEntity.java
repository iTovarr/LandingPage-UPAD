package com.upad.encuestatea.adapter.out.persistence;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "encuestas")
public class EncuestaJpaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "lead_id")
    private UUID leadId;

    @Column(name = "pregunta1_ansiedad", nullable = false, length = 500)
    private String pregunta1Ansiedad;

    @Column(name = "pregunta2_herramienta_actual", nullable = false, length = 500)
    private String pregunta2HerramientaActual;

    @Column(name = "pregunta3_interes_compra", nullable = false, length = 500)
    private String pregunta3InteresCompra;

    public EncuestaJpaEntity() {
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
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
