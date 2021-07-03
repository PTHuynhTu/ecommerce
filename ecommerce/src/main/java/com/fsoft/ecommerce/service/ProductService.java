package com.fsoft.ecommerce.service;

import com.fsoft.ecommerce.dto.response.ProductItemFilterResponseDto;
import com.fsoft.ecommerce.dto.response.ProductResponseDto;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Map;

public interface ProductService {
    List<ProductResponseDto> getListProductSale();
    Map<String, List<ProductItemFilterResponseDto>> getListItemsFilter();
    Page<ProductResponseDto> getPageProduct(int page, int size);
}
