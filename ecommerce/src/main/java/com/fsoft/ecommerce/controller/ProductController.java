package com.fsoft.ecommerce.controller;

import com.fpt.c99.ecom.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }
//    @GetMapping
//    public ResponseEntity getAllProducts(@RequestParam(value = "page", defaultValue = "0") Integer page,
//                                         @RequestParam(value = "size", defaultValue = "3") Integer size) {
//
//        Page<ProductResponseDto> pageProductResponseDto = productService.getAll(page, size);
//
//        return new ResponseEntity<>(getResponseProductPaging(pageProductResponseDto), HttpStatus.OK);
//    }

}
