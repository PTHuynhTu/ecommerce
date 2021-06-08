package com.fsoft.ecommerce.util;

public class UUIDBuild {

    public static String createUUID(){
        return  java.util.UUID.randomUUID().toString().replace("-", "");
    }
}
