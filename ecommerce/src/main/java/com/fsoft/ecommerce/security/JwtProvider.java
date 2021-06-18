package com.fsoft.ecommerce.security;

import com.fsoft.ecommerce.configuration.UserPrincipal;
import io.jsonwebtoken.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

/**
 * JwtProvider generate and validate JWT
 */
@Component
@ConfigurationProperties(prefix = "ecommerce.app")
public class    JwtProvider {
    public static Logger logger = LoggerFactory.getLogger(JwtProvider.class);

    private String jwtSecret; //jwt secret key

    private int jwtExpiration; //jwt expiration time


    /**
     * @param authentication
     * @return JWT
     * Method generateJWT create jwt token. The @return value is jwt token which have subject is username,
     * expiration time is value of "ecom.app.jwtExpiration" (second),
     * secret key is value of "ecom.app.jwtSecret"
     */
    public String generateJWT(Authentication authentication) {
        UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
        return Jwts.builder().setSubject(userPrincipal.getUsername()).setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + jwtExpiration * 1000L))
                .signWith(SignatureAlgorithm.HS512, jwtSecret).compact();
    }

    public String getUsernameFromJWT(String token) {
        return Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token).getBody().getSubject();
    }

    /**
     * @param token
     * @return
     */
    public boolean validateJWT(String token) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
            return true;

        } catch (SignatureException e) {
            logger.debug("Invalid JWT signature -> Message: {} ", e.getMessage());
        } catch (MalformedJwtException e) {
            logger.debug("Invalid JWT token -> Message: {}", e.getMessage());
        } catch (ExpiredJwtException e) {
            logger.debug("Expired JWT token -> Message: {}", e.getMessage());
        } catch (UnsupportedJwtException e) {
            logger.debug("Unsupported JWT token -> Message: {}", e.getMessage());
        } catch (IllegalArgumentException e) {
            logger.debug("JWT claims string is empty -> Message: {}", e.getMessage());
        }

        return false;
    }

    public String getJwtSecret() {
        return jwtSecret;
    }

    public void setJwtSecret(String jwtSecret) {
        this.jwtSecret = jwtSecret;
    }

    public int getJwtExpiration() {
        return jwtExpiration;
    }

    public void setJwtExpiration(int jwtExpiration) {
        this.jwtExpiration = jwtExpiration;
    }
}
