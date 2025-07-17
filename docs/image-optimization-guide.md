# Image Optimization Guide for WholeGreen Website

## Vision Section Image Specifications

### Recommended Dimensions
- **Aspect Ratio**: 3:2 (e.g., 1200x800px, 1800x1200px)
- **Minimum Size**: 800x533px
- **Optimal Size**: 1200x800px
- **Maximum Size**: 1800x1200px (for high-DPI displays)

### File Format & Quality
- **Format**: JPG for photos, PNG for graphics with transparency
- **Quality**: 85-90% for JPG (balance between quality and file size)
- **File Size**: Target under 500KB for web optimization

### Content Suggestions
1. **Agricultural Technology**: Modern farming equipment, hydroponic systems
2. **Microgreens**: Close-up shots of your premium microgreen varieties
3. **Facilities**: Clean, modern growing environments
4. **Team**: Professional photos of your agricultural experts
5. **Innovation**: Technology integration in farming processes

### Image Optimization Tools
- **Online**: TinyPNG, Squoosh.app, Compressor.io
- **Desktop**: Adobe Photoshop, GIMP (free)
- **Batch Processing**: ImageOptim (Mac), FileOptimizer (Windows)

### SEO Best Practices
- **Alt Text**: Descriptive, keyword-rich alternative text
- **File Names**: Use descriptive names (e.g., "wholegreen-hydroponic-facility.jpg")
- **Loading**: Use Next.js Image component for automatic optimization

## Implementation Steps

### Step 1: Prepare Your Image
1. Resize to 1200x800px
2. Optimize file size (target <500KB)
3. Save with descriptive filename

### Step 2: Add to Project
1. Place image in `public/images/` folder
2. Update the image path in the code
3. Add appropriate alt text

### Step 3: Update Code
Replace the placeholder in `app/page.tsx`:

```jsx
{/* Remove the placeholder div and uncomment this */}
<div className="aspect-[3/2] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
  <Image
    src="/images/your-vision-image.jpg"
    alt="WholeGreen Modern Agriculture Technology"
    width={1200}
    height={800}
    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
    priority={false}
  />
</div>
```

### Step 4: Test
1. Check image loads correctly
2. Verify responsive behavior on mobile
3. Test hover effects
4. Validate accessibility (alt text)

## Mobile Optimization
- Images automatically scale down on mobile devices
- Hover effects are disabled on touch devices
- Loading is optimized with Next.js Image component

## Performance Tips
- Use `priority={false}` for images below the fold
- Consider lazy loading for better initial page load
- Use WebP format for modern browsers (Next.js handles this automatically)
