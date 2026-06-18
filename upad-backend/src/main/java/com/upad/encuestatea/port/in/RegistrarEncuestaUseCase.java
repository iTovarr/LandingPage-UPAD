package com.upad.encuestatea.port.in;

import com.upad.encuestatea.domain.model.Encuesta;

import java.util.List;

public interface RegistrarEncuestaUseCase {

    Encuesta registrar(Encuesta encuesta);

    List<Encuesta> obtenerTodas();
}
