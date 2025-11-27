package com.example.Denuncia_Service.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.Data;
 

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class RespostaApiTelefoneDTO {
    @JsonProperty("fraud_score")
    private int fraudScore;

    @JsonProperty("recent_abuse")
    private boolean recentAbuse;

    @JsonProperty("voip")
    @JsonAlias({"VOIP"})
    private boolean voip;
    @JsonProperty("active")
    private boolean active;
    @JsonProperty("spammer")
    private boolean spammer;

}
