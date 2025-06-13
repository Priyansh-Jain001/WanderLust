const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731594989/photo-1_ddojux.avif",
      filename: 'listing image'
    },

    price: 1500,
    location: "malibu",
    country: "united states",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595288/photo-2_pr44fb.avif",
      filename: 'listing image'
    },
     
   
    price: 1200,
    location: "new york city",
    country: "united states",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595319/photo-3_pbqs7e.avif",
      filename: 'listing image'
    },
    
    price: 1000,
    location: "aspen",
    country: "anited states",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595344/photo-4_skulmh.avif",
      filename: 'listing image'
    },
   
    price: 2500,
    location: "florence",
    country: "italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595375/photo-5_q8jt48.avif",
      filename: 'listing image'
    },  
    
    price: 800,
    location: "portland",
    country: "united states",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595375/photo-6_ewgtv3.avif",
      filename: 'listing image'
    }, 
      
    
    price: 2000,
    location: "cancun",
    country: "mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    
   image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595376/photo-7_yxid0i.avif",
      filename: 'listing image'
    }, 

    
    price: 900,
    location: "lake tahoe",
    country: "united states",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595376/photo-8_blijmx.avif",
      filename: 'listing image'
    },     
    
    price: 3500,
    location: "los angeles",
    country: "united states",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595376/photo-9_d32wvb.avif",
      filename: 'listing image'
    }, 
    
    price: 3000,
    location: "verbier",
    country: "switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595377/photo-10_zcemk6.avif",
      filename: 'listing image'
    }, 
    
    
    
    price: 4000,
    location: "serengeti national park",
    country: "tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595377/photo-10_zcemk6.avif",
      filename: 'listing image'
    }, 

     
    
    price: 1800,
    location: "amsterdam",
    country: "netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595378/photo-12_pntlwl.avif",
      filename: 'listing image'
    },  
    
    price: 10000,
    location: "fiji",
    country: "fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595378/photo-13_fa8li1.avif",
      filename: 'listing image'
    }, 
  
    
    
    price: 1200,
    location: "cotswolds",
    country: "united kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    
    image:{
      url:  "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595379/photo-14_yobytz.avif",
      filename: 'listing image'
    }, 
     
   
  
    price: 2200,
    location: "boston",
    country: "united states",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595379/photo-15_tdewww.avif",
      filename: 'listing image'
    }, 

    
    price: 1800,
    location: "bali",
    country: "indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595380/photo-16_a0tnr5.avif",
      filename: 'listing image'
    }, 

    
    price: 1500,
    location: "banff",
    country: "canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595381/photo-17_uhczwi.avif",
      filename: 'listing image'
    }, 
    
    
    price: 1600,
    location: "miami",
    country: "united states",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595382/photo-18_xqffmo.avif",
      filename: 'listing image'
    }, 
    
    
    price: 3000,
    location: "phuket",
    country: "thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595382/photo-19_i9ux0f.avif",
      filename: 'listing image'
    }, 
      
    
    price: 4000,
    location: "scottish highlands",
    country: "united kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595382/photo-20_abhfi2.avif",
      filename: 'listing image'
    }, 
     
    price: 5000,
    location: "dubai",
    country: "united arab emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595383/photo-21_dexrua.avif",
      filename: 'listing image'
    }, 
     
    
    price: 1100,
    location: "montana",
    country: "united states",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    
    image:{
      url:  "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731596264/photo-29_kg3nbq.avif",
      filename: 'listing image'
    }, 
    
   
    price: 2500,
    location: "mykonos",
    country: "greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731596228/photo-28_jt8xw4.avif",
      filename: 'listing image'
    }, 
     
    
    price: 750,
    location: "costa rica",
    country: "costa rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731596189/photo-27_qxersp.avif",
      filename: 'listing image'
    }, 
     
    
    price: 1600,
    location: "charleston",
    country: "united states",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731596155/photo-56_mztwyg.avif",
      filename: 'listing image'
    }, 
     
   
    price: 2000,
    location: "tokyo",
    country: "japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    
    image:{
      url:  "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595383/photo-22_ztcya1.avif",
      filename: 'listing image'
    }, 
    
    
    price: 1200,
    location: "new hampshire",
    country: "united states",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595384/photo-23_uclusn.avif",
      filename: 'listing image'
    }, 
     
   
    price: 6000,
    location: "maldives",
    country: "maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    
    image:{
      url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595385/photo-24_ybfwss.avif",
      filename: 'listing image'
    }, 

    price: 4000,
    location: "aspen",
    country: "united states",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    
    image:{
        url: "https://res.cloudinary.com/dwzzzllfr/image/upload/v1731595385/photo-25_cew3mx.avif",
      filename: 'listing image'
    },  
    
    
    price: 1800,
    location: "costa rica",
    country: "costa rica",
  },
];

module.exports = { data: sampleListings };
