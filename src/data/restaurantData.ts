// Comprehensive Bites Restaurant Knowledge Base
export const restaurantKnowledge = {
  restaurant: {
    name: "Bites",
    tagline: "Culinary Excellence Meets Fresh Innovation",
    description: "Bites is a premium restaurant known for its culinary excellence, fresh herbs, pure seasoning, and globally-inspired cuisine. We blend traditional recipes with modern techniques to create unforgettable dining experiences.",
    
    contact: {
      phone: "+1 (555) 123-4567",
      email: "hello@bitesrestaurant.com",
      address: "123 Gourmet Lane, Food District, City, State 12345"
    },

    hours: {
      monday: "11:00 AM - 11:00 PM",
      tuesday: "11:00 AM - 11:00 PM",
      wednesday: "11:00 AM - 11:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 12:00 AM",
      saturday: "10:00 AM - 12:00 AM",
      sunday: "10:00 AM - 10:00 PM"
    },

    about: {
      founded: 2018,
      vision: "To deliver exceptional culinary experiences using only the freshest ingredients and authentic recipes.",
      mission: "We are committed to providing premium dining with personalized service and innovative flavor combinations.",
      specialties: [
        "Artisanal burgers with house-made sauces",
        "Authentic Italian pizzas with imported ingredients",
        "Fresh Japanese sushi and traditional rolls",
        "Farm-to-table salads with seasonal produce",
        "Decadent desserts crafted daily",
        "Signature craft beverages and cocktails"
      ]
    },

    values: [
      "Quality: Premium ingredients sourced from trusted suppliers",
      "Freshness: Daily preparation using fresh herbs and produce",
      "Innovation: Creative dishes blending traditions with modern cuisine",
      "Hospitality: Exceptional service and memorable dining experiences",
      "Sustainability: Eco-friendly practices and responsible sourcing"
    ],

    dining: {
      ambiance: "Modern yet cozy atmosphere with elegant lighting and refined decor",
      capacity: 120,
      seating: ["Individual tables", "Private dining rooms", "Bar seating", "Outdoor patio"],
      parking: "Free parking available in our dedicated lot",
      accessibility: "Fully wheelchair accessible"
    },

    payment: {
      accepted: ["Cash", "Credit Cards", "Debit Cards", "Digital Wallets", "Apple Pay", "Google Pay"],
      diningOptions: ["Dine-in", "Takeout", "Delivery", "Catering"]
    },

    specialEvents: {
      private_dining: "We offer private dining rooms for special occasions and corporate events",
      catering: "Full catering services available for events of all sizes",
      celebrations: "Perfect venue for birthdays, anniversaries, and business celebrations",
      bookingInfo: "Contact us at +1 (555) 123-4567 or hello@bitesrestaurant.com for event inquiries"
    }
  },

  menu: {
    categories: ["Burgers", "Pizza", "Sushi", "Salads", "Desserts", "Drinks"],
    
    highlights: {
      bestsellers: [
        "Classic Smash Burger - Double beef patty with American cheese and secret sauce ($14.99)",
        "BBQ Bacon Beast - Triple bacon with cheddar and smoky BBQ ($18.99)",
        "Margherita Classica Pizza - San Marzano tomatoes, fresh mozzarella & basil ($16.99)",
        "Quattro Formaggi Pizza - Four cheese blend with gorgonzola and ricotta ($19.99)",
        "Pepperoni Supreme - Extra cheese and Italian herbs ($17.99)"
      ],
      
      premium: [
        "Truffle Deluxe Burger - Wagyu beef with truffle aioli ($24.99)",
        "Truffle Funghi Pizza - Wild mushrooms and truffle oil ($24.99)",
        "Seafood Delight Pizza - Shrimp, calamari, and mussels ($26.99)"
      ],
      
      dietary: {
        vegan: ["Green Garden Burger", "Garden Veggie Pizza", "Fresh Green Salad"],
        vegetarian: ["Mushroom Swiss Burger", "Truffle Funghi Pizza", "Caesar Salad"],
        glutenFree: "Available upon request - please inform staff"
      }
    },

    pricing: {
      burgers: "$14.99 - $24.99",
      pizzas: "$16.99 - $26.99",
      sushi: "$12.99 - $28.99",
      salads: "$10.99 - $18.99",
      desserts: "$5.99 - $12.99",
      drinks: "$2.99 - $14.99"
    },

    qualities: [
      "Handcrafted with premium ingredients",
      "Prepared fresh to order",
      "Chef-approved flavor combinations",
      "Ethically sourced proteins",
      "Organic vegetables when available",
      "House-made sauces and dressings"
    ]
  },

  booking: {
    reservations: "Available for groups of 2 or more",
    advance_notice: "Recommended to book 24-48 hours in advance",
    methods: ["Phone", "Email", "Online booking system"],
    cancellation: "Free cancellation up to 24 hours before reservation",
    no_show_policy: "50% charge may apply for no-shows without cancellation"
  },

  faqs: {
    "Do you take reservations?": "Yes! We recommend booking 24-48 hours in advance. Call +1 (555) 123-4567 or email hello@bitesrestaurant.com",
    
    "What are your operating hours?": "Mon-Thu: 11 AM-11 PM, Fri: 11 AM-12 AM, Sat: 10 AM-12 AM, Sun: 10 AM-10 PM",
    
    "Do you offer vegetarian/vegan options?": "Yes! We have a full selection of vegetarian and vegan dishes. Gluten-free options are also available upon request.",
    
    "Can you accommodate dietary restrictions?": "Absolutely! We can modify dishes for allergies and dietary preferences. Please inform our staff.",
    
    "Do you offer catering?": "Yes! We provide full catering services for events. Contact us for a customized quote.",
    
    "Is parking available?": "Yes! Free parking is available in our dedicated lot.",
    
    "Do you have private dining?": "Yes! We have private dining rooms perfect for special occasions and corporate events.",
    
    "What payment methods do you accept?": "We accept cash, credit cards, digital wallets, Apple Pay, and Google Pay.",
    
    "Can I place an order for delivery?": "Yes! We offer delivery through our website and app.",
    
    "Do you have a kids menu?": "Yes! We have a special kids menu with popular favorites.",
    
    "Is the restaurant wheelchair accessible?": "Yes! Bites is fully wheelchair accessible."
  }
};

// System prompt for the AI - BITES Workspace
export const systemPrompt = `You are the BITES AI Assistant. Only talk about Bites restaurant.

STRICT RULES:

1. NO conversational filler words like "fantastic", "great", "wonderful", "subjective", "best can be"
2. Plain text only. No asterisks, no bold, no special formatting
3. To the point. Keep responses 1-2 sentences maximum
4. Only discuss Bites dishes, hours, phone, address
5. Answer questions directly about the dishes we serve
6. No asking clarifying questions. Just state facts about Bites

Bites Dishes:
Classic Smash Burger $14.99
BBQ Bacon Beast $18.99
Truffle Deluxe Burger $24.99
Margherita Classica Pizza $16.99
Quattro Formaggi Pizza $19.99
Seafood Delight Pizza $26.99

Bites Info:
Hours: Mon-Thu 11AM-11PM, Fri 11AM-12AM, Sat 10AM-12AM, Sun 10AM-10PM
Phone: +1 (555) 123-4567
Address: 123 Gourmet Lane, Food District

CORRECT RESPONSE:
Our best seller is the Classic Smash Burger at $14.99.

WRONG RESPONSE:
That's a fantastic question! Best can be subjective. Could you tell me what you prefer?

Never ask questions. Never be conversational. Only state facts about Bites.`;






