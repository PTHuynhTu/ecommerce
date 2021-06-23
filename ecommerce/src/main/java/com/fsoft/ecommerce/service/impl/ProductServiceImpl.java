package com.fsoft.ecommerce.service.impl;

import com.fsoft.ecommerce.dto.response.ProductItemFilterResponseDto;
import com.fsoft.ecommerce.dto.response.ProductResponseDto;
import com.fsoft.ecommerce.entity.ProductEntity;
import com.fsoft.ecommerce.repository.ProductRepository;
import com.fsoft.ecommerce.service.ProductService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.function.Function;
import java.util.function.Predicate;
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

    public Map<String, List<ProductItemFilterResponseDto>> getListItemsFilter() {
        List<ProductEntity> productEntities = productRepository.findByDelFlag(false);
        //Get capacity RAM of all products
        List<ProductItemFilterResponseDto> ramItems = getRAMCapacity(productEntities);

       //Get capacity ROM of all products
        List<ProductItemFilterResponseDto> romItems = getROMCapacity(productEntities);

        //Get manufacture of all products
        List<ProductItemFilterResponseDto> manufactureItems = getProductManufacture(productEntities);

        //Get screen type of all products
        List<ProductItemFilterResponseDto> screenItems = getScreenType(productEntities);

        Map<String, List<ProductItemFilterResponseDto>> mapProductItemsFilter = new HashMap<>();
        mapProductItemsFilter.put("RAM", ramItems);
        mapProductItemsFilter.put("ROM", romItems);
        mapProductItemsFilter.put("Manufacture", manufactureItems);
        mapProductItemsFilter.put("Screen", screenItems);
        return mapProductItemsFilter;
    }

    public List<ProductResponseDto> convertProductEntitiesToProductResponseDtos(List<ProductEntity> productEntities) {
        return productEntities.stream()
                .map(productEntity -> modelMapper.map(productEntity, ProductResponseDto.class))
                .collect(Collectors.toList());
    }

    public static <T> Predicate<T> distinctByKey(Function<? super T, ?> keyExtractor) {
        Set<Object> seen = ConcurrentHashMap.newKeySet();
        return t -> seen.add(keyExtractor.apply(t));
    }

    private List<ProductItemFilterResponseDto> getRAMCapacity(List<ProductEntity> productEntities) {
        List<ProductItemFilterResponseDto> ramItems = new ArrayList<>();
        productEntities.stream()
                .filter(productEntity -> productEntity.getRAM() != null)
                .filter(distinctByKey(ProductEntity::getRAM))
                .forEach(productEntity -> {
                    ramItems.add(new ProductItemFilterResponseDto(productEntity.getRAM()));
                });
        ramItems.sort(Comparator.comparing(ProductItemFilterResponseDto::getName));
        return  ramItems;
    }

    private List<ProductItemFilterResponseDto> getROMCapacity(List<ProductEntity> productEntities) {
        List<ProductItemFilterResponseDto> romItems = new ArrayList<>();
        productEntities.stream()
                .filter(productEntity -> productEntity.getROM() != null)
                .filter(distinctByKey(ProductEntity::getROM))
                .forEach(productEntity -> {
                    romItems.add(new ProductItemFilterResponseDto(productEntity.getROM()));
                });
        romItems.sort(Comparator.comparing(ProductItemFilterResponseDto::getName));
        return  romItems;
    }

    private List<ProductItemFilterResponseDto> getProductManufacture(List<ProductEntity> productEntities) {
        List<ProductItemFilterResponseDto> manufactureItems = new ArrayList<>();
        productEntities.stream()
                .filter(productEntity -> productEntity.getManufacturer() != null)
                .filter(distinctByKey(ProductEntity::getManufacturer))
                .forEach(productEntity -> {
                    manufactureItems.add(new ProductItemFilterResponseDto(productEntity.getManufacturer()));
                });
        manufactureItems.sort(Comparator.comparing(ProductItemFilterResponseDto::getName));
        return  manufactureItems;
    }

    private List<ProductItemFilterResponseDto> getScreenType(List<ProductEntity> productEntities) {
        List<ProductItemFilterResponseDto> screenItems = new ArrayList<>();
        productEntities.stream()
                .filter(productEntity -> productEntity.getScreen() != null)
                .filter(distinctByKey(ProductEntity::getScreen))
                .forEach(productEntity -> {
                    screenItems.add(new ProductItemFilterResponseDto(productEntity.getScreen()));
                });
        screenItems.sort(Comparator.comparing(ProductItemFilterResponseDto::getName));
        return  screenItems;
    }

}
