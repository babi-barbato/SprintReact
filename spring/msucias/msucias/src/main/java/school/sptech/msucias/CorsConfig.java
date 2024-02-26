package school.sptech.msucias;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("*"); // Permitir requisições de qualquer origem
        config.addAllowedHeader("*"); // Permitir todos os headers
        config.addAllowedMethod("*"); // Permitir todos os métodos (GET, POST, PUT, DELETE, etc)
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }


}

