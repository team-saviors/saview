package server.jwt.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.filter.CorsFilter;
import server.jwt.filter.JwtAuthenticationFilter;
import server.jwt.filter.JwtAuthorizationFilter;
import server.jwt.handler.UserAuthenticationFailureHandler;
import server.user.repository.RefreshTokenRepository;
import server.user.repository.UserRepository;
import server.user.service.UserService;


@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final CorsFilter corsFilter;

    private final UserRepository userRepository;

    private final UserService userService;

    private final RefreshTokenRepository refreshTokenRepository;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http.csrf().disable();
        http.headers().frameOptions().disable();
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .apply(new CustomDsl())
                .and()
                .authorizeRequests()
//                .antMatchers("/refresh").permitAll()
                .antMatchers("/**/answers", "/**/comments")
                .access("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
                .antMatchers("/**/votes")
                .access("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
                .antMatchers(HttpMethod.POST, "/questions")
                .access("hasRole('ROLE_USER') or hasRole('ROLE_ADMIN')")
                .antMatchers(HttpMethod.PUT, "/questions/*")
                .access("hasRole('ROLE_ADMIN')")
                .antMatchers(HttpMethod.DELETE, "questions/*")
                .access("hasRole('ROLE_ADMIN')")
                .antMatchers("/users/test")
                .access("hasRole('ROLE_USER')")
                .anyRequest().permitAll();

        return http.build();
    }

    public class CustomDsl extends AbstractHttpConfigurer<CustomDsl, HttpSecurity> {

        @Override
        public void configure(HttpSecurity builder) {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, userService, refreshTokenRepository);
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler());

            builder
                    .addFilter(corsFilter)
                    .addFilter(jwtAuthenticationFilter)
                    .addFilter(new JwtAuthorizationFilter(authenticationManager, userRepository));
        }
    }

}
