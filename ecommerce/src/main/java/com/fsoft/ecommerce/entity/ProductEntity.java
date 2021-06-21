package com.fsoft.ecommerce.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class ProductEntity extends BaseAuditEntity<String> {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "product_name")
    private String productName;

    @Column(name="category_id")
    private String categoryId;

    @Column(name = "price")
    private Double price;

    @Column(name = "manufacturer")
    private String manufacturer;

    @Column(name = "ram")
    private String RAM;

    @Column(name = "rom")
    private String ROM;

    @Column(name = "screen")
    private String screen;

    @Column(name = "del_flag")
    private Boolean delFlag = false;

    @Column(name = "sale_flag")
    private Boolean saleFlag;

}
