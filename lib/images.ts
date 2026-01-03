// Unique image mapping for snowboard hire business
// Each service gets specific, relevant images

export const serviceImages: Record<string, string[]> = {
  'snowboard-rental': [
    'https://images.unsplash.com/photo-1568634734499-5ac0c5ae4c39?w=1200',
    'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200',
    'https://images.unsplash.com/photo-1486714210557-d5f6b8d7f6d6?w=1200',
  ],
  'boot-hire': [
    'https://images.unsplash.com/photo-1544835991-43a4e5d6e5d6?w=1200',
    'https://images.unsplash.com/photo-1602192509154-0b900ee1f851?w=1200',
    'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=1200',
  ],
  'complete-package-hire': [
    'https://images.unsplash.com/photo-1511080309810-5eb5f8fda0c7?w=1200',
    'https://images.unsplash.com/photo-1549450950-2c26e0b37a3b?w=1200',
    'https://images.unsplash.com/photo-1544919013-8c7f42e0c0b7?w=1200',
  ],
  'kids-snowboard-hire': [
    'https://images.unsplash.com/photo-1522056615691-da7b8106c665?w=1200',
    'https://images.unsplash.com/photo-1609133522770-93d2ab4811ea?w=1200',
    'https://images.unsplash.com/photo-1609133520227-5f95d25c7e5e?w=1200',
  ],
  'beginner-snowboard-package': [
    'https://images.unsplash.com/photo-1548777123-bfa12048bd7a?w=1200',
    'https://images.unsplash.com/photo-1548777538-e3b4c4db27ce?w=1200',
    'https://images.unsplash.com/photo-1512595846955-f5b16f7b3e31?w=1200',
  ],
  'advanced-performance-rental': [
    'https://images.unsplash.com/photo-1544926909-e8e5e7f0b66e?w=1200',
    'https://images.unsplash.com/photo-1556618776-eb6e8ff1e2e0?w=1200',
    'https://images.unsplash.com/photo-1509552515554-fdb35e53d16f?w=1200',
  ],
  'snowboard-tuning-maintenance': [
    'https://images.unsplash.com/photo-1589635833305-c9b7f5e7a192?w=1200',
    'https://images.unsplash.com/photo-1556618616-ba867f07e2e4?w=1200',
    'https://images.unsplash.com/photo-1611083360739-090e9b85e827?w=1200',
  ],
  'seasonal-hire': [
    'https://images.unsplash.com/photo-1538695885629-e8e0b8c1c456?w=1200',
    'https://images.unsplash.com/photo-1609133521195-66d0b1e5d04c?w=1200',
    'https://images.unsplash.com/photo-1542779283-95096a61d5c2?w=1200',
  ],
  'group-rental-packages': [
    'https://images.unsplash.com/photo-1608499102472-8c4305842b38?w=1200',
    'https://images.unsplash.com/photo-1560263530-5d8a79c44030?w=1200',
    'https://images.unsplash.com/photo-1551730459-92db2a308d6a?w=1200',
  ],
  'helmet-safety-gear-hire': [
    'https://images.unsplash.com/photo-1589193266957-9e35fb59f43e?w=1200',
    'https://images.unsplash.com/photo-1578485459471-c0d9d7a2de97?w=1200',
    'https://images.unsplash.com/photo-1604151354081-c7b5f0e2e0d4?w=1200',
  ],
  'goggle-accessories-rental': [
    'https://images.unsplash.com/photo-1541140134513-85a161dc4a00?w=1200',
    'https://images.unsplash.com/photo-1589195244098-37b1b4e3c42d?w=1200',
    'https://images.unsplash.com/photo-1483381719261-070a0c2e5ce2?w=1200',
  ],
  'same-day-express-hire': [
    'https://images.unsplash.com/photo-1552075295-cf90e1e418a6?w=1200',
    'https://images.unsplash.com/photo-1532935946034-fdc39e69b6f5?w=1200',
    'https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?w=1200',
  ],
  'default': [
    'https://images.unsplash.com/photo-1548777123-bfa12048bd7a?w=1200',
    'https://images.unsplash.com/photo-1511080309810-5eb5f8fda0c7?w=1200',
    'https://images.unsplash.com/photo-1544919013-8c7f42e0c0b7?w=1200',
  ],
};

// Track used images to ensure uniqueness
const usedImages = new Set<string>();

export function getUniqueImage(service: string, index: number = 0): string {
  const images = serviceImages[service] || serviceImages['default'];

  // Try to find unused image
  for (const img of images) {
    if (!usedImages.has(img)) {
      usedImages.add(img);
      return img;
    }
  }

  // Fallback to index-based selection if all used
  const selectedImage = images[index % images.length];
  usedImages.add(selectedImage);
  return selectedImage;
}

export function resetUsedImages(): void {
  usedImages.clear();
}
