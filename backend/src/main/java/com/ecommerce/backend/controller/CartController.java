package com.ecommerce.backend.controller;

import com.ecommerce.backend.model.Cart;
import com.ecommerce.backend.repository.CartRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    @Autowired
    private CartRepository cartRepository;

    // Helper to extract user ID from dummy token "dummy-jwt-token-123"
    private Long getUserIdFromToken(String token) {
        try {
            if (token != null && token.startsWith("dummy-jwt-token-")) {
                return Long.parseLong(token.split("-")[3]);
            }
        } catch (Exception e) {
        }
        return null;
    }

    @PostMapping("/addtocart")
    public Map<String, String> addToCart(@RequestHeader("auth-token") String token,
            @RequestBody Map<String, Long> body) {
        Map<String, String> response = new HashMap<>();
        Long userId = getUserIdFromToken(token);
        if (userId == null) {
            response.put("message", "Invalid Token");
            return response;
        }

        Long itemId = body.get("itemId");
        Optional<Cart> cartItem = cartRepository.findByUserIdAndProductId(userId, itemId);

        if (cartItem.isPresent()) {
            Cart item = cartItem.get();
            item.setQuantity(item.getQuantity() + 1);
            cartRepository.save(item);
        } else {
            Cart item = new Cart();
            item.setUserId(userId);
            item.setProductId(itemId);
            item.setQuantity(1);
            cartRepository.save(item);
        }
        response.put("message", "Added");
        return response;
    }

    @PostMapping("/removefromcart")
    public Map<String, String> removeFromCart(@RequestHeader("auth-token") String token,
            @RequestBody Map<String, Long> body) {
        Map<String, String> response = new HashMap<>();
        Long userId = getUserIdFromToken(token);
        if (userId == null) {
            response.put("message", "Invalid Token");
            return response;
        }

        Long itemId = body.get("itemId");
        Optional<Cart> cartItem = cartRepository.findByUserIdAndProductId(userId, itemId);

        if (cartItem.isPresent()) {
            Cart item = cartItem.get();
            item.setQuantity(item.getQuantity() - 1);
            if (item.getQuantity() <= 0) {
                cartRepository.delete(item);
            } else {
                cartRepository.save(item);
            }
        }
        response.put("message", "Removed");
        return response;
    }

    @PostMapping("/getcart")
    public Map<Integer, Integer> getCart(@RequestHeader("auth-token") String token) {
        Long userId = getUserIdFromToken(token);
        Map<Integer, Integer> cartData = new HashMap<>();

        // Initialize default empty structure matching frontend expectations (0 to 300)
        for (int i = 0; i <= 300; i++) {
            cartData.put(i, 0);
        }

        if (userId != null) {
            List<Cart> userCart = cartRepository.findByUserId(userId);
            for (Cart item : userCart) {
                cartData.put(item.getProductId().intValue(), item.getQuantity());
            }
        }
        return cartData;
    }
}
