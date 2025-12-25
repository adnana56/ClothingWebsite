package com.ecommerce.backend.controller;

import com.ecommerce.backend.model.Product;
import com.ecommerce.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*") // Allow all origins for Vercel deployment
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/allproducts")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/newcollections")
    public List<Product> getNewCollections() {
        // Logic to return recent products, for now returning all or last 8
        List<Product> products = productRepository.findAll();
        // Return reverse (newest first)
        return products.size() > 8 ? products.subList(products.size() - 8, products.size()) : products;
    }

    @GetMapping("/popularinwomen")
    public List<Product> getPopularInWomen() {
        return productRepository.findByCategory("women");
    }
}
