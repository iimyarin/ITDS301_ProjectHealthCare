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

import com.example.hapi.model.ServiceRequest;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "*")
public class ServiceRequestController {

    private final WebClient webClient;

    public ServiceRequestController(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://hapi.fhir.org/baseR4").build();
    }

    @PostMapping("/service-request")
    public Mono<String> sendServiceRequest(@RequestBody String serviceRequestJson) {
        try {
            // แปลงข้อมูล JSON สตริงเป็นอ็อบเจ็กต์ ServiceRequest
            ServiceRequest serviceRequest = new ObjectMapper().readValue(serviceRequestJson, ServiceRequest.class);
            // ประมวลผลข้อมูล service request
            return webClient.post()
                    .uri("/ServiceRequest")
                    .body(Mono.just(serviceRequest), ServiceRequest.class)
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

    @GetMapping("/service-request/{id}")
    public Mono<String> getDiagnosticReport(@PathVariable String id) {
        return webClient.get()
                .uri("/ServiceRequest/" + id)
                .retrieve()
                .bodyToMono(String.class)
                .onErrorResume(WebClientResponseException.class, ex -> {
                    return Mono.just("Error: " + ex.getMessage() + " - " + ex.getResponseBodyAsString());
                });
    }

    @PutMapping("/service-request/{id}")
    public Mono<String> updateDiagnosticReport(@RequestBody ServiceRequest serviceRequest,
            @PathVariable String id) {
        return webClient.put()
                .uri("/ServiceRequest/" + id)
                .body(Mono.just(serviceRequest), ServiceRequest.class)
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
