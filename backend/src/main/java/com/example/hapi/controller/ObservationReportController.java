package com.example.hapi.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;

import com.example.hapi.model.ObservationReport;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "*")
public class ObservationReportController {

    private final WebClient webClient;

    public ObservationReportController(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://hapi.fhir.org/baseR4").build();
    }

    @PostMapping("/observation-report")
    public Mono<String> sendObservationReport(@RequestBody String observationReportJson) {
        try {
            // แปลงข้อมูล JSON สตริงเป็นอ็อบเจ็กต์ ObservationReport
            ObservationReport observationReport = new ObjectMapper().readValue(observationReportJson,
                    ObservationReport.class);
            // ประมวลผลข้อมูล service request
            return webClient.post()
                    .uri("/Observation")
                    .body(Mono.just(observationReport), ObservationReport.class)
                    .retrieve()
                    .bodyToMono(String.class)
                    .onErrorResume(WebClientResponseException.class, ex -> {
                        return Mono.just("Error: " + ex.getMessage() + " - " + ex.getResponseBodyAsString());
                    });
        } catch (JsonProcessingException e) {
            // จัดการกับข้อผิดพลาดในการแปลงข้อมูล JSON
            return Mono.error(new RuntimeException("Error parsing JSON", e));
        }
    }

    @GetMapping("/observation-report/{id}")
    public Mono<String> getObservationReport(@PathVariable String id) {
        return webClient.get()
                .uri("/Observation/" + id)
                .retrieve()
                .bodyToMono(String.class)
                .onErrorResume(WebClientResponseException.class, ex -> {
                    return Mono.just("Error: " + ex.getMessage() + " - " + ex.getResponseBodyAsString());
                });
    }

    @PutMapping("/observation-report/{id}")
    public Mono<String> updateObservationReport(@RequestBody ObservationReport observationReport,
            @PathVariable String id) {
        return webClient.put()
                .uri("/Observation/" + id)
                .body(Mono.just(observationReport), ObservationReport.class)
                .retrieve()
                .bodyToMono(String.class)
                .onErrorResume(WebClientResponseException.class, ex -> {
                    return Mono.just("Error: " + ex.getMessage() + " - " + ex.getResponseBodyAsString());
                });
    }

    @ExceptionHandler(WebClientResponseException.class)
    public ResponseEntity<String> handleWebClientResponseException(WebClientResponseException ex) {
        return new ResponseEntity<>(ex.getResponseBodyAsString(), ex.getStatusCode());
    }
}
