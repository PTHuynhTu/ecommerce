package com.fsoft.ecommerce.util;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class Constant {
    public final static String BEARER = "Bearer ";
    public final static String AUTHORIZATION = "Authorization";
    public final static List<String> pathPermits = new ArrayList<String>() {
        {
            add("/api/auth");
            add("/swagger");
            add("/v2/api-docs");
            add("/webjars");
            add("/csrf");
        }
    };

    public final static String STRING_INPUT_VALIDATE = "^[a-zA-Z0-9]*$";

    public static final boolean DELETED_FLAG = true;

    public final static DateTimeFormatter formatter = DateTimeFormatter.ISO_DATE_TIME;
    
}
