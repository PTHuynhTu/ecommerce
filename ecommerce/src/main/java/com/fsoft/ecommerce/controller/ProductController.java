package com.fsoft.ecommerce.controller;

import com.fsoft.ecommerce.dto.response.ProductItemFilterResponseDto;
import com.fsoft.ecommerce.dto.response.ProductResponseDto;
import com.fsoft.ecommerce.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/get-sales")
    public ResponseEntity<List<ProductResponseDto>> getListProductSale() {
        return ResponseEntity.ok(productService.getListProductSale());
    }

    @GetMapping("/get-items-filter")
    public ResponseEntity<Map<String, List<ProductItemFilterResponseDto>>> getItemsFiler() {
        return ResponseEntity.ok(productService.getListItemsFilter());
    }

}
