export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  calories: number;
  category: string;
  tags: string[];
  color: string;
  rating: number;
  reviews: number;
  image: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  gradient: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'burgers',
    name: 'Burgers',
    icon: '🍔',
    color: 'coral',
    gradient: 'from-orange-400 to-red-500',
    description: 'Juicy handcrafted burgers'
  },
  {
    id: 'pizza',
    name: 'Pizza',
    icon: '🍕',
    color: 'golden',
    gradient: 'from-yellow-400 to-orange-500',
    description: 'Authentic Italian pizzas'
  },
  {
    id: 'sushi',
    name: 'Sushi',
    icon: '🍣',
    color: 'rose',
    gradient: 'from-pink-400 to-rose-500',
    description: 'Fresh Japanese delicacies'
  },
  {
    id: 'salads',
    name: 'Salads',
    icon: '🥗',
    color: 'lime',
    gradient: 'from-green-400 to-emerald-500',
    description: 'Fresh & healthy greens'
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: '🍰',
    color: 'violet',
    gradient: 'from-purple-400 to-pink-500',
    description: 'Sweet indulgences'
  },
  {
    id: 'drinks',
    name: 'Drinks',
    icon: '🍹',
    color: 'sky',
    gradient: 'from-cyan-400 to-blue-500',
    description: 'Refreshing beverages'
  },
];

export const menuItems: MenuItem[] = [
  // Burgers (10 items)
  { id: 'b1', name: 'Classic Smash', description: 'Double beef patty with American cheese, pickles & secret sauce', price: 14.99, calories: 680, category: 'burgers', tags: ['Best Seller'], color: '#FF6B4A', rating: 4.9, reviews: 324, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400' },
  { id: 'b2', name: 'Truffle Deluxe', description: 'Wagyu beef, truffle aioli, caramelized onions & gruyère', price: 24.99, calories: 820, category: 'burgers', tags: ['Premium'], color: '#8B4513', rating: 4.8, reviews: 156, image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400' },
  { id: 'b3', name: 'Spicy Inferno', description: 'Ghost pepper patty, jalapeños, pepper jack & sriracha mayo', price: 16.99, calories: 720, category: 'burgers', tags: ['Spicy'], color: '#FF4444', rating: 4.7, reviews: 89, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400' },
  { id: 'b4', name: 'Green Garden', description: 'Plant-based patty, avocado, sprouts & vegan cheese', price: 15.99, calories: 480, category: 'burgers', tags: ['Vegan'], color: '#4CAF50', rating: 4.6, reviews: 201, image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400' },
  { id: 'b5', name: 'BBQ Bacon Beast', description: 'Triple bacon, cheddar, onion rings & smoky BBQ', price: 18.99, calories: 920, category: 'burgers', tags: ['Best Seller'], color: '#D2691E', rating: 4.9, reviews: 445, image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400' },
  { id: 'b6', name: 'Mushroom Swiss', description: 'Sautéed mushrooms, Swiss cheese & garlic herb butter', price: 15.99, calories: 650, category: 'burgers', tags: [], color: '#8B7355', rating: 4.5, reviews: 112, image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=400' },
  { id: 'b7', name: 'Hawaiian Sunset', description: 'Grilled pineapple, teriyaki glaze & crispy bacon', price: 16.99, calories: 700, category: 'burgers', tags: [], color: '#FFD700', rating: 4.7, reviews: 178, image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400' },
  { id: 'b8', name: 'Blue Moon', description: 'Blue cheese crumbles, caramelized pears & arugula', price: 17.99, calories: 680, category: 'burgers', tags: ['Premium'], color: '#4169E1', rating: 4.6, reviews: 67, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400' },
  { id: 'b9', name: 'Breakfast Burger', description: 'Fried egg, bacon, hash brown & maple syrup drizzle', price: 15.99, calories: 850, category: 'burgers', tags: [], color: '#FFA500', rating: 4.8, reviews: 234, image: 'https://images.unsplash.com/photo-1596649299486-4cdea56fd59d?w=400' },
  { id: 'b10', name: 'Mediterranean', description: 'Lamb patty, feta, tzatziki & sun-dried tomatoes', price: 18.99, calories: 620, category: 'burgers', tags: [], color: '#87CEEB', rating: 4.7, reviews: 145, image: 'https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=400' },

  // Pizza (10 items)
  { id: 'p1', name: 'Margherita Classica', description: 'San Marzano tomatoes, fresh mozzarella & basil', price: 16.99, calories: 850, category: 'pizza', tags: ['Best Seller'], color: '#FF6347', rating: 4.9, reviews: 567, image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400' },
  { id: 'p2', name: 'Truffle Funghi', description: 'Wild mushrooms, truffle oil, fontina & thyme', price: 24.99, calories: 920, category: 'pizza', tags: ['Premium'], color: '#8B4513', rating: 4.8, reviews: 234, image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400' },
  { id: 'p3', name: 'Diavola Inferno', description: 'Spicy salami, calabrian chili & honey drizzle', price: 18.99, calories: 980, category: 'pizza', tags: ['Spicy'], color: '#DC143C', rating: 4.7, reviews: 189, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400' },
  { id: 'p4', name: 'Garden Veggie', description: 'Roasted vegetables, goat cheese & pesto', price: 17.99, calories: 720, category: 'pizza', tags: ['Vegan'], color: '#228B22', rating: 4.6, reviews: 156, image: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=400' },
  { id: 'p5', name: 'Quattro Formaggi', description: 'Mozzarella, gorgonzola, parmesan & ricotta', price: 19.99, calories: 1050, category: 'pizza', tags: ['Best Seller'], color: '#FFE4B5', rating: 4.9, reviews: 412, image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400' },
  { id: 'p6', name: 'Prosciutto e Rucola', description: 'Parma ham, arugula, shaved parmesan & olive oil', price: 21.99, calories: 780, category: 'pizza', tags: ['Premium'], color: '#FF69B4', rating: 4.8, reviews: 278, image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400' },
  { id: 'p7', name: 'BBQ Chicken', description: 'Grilled chicken, red onion, cilantro & BBQ sauce', price: 18.99, calories: 890, category: 'pizza', tags: [], color: '#CD853F', rating: 4.6, reviews: 201, image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400' },
  { id: 'p8', name: 'Seafood Delight', description: 'Shrimp, calamari, mussels & garlic butter', price: 26.99, calories: 820, category: 'pizza', tags: ['Premium'], color: '#20B2AA', rating: 4.7, reviews: 134, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400' },
  { id: 'p9', name: 'Pepperoni Supreme', description: 'Double pepperoni, extra cheese & Italian herbs', price: 17.99, calories: 1100, category: 'pizza', tags: ['Best Seller'], color: '#B22222', rating: 4.8, reviews: 523, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400' },
  { id: 'p10', name: 'Hawaiian Dream', description: 'Ham, pineapple, jalapeño & mozzarella', price: 16.99, calories: 860, category: 'pizza', tags: [], color: '#FFCC00', rating: 4.4, reviews: 167, image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400' },

  // Sushi (10 items)
  { id: 's1', name: 'Dragon Roll', description: 'Eel, cucumber topped with avocado & unagi sauce', price: 18.99, calories: 420, category: 'sushi', tags: ['Best Seller'], color: '#2E8B57', rating: 4.9, reviews: 389, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400' },
  { id: 's2', name: 'Rainbow Delight', description: 'California roll topped with assorted sashimi', price: 22.99, calories: 380, category: 'sushi', tags: ['Premium'], color: '#FF69B4', rating: 4.8, reviews: 267, image: 'https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?w=400' },
  { id: 's3', name: 'Spicy Tuna Crunch', description: 'Spicy tuna, tempura flakes & sriracha mayo', price: 16.99, calories: 360, category: 'sushi', tags: ['Spicy'], color: '#FF4500', rating: 4.7, reviews: 198, image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=400' },
  { id: 's4', name: 'Veggie Garden', description: 'Avocado, cucumber, asparagus & pickled radish', price: 14.99, calories: 280, category: 'sushi', tags: ['Vegan'], color: '#32CD32', rating: 4.5, reviews: 145, image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=400' },
  { id: 's5', name: 'Salmon Lover', description: 'Fresh salmon, cream cheese & crispy onion', price: 17.99, calories: 340, category: 'sushi', tags: ['Best Seller'], color: '#FA8072', rating: 4.9, reviews: 456, image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=400' },
  { id: 's6', name: 'Lobster Tempura', description: 'Tempura lobster, mango & spicy mayo', price: 28.99, calories: 480, category: 'sushi', tags: ['Premium'], color: '#FF6B6B', rating: 4.8, reviews: 178, image: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=400' },
  { id: 's7', name: 'Philadelphia Classic', description: 'Smoked salmon, cream cheese & cucumber', price: 15.99, calories: 320, category: 'sushi', tags: [], color: '#FFA07A', rating: 4.6, reviews: 234, image: 'https://images.unsplash.com/photo-1615361200141-f45040f367be?w=400' },
  { id: 's8', name: 'Volcano Roll', description: 'Baked crab, spicy mayo & tobiko', price: 19.99, calories: 400, category: 'sushi', tags: ['Spicy'], color: '#FF4444', rating: 4.7, reviews: 167, image: 'https://images.unsplash.com/photo-1562802378-063ec186a863?w=400' },
  { id: 's9', name: 'Omakase Selection', description: "Chef's choice of 12 premium pieces", price: 45.99, calories: 520, category: 'sushi', tags: ['Premium'], color: '#4A90A4', rating: 5.0, reviews: 89, image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400' },
  { id: 's10', name: 'Caterpillar Roll', description: 'Eel, cucumber, avocado shaped as caterpillar', price: 20.99, calories: 440, category: 'sushi', tags: [], color: '#90EE90', rating: 4.7, reviews: 156, image: 'https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?w=400' },

  // Salads (10 items)
  { id: 'sa1', name: 'Caesar Supreme', description: 'Romaine, parmesan, croutons & anchovy dressing', price: 12.99, calories: 380, category: 'salads', tags: ['Best Seller'], color: '#9ACD32', rating: 4.8, reviews: 345, image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400' },
  { id: 'sa2', name: 'Quinoa Power', description: 'Quinoa, chickpeas, avocado & lemon tahini', price: 14.99, calories: 420, category: 'salads', tags: ['Vegan'], color: '#DEB887', rating: 4.7, reviews: 234, image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' },
  { id: 'sa3', name: 'Greek Paradise', description: 'Feta, olives, tomatoes, cucumber & oregano', price: 13.99, calories: 340, category: 'salads', tags: ['Best Seller'], color: '#4169E1', rating: 4.8, reviews: 289, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400' },
  { id: 'sa4', name: 'Asian Sesame', description: 'Edamame, mandarin, crispy wontons & ginger dressing', price: 14.99, calories: 360, category: 'salads', tags: [], color: '#FF8C00', rating: 4.6, reviews: 167, image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400' },
  { id: 'sa5', name: 'Kale Detox', description: 'Massaged kale, apple, walnuts & honey lemon', price: 13.99, calories: 280, category: 'salads', tags: ['Vegan'], color: '#228B22', rating: 4.5, reviews: 145, image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=400' },
  { id: 'sa6', name: 'Caprese Fresh', description: 'Heirloom tomatoes, buffalo mozzarella & basil', price: 15.99, calories: 320, category: 'salads', tags: [], color: '#FF6347', rating: 4.7, reviews: 198, image: 'https://images.unsplash.com/photo-1608032077018-c9aad9565d29?w=400' },
  { id: 'sa7', name: 'Grilled Chicken', description: 'Mixed greens, grilled chicken, avocado & ranch', price: 15.99, calories: 450, category: 'salads', tags: ['Best Seller'], color: '#F4A460', rating: 4.8, reviews: 378, image: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?w=400' },
  { id: 'sa8', name: 'Taco Fiesta', description: 'Seasoned beef, black beans, corn & chipotle lime', price: 14.99, calories: 480, category: 'salads', tags: ['Spicy'], color: '#FF4500', rating: 4.6, reviews: 201, image: 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?w=400' },
  { id: 'sa9', name: 'Salmon Nicoise', description: 'Seared salmon, eggs, olives, potatoes & green beans', price: 18.99, calories: 520, category: 'salads', tags: ['Premium'], color: '#FA8072', rating: 4.9, reviews: 156, image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?w=400' },
  { id: 'sa10', name: 'Burrata Dream', description: 'Creamy burrata, peaches, prosciutto & arugula', price: 17.99, calories: 380, category: 'salads', tags: ['Premium'], color: '#FFE4E1', rating: 4.8, reviews: 134, image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400' },

  // Desserts (10 items)
  { id: 'd1', name: 'Lava Cake', description: 'Warm chocolate cake with molten center & vanilla ice cream', price: 9.99, calories: 520, category: 'desserts', tags: ['Best Seller'], color: '#8B4513', rating: 4.9, reviews: 567, image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400' },
  { id: 'd2', name: 'Tiramisu', description: 'Classic Italian layers of coffee-soaked ladyfingers & mascarpone', price: 10.99, calories: 450, category: 'desserts', tags: ['Best Seller'], color: '#D2691E', rating: 4.9, reviews: 445, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400' },
  { id: 'd3', name: 'Cheesecake', description: 'New York style with fresh berry compote', price: 8.99, calories: 480, category: 'desserts', tags: [], color: '#FFE4B5', rating: 4.7, reviews: 334, image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400' },
  { id: 'd4', name: 'Crème Brûlée', description: 'Vanilla bean custard with caramelized sugar', price: 9.99, calories: 380, category: 'desserts', tags: ['Premium'], color: '#F4A460', rating: 4.8, reviews: 267, image: 'https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400' },
  { id: 'd5', name: 'Mochi Trio', description: 'Green tea, strawberry & mango Japanese mochi', price: 7.99, calories: 280, category: 'desserts', tags: ['Vegan'], color: '#98FB98', rating: 4.6, reviews: 189, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400' },
  { id: 'd6', name: 'Churros', description: 'Cinnamon sugar churros with chocolate & caramel dips', price: 8.99, calories: 420, category: 'desserts', tags: [], color: '#DAA520', rating: 4.7, reviews: 312, image: 'https://images.unsplash.com/photo-1624371516859-3b4e4d8a0b3a?w=400' },
  { id: 'd7', name: 'Panna Cotta', description: 'Silky Italian custard with passion fruit coulis', price: 9.99, calories: 320, category: 'desserts', tags: [], color: '#FFFACD', rating: 4.6, reviews: 145, image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400' },
  { id: 'd8', name: 'Baklava', description: 'Honey-soaked phyllo with pistachios & walnuts', price: 8.99, calories: 380, category: 'desserts', tags: [], color: '#DAA520', rating: 4.7, reviews: 178, image: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400' },
  { id: 'd9', name: 'Affogato', description: 'Vanilla gelato drowned in espresso', price: 7.99, calories: 280, category: 'desserts', tags: [], color: '#D2691E', rating: 4.8, reviews: 234, image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400' },
  { id: 'd10', name: 'Fruit Tart', description: 'Buttery pastry with vanilla cream & seasonal fruits', price: 10.99, calories: 350, category: 'desserts', tags: ['Premium'], color: '#FF69B4', rating: 4.8, reviews: 201, image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400' },

  // Drinks (10 items)
  { id: 'dr1', name: 'Mango Sunset', description: 'Fresh mango, passion fruit & coconut cream', price: 7.99, calories: 220, category: 'drinks', tags: ['Best Seller'], color: '#FF8C00', rating: 4.9, reviews: 412, image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400' },
  { id: 'dr2', name: 'Berry Bliss', description: 'Mixed berries, açaí & honey', price: 8.99, calories: 180, category: 'drinks', tags: ['Vegan'], color: '#8B008B', rating: 4.8, reviews: 289, image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400' },
  { id: 'dr3', name: 'Green Detox', description: 'Spinach, kale, apple, ginger & lemon', price: 8.99, calories: 120, category: 'drinks', tags: ['Vegan'], color: '#228B22', rating: 4.6, reviews: 178, image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400' },
  { id: 'dr4', name: 'Tropical Paradise', description: 'Pineapple, coconut, lime & mint', price: 7.99, calories: 200, category: 'drinks', tags: [], color: '#FFFF00', rating: 4.7, reviews: 234, image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?w=400' },
  { id: 'dr5', name: 'Matcha Latte', description: 'Ceremonial grade matcha with oat milk', price: 6.99, calories: 140, category: 'drinks', tags: ['Best Seller'], color: '#90EE90', rating: 4.8, reviews: 356, image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=400' },
  { id: 'dr6', name: 'Cold Brew', description: 'Slow-steeped coffee with vanilla cold foam', price: 5.99, calories: 80, category: 'drinks', tags: [], color: '#8B4513', rating: 4.7, reviews: 289, image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400' },
  { id: 'dr7', name: 'Lavender Lemonade', description: 'Fresh lemonade infused with lavender', price: 5.99, calories: 120, category: 'drinks', tags: [], color: '#E6E6FA', rating: 4.6, reviews: 167, image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=400' },
  { id: 'dr8', name: 'Watermelon Cooler', description: 'Fresh watermelon, lime & mint', price: 6.99, calories: 100, category: 'drinks', tags: ['Vegan'], color: '#FF6B6B', rating: 4.7, reviews: 201, image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=400' },
  { id: 'dr9', name: 'Chai Spice', description: 'Masala chai with cardamom & cinnamon', price: 5.99, calories: 160, category: 'drinks', tags: [], color: '#D2691E', rating: 4.8, reviews: 234, image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400' },
  { id: 'dr10', name: 'Rose Petal Iced Tea', description: 'Hibiscus tea with rose water & honey', price: 5.99, calories: 90, category: 'drinks', tags: [], color: '#FFB6C1', rating: 4.5, reviews: 145, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400' },
];

export const experts = [
  { id: 1, name: 'Chef Marco Rossi', role: 'Executive Chef', specialty: 'Italian Cuisine', experience: '20 years', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400', bio: 'Trained in Milan, Chef Marco brings authentic Italian flavors with a modern twist.' },
  { id: 2, name: 'Chef Yuki Tanaka', role: 'Sushi Master', specialty: 'Japanese Cuisine', experience: '15 years', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400', bio: 'Master of traditional Edomae sushi with over a decade of training in Tokyo.' },
  { id: 3, name: 'Chef Sarah Chen', role: 'Pastry Chef', specialty: 'French Pastries', experience: '12 years', image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400', bio: 'Classically trained at Le Cordon Bleu, specializing in artistic desserts.' },
  { id: 4, name: 'Chef Omar Hassan', role: 'Grill Master', specialty: 'American BBQ', experience: '18 years', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400', bio: 'Champion pitmaster with a passion for smoked perfection.' },
];

export const reviews = [
  { id: 1, name: 'Emma Thompson', rating: 5, text: 'Absolutely incredible experience! The 3D menu is so innovative and the food tastes even better than it looks.', date: '2 days ago', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
  { id: 2, name: 'James Wilson', rating: 5, text: 'The truffle burger is a game-changer. Best dining experience I\'ve had in years.', date: '1 week ago', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100' },
  { id: 3, name: 'Sophie Martinez', rating: 5, text: 'Love the ambiance and the interactive ordering system. The sushi is incredibly fresh!', date: '2 weeks ago', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
  { id: 4, name: 'David Kim', rating: 5, text: 'The AI chef recommendations were spot on. Discovered my new favorite dish!', date: '3 weeks ago', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' },
  { id: 5, name: 'Lisa Anderson', rating: 5, text: 'Perfect for date night. The presentation is stunning and flavors are unforgettable.', date: '1 month ago', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100' },
];

export const faqs = [
  { question: 'How does the 3D menu work?', answer: 'Our innovative 3D menu lets you view realistic models of each dish from all angles. Simply rotate, zoom, and explore before ordering to know exactly what you\'re getting.' },
  { question: 'Do you accommodate dietary restrictions?', answer: 'Absolutely! We offer vegan, vegetarian, gluten-free, and allergen-free options. Our AI assistant can help you filter and find dishes that match your dietary needs.' },
  { question: 'What are your delivery hours?', answer: 'We deliver from 11 AM to 11 PM, seven days a week. During peak hours, delivery times may vary. Track your order in real-time through our app.' },
  { question: 'Can I customize my order?', answer: 'Yes! Each dish can be customized. Add extra toppings, remove ingredients, or adjust spice levels to create your perfect meal.' },
  { question: 'How do table reservations work?', answer: 'Use our interactive 3D restaurant map to see available tables in real-time. Choose your preferred spot, select your time, and confirm your booking instantly.' },
  { question: 'What is your cancellation policy?', answer: 'Orders can be cancelled within 5 minutes of placing. For reservations, we require 2 hours notice for cancellations to avoid any charges.' },
];
