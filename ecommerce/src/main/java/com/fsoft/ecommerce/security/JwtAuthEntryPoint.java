package com.fsoft.ecommerce.security;

import com.fsoft.ecommerce.enums.ErrorCode;
import com.fsoft.ecommerce.exception.AuthenticationException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * JwtAuthEntryPoint implement AuthenticationEntryPoint
 * Commences an authentication scheme.
 */
@Component
public class JwtAuthEntryPoint implements AuthenticationEntryPoint {
    public static Logger logger = LoggerFactory.getLogger(JwtAuthEntryPoint.class);

    /**
     * @param httpServletRequest
     * @param httpServletResponse
     * @param e
     * @throws IOException
     * @throws ServletException
     */
    @Override
    public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, org.springframework.security.core.AuthenticationException e) throws IOException, ServletException {
        logger.error("Unauthorized error. Message - {}", e.getMessage());

        httpServletResponse.setContentType("application/json");
        httpServletResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        if (e.getMessage().contains("Bad credentials")) {
            httpServletResponse.getOutputStream().println(new AuthenticationException(ErrorCode.E1101.getErrorCode(), ErrorCode.E1101.getMessage()).toString());
        } else if (e.getMessage().contains("Full authentication")) {
            httpServletResponse.getOutputStream().println(new AuthenticationException(ErrorCode.E1102.getErrorCode(), ErrorCode.E1102.getMessage()).toString());
        }

    }
}
