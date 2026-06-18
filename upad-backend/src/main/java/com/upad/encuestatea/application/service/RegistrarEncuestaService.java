package com.upad.encuestatea.application.service;

import com.upad.encuestatea.domain.model.Encuesta;
import com.upad.encuestatea.port.in.RegistrarEncuestaUseCase;
import com.upad.encuestatea.port.out.EncuestaRepositoryPort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RegistrarEncuestaService implements RegistrarEncuestaUseCase {

    private final EncuestaRepositoryPort encuestaRepositoryPort;

    public RegistrarEncuestaService(EncuestaRepositoryPort encuestaRepositoryPort) {
        this.encuestaRepositoryPort = encuestaRepositoryPort;
    }

    @Override
    public Encuesta registrar(Encuesta encuesta) {
        return encuestaRepositoryPort.guardar(encuesta);
    }

    @Override
    @Transactional(readOnly = true)
    public List<Encuesta> obtenerTodas() {
        return encuestaRepositoryPort.obtenerTodas();
    }
}
