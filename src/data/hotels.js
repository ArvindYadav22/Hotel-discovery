const hotels = [
  {
    id: 1,
    name: "Grand Palace Hotel",
    city: "Mumbai",
    price: 4500,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
    description: "A luxury hotel located in the heart of Mumbai with stunning views of the Arabian Sea. Features world-class dining, a rooftop bar, and elegant suites designed for the discerning traveler.",
    amenities: ["Free WiFi", "AC", "Swimming Pool", "Breakfast"]
  },
  {
    id: 2,
    name: "Sea View Resort",
    city: "Goa",
    price: 3500,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600",
    description: "A beautiful beachside resort perfect for vacations. Wake up to the sound of waves and enjoy pristine beaches just steps from your room.",
    amenities: ["Free WiFi", "AC", "Spa", "Pool"]
  },
  {
    id: 3,
    name: "City Comfort Inn",
    city: "Delhi",
    price: 2200,
    rating: 3.8,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600",
    description: "Affordable stay in Delhi with comfortable rooms. Centrally located near major attractions including India Gate and Connaught Place.",
    amenities: ["Free WiFi", "AC", "Parking"]
  },
  {
    id: 4,
    name: "Royal Heritage Hotel",
    city: "Jaipur",
    price: 5200,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
    description: "Experience royal living in Jaipur. This heritage property blends Rajasthani architecture with modern luxury amenities.",
    amenities: ["Free WiFi", "Pool", "Restaurant", "Spa"]
  },
  {
    id: 5,
    name: "The Oberoi Lakeside",
    city: "Udaipur",
    price: 8500,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600",
    description: "Perched on the banks of Lake Pichola, this ultra-luxury property offers breathtaking views, private boat rides, and Michelin-worthy cuisine.",
    amenities: ["Free WiFi", "AC", "Spa", "Pool", "Restaurant", "Lake View"]
  },
  {
    id: 6,
    name: "Backpacker's Paradise",
    city: "Goa",
    price: 800,
    rating: 3.5,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600",
    description: "Budget-friendly hostel in North Goa with a vibrant community vibe. Perfect for solo travelers and backpackers looking for fun.",
    amenities: ["Free WiFi", "Shared Kitchen", "Lounge"]
  },
  {
    id: 7,
    name: "Taj Mahal View Hotel",
    city: "Agra",
    price: 3800,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600",
    description: "Enjoy uninterrupted views of the Taj Mahal from your room. A blend of Mughal-inspired decor and contemporary comfort.",
    amenities: ["Free WiFi", "AC", "Restaurant", "Taj View"]
  },
  {
    id: 8,
    name: "Mountain Retreat Lodge",
    city: "Manali",
    price: 3200,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600",
    description: "Nestled in the Himalayas, this cozy lodge offers panoramic mountain views, trekking guides, and warm hospitality.",
    amenities: ["Free WiFi", "Fireplace", "Restaurant", "Trekking"]
  },
  {
    id: 9,
    name: "Chennai Business Suites",
    city: "Chennai",
    price: 4000,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600",
    description: "Modern business hotel in Chennai's IT corridor. Equipped with conference rooms, high-speed internet, and executive lounges.",
    amenities: ["Free WiFi", "AC", "Business Center", "Gym"]
  },
  {
    id: 10,
    name: "Houseboat Bliss",
    city: "Alleppey",
    price: 6000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600",
    description: "Cruise the serene Kerala backwaters on a traditional houseboat. Includes a private chef, sundeck, and air-conditioned bedrooms.",
    amenities: ["AC", "Private Chef", "Sundeck", "Backwater Cruise"]
  },
  {
    id: 11,
    name: "Sunrise Beach Resort",
    city: "Pondicherry",
    price: 2800,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=600",
    description: "A charming beachside resort in the French Quarter of Pondicherry. Walk to the promenade and enjoy fresh seafood daily.",
    amenities: ["Free WiFi", "AC", "Beach Access", "Restaurant"]
  },
  {
    id: 12,
    name: "Lakeview Cottage",
    city: "Nainital",
    price: 2500,
    rating: 3.9,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600",
    description: "Quaint cottage overlooking Naini Lake. Ideal for a romantic getaway with boat rides, nature walks, and mountain views.",
    amenities: ["Free WiFi", "Lake View", "Fireplace", "Parking"]
  },
  {
    id: 13,
    name: "The Leela Bangalore",
    city: "Bangalore",
    price: 7200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600",
    description: "Five-star luxury in the Garden City. Features lush landscaped gardens, an infinity pool, and award-winning restaurants.",
    amenities: ["Free WiFi", "AC", "Pool", "Spa", "Gym", "Restaurant"]
  },
  {
    id: 14,
    name: "Budget Stay Express",
    city: "Hyderabad",
    price: 1200,
    rating: 3.2,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600",
    description: "Clean and affordable rooms near Hyderabad's tech parks. Great for short business trips and transit stays.",
    amenities: ["Free WiFi", "AC", "Parking"]
  },
  {
    id: 15,
    name: "Snow Peak Resort",
    city: "Shimla",
    price: 4800,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600",
    description: "A premium hill station resort surrounded by pine forests. Features heated rooms, a glass-walled restaurant, and ski packages.",
    amenities: ["Free WiFi", "Heating", "Restaurant", "Spa", "Ski Access"]
  },
  {
    id: 16,
    name: "Desert Oasis Camp",
    city: "Jaisalmer",
    price: 3600,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600",
    description: "Luxury desert camping under the stars. Includes camel safari, cultural performances, and traditional Rajasthani meals.",
    amenities: ["Camel Safari", "Cultural Show", "Meals Included", "Bonfire"]
  },
  {
    id: 17,
    name: "Kolkata Heritage Inn",
    city: "Kolkata",
    price: 2000,
    rating: 3.7,
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600",
    description: "A charming colonial-era inn in the heart of Kolkata. Walking distance to Victoria Memorial, Howrah Bridge, and Park Street.",
    amenities: ["Free WiFi", "AC", "Breakfast", "Heritage Walk"]
  },
  {
    id: 18,
    name: "Eco Green Treehouse",
    city: "Munnar",
    price: 5500,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600",
    description: "Stay in an eco-friendly treehouse amid tea plantations. Solar-powered, organic meals, and guided nature tours.",
    amenities: ["Organic Meals", "Nature Tour", "Bird Watching", "Free WiFi"]
  },
  {
    id: 19,
    name: "Amritsar Golden Residency",
    city: "Amritsar",
    price: 2600,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600",
    description: "Walking distance from the Golden Temple. Enjoy authentic Punjabi cuisine and warm Amritsari hospitality.",
    amenities: ["Free WiFi", "AC", "Restaurant", "Temple View"]
  },
  {
    id: 20,
    name: "Island Pearl Resort",
    city: "Andaman",
    price: 7500,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600",
    description: "Private beachfront resort on Havelock Island. Crystal-clear waters, scuba diving, and luxurious overwater villas.",
    amenities: ["Free WiFi", "AC", "Scuba Diving", "Beach Access", "Spa"]
  },
  {
    id: 21,
    name: "Varanasi Ghat View",
    city: "Varanasi",
    price: 1800,
    rating: 3.6,
    image: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=600",
    description: "Boutique hotel on the ghats of the Ganges. Experience morning aarti, boat rides, and the spiritual essence of Kashi.",
    amenities: ["Free WiFi", "Ghat View", "Boat Ride", "Breakfast"]
  },
  {
    id: 22,
    name: "The Grand Pune",
    city: "Pune",
    price: 3400,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1529290130-4ca3753253ae?w=600",
    description: "Upscale hotel in Pune's Koregaon Park area. Close to nightlife, cafes, and the Osho International Meditation Resort.",
    amenities: ["Free WiFi", "AC", "Pool", "Gym", "Restaurant"]
  },
  {
    id: 23,
    name: "Tea Garden Bungalow",
    city: "Darjeeling",
    price: 4200,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=600",
    description: "Heritage bungalow set among Darjeeling's rolling tea gardens. Sip freshly brewed tea while watching the sunrise over Kanchenjunga.",
    amenities: ["Free WiFi", "Tea Tasting", "Mountain View", "Fireplace"]
  },
  {
    id: 24,
    name: "Cochin Waterfront Hotel",
    city: "Kochi",
    price: 3100,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600",
    description: "Modern hotel overlooking the Kochi harbour. Easy access to Fort Kochi, Chinese fishing nets, and Kathakali shows.",
    amenities: ["Free WiFi", "AC", "Harbour View", "Restaurant"]
  },
  {
    id: 25,
    name: "Luxury Suites Ahmedabad",
    city: "Ahmedabad",
    price: 3900,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=600",
    description: "Contemporary luxury in Gujarat's vibrant city. Near Sabarmati Ashram and the famous street food lanes.",
    amenities: ["Free WiFi", "AC", "Gym", "Business Center", "Restaurant"]
  },
  {
    id: 26,
    name: "Coorg Coffee Estate Stay",
    city: "Coorg",
    price: 4600,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600",
    description: "Plantation homestay surrounded by coffee and spice estates. Includes estate tour, home-cooked meals, and nature trails.",
    amenities: ["Meals Included", "Estate Tour", "Nature Trail", "Free WiFi"]
  },
  {
    id: 27,
    name: "Chandigarh Modern Stay",
    city: "Chandigarh",
    price: 2900,
    rating: 3.9,
    image: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=600",
    description: "Sleek and modern hotel in the planned city. Close to Rock Garden, Sukhna Lake, and the vibrant Sector 17 market.",
    amenities: ["Free WiFi", "AC", "Gym", "Parking"]
  },
  {
    id: 28,
    name: "Ooty Hills Retreat",
    city: "Ooty",
    price: 3300,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600",
    description: "Charming retreat in the Nilgiri Hills. Enjoy toy train rides, botanical gardens, and the cool mountain air.",
    amenities: ["Free WiFi", "Fireplace", "Garden", "Restaurant"]
  },
  {
    id: 29,
    name: "Rishikesh Yoga Ashram",
    city: "Rishikesh",
    price: 1500,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600",
    description: "Peaceful ashram on the banks of the Ganges. Daily yoga sessions, meditation, Ayurvedic meals, and river rafting nearby.",
    amenities: ["Yoga", "Meditation", "Meals Included", "River View"]
  },
  {
    id: 30,
    name: "Mysore Palace View Hotel",
    city: "Mysore",
    price: 2700,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
    description: "Elegant hotel near the iconic Mysore Palace. Experience the Dasara festival, silk sarees, and South Indian cuisine.",
    amenities: ["Free WiFi", "AC", "Restaurant", "Palace View"]
  },
  {
    id: 31,
    name: "Goa Party Hostel",
    city: "Goa",
    price: 950,
    rating: 3.4,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600",
    description: "Lively hostel in Baga with nightly parties, beer pong, and a rooftop bar. The perfect base for Goa's nightlife scene.",
    amenities: ["Free WiFi", "Bar", "Rooftop", "Shared Kitchen"]
  },
  {
    id: 32,
    name: "Sikkim Himalayan Lodge",
    city: "Gangtok",
    price: 3700,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600",
    description: "Cozy mountain lodge with views of Kanchenjunga. Ideal base for exploring monasteries, lakes, and Himalayan trails.",
    amenities: ["Free WiFi", "Mountain View", "Restaurant", "Trekking Guide"]
  },
  {
    id: 33,
    name: "The Lucknow Nawab",
    city: "Lucknow",
    price: 3000,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600",
    description: "Heritage hotel celebrating Awadhi culture. Savor kebabs, explore Bara Imambara, and enjoy Lucknowi hospitality.",
    amenities: ["Free WiFi", "AC", "Restaurant", "Heritage Tour"]
  },
  {
    id: 34,
    name: "Lonavala Valley Resort",
    city: "Lonavala",
    price: 4100,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600",
    description: "Scenic valley resort perfect for weekend getaways from Mumbai and Pune. Features infinity pool, hiking trails, and spa.",
    amenities: ["Free WiFi", "Pool", "Spa", "Hiking", "Restaurant"]
  },
  {
    id: 35,
    name: "Leh Ladakh Base Camp",
    city: "Leh",
    price: 2400,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600",
    description: "Adventure base camp at 11,500 ft. Acclimatization support, guided trips to Pangong Lake, Nubra Valley, and Khardung La.",
    amenities: ["Free WiFi", "Meals Included", "Guided Tours", "Oxygen Support"]
  },
  {
    id: 36,
    name: "Jodhpur Blue Haven",
    city: "Jodhpur",
    price: 3500,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
    description: "Boutique hotel in the Blue City, steps from Mehrangarh Fort. Rooftop dining with stunning fort views at sunset.",
    amenities: ["Free WiFi", "AC", "Rooftop Restaurant", "Fort View"]
  },
  {
    id: 37,
    name: "Delhi Airport Transit Hotel",
    city: "Delhi",
    price: 1800,
    rating: 3.3,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600",
    description: "Convenient transit hotel minutes from IGI Airport. Hourly and overnight stays available with shuttle service.",
    amenities: ["Free WiFi", "AC", "Airport Shuttle", "24h Reception"]
  },
  {
    id: 38,
    name: "Mahabaleshwar Panorama",
    city: "Mahabaleshwar",
    price: 3800,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=600",
    description: "Hill station resort with panoramic valley views. Famous for strawberry farms, viewpoints, and pleasant weather year-round.",
    amenities: ["Free WiFi", "Valley View", "Restaurant", "Parking"]
  },
  {
    id: 39,
    name: "Mumbai Sea Link Suites",
    city: "Mumbai",
    price: 6500,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600",
    description: "Premium suites with views of the Bandra-Worli Sea Link. Rooftop infinity pool, fine dining, and celebrity sightings.",
    amenities: ["Free WiFi", "AC", "Pool", "Spa", "Sea View", "Gym"]
  },
  {
    id: 40,
    name: "Kodaikanal Cloud Nine",
    city: "Kodaikanal",
    price: 3400,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600",
    description: "Misty mountain retreat near Kodaikanal Lake. Enjoy cycling, boating, and the famous Coaker's Walk at dawn.",
    amenities: ["Free WiFi", "Lake View", "Cycling", "Restaurant"]
  },
  {
    id: 41,
    name: "Kolkata Riverside Hotel",
    city: "Kolkata",
    price: 2800,
    rating: 3.9,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600",
    description: "Modern hotel along the Hooghly River. Close to Howrah Station, New Market, and Kolkata's legendary food scene.",
    amenities: ["Free WiFi", "AC", "River View", "Restaurant"]
  },
  {
    id: 42,
    name: "Auroville Eco Stay",
    city: "Pondicherry",
    price: 2200,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600",
    description: "Sustainable eco-resort near Auroville. Organic farm-to-table dining, bicycle tours, and community workshops.",
    amenities: ["Free WiFi", "Organic Meals", "Bicycle", "Yoga"]
  },
  {
    id: 43,
    name: "Udaipur Haveli Stay",
    city: "Udaipur",
    price: 5800,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600",
    description: "Restored 18th-century haveli with courtyards, frescos, and rooftop dining overlooking Lake Pichola.",
    amenities: ["Free WiFi", "AC", "Lake View", "Heritage", "Restaurant"]
  },
  {
    id: 44,
    name: "Indore Foodie Hotel",
    city: "Indore",
    price: 1900,
    rating: 3.8,
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=600",
    description: "Stay in India's street food capital. Guided food walks, clean rooms, and a central location near Sarafa Bazaar.",
    amenities: ["Free WiFi", "AC", "Food Walk", "Parking"]
  },
  {
    id: 45,
    name: "Andaman Coral Reef Resort",
    city: "Andaman",
    price: 8200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600",
    description: "Exclusive island resort with glass-bottom boat tours, snorkeling, and private beach cabanas on Neil Island.",
    amenities: ["Free WiFi", "AC", "Snorkeling", "Beach", "Spa", "Restaurant"]
  },
  {
    id: 46,
    name: "Dehradun Valley Inn",
    city: "Dehradun",
    price: 2100,
    rating: 3.7,
    image: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=600",
    description: "Peaceful valley hotel surrounded by sal forests. Gateway to Mussoorie, Sahastradhara, and Rajaji National Park.",
    amenities: ["Free WiFi", "Parking", "Garden", "Restaurant"]
  },
  {
    id: 47,
    name: "Pushkar Sacred Stay",
    city: "Pushkar",
    price: 1600,
    rating: 3.9,
    image: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=600",
    description: "Peaceful guesthouse near Pushkar Lake and Brahma Temple. Rooftop cafe, desert views, and camel fair nearby.",
    amenities: ["Free WiFi", "Rooftop Cafe", "Lake View", "Vegetarian Meals"]
  },
  {
    id: 48,
    name: "Hyderabad Nizam Suites",
    city: "Hyderabad",
    price: 4400,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600",
    description: "Royal suites inspired by Nizam-era elegance. Near Charminar, savour authentic Hyderabadi biryani on-site.",
    amenities: ["Free WiFi", "AC", "Restaurant", "Spa", "Gym"]
  },
  {
    id: 49,
    name: "Shillong Pinewoods",
    city: "Shillong",
    price: 2600,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600",
    description: "Pine-scented retreat in the Scotland of the East. Live music evenings, waterfall hikes, and Khasi cuisine.",
    amenities: ["Free WiFi", "Live Music", "Restaurant", "Parking"]
  },
  {
    id: 50,
    name: "Goa Luxury Villa",
    city: "Goa",
    price: 9500,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600",
    description: "Private villa with infinity pool in South Goa. Butler service, private beach access, and Goan fusion cuisine.",
    amenities: ["Free WiFi", "AC", "Private Pool", "Butler", "Beach Access", "Spa"]
  },
  {
    id: 51,
    name: "Jaipur Pink City Hostel",
    city: "Jaipur",
    price: 700,
    rating: 3.3,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600",
    description: "Colorful backpacker hostel near Hawa Mahal. Rooftop social area, walking tours, and budget-friendly vibes.",
    amenities: ["Free WiFi", "Shared Kitchen", "Rooftop", "Walking Tour"]
  },
  {
    id: 52,
    name: "Visakhapatnam Beach Hotel",
    city: "Visakhapatnam",
    price: 2900,
    rating: 3.8,
    image: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=600",
    description: "Beachfront hotel on the pristine Vizag coast. Submarine museum, Kailasagiri ropeway, and seafood dinners.",
    amenities: ["Free WiFi", "AC", "Beach Access", "Restaurant"]
  },
  {
    id: 53,
    name: "Srinagar Dal Lake Houseboat",
    city: "Srinagar",
    price: 5000,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600",
    description: "Iconic Kashmiri houseboat on Dal Lake. Shikara rides, Mughal gardens, and Kashmiri wazwan cuisine included.",
    amenities: ["Shikara Ride", "Meals Included", "Lake View", "Heating"]
  },
  {
    id: 54,
    name: "Bangalore Tech Park Hotel",
    city: "Bangalore",
    price: 3200,
    rating: 3.9,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600",
    description: "Business hotel in Whitefield tech corridor. Co-working spaces, fast internet, and shuttle to major tech parks.",
    amenities: ["Free WiFi", "AC", "Co-working", "Gym", "Shuttle"]
  },
  {
    id: 55,
    name: "Hampi Heritage Camp",
    city: "Hampi",
    price: 2000,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600",
    description: "Glamping experience among ancient Vijayanagara ruins. Sunrise temple tours, boulder climbing, and coracle rides.",
    amenities: ["Meals Included", "Guided Tours", "Bonfire", "Cycling"]
  },
  {
    id: 56,
    name: "Thiruvananthapuram Grand",
    city: "Thiruvananthapuram",
    price: 3600,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1549294413-26f195200c16?w=600",
    description: "Gateway to Kerala's capital. Close to Padmanabhaswamy Temple, Kovalam Beach, and Ayurvedic treatment centers.",
    amenities: ["Free WiFi", "AC", "Ayurvedic Spa", "Restaurant"]
  },
  {
    id: 57,
    name: "Nagpur Orange County",
    city: "Nagpur",
    price: 2300,
    rating: 3.6,
    image: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?w=600",
    description: "Central India hotel near tiger reserves. Perfect launchpad for Pench and Tadoba safari adventures.",
    amenities: ["Free WiFi", "AC", "Safari Booking", "Parking"]
  },
  {
    id: 58,
    name: "Mussoorie Queen's Hotel",
    city: "Mussoorie",
    price: 4700,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=600",
    description: "Grand colonial hotel on Mall Road. Kempty Falls, Gun Hill ropeway, and misty mountain walks await you.",
    amenities: ["Free WiFi", "Heating", "Restaurant", "Valley View", "Spa"]
  },
  {
    id: 59,
    name: "Bhopal Lakeside Hotel",
    city: "Bhopal",
    price: 2100,
    rating: 3.7,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600",
    description: "Overlooking the Upper Lake in Bhopal. Close to tribal museums, Sanchi Stupa, and delicious Bhopali cuisine.",
    amenities: ["Free WiFi", "AC", "Lake View", "Restaurant"]
  },
  {
    id: 60,
    name: "Ranthambore Safari Lodge",
    city: "Ranthambore",
    price: 5500,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600",
    description: "Luxury safari lodge at the edge of Ranthambore National Park. Tiger spotting, naturalist guides, and campfire dinners.",
    amenities: ["Free WiFi", "Safari", "Pool", "Restaurant", "Bonfire"]
  },
  {
    id: 61,
    name: "Chennai Marina Bay",
    city: "Chennai",
    price: 5200,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600",
    description: "Premium hotel overlooking Marina Beach. Chettinad cuisine, Carnatic music evenings, and temple tour packages.",
    amenities: ["Free WiFi", "AC", "Beach View", "Spa", "Restaurant"]
  },
  {
    id: 62,
    name: "Dharamsala Zen Retreat",
    city: "Dharamsala",
    price: 2800,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600",
    description: "Serene retreat near McLeod Ganj. Tibetan cooking classes, meditation sessions, and treks to Triund Peak.",
    amenities: ["Free WiFi", "Meditation", "Restaurant", "Mountain View"]
  },
  {
    id: 63,
    name: "Delhi Imperial Hotel",
    city: "Delhi",
    price: 8800,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600",
    description: "Iconic five-star on Janpath since 1931. Art deco interiors, award-winning restaurants, and celebrity guest history.",
    amenities: ["Free WiFi", "AC", "Pool", "Spa", "Gym", "Restaurant", "Bar"]
  },
  {
    id: 64,
    name: "Mangalore Coastal Inn",
    city: "Mangalore",
    price: 1800,
    rating: 3.5,
    image: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=600",
    description: "Simple coastal hotel with fresh seafood restaurant. Close to Panambur Beach and St. Aloysius Chapel.",
    amenities: ["Free WiFi", "AC", "Restaurant", "Parking"]
  },
  {
    id: 65,
    name: "Mount Abu Hilltop Resort",
    city: "Mount Abu",
    price: 3100,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600",
    description: "Rajasthan's only hill station resort. Nakki Lake, Dilwara Temples, and sunset views from Guru Shikhar.",
    amenities: ["Free WiFi", "Lake View", "Restaurant", "Garden"]
  },
  {
    id: 66,
    name: "Guwahati Brahmaputra Hotel",
    city: "Guwahati",
    price: 2500,
    rating: 3.8,
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600",
    description: "Riverside hotel with views of the mighty Brahmaputra. Gateway to Kaziranga, Manas, and Northeast India.",
    amenities: ["Free WiFi", "AC", "River View", "Restaurant"]
  },
  {
    id: 67,
    name: "Puducherry French Villa",
    city: "Pondicherry",
    price: 4300,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600",
    description: "Beautifully restored French colonial villa in White Town. Courtyard garden, French bakery, and promenade walks.",
    amenities: ["Free WiFi", "AC", "Garden", "Bakery", "Heritage"]
  },
  {
    id: 68,
    name: "Surat Diamond City Hotel",
    city: "Surat",
    price: 2400,
    rating: 3.7,
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?w=600",
    description: "Business hotel in India's diamond capital. Close to textile markets and famous Surati snack spots.",
    amenities: ["Free WiFi", "AC", "Business Center", "Restaurant"]
  },
  {
    id: 69,
    name: "Wayanad Pepper Trail",
    city: "Wayanad",
    price: 3800,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600",
    description: "Spice plantation stay in Kerala's Wayanad hills. Bamboo rafting, Edakkal Caves, and wildlife safaris.",
    amenities: ["Free WiFi", "Meals Included", "Nature Trail", "Bonfire"]
  },
  {
    id: 70,
    name: "Tirupati Temple Residency",
    city: "Tirupati",
    price: 1500,
    rating: 3.4,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600",
    description: "Clean, vegetarian hotel near Tirumala Temple. Darshan assistance, prasadam meals, and shuttle service.",
    amenities: ["Free WiFi", "AC", "Vegetarian Meals", "Temple Shuttle"]
  },
  {
    id: 71,
    name: "Manali Riverside Cottage",
    city: "Manali",
    price: 2800,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600",
    description: "Cozy wooden cottage by the Beas River. Apple orchards, Solang Valley skiing, and old Manali cafe culture.",
    amenities: ["Free WiFi", "River View", "Fireplace", "Restaurant"]
  },
  {
    id: 72,
    name: "Mumbai Budget Lodge",
    city: "Mumbai",
    price: 1200,
    rating: 3.1,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600",
    description: "No-frills lodge in Andheri near the station. Clean rooms, 24/7 front desk, and walkable to Western Express Highway.",
    amenities: ["Free WiFi", "AC", "24h Reception"]
  },
  {
    id: 73,
    name: "Kumarakom Backwater Resort",
    city: "Kumarakom",
    price: 6200,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600",
    description: "Ayurvedic lakeside resort on Vembanad Lake. Infinity pool, traditional Kettuvallam rides, and Panchakarma treatments.",
    amenities: ["Free WiFi", "AC", "Ayurvedic Spa", "Pool", "Lake View"]
  },
  {
    id: 74,
    name: "Gangtok Orchid Hotel",
    city: "Gangtok",
    price: 3300,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600",
    description: "Boutique hotel with Kanchenjunga views. Orchid garden, Rumtek Monastery tours, and Sikkimese cuisine.",
    amenities: ["Free WiFi", "Mountain View", "Restaurant", "Garden"]
  },
  {
    id: 75,
    name: "Alibaug Beach House",
    city: "Alibaug",
    price: 5000,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600",
    description: "Private beach house just a ferry ride from Mumbai. Kayaking, bonfires, and Konkani seafood feasts.",
    amenities: ["Free WiFi", "Beach Access", "Kayaking", "Bonfire"]
  },
  {
    id: 76,
    name: "Jaipur Rooftop Haveli",
    city: "Jaipur",
    price: 3600,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
    description: "Traditional haveli with a stunning rooftop view of Nahargarh Fort. Block-printing workshops and puppet shows.",
    amenities: ["Free WiFi", "AC", "Rooftop", "Cultural Workshop"]
  },
  {
    id: 77,
    name: "Coimbatore Cotton Suites",
    city: "Coimbatore",
    price: 2200,
    rating: 3.6,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600",
    description: "Business-friendly hotel in the Manchester of South India. Near Marudhamalai Temple and Isha Yoga Center.",
    amenities: ["Free WiFi", "AC", "Business Center", "Parking"]
  },
  {
    id: 78,
    name: "Shimla Colonial Lodge",
    city: "Shimla",
    price: 3900,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=600",
    description: "British-era lodge on Mall Road with wood-paneled rooms. Heritage toy train, Ridge walks, and apple orchards.",
    amenities: ["Free WiFi", "Heating", "Restaurant", "Heritage", "Parking"]
  },
  {
    id: 79,
    name: "Varanasi Boutique Haveli",
    city: "Varanasi",
    price: 2600,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=600",
    description: "Artsy boutique haveli near Assi Ghat. Silk weaving tours, classical music evenings, and organic chai.",
    amenities: ["Free WiFi", "AC", "Cultural Tours", "Rooftop Cafe"]
  },
  {
    id: 80,
    name: "Agra Heritage Mansion",
    city: "Agra",
    price: 4100,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600",
    description: "Sprawling mansion with gardens near Agra Fort. Marble inlay workshops, Mughlai feasts, and sunset Taj tours.",
    amenities: ["Free WiFi", "AC", "Garden", "Restaurant", "Taj View"]
  },
  {
    id: 81,
    name: "Goa Sunset Shack Stay",
    city: "Goa",
    price: 1400,
    rating: 3.6,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600",
    description: "Rustic beach shack in Palolem. Fall asleep to ocean waves, enjoy bonfire nights, and dolphin-spotting boat trips.",
    amenities: ["Free WiFi", "Beach Access", "Bonfire", "Dolphin Trip"]
  },
  {
    id: 82,
    name: "Pune Vineyard Retreat",
    city: "Pune",
    price: 5800,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1529290130-4ca3753253ae?w=600",
    description: "Stay at a working vineyard in Nashik Road. Wine tasting, grape stomping, and farm-to-fork dining experiences.",
    amenities: ["Free WiFi", "Wine Tasting", "Pool", "Restaurant", "Farm Tour"]
  },
  {
    id: 83,
    name: "Lakshadweep Coral Resort",
    city: "Lakshadweep",
    price: 9800,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600",
    description: "Exclusive island resort with turquoise lagoons. Kayaking, glass-bottom boats, and the best coral reefs in India.",
    amenities: ["Free WiFi", "AC", "Snorkeling", "Kayaking", "Beach", "Meals Included"]
  },
  {
    id: 84,
    name: "Rishikesh Adventure Camp",
    city: "Rishikesh",
    price: 1800,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600",
    description: "Adrenaline-pumping riverside camp. White-water rafting, bungee jumping, cliff jumping, and camping under stars.",
    amenities: ["Rafting", "Camping", "Meals Included", "Bonfire"]
  },
  {
    id: 85,
    name: "Ajmer Royal Hotel",
    city: "Ajmer",
    price: 2100,
    rating: 3.7,
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=600",
    description: "Comfortable hotel near Ajmer Sharif Dargah and Pushkar. Traditional decor, rooftop dining, and warm service.",
    amenities: ["Free WiFi", "AC", "Restaurant", "Rooftop"]
  },
  {
    id: 86,
    name: "Meghalaya Living Root Inn",
    city: "Cherrapunji",
    price: 2400,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600",
    description: "Eco-stay near the famous living root bridges. Trek through the wettest place on earth and discover hidden waterfalls.",
    amenities: ["Free WiFi", "Guided Treks", "Meals Included", "Eco-Friendly"]
  },
  {
    id: 87,
    name: "Bangalore Craft Beer Hotel",
    city: "Bangalore",
    price: 3800,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600",
    description: "Trendy hotel in Indiranagar with in-house microbrewery. Rooftop bar, live DJ nights, and artisanal food menu.",
    amenities: ["Free WiFi", "AC", "Brewery", "Rooftop Bar", "Restaurant"]
  },
  {
    id: 88,
    name: "Haridwar Ganga View",
    city: "Haridwar",
    price: 1600,
    rating: 3.5,
    image: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?w=600",
    description: "Simple hotel overlooking the Ganga at Har Ki Pauri. Evening aarti views, ashram visits, and sattvic meals.",
    amenities: ["Free WiFi", "Ganga View", "Vegetarian Meals", "AC"]
  },
  {
    id: 89,
    name: "Kaziranga Jungle Resort",
    city: "Kaziranga",
    price: 4500,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600",
    description: "Safari lodge at Kaziranga National Park. Spot one-horned rhinos, elephants, and tigers on guided jeep safaris.",
    amenities: ["Free WiFi", "Safari", "Pool", "Restaurant", "Nature Walk"]
  },
  {
    id: 90,
    name: "Delhi Boutique B&B",
    city: "Delhi",
    price: 3000,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
    description: "Charming bed & breakfast in Hauz Khas Village. Art galleries, rooftop views of the deer park, and curated food walks.",
    amenities: ["Free WiFi", "AC", "Breakfast", "Art Gallery", "Rooftop"]
  },
  {
    id: 91,
    name: "Alappuzha Kettuvallam",
    city: "Alleppey",
    price: 7000,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600",
    description: "Premium houseboat with AC bedrooms on Alleppey backwaters. Personal cook, toddy tasting, and village visits.",
    amenities: ["AC", "Private Chef", "Toddy Tasting", "Village Tour"]
  },
  {
    id: 92,
    name: "Srinagar Walnut Grove",
    city: "Srinagar",
    price: 4200,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600",
    description: "Boutique hotel amid walnut trees with Zabarwan mountain backdrop. Kashmiri carpet shopping and Mughal garden tours.",
    amenities: ["Free WiFi", "Heating", "Garden", "Restaurant", "Mountain View"]
  },
  {
    id: 93,
    name: "Puri Jagannath Hotel",
    city: "Puri",
    price: 2000,
    rating: 3.6,
    image: "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?w=600",
    description: "Simple beachside hotel near Jagannath Temple. Rath Yatra festival, sand art, and fresh Odia seafood.",
    amenities: ["Free WiFi", "AC", "Beach Access", "Temple Shuttle"]
  },
  {
    id: 94,
    name: "Auli Ski Resort",
    city: "Auli",
    price: 5500,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600",
    description: "Premium ski resort at 10,000 ft with panoramic Himalayan views. Skiing, gondola rides, and après-ski bonfire.",
    amenities: ["Free WiFi", "Heating", "Ski Equipment", "Restaurant", "Bonfire"]
  },
  {
    id: 95,
    name: "Madhya Pradesh Jungle Lodge",
    city: "Bandhavgarh",
    price: 4800,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600",
    description: "Tiger-centric safari lodge in Bandhavgarh. Highest density of Bengal tigers, naturalist walks, and luxury tents.",
    amenities: ["Free WiFi", "Safari", "Pool", "Meals Included", "Nature Walk"]
  },
  {
    id: 96,
    name: "Kolkata Park Street Grand",
    city: "Kolkata",
    price: 4000,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600",
    description: "Grand hotel on Kolkata's iconic Park Street. Jazz nights, Anglo-Indian cuisine, and literary walking tours.",
    amenities: ["Free WiFi", "AC", "Restaurant", "Bar", "Gym"]
  },
  {
    id: 97,
    name: "Lansdowne Colonial Retreat",
    city: "Lansdowne",
    price: 2300,
    rating: 3.9,
    image: "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=600",
    description: "Quiet cantonment hill station escape. Colonial bungalow, Bhulla Lake walks, and Garhwal Rifles museum.",
    amenities: ["Free WiFi", "Fireplace", "Garden", "Parking"]
  },
  {
    id: 98,
    name: "Mumbai Juhu Beach Resort",
    city: "Mumbai",
    price: 7800,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600",
    description: "Beachfront luxury on Juhu Beach. Bollywood celebrity sightings, Chaat on the beach, and world-class spa treatments.",
    amenities: ["Free WiFi", "AC", "Pool", "Spa", "Beach View", "Restaurant"]
  },
  {
    id: 99,
    name: "Tawang Monastery Stay",
    city: "Tawang",
    price: 2200,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600",
    description: "Mountain guesthouse near Asia's largest monastery. Sela Pass, high-altitude lakes, and Monpa tribal culture.",
    amenities: ["Free WiFi", "Heating", "Meals Included", "Guided Tours"]
  },
  {
    id: 100,
    name: "Gokarna Beach Cabin",
    city: "Gokarna",
    price: 1700,
    rating: 4.0,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600",
    description: "Rustic beach cabin on Om Beach. Beach hopping, cliff jumping, and the perfect balance of spirituality and surf.",
    amenities: ["Free WiFi", "Beach Access", "Bonfire", "Restaurant"]
  }
];

export default hotels;
