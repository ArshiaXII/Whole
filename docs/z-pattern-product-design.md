# Z-Pattern Product Page Design System

## Overview
The new product page design follows a Z-pattern alternating grid layout that guides the user's eye naturally down the page. This creates an engaging, professional experience that showcases product information in a logical, visually appealing flow.

## Design Structure

### 1. Hero Section (Z-Pattern Start)
**Layout**: Image Left, Content Right
- **Left Side**: Large circular hero image with gradient background
- **Right Side**: Product title, Turkish name, tagline, and CTA button
- **Purpose**: Create immediate visual impact and establish product identity

### 2. Key Information Section (First Row)
**Layout**: Content Left, Image Right
- **Left Side**: "Key Product Specs" table with technical information
- **Right Side**: Secondary product image (packaging/professional shot)
- **Purpose**: Provide essential technical details for professional users

### 3. Usage & Chef's Notes Section (Second Row)
**Layout**: Image Left, Content Right
- **Left Side**: Lifestyle or raw ingredient image
- **Right Side**: "Golden Rules for Chefs" + Critical Chef's Note warning box
- **Purpose**: Educate users on proper usage and handling

### 4. Flavor Profile & Pairings Section (Third Row)
**Layout**: Content Left, Visual Right
- **Left Side**: Detailed flavor pairings organized by category
- **Right Side**: Visual taste profile infographic showing flavor journey
- **Purpose**: Help chefs understand flavor combinations and taste progression

## Key Product Specifications Structure

```javascript
specs: {
  optimalHarvest: "10 days (5-9cm)",
  shelfLife: "8 days (2-4°C)", 
  calories: "32 kcal/100g",
  nutritionalValue: "Vitamin C, Vitamin K",
  waterConsumption: "0.5L / 100g production"
}
```

## Chef's Guidelines Structure

```javascript
chefRules: [
  "Use as finishing touch only - never cook",
  "Add just before serving to maintain crispness",
  "Pair with cooling elements to balance heat",
  "Store in refrigerator until ready to use",
  "Rinse gently and pat dry before plating"
]
```

## Critical Chef's Note
A prominent warning box with cooking temperature guidelines and usage restrictions.

## Flavor Pairings Structure

```javascript
flavorPairings: {
  dairy: ["Labneh", "Goat Cheese", "Crème Fraîche", "Ricotta"],
  fish: ["Sea Bass", "Scallops", "Salmon", "Tuna"],
  citrus: ["Grapefruit", "Yuzu", "Lime", "Blood Orange"]
}
```

## Taste Profile Journey

```javascript
tasteProfile: {
  start: "Sharp peppery start",
  middle: "Hint of tomato in the middle",
  finish: "Earthy, sweet finish"
}
```

## Visual Design Elements

### Typography
- **Headings**: Orbitron font for modern, tech-forward feel
- **Body Text**: Clean, readable fonts (Inter/system fonts)
- **Hierarchy**: Clear size differentiation between heading levels

### Color Scheme
- **Primary**: Product-specific colors (Red for Red Radish)
- **Backgrounds**: Alternating white and gray-50 for section separation
- **Accents**: Gradient backgrounds for visual interest

### Cards & Components
- **Shadow**: Consistent shadow-lg for depth
- **Borders**: Minimal borders, focus on shadows and spacing
- **Spacing**: Generous padding (p-8) for breathing room
- **Hover Effects**: Subtle scale and shadow transitions

### Images
- **Aspect Ratios**: 
  - Hero: Square (1:1) in circular frame
  - Secondary: 4:3 for landscape orientation
- **Overlays**: Subtle gradients for text readability
- **Shadows**: shadow-xl for prominent images

## Responsive Behavior

### Desktop (lg and above)
- Full Z-pattern with side-by-side layouts
- Generous spacing and large images
- Hover effects enabled

### Mobile (below lg)
- Stacked layout maintaining content order
- Reduced spacing for mobile optimization
- Touch-friendly button sizes
- Simplified navigation

## Implementation Guidelines

### For New Products
1. Update product data structure with new fields
2. Replace hero image with circular treatment
3. Add packaging and lifestyle images
4. Define chef's rules and critical notes
5. Organize flavor pairings by category
6. Create taste profile journey

### Image Requirements
- **Hero Image**: High-quality product shot, square format
- **Packaging Image**: Professional packaging shot, 4:3 ratio
- **Lifestyle Image**: Product in use or raw ingredients, 4:3 ratio
- **All Images**: Optimized for web, <500KB each

### Content Requirements
- **Technical Specs**: Accurate harvest, shelf life, nutritional data
- **Chef's Rules**: 5-7 practical usage guidelines
- **Critical Note**: Temperature and handling warnings
- **Flavor Pairings**: 3-4 items per category (dairy, fish, citrus)
- **Taste Profile**: 3-stage flavor journey description

## SEO Optimization
- Semantic HTML structure with proper heading hierarchy
- Alt text for all images
- Structured data for product information
- Clean URLs and meta descriptions
- Fast loading with optimized images

## Accessibility Features
- High contrast ratios for text readability
- Keyboard navigation support
- Screen reader friendly structure
- Focus indicators for interactive elements
- Alternative text for all visual content
