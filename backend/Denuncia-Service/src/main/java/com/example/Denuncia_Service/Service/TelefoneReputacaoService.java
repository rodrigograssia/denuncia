package com.example.Denuncia_Service.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.Denuncia_Service.dto.RespostaApiTelefoneDTO;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.core.JsonProcessingException;

@Service
public class TelefoneReputacaoService {
    @Autowired
    private RestTemplate restTemplate;

    @Value("${ipqs.api.key}")
    private String telefoneApiKey;

    @Value("${ipqs.api.url}")
    private String apiUrl;


    public RespostaApiTelefoneDTO buscarReputacao(String numero) {

        String normalizedNumber = numero != null ? numero.replaceAll("\\D", "") : "";
        // garante que não duplique o código do país
        if (normalizedNumber.startsWith("55")) {
            normalizedNumber = normalizedNumber.replaceFirst("^55", "");
        }

        String urlCompleta = apiUrl + "/" + telefoneApiKey + "/+55" + normalizedNumber;

        try {
            // 1) buscar resposta crua como String (para garantir que vemos exatamente o que a API retorna)
            String raw = restTemplate.getForObject(urlCompleta, String.class);

            // Logue a URL sem a chave e a resposta crua recebida
            String urlForLog = urlCompleta;
            if (telefoneApiKey != null && !telefoneApiKey.isBlank()) {
                urlForLog = urlCompleta.replace(telefoneApiKey, "****");
            }
            System.out.println("[TelefoneReputacaoService] Chamando URL: " + urlForLog);
            System.out.println("[TelefoneReputacaoService] Resposta (raw): " + raw);

            // 2) mapear manualmente a resposta crua para o DTO usando ObjectMapper
            RespostaApiTelefoneDTO resposta = null;
            try {
                ObjectMapper om = new ObjectMapper();
                resposta = om.readValue(raw, RespostaApiTelefoneDTO.class);
                try {
                    String json = om.writeValueAsString(resposta);
                    System.out.println("[TelefoneReputacaoService] Resposta (DTO): " + json);
                } catch (JsonProcessingException jpe) {
                    System.out.println("[TelefoneReputacaoService] Resposta (toString): " + resposta);
                }
            } catch (Exception mapEx) {
                System.err.println("[TelefoneReputacaoService] Erro ao mapear resposta: " + mapEx.getMessage());
            }

            // também loga campos individuais (útil para ver se os valores mudam)
            if (resposta != null) {
                System.out.println(String.format("[TelefoneReputacaoService] fraudScore=%d recentAbuse=%b voip=%b active=%b spammer=%b",
                        resposta.getFraudScore(), resposta.isRecentAbuse(), resposta.isVoip(), resposta.isActive(), resposta.isSpammer()));
            }

            return resposta;

        } catch (Exception e) {
            System.err.println("Erro ao chamar API de telefone: " + e.getMessage());
            throw new RuntimeException("Falha ao consultar serviço de reputação.", e);
        }
    }


}
