package by.felalag.financemanagerapi.entity.wrapper;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class SuccessfulLoginResponse {
    private String accessToken;
    private String user;
}
