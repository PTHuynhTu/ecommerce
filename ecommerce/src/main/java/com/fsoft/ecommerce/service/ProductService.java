package com.fsoft.ecommerce.service;

import com.fsoft.ecommerce.dto.response.ProductResponseDto;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ProductService {
    List<ProductResponseDto> getListProductSale();
}
