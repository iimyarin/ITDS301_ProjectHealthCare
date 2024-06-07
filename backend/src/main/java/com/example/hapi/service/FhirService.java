package com.example.hapi.service;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

import reactor.core.publisher.Mono;

@Service
public class FhirService {

    private final WebClient webClient;

    public FhirService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl("https://hapi.fhir.org/baseR4").build();
    }

    public Mono<String> sendDiagnosticReport(String diagnosticReportJson) {
        return webClient.post()
                .uri("/DiagnosticReport")
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .body(BodyInserters.fromValue(diagnosticReportJson))
                .retrieve()
                .bodyToMono(String.class);
    }
}
