package com.fsoft.ecommerce.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product_description")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDescriptionEntity extends BaseAuditEntity<String> {

    @Id
    @Column(name = "id")
    private String id;

    @Column(name = "product_id")
    private String productId;

    @Column(name = "description")
    private String description;

    @Column(name = "del_flag")
    private Boolean delFlag = false;

}
