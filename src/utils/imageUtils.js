export const getImageUrl = (imagePath) => {
    if (!imagePath) {
        console.warn('Image path missing, using fallback');
        return '/images/product_1.png'; // Default fallback
    }
    console.log('Processing image path:', imagePath);

    // If it's already a full URL (http/https), return it
    if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
        return imagePath;
    }

    // If it's a local static path (starts with / or static), return it
    // But be careful: some cloud IDs might not start with /
    if (imagePath.startsWith('/') || imagePath.startsWith('static')) {
        return imagePath;
    }

    // If we have a cloud base URL configured, prepend it
    const cloudBaseUrl = process.env.REACT_APP_CLOUD_BASE_URL;
    if (cloudBaseUrl) {
        // Ensure base URL ends with / if needed, or just standard concatenation
        // Cloudinary URLs usually look like: https://res.cloudinary.com/<cloud_name>/image/upload/<public_id>
        return `${cloudBaseUrl}${imagePath}`;
    }

    // Fallback for local development if no cloud URL is set
    // Assuming images might be in public/images
    return `/images/${imagePath}`;
};
