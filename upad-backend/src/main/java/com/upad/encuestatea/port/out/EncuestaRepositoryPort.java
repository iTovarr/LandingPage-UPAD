package com.upad.encuestatea.port.out;

import com.upad.encuestatea.domain.model.Encuesta;

import java.util.List;

public interface EncuestaRepositoryPort {

    Encuesta guardar(Encuesta encuesta);

    List<Encuesta> obtenerTodas();
}
