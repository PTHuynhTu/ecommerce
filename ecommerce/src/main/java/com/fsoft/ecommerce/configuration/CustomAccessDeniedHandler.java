package com.fsoft.ecommerce.configuration;

import com.fsoft.ecommerce.enums.ErrorCode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author tupth
 */
@Component
public class CustomAccessDeniedHandler implements AccessDeniedHandler {
    public static Logger logger = LoggerFactory.getLogger(CustomAccessDeniedHandler.class);

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        logger.error("Forbidden error. Message - {}", accessDeniedException.getMessage());
        response.setContentType("application/json");
        response.setStatus(HttpServletResponse.SC_FORBIDDEN);
        response.getOutputStream().println(
                new com.fsoft.ecommerce.exception.AccessDeniedException(ErrorCode.E1103.getErrorCode(), ErrorCode.E1103.getMessage()).toString());
//        response.sendError(HttpServletResponse.SC_FORBIDDEN, "Error -> Forbidden");
    }
}
