#!/bin/bash

echo "====================================="
echo "Johns Snowboarding - Build Verification"
echo "====================================="
echo ""

echo "📦 Checking package.json..."
if [ -f "package.json" ]; then
    echo "✅ package.json exists"
else
    echo "❌ package.json missing"
    exit 1
fi

echo ""
echo "📝 Checking configuration files..."
for file in "next.config.js" "tailwind.config.js" "tsconfig.json" "postcss.config.js"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
        exit 1
    fi
done

echo ""
echo "📄 Checking core pages..."
for page in "app/page.tsx" "app/about/page.tsx" "app/contact/page.tsx" "app/services/page.tsx" "app/locations/page.tsx" "app/blog/page.tsx"; do
    if [ -f "$page" ]; then
        echo "✅ $page exists"
    else
        echo "❌ $page missing"
        exit 1
    fi
done

echo ""
echo "🧩 Checking dynamic routes..."
for route in "app/services/[service]/page.tsx" "app/locations/[location]/page.tsx" "app/[slug]/page.tsx" "app/blog/[slug]/page.tsx"; do
    if [ -f "$route" ]; then
        echo "✅ $route exists"
    else
        echo "❌ $route missing"
        exit 1
    fi
done

echo ""
echo "🎨 Checking components..."
for component in "components/Header.tsx" "components/Footer.tsx" "components/ContactForm.tsx" "components/ServiceCard.tsx" "components/LocationCard.tsx" "components/BlogCard.tsx"; do
    if [ -f "$component" ]; then
        echo "✅ $component exists"
    else
        echo "❌ $component missing"
        exit 1
    fi
done

echo ""
echo "📚 Checking library files..."
for lib in "lib/services.ts" "lib/locations.ts" "lib/blog.ts" "lib/markdown.ts" "lib/images.ts"; do
    if [ -f "$lib" ]; then
        echo "✅ $lib exists"
    else
        echo "❌ $lib missing"
        exit 1
    fi
done

echo ""
echo "📊 Checking data files..."
if [ -f "services.json" ] && [ -f "locations.json" ]; then
    SERVICES=$(cat services.json | grep -o '"slug"' | wc -l)
    LOCATIONS=$(cat locations.json | grep -o '"slug"' | wc -l)
    echo "✅ services.json exists ($SERVICES services)"
    echo "✅ locations.json exists ($LOCATIONS locations)"
    
    TOTAL_PAGES=$((6 + SERVICES + LOCATIONS + (SERVICES * LOCATIONS)))
    echo ""
    echo "📈 Total pages that will be generated: $TOTAL_PAGES"
else
    echo "❌ Data files missing"
    exit 1
fi

echo ""
echo "====================================="
echo "✅ All checks passed!"
echo "Ready to build and deploy"
echo "====================================="
