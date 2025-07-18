// Standardized Product Data Structure
// All products should follow this exact structure with different content

export interface StandardizedProductData {
  // Basic Information
  id: string
  name: string
  turkishName: string
  tagline: string
  scientificName: string
  
  // Images (all products need these 4 images)
  heroImage: string
  packagingImage: string
  lifestyleImage: string
  rawIngredientImage: string

  // Key Product Specs (standardized table)
  specs: {
    optimalHarvest: string      // "X days (Y-Z cm)"
    shelfLife: string           // "X days (Y-Z°C)"
    calories: string            // "X kcal/100g"
    nutritionalValue: string    // "Vitamin A, B, C..."
    waterConsumption: string    // "X.XL / 100g production"
  }

  // Chef's Golden Rules (exactly 5 rules)
  chefRules: string[]

  // Critical Chef's Note (important warning/tip)
  criticalNote: string

  // Flavor Pairings (3 categories)
  flavorPairings: {
    dairy: string[]    // 4 items
    fish: string[]     // 4 items  
    citrus: string[]   // 4 items
  }

  // Taste Profile (3-stage tasting journey)
  tasteProfile: {
    start: string      // Initial taste
    middle: string     // Mid-palate
    finish: string     // Aftertaste
  }
}

// Example of how each product should be structured:
export const EXAMPLE_PRODUCT: StandardizedProductData = {
  id: "example",
  name: "Example Product",
  turkishName: "Örnek Ürün",
  tagline: "Descriptive & Appealing",
  scientificName: "Plantus exampleus",
  
  heroImage: "/images/products/example-hero.jpg",
  packagingImage: "/images/products/example-packaging.jpg", 
  lifestyleImage: "/images/products/example-lifestyle.jpg",
  rawIngredientImage: "/images/products/whole-example.jpg",

  specs: {
    optimalHarvest: "10 days (5-8cm)",
    shelfLife: "7 days (2-4°C)", 
    calories: "25 kcal/100g",
    nutritionalValue: "Vitamin C, Iron, Calcium",
    waterConsumption: "0.5L / 100g production"
  },

  chefRules: [
    "Rule 1 - specific cooking instruction",
    "Rule 2 - storage or handling tip", 
    "Rule 3 - flavor pairing advice",
    "Rule 4 - temperature or timing guidance",
    "Rule 5 - presentation or service tip"
  ],

  criticalNote: "Important warning or critical cooking/handling information that chefs must know.",

  flavorPairings: {
    dairy: ["Item 1", "Item 2", "Item 3", "Item 4"],
    fish: ["Item 1", "Item 2", "Item 3", "Item 4"],
    citrus: ["Item 1", "Item 2", "Item 3", "Item 4"]
  },

  tasteProfile: {
    start: "Initial flavor description",
    middle: "Mid-palate experience", 
    finish: "Aftertaste characteristics"
  }
}
