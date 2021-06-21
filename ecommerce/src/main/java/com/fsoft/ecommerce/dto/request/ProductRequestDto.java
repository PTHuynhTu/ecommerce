package com.fsoft.ecommerce.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProductRequestDto {
    private String productName;
    private String categoryId;
    private Double price;
    private String manufacturer;
    private String RAM;
    private String ROM;
    private String screen;
    private Boolean saleFlag;
}
