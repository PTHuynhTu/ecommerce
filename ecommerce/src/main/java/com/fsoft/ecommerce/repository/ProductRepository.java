package com.fsoft.ecommerce.repository;

import com.fsoft.ecommerce.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, String> {
    List<ProductEntity> findByDelFlagAndSaleFlag(Boolean delFlag, Boolean saleFlag);
    List<ProductEntity> findByDelFlag(Boolean delFlag);
}
