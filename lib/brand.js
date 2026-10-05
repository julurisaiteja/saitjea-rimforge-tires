export const brand = {
  "slug": "rimforge-tires",
  "name": "Rimforge",
  "tagline": "Fitment first. Road ready.",
  "niche": "tires",
  "description": "Tire catalog with vehicle fitment, size finder, and install booking.",
  "fonts": {
    "display": "IBM Plex Mono",
    "body": "IBM Plex Sans",
    "google": "IBM+Plex+Mono:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700"
  },
  "colors": {
    "bg": "#f2f2f0",
    "surface": "#ffffff",
    "text": "#0a0a0a",
    "muted": "#5a5a5a",
    "brand": "#e10600",
    "accent": "#111111",
    "success": "#22c55e",
    "danger": "#ef4444"
  },
  "radius": "0px",
  "layout": "forge",
  "video": "https://videos.pexels.com/video-files/4480505/4480505-sd_640_360_25fps.mp4",
  "poster": "https://images.unsplash.com/photo-1486262715619-67b83e7b02c5?w=1600&q=80",
  "offer": {
    "code": "MOUNT50",
    "label": "$50 off mount & balance",
    "detail": "With any set of 4 · MOUNT50"
  },
  "aiName": "Fitment Ace",
  "aiHints": [
    {
      "q": "How do I find my size?",
      "a": "Use Size Finder: enter year/make/model or sidewall code (e.g. 225/45R17). We'll show exact matches."
    },
    {
      "q": "Can I book install?",
      "a": "Yes — pick bay time after adding tires. Most installs take 60–90 minutes."
    },
    {
      "q": "Seasonal tires?",
      "a": "Filter All-season, Winter, Summer, or All-terrain. Winter bundle includes free TPMS check."
    },
    {
      "q": "Road hazard?",
      "a": "Add Rimforge Shield for $39/tire — repair or replace for 3 years."
    }
  ],
  "nav": [
    "Tires",
    "Fitment",
    "Book bay",
    "Services"
  ],
  "features": [
    "sizeFinder",
    "fitment",
    "booking",
    "seasonal"
  ],
  "products": [
    {
      "id": "allweather",
      "name": "ForgeGrip AW2",
      "price": 148,
      "cat": "All-season",
      "rating": 4.7,
      "reviews": 412,
      "img": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
      "blurb": "Quiet touring compound, 70k mile warranty.",
      "tags": [
        "all-season"
      ],
      "size": "225/45R17"
    },
    {
      "id": "sport",
      "name": "ApexSport UHP",
      "price": 189,
      "cat": "Summer",
      "rating": 4.8,
      "reviews": 228,
      "img": "https://images.unsplash.com/photo-1621939514645-2d9c4c1f9c8d?w=900&q=80",
      "blurb": "Cornering grip for dry & damp.",
      "tags": [
        "summer",
        "performance"
      ],
      "size": "245/40R18"
    },
    {
      "id": "winter",
      "name": "NordicEdge Ice",
      "price": 166,
      "cat": "Winter",
      "rating": 4.9,
      "reviews": 301,
      "img": "https://images.unsplash.com/photo-1486262715619-67b83e7b02c5?w=900&q=80",
      "blurb": "Siping density for ice & packed snow.",
      "tags": [
        "winter"
      ],
      "size": "215/55R17"
    },
    {
      "id": "at",
      "name": "TrailForge AT",
      "price": 172,
      "cat": "All-terrain",
      "rating": 4.6,
      "reviews": 189,
      "img": "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=900&q=80",
      "blurb": "3PMSF rated, still highway quiet.",
      "tags": [
        "all-terrain"
      ],
      "size": "265/70R17"
    },
    {
      "id": "eco",
      "name": "EcoRoll H/T",
      "price": 132,
      "cat": "All-season",
      "rating": 4.5,
      "reviews": 156,
      "img": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900&q=80",
      "blurb": "Low rolling resistance for crossovers.",
      "tags": [
        "all-season",
        "eco"
      ],
      "size": "235/55R18"
    },
    {
      "id": "truck",
      "name": "HaulMaster LT",
      "price": 214,
      "cat": "Light truck",
      "rating": 4.7,
      "reviews": 98,
      "img": "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=900&q=80",
      "blurb": "Load range E, towing confident.",
      "tags": [
        "lt"
      ],
      "size": "275/65R18"
    },
    {
      "id": "runflat",
      "name": "CityShield Runflat",
      "price": 198,
      "cat": "All-season",
      "rating": 4.4,
      "reviews": 77,
      "img": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80",
      "blurb": "50 miles at 50 mph after puncture.",
      "tags": [
        "runflat"
      ],
      "size": "225/50R17"
    },
    {
      "id": "budget",
      "name": "DailyDrive Plus",
      "price": 99,
      "cat": "Value",
      "rating": 4.3,
      "reviews": 540,
      "img": "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=900&q=80",
      "blurb": "Solid daily driver, 50k warranty.",
      "tags": [
        "value"
      ],
      "size": "205/55R16"
    }
  ],
  "variants": {
    "services": [
      {
        "id": "mount",
        "label": "Mount & balance",
        "price": 25
      },
      {
        "id": "align",
        "label": "Alignment check",
        "price": 79
      },
      {
        "id": "shield",
        "label": "Rimforge Shield",
        "price": 39
      },
      {
        "id": "rotate",
        "label": "Rotation package",
        "price": 49
      }
    ],
    "bays": [
      "Bay A — Express",
      "Bay B — Alignment",
      "Bay C — Truck"
    ]
  },
  "reviews": [
    {
      "name": "Marcus D.",
      "stars": 5,
      "text": "Fitment Ace nailed my Camry size. In and out in 70 minutes."
    },
    {
      "name": "Sofia G.",
      "stars": 5,
      "text": "Winter set + MOUNT50 — bay booking calendar is excellent."
    },
    {
      "name": "Tyrell B.",
      "stars": 4,
      "text": "TrailForge AT quieter than expected on the highway."
    },
    {
      "name": "Kim A.",
      "stars": 5,
      "text": "Road hazard paid for itself after a nail on week two."
    }
  ],
  "stats": [
    {
      "label": "Sets mounted",
      "value": "890"
    },
    {
      "label": "Same-day bays",
      "value": 14
    },
    {
      "label": "Fitment accuracy",
      "value": "99%"
    }
  ],
  "styleMarker": "swiss-hero",
  "styleLabel": "Industrial Swiss — grid, mono labels, high-contrast garage"
};
export const products = brand.products;
export function getProduct(id){return products.find(p=>p.id===id)}
export const STORAGE_KEY='sai-cart-rimforge-tires';
export const WISH_KEY='sai-wish-rimforge-tires';
