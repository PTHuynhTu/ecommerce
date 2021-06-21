package com.fsoft.ecommerce.service.impl;

import com.fsoft.ecommerce.dto.response.ProductResponseDto;
import com.fsoft.ecommerce.entity.ProductEntity;
import com.fsoft.ecommerce.repository.ProductRepository;
import com.fsoft.ecommerce.service.ProductService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    private final ModelMapper modelMapper;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository, ModelMapper modelMapper) {
        this.productRepository = productRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<ProductResponseDto> getListProductSale() {
        List<ProductEntity> productEntities = productRepository.findByDelFlagAndSaleFlag(false, true);
        return convertProductEntitiesToProductResponseDtos(productEntities);
    }

    public List<ProductResponseDto> convertProductEntitiesToProductResponseDtos(List<ProductEntity> productEntities) {
        return productEntities.stream()
                .map(productEntity -> modelMapper.map(productEntity, ProductResponseDto.class))
                .collect(Collectors.toList());
    }

}
