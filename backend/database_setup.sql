CREATE DATABASE IF NOT EXISTS clothing_store;
USE clothing_store;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50) DEFAULT 'USER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products Table
CREATE TABLE IF NOT EXISTS products (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    image VARCHAR(500), -- Stores the image filename or URL
    new_price DECIMAL(10, 2),
    old_price DECIMAL(10, 2),
    description TEXT,
    available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Cart Table (Simple relationship)
CREATE TABLE IF NOT EXISTS cart (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT,
    product_id BIGINT,
    quantity INT DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Orders Table
CREATE TABLE IF NOT EXISTS orders (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT,
    total_amount DECIMAL(10, 2),
    status VARCHAR(50) DEFAULT 'PENDING',
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Insert some dummy data to get started
INSERT INTO products (name, category, image, new_price, old_price, description) VALUES 
('Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', 'women', 'product_1.png', 50.0, 80.5, 'A stylish blouse for casual wear.'),
('Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', 'women', 'product_2.png', 85.0, 120.5, 'Elegant and comfortable.'),
('Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', 'women', 'product_3.png', 60.0, 100.5, 'Perfect for summer outings.'),
('Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', 'women', 'product_4.png', 100.0, 150.0, 'High quality fabric.'),
('Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', 'women', 'product_5.png', 85.0, 120.5, 'Soft and breathable.'),
('Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', 'women', 'product_6.png', 85.0, 120.5, 'Trendy and chic.'),
('Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', 'women', 'product_7.png', 85.0, 120.5, 'Great for daily wear.'),
('Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', 'women', 'product_8.png', 85.0, 120.5, 'Classic design.'),
('Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', 'women', 'product_9.png', 85.0, 120.5, 'Versatile and durable.'),
('Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', 'women', 'product_10.png', 85.0, 120.5, 'Modern fit.'),
('Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', 'women', 'product_11.png', 85.0, 120.5, 'Premium material.'),
('Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse', 'women', 'product_12.png', 85.0, 120.5, 'Affordable luxury.'),
('Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket', 'men', 'product_13.png', 85.0, 120.5, 'Warm and trendy bomber jacket.'),
('Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket', 'men', 'product_14.png', 85.0, 120.5, 'Durable zipper.'),
('Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket', 'men', 'product_15.png', 85.0, 120.5, 'Water resistant.'),
('Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket', 'men', 'product_16.png', 85.0, 120.5, 'Stylish urban look.'),
('Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket', 'men', 'product_17.png', 85.0, 120.5, 'Comfortable fit.'),
('Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket', 'men', 'product_18.png', 85.0, 120.5, 'Everyday essential.'),
('Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket', 'men', 'product_19.png', 85.0, 120.5, 'Rugged and reliable.'),
('Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket', 'men', 'product_20.png', 85.0, 120.5, 'Authentic style.'),
('Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket', 'men', 'product_21.png', 85.0, 120.5, 'High performance.'),
('Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket', 'men', 'product_22.png', 85.0, 120.5, 'Outdoor ready.'),
('Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket', 'men', 'product_23.png', 85.0, 120.5, 'Technical fabric.'),
('Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket', 'men', 'product_24.png', 85.0, 120.5, 'Winter collection.'),
('Boys Orange Colourblocked Hooded Sweatshirt', 'kid', 'product_25.png', 85.0, 120.5, 'Comfortable hoodie for kids.'),
('Boys Orange Colourblocked Hooded Sweatshirt', 'kid', 'product_26.png', 85.0, 120.5, 'Bright colors.'),
('Boys Orange Colourblocked Hooded Sweatshirt', 'kid', 'product_27.png', 85.0, 120.5, 'Machine washable.'),
('Boys Orange Colourblocked Hooded Sweatshirt', 'kid', 'product_28.png', 85.0, 120.5, 'Soft inner lining.'),
('Boys Orange Colourblocked Hooded Sweatshirt', 'kid', 'product_29.png', 85.0, 120.5, 'Durable stitching.'),
('Boys Orange Colourblocked Hooded Sweatshirt', 'kid', 'product_30.png', 85.0, 120.5, 'Playful design.'),
('Boys Orange Colourblocked Hooded Sweatshirt', 'kid', 'product_31.png', 85.0, 120.5, 'Easy care.'),
('Boys Orange Colourblocked Hooded Sweatshirt', 'kid', 'product_32.png', 85.0, 120.5, 'School ready.'),
('Boys Orange Colourblocked Hooded Sweatshirt', 'kid', 'product_33.png', 85.0, 120.5, 'Weekend fun.'),
('Boys Orange Colourblocked Hooded Sweatshirt', 'kid', 'product_34.png', 85.0, 120.5, 'Gift choice.'),
('Boys Orange Colourblocked Hooded Sweatshirt', 'kid', 'product_35.png', 85.0, 120.5, 'All season wear.'),
('Boys Orange Colourblocked Hooded Sweatshirt', 'kid', 'product_36.png', 85.0, 120.5, 'Trending style.');
