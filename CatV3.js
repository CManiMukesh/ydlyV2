// const carouselImages = [
//     '../assets/carasoul/2(1)20220013767.jpg',
//     '../assets/carasoul/1(2)20225833943.jpg',
//     '../assets/carasoul/3(2)20220039558.jpg'
// ];

const products = [
    // {
    //     name: "CHATEAU MARGAUX RED WINE",
    //     image: "https://example.com/path/to/chateau-margaux.jpg",
    //     sizes: ["Standard"],
    //     prices: { "Standard": 5000.00 },
    //     category: "wine"
    // },
    // {
    //     name: "HENNESSY XO COGNAC",
    //     image: "https://example.com/path/to/hennessy.jpg",
    //     sizes: ["180ML", "375ML", "750ML"],
    //     prices: { "180ML": 2000.00, "375ML": 4000.00, "750ML": 7500.00 },
    //     category: "brandy"
    // },
    // Add more products- Beer
    {
        name: "Corona",
        image: "../assets/Beer/CORONA-EXTRA-PREMIUM-BEER-651.jpg",
        sizes: ["500 ML", "330 ML"],
        prices: {"500 ML": 250, "330 ML": 170 },
        category: "beer"
    },
    {
        name: "Hoegaarden",
        image: "../assets/Beer/LCIN01000.webp",
        sizes: ["500 ML", "330 ML"],
        prices: {"500 ML": 250, "330 ML": 170 },
        category: "beer"
    },
    { 
        name: "Budweiser Light", 
        image: "../assets/Beer/LCIN00357.webp", 
        sizes: ["650 ML", "500 ML", "330 ML"],
        prices: { "650 ML": 230, "500 ML": 230, "330 ML": 140 },
        category: "beer"
    },
    { 
        name: "Budweiser Magnum", 
        image: "../assets/Beer/LCIN00362.webp", 
        sizes: ["650 ML", "500 ML", "330 ML"],
        prices: { "650 ML": 230, "500 ML": 230, "330 ML": 140 },
        category: "beer"
    },
    { 
        name: "Carlsberg Elephant Strong", 
        image: "../assets/Beer/CARLSBERG-ELEPHANT-STRONG-736.jpg", 
        sizes: ["650 ML", "500 ML", "330 ML"],
        prices: { "650 ML": 230, "500 ML": 230, "330 ML": 140 },
        category: "beer"
    },
    { 
        name: "Kingfisher Ultra", 
        image: "../assets/Beer/LCIN01186.webp", 
        sizes: ["650 ML", "500 ML", "330 ML"],
        prices: { "650 ML": 230, "500 ML": 230, "330 ML": 140 },
        category: "beer"
    },
    { 
        name: "Heineken", 
        image: "../assets/Beer/HEINEKEN-INDIA-LAGER-652.jpg", 
        sizes: ["650 ML", "500 ML", "330 ML"],
        prices: { "650 ML": 230, "500 ML": 230, "330 ML": 140 },
        category: "beer"
    },
    { 
        name: "Kingfisher Ultra Witbier", 
        image: "../assets/Beer/KINGFISHER-ULTRA-WITBIER-1281.jpg", 
        sizes: ["650 ML", "500 ML", "330 ML"],
        prices: { "650 ML": 230, "500 ML": 230, "330 ML": 140 },
        category: "beer"
    },
    { 
        name: "BarahSinghe", 
        image: "../assets/Beer/46360219391010389785536218887123747528423.png", 
        sizes: ["650 ML", "500 ML", "330 ML"],
        prices: { "650 ML": 230, "500 ML": 230, "330 ML": 140 },
        category: "beer"
    },
    { 
        name: "Tuborg", 
        image: "../assets/Beer/TUBORG-CLASSIC-BLACK-STRONG-1410.jpg", 
        sizes: ["650 ML", "500 ML", "330 ML"],
        prices: { "650 ML": 180, "500 ML": 180, "330 ML": 110 },
        category: "beer"
    },
    { 
        name: "Kingfisher Strong", 
        image: "../assets/Beer/KINGFISHER-STRONG-737.jpg", 
        sizes: ["650 ML", "500 ML", "330 ML"],
        prices: { "650 ML": 180, "500 ML": 180, "330 ML": 110 },
        category: "beer"
    },
    { 
        name: "Bira Boom", 
        image: "../assets/Beer/BIRA-BOOM-733.jpg", 
        sizes: ["650 ML", "500 ML"],
        prices: { "650 ML": 180, "500 ML": 180},
        category: "beer"
    },
    { 
        name: "Bacardi Breezer Flavour", 
        image: "../assets/Beer/BACARDI-BREEZER-BLACKBERRY-832.jpg", 
        sizes: ["275 ML"],
        prices: { "275 ML": 150},
        category: "beer"
    },
    // { 
    //     name: "Bacardi Breezer Plus", 
    //     image: "../assets/Beer/LCIN01000.webp", 
    //     sizes: ["275 ML"],
    //     prices: { "275 ML": 150},
    //     category: "beer"
    // },
    { 
        name: "Buho Strong", 
        image: "../assets/Beer/LCIN00366.webp", 
        sizes: ["500 ML"],
        prices: {"500 ML": 230},
        category: "beer"
    },
    { 
        name: "Buho Witbier", 
        image: "../assets/Beer/LCIN00367.webp", 
        sizes: ["500 ML"],
        prices: {"500 ML": 230},
        category: "beer"
    },
    { 
        name: "Druk 11000 Strong", 
        image: "../assets/Beer/LCIN00682.webp", 
        sizes: ["650 ML", "500 ML"],
        prices: { "650 ML": 160, "500 ML": 140},
        category: "beer"
    },
    // IMFL 
    {
        name: "Amrut Fusion",
        image: "../assets/other/AMRUT-FUSION-SINGLE-MALT-1347.jpg",
        sizes: ["750 ML"],
        prices: { "750 ML": 3600},
        category: "whiskey"
    },
    {
        name: "Godawan Single Malt 01",
        image: "../assets/other/LCIN00868.webp",
        sizes: ["750 ML"],
        prices: { "750 ML": 3200},
        category: "whiskey"
    },
    {
        name: "Godawan Single Malt 02",
        image: "../assets/other/LCIN00867.webp",
        sizes: ["750 ML"],
        prices: { "750 ML": 3200},
        category: "whiskey"
    },
    {
        name: "Amrut Amalgam",
        image: "../assets/other/AMRUT-AMALGAM-MALT-WHISKEY-409.jpg",
        sizes: ["750 ML"],
        prices: { "750 ML": 3200},
        category: "whiskey"
    },
    {
        name: "Indri Single Malt",
        image: "../assets/other/LCIN01025.webp",
        sizes: ["750 ML"],
        prices: { "750 ML": 3200},
        category: "whiskey"
    },
    {
        name: "Kumaon Gin",
        image: "../assets/other/20032024164341_0_885_dsk.jpg",
        sizes: ["750 ML"],
        prices: { "750 ML": 3200},
        category: "gin"
    },
    {
        name: "Longitude 77",
        image: "../assets/other/LCIN02184.webp",
        sizes: ["750 ML"],
        prices: { "750 ML": 3200},
        category: "whiskey"
    },
    {
        name: "Jaisalmer Gin",
        image: "../assets/other/JAISALMER-CRAFT-GIN-720.jpg",
        sizes: ["750 ML"],
        prices: { "750 ML": 3200},
        category: "gin"
    },
    {
        name: "Happusa",
        image: "../assets/other/LCIN02191.webp",
        sizes: ["750 ML"],
        prices: { "750 ML": 2500},
        category: "gin"
    },
    {
        name: "Enso",
        image: "../assets/other/1386600_1.webp",
        sizes: ["750 ML"],
        prices: { "750 ML": 2500},
        category: "whiskey"
    },
    {
        name: "Samsara Paradise",
        image: "../assets/other/20022024113741_0_864_dsk.jpg",
        sizes: ["750 ML"],
        prices: { "750 ML": 2500},
        category: "gin"
    },
    {
        name: "Black Dog 14 Year Old",
        image: "../assets/other/BLACK-DOG-MILLARDS-PRIVATE-RESERVE-797.jpg",
        sizes: ["750 ML"],
        prices: { "750 ML": 2700},
        category: "scotch"
    },
    {
        name: "Paul John Bold",
        image: "../assets/other/PAUL-JOHN-BOLD-SINGLE-MALT-295.jpg",
        sizes: ["750 ML"],
        prices: { "750 ML": 3200},
        category: "whiskey"
    },
    {
        name: "Paul John Brilliance",
        image: "../assets/other/PAUL-JOHN-BRILLIANCE-SINGLE-MALT-296.jpg",
        sizes: ["750 ML"],
        prices: { "750 ML": 3200},
        category: "whiskey"
    },
    {
        name: "Teacher's Origin",
        image: "../assets/other/TEACHERS-ORIGIN-SCOTCH-934.jpg",
        sizes: ["750 ML"],
        prices: { "750 ML": 2200},
        category: "scotch"
    },
    {
        name: "Malhar",
        image: "../assets/other/MALHARCLASSICDRYINDIANCRAFTGIN20231817223.jpg",
        sizes: ["750 ML"],
        prices: { "750 ML": 2200},
        category: "gin"
    },
    {
        name: "The Solan Gold",
        image: "../assets/other/LCIN02005.webp",
        sizes: ["750 ML"],
        prices: { "750 ML": 2100},
        category: "whiskey"
    },
    {
        name: "Tamras Gin",
        image: "../assets/other/LCIN01918.webp",
        sizes: ["750 ML"],
        prices: { "750 ML": 2000},
        category: "gin"
    },
    {
        name: "Teacher Golden 12 Year Old",
        image: "../assets/other/LCIN01927.webp",
        sizes: ["750 ML"],
        prices: { "750 ML": 1800},
        category: "scotch"
    },
    {
        name: "Paul John Nirvana",
        image: "../assets/other/LCIN01582.webp",
        sizes: ["750 ML"],
        prices: { "750 ML": 1800},
        category: "whiskey"
    },
    {
        name: "Jin Jiji Darjeeling Dry Gin",
        image: "../assets/other/20022024113452_0_732_dsk.jpg",
        sizes: ["750 ML"],
        prices: { "750 ML": 1800},
        category: "gin"
    },
    {
        name: "Macroys Sherry Finish Blended Whiskey",
        image: "../assets/other/2380360_1.webp",
        sizes: ["750 ML"],
        prices: { "750 ML": 1800},
        category: "scotch"
    },
    {
        name: "Greater than Broken Bat Gin",
        image: "../assets/other/LCIN02187.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1800, "375 ML": 1000, "180 ML": 600 },
        category: "gin"
    },
    {
        name: "Blenders Pride",
        image: "../assets/other/images.jpeg",
        sizes: ["2 Ltr"],
        prices: { "2 Ltr": 1800},
        category: "whiskey"
    },
    {
        name: "Black Dog Deluxe",
        image: "../assets/other/Black-Dog-12-Years-Old-Deluxe-Gold-Reserve-Blended-7.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1600, "375 ML": 900, "180 ML": 500 },
        category: "scotch"
    },
    {
        name: "100 Pipers 12 Yr",
        image: "../assets/other/LCIN00002.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1600, "375 ML": 900, "180 ML": 500 },
        category: "scotch"
    },
    {
        name: "Macroys Sherry Finish",
        image: "../assets/other/2380360_1 (1).webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1600, "375 ML": 900, "180 ML": 500 },
        category: "whiskey"
    },
    {
        name: "Teacher's 50",
        image: "../assets/other/TEACHERS-50-BLENDED-SCOTCH-850.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1500, "375 ML": 800, "180 ML": 400 },
        category: "whiskey"
    },
    {
        name: "Something Special",
        image: "../assets/other/LCIN01838.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1500, "375 ML": 800, "180 ML": 400 },
        category: "whiskey"
    },
    {
        name: "Camikara 3YO Rum",
        image: "../assets/other/2380922.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1500, "375 ML": 800, "180 ML": 400 },
        category: "rum"
    },
    {
        name: "Smoke Anised(Black)",
        image: "../assets/other/Smoke-Lab-Aniseed-Vodka_product_id_608_.png",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1500, "375 ML": 800, "180 ML": 400 },
        category: "vodka"
    },
    {
        name: "Smoke Anised(White)",
        image: "../assets/other/smoke.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1500, "375 ML": 800, "180 ML": 400 },
        category: "vodka"
    },
    {
        name: "Smoke Saffron",
        image: "../assets/other/SMOKEVODKASAFFRON20235003898.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1500, "375 ML": 800, "180 ML": 400 },
        category: "vodka"
    },
    {
        name: "Samsara Contemporary",
        image: "../assets/other/LCIN01743.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1500, "375 ML": 800, "180 ML": 400 },
        category: "gin"
    },
    {
        name: "Terai Gin",
        image: "../assets/other/TERAI-INDIAN-DRY-GIN_product_id_511_.png",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1400, "375 ML": 700, "180 ML": 400 },
        category: "gin"
    },
    {
        name: "Royal Stag 2 Ltr",
        image: "../assets/other/download.jpeg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1400, "375 ML": 700, "180 ML": 400 },
        category: "whiskey"
    },
    {
        name: "100 Piper Malt",
        image: "../assets/other/LCIN00004.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1400, "375 ML": 700, "180 ML": 400 },
        category: "whiskey"
    },
    {
        name: "Teacher Reserve",
        image: "../assets/other/LCIN01930.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1400, "375 ML": 700, "180 ML": 400 },
        category: "whiskey"
    },
    {
        name: "Budweiser Magnum Whiskey",
        image: "../assets/other/LCIN00360.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1400, "375 ML": 700, "180 ML": 400 },
        category: "whiskey"
    },
    {
        name: "Macroys Blended",
        image: "../assets/other/download (1).jpeg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1400, "375 ML": 700, "180 ML": 400 },
        category: "whiskey"
    },
    // {
    //     name: "100 Piper",
    //     image: "../assets/other/AMRUT-FUSION-SINGLE-MALT-1347.jpg",
    //     sizes: ["750 ML", "375 ML", "180 ML"],
    //     prices: { "750 ML": 1300, "375 ML": 700, "180 ML": 400 },
    //     category: "whiskey"
    // },
    {
        name: "Black Dog Black Centenary",
        image: "../assets/other/LCIN00259.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1300, "375 ML": 700, "180 ML": 400 },
        category: "whiskey"
    },
    {
        name: "Black & White",
        image: "../assets/other/LCIN00254.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1300, "375 ML": 700, "180 ML": 400 },
        category: "whiskey"
    },
    {
        name: "Dewar's White Label",
        image: "../assets/other/LCIN00632.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1200, "375 ML": 650, "180 ML": 350 },
        category: "whiskey"
    },
    {
        name: "Teacher's Highland",
        image: "../assets/other/TEACHERS-HIGHLAND-CREAM-851.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1200, "375 ML": 650, "180 ML": 350 },
        category: "whiskey"
    },
    {
        name: "Royal Ranthambore",
        image: "../assets/other/ROYAL-RANTHAMBORE-1593.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1200, "375 ML": 650, "180 ML": 350 },
        category: "whiskey"
    },
    {
        name: "Jim Beam",
        image: "../assets/other/LCIN01085.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1200, "375 ML": 650, "180 ML": 350 },
        category: "whiskey"
    },
    {
        name: "Grants Distinction",
        image: "../assets/other/LCIN00895.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1200, "375 ML": 650, "180 ML": 350 },
        category: "whiskey"
    },
    {
        name: "Macroy's Special Reserve Blended Whiskey",
        image: "../assets/other/LCIN02247.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1200, "375 ML": 650, "180 ML": 350 },
        category: "whiskey"
    },
    {
        name: "Old Monk Legend Ltr",
        image: "../assets/other/OLD-MONK-THE-LEGEND-DARK-RUM-475.jpg",
        sizes: ["750 ML"],
        prices: { "750 ML": 1100},
        category: "rum"
    },
    {
        name: "William's Lowson",
        image: "../assets/other/images (1).jpeg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1000, "375 ML": 550, "180 ML": 300 },
        category: "whiskey"
    },
    {
        name: "Vat69",
        image: "../assets/other/VAT-69-FINEST-SCOTCH-935.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1000, "375 ML": 550, "180 ML": 300 },
        category: "whiskey"
    },
    {
        name: "Old Smuggler",
        image: "../assets/other/LCIN01538.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1000, "375 ML": 550, "180 ML": 300 },
        category: "whiskey"
    },
    {
        name: "Fireball Cinnamon",
        image: "../assets/other/LCIN00746.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 1000, "375 ML": 550, "180 ML": 300 },
        category: "whiskey"
    },
    {
        name: "Sitara Indian Barrell White Rum",
        image: "../assets/other/images (2).jpeg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 950, "375 ML": 500, "180 ML": 275 },
        category: "rum"
    },
    {
        name: "Sitara Indian Botanical Spiced Rum",
        image: "../assets/other/images (3).jpeg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 950, "375 ML": 500, "180 ML": 275 },
        category: "rum"
    },
    {
        name: "Maka Zia Gold Rum",
        image: "../assets/other/LCIN03341.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 950, "375 ML": 500, "180 ML": 275 },
        category: "rum"
    },
    {
        name: "Maka Zia White Rum",
        image: "../assets/other/download (2).jpeg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 950, "375 ML": 500, "180 ML": 275 },
        category: "rum"
    },
    {
        name: "Greater Than",
        image: "../assets/other/download (3).jpeg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 900, "375 ML": 500, "180 ML": 275 },
        category: "Gin"
    },
    {
        name: "Resolute",
        image: "../assets/other/LCIN01656.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 900, "375 ML": 500, "180 ML": 275 },
        category: "vodka"
    },
    {
        name: "Antiquity Blue",
        image: "../assets/other/ANTIQUITY-BLUE-243.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 850, "375 ML": 450, "180 ML": 250 },
        category: "whiskey"
    },
    {
        name: "Blenders Pride Reserve",
        image: "../assets/other/BLENDERS-PRIDE-RESERVE-245.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 850, "375 ML": 450, "180 ML": 250 },
        category: "whiskey"
    },
    {
        name: "Rockford Reserve",
        image: "../assets/other/LCIN01687.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 850, "375 ML": 450, "180 ML": 250 },
        category: "whiskey"
    },
    {
        name: "MM Dazzle Vanilla",
        image: "../assets/other/LCIN01328.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 850, "375 ML": 450, "180 ML": 250 },
        category: "vodka"
    },
    {
        name: "MM Dazzle",
        image: "../assets/other/LCIN01329.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 850, "375 ML": 450, "180 ML": 250 },
        category: "vodka"
    },
    {
        name: "Old Monk Legend Ltr",
        image: "../assets/other/LCIN01533.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 850, "375 ML": 450, "180 ML": 250 },
        category: "rum"
    },
    {
        name: "Morpheus Blue",
        image: "../assets/other/MORPHEUS-BLUE-XO-2466.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 850, "375 ML": 450, "180 ML": 250 },
        category: "brandy"
    },
    {
        name: "Roulette Premium Whiskey",
        image: "../assets/other/ROULETTE-PREMIUM-WHISKY-1490.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 850, "375 ML": 450, "180 ML": 250 },
        category: "whiskey"
    },
    {
        name: "Artic Vodka",
        image: "../assets/other/LCIN00120.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 800, "375 ML": 420, "180 ML": 230 },
        category: "vodka"
    },
    {
        name: "Bacardi Flavour",
        image: "../assets/other/LCIN00145.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 800, "375 ML": 420, "180 ML": 230 },
        category: "rum"
    },
    {
        name: "Bacardi Gold",
        image: "../assets/other/LCIN00143.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 800, "375 ML": 420, "180 ML": 230 },
        category: "rum"
    },
    {
        name: "Magic Moments Verve Flavour",
        image: "../assets/other/MAGIC-MOMENTS-VERVE-CRANBERRY-TEASE-1919.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 800, "375 ML": 420, "180 ML": 230 },
        category: "brandy"
    },
    {
        name: "Smirnoff Flavour",
        image: "../assets/other/SMIRNOFF-ORANGE-TWIST-VODKA-1023.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 800, "375 ML": 420, "180 ML": 230 },
        category: "vodka"
    },
    {
        name: "Bootz Jamaica Rum",
        image: "../assets/other/BOOTZ-DARK-JAMAICA-RUM.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 800, "375 ML": 420, "180 ML": 230 },
        category: "rum"
    },
    {
        name: "Signature Premier(Red)",
        image: "../assets/other/NewProject(15)20223619563.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 800, "375 ML": 420, "180 ML": 230 },
        category: "whiskey"
    },
    {
        name: "Oaksmith Gold",
        image: "../assets/other/OAKSMITH-GOLD-INTERNATIONAL-BLENDED-WHISKY-424.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 800, "375 ML": 420, "180 ML": 230 },
        category: "whiskey"
    },
    {
        name: "Blenders Pride",
        image: "../assets/other/09042024105321_0_29_dsk.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 750, "375 ML": 400, "180 ML": 220 },
        category: "whiskey"
    },
    {
        name: "Signature Rare",
        image: "../assets/other/Signature-Rare-Aged-Whisky_product_id_272_.png",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 750, "375 ML": 400, "180 ML": 220 },
        category: "whiskey"
    },
    {
        name: "Sterling B-10",
        image: "../assets/other/Sterling-Reserve-B10-Premium-Blended-Whisky_product_id_276_.png",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 750, "375 ML": 400, "180 ML": 220 },
        category: "whiskey"
    },
    {
        name: "Rockford Classic",
        image: "../assets/other/ROCKFORD-CLASSIC-WHISKY-1710.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 750, "375 ML": 400, "180 ML": 220 },
        category: "whiskey"
    },
    {
        name: "Golfer's Short",
        image: "../assets/other/images (4).jpeg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 750, "375 ML": 400, "180 ML": 220 },
        category: "whiskey"
    },
    {
        name: "Star Walker the Generation",
        image: "../assets/other/LCIN01853.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 750, "375 ML": 400, "180 ML": 220 },
        category: "whiskey"
    },
    {
        name: "Whistler Barrel",
        image: "../assets/other/LCIN02117.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 750, "375 ML": 400, "180 ML": 220 },
        category: "whiskey"
    },
    {
        name: "Oakton",
        image: "../assets/other/LCIN01514.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 750, "375 ML": 400, "180 ML": 220 },
        category: "whiskey"
    },
    {
        name: "Old Monk Supreme",
        image: "../assets/other/OLD-MONK-SUPREME-DARK-RUM-474.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 750, "375 ML": 400, "180 ML": 220 },
        category: "rum"
    },
    {
        name: "Resolute Crystal Vodka",
        image: "../assets/other/LCIN01655.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 750, "375 ML": 400, "180 ML": 220 },
        category: "vodka"
    },
    {
        name: "Smirnoff Vodka",
        image: "../assets/other/LCIN01826.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 750, "375 ML": 400, "180 ML": 220 },
        category: "vodka"
    },
    {
        name: "Morpheus Brandy",
        image: "../assets/other/LCIN01464.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 750, "375 ML": 400, "180 ML": 220 },
        category: "brandy"
    },
    {
        name: "Magic Moment Verve Vodka",
        image: "../assets/other/LCIN01341.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 750, "375 ML": 400, "180 ML": 220 },
        category: "vodka"
    },
    {
        name: "Magic Moment Flavour",
        image: "../assets/other/LCIN01335.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 600, "375 ML": 320, "180 ML": 200 },
        category: "vodka"
    },
    {
        name: "Oaksmith International",
        image: "../assets/other/OAKSMITH-INTERNATIONAL-BLENDED-WHISKY-425.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 600, "375 ML": 320, "180 ML": 200 },
        category: "whiskey"
    },
    {
        name: "RS Barrell",
        image: "../assets/other/ROYAL-STAG-BARREL-SELECT-995.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 600, "375 ML": 320, "180 ML": 200 },
        category: "whiskey"
    },
    {
        name: "Governors Reserve Rare(Blue)",
        image: "../assets/other/LCIN00887.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 600, "375 ML": 320, "180 ML": 200 },
        category: "brandy"
    },
    // {
    //     name: "Royal Stag Double Dark",
    //     image: "../assets/other/AMRUT-FUSION-SINGLE-MALT-1347.jpg",
    //     sizes: ["750 ML", "375 ML", "180 ML"],
    //     prices: { "750 ML": 580, "375 ML": 320, "180 ML": 1700 },
    //     category: "whiskey"
    // },
    {
        name: "All Seasons",
        image: "../assets/other/LCIN00072.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "whiskey"
    },
    {
        name: "Royal Stag",
        image: "../assets/other/LCIN01726.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "whiskey"
    },
    {
        name: "Sterling B-7",
        image: "../assets/other/LCIN01864.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "whiskey"
    },
    {
        name: "White & Blue",
        image: "../assets/other/LCIN02120.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "whiskey"
    },
    {
        name: "Royal Challenge",
        image: "../assets/other/LCIN01709.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "whiskey"
    },
    {
        name: "Magic Moment Vodka",
        image: "../assets/other/LCIN01350.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "vodka"
    },
    {
        name: "1965 Rum",
        image: "../assets/other/LCIN00016.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "rum"
    },
    {
        name: "Hawkston",
        image: "../assets/other/Hawkston-Noble-Reserve-Whiskey.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "whiskey"
    },
    {
        name: "Royal Green",
        image: "../assets/other/LCIN01713.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "whiskey"
    },
    {
        name: "McDowell's No. 1 Platinum",
        image: "../assets/other/LCIN01402.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "whiskey"
    },
    {
        name: "One More Vodka",
        image: "../assets/other/LCIN01547.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "vodka"
    },
    {
        name: "Eristoff Vodka",
        image: "../assets/other/LCIN00711.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "vodka"
    },
    {
        name: "Srishti Premium",
        image: "../assets/other/LCIN01849.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "whiskey"
    },
    {
        name: "Angel's Haven Gin",
        image: "../assets/other/LCIN00102.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "gin"
    },
    {
        name: "Lift Up Vodka",
        image: "../assets/other/LCIN01269.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "vodka"
    },
    {
        name: "Solan Black",
        image: "../assets/other/LCIN01835.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "whiskey"
    },
    {
        name: "Captain Morgan Black",
        image: "../assets/other/CAPTAIN-MORGAN-THE-ORIGNAL-DARK-RUM-401.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "rum"
    },
    {
        name: "8 PM",
        image: "../assets/other/1331988_1.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "whiskey"
    },
    {
        name: "Governors Reserve Bold(Red)",
        image: "../assets/other/images (5).jpeg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "whiskey"
    },
    {
        name: "Old Monk Rum",
        image: "../assets/other/LCIN01534.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 550, "375 ML": 300, "180 ML": 160 },
        category: "rum"
    },
    {
        name: "Imperial Red Rum",
        image: "../assets/other/LCIN01023.webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 450, "375 ML": 250, "180 ML": 140 },
        category: "Rum"
    },
    {
        name: "Xpression Vodka",
        image: "../assets/other/download (4).jpeg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 450, "375 ML": 250, "180 ML": 140 },
        category: "vodka"
    },
    {
        name: "McDowell's No.1 Rum",
        image: "../assets/other/Mcdowells-No-1-Celebration-Rum.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 450, "375 ML": 250, "180 ML": 140 },
        category: "rum"
    },
    {
        name: "McDowell's No.1 Whiskey",
        image: "../assets/other/images (6).jpeg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 450, "375 ML": 250, "180 ML": 140 },
        category: "whiskey"
    },
    {
        name: "Imperial Blue Officer's Choice Blue",
        image: "../assets/other/OFFICER'S CHOICE BLUE.png",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 450, "375 ML": 250, "180 ML": 140 },
        category: "whiskey"
    },
    {
        name: "Innate Reserve",
        image: "../assets/other/683acbfa041f0dd169e71ea44fbe7cf2.png",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 450, "375 ML": 250, "180 ML": 140 },
        category: "whiskey"
    },
    {
        name: "Sikkim Rum",
        image: "../assets/other/13d79ead7a50bc78acaba825ca860cf8.jpg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 450, "375 ML": 250, "180 ML": 140 },
        category: "rum"
    },
    {
        name: "Contessa Rum",
        image: "../assets/other/download (5).jpeg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 450, "375 ML": 250, "180 ML": 140 },
        category: "rum"
    },
    {
        name: "Iconic White",
        image: "../assets/other/download (6).jpeg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 450, "375 ML": 250, "180 ML": 140 },
        category: "whiskey"
    },
    {
        name: "Mountain Oak",
        image: "../assets/other/LCIN01472 (1).webp",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 450, "375 ML": 250, "180 ML": 140 },
        category: "whiskey"
    },
    {
        name: "Officer's Choice",
        image: "../assets/other/download (7).jpeg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 350, "375 ML": 200, "180 ML": 120 },
        category: "whiskey"
    },
    {
        name: "Episode Whisky",
        image: "../assets/other/download (8).jpeg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 350, "375 ML": 200, "180 ML": 120 },
        category: "whiskey"
    },
    {
        name: "Episode Rum",
        image: "../assets/other/download (9).jpeg",
        sizes: ["750 ML", "375 ML", "180 ML"],
        prices: { "750 ML": 350, "375 ML": 200, "180 ML": 120 },
        category: "rum"
    },
    // {
    //     name: "Desi",
    //     image: "https://example.com/path/to/hennessy.jpg",
    //     sizes: ["750 ML", "375 ML", "180 ML"],
    //     prices: { "750 ML": 200, "375 ML": 110, "180 ML": 60 },
    //     category: "brandy"
    // },
    // {
    //     name: "Metro Liquor",
    //     image: "https://example.com/path/to/hennessy.jpg",
    //     sizes: ["750 ML", "375 ML", "180 ML"],
    //     prices: { "750 ML": 330, "375 ML": 180, "180 ML": 100 },
    //     category: "brandy"
    // },
    // Imported
    {
        name: "Grants",
        image: "../assets/IFL/GRANTS-DISTINCTION-1332.jpg",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1100, "3 Btl": 3000},
        category: "whiskey"
    },
    {
        name: "Vat 69",
        image: "../assets/IFL/VAT-69-FINEST-SCOTCH-935.jpg",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1100, "3 Btl": 3000},
        category: "whiskey"
    },
    {
        name: "GlenWalk",
        image: "../assets/IFL/THE-GLENWALK-SCOTCH-2676.jpg",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1200, "3 Btl": 3300},
        category: "whiskey"
    },
    {
        name: "Tamerlane",
        image: "../assets/IFL/LCIN01916.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1200, "3 Btl": 3300},
        category: "whiskey"
    },
    {
        name: "Johnnie Walker Red Label 750 Ml",
        image: "../assets/IFL/JOHNNIE-WALKER-RED-LABEL-1220.jpg",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1300, "3 Btl": 3600},
        category: "whiskey"
    },
    {
        name: "Ballantine's Finest",
        image: "../assets/IFL/BALLANTINE-7-YRS-BLENDED-SCOTCH-1895.jpg",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1300, "3 Btl": 3600},
        category: "whiskey"
    },
    {
        name: "Absolute Vodka",
        image: "../assets/IFL/LCIN00040.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1300, "3 Btl": 3600},
        category: "vodka"
    },
    {
        name: "Black & White",
        image: "../assets/IFL/LCIN00254.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1300, "3 Btl": 3600},
        category: "whiskey"
    },
    {
        name: "Famous Grouse",
        image: "../assets/IFL/LCIN01978.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1300, "3 Btl": 3600},
        category: "whiskey"
    },
    {
        name: "Dewar's White Label",
        image: "../assets/IFL/LCIN00632.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1300, "3 Btl": 3600},
        category: "whiskey"
    },
    {
        name: "Gordon Gin",
        image: "../assets/IFL/LCIN00879.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1300, "3 Btl": 3600},
        category: "gin"
    },
    {
        name: "J & B Rare Scotch",
        image: "../assets/IFL/JB-RARE-402.jpg",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1400, "3 Btl": 3600},
        category: "whiskey"
    },
    {
        name: "Beefeater Gin",
        image: "../assets/IFL/LCIN00200.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1400, "3 Btl": 3600},
        category: "gin"
    },
    {
        name: "Absolute Flavoured Vodka",
        image: "../assets/IFL/LCIN00043.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1500, "3 Btl": 4050},
        category: "vodka"
    },
    {
        name: "Mateus Rose",
        image: "../assets/IFL/LCIN01390.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1500, "3 Btl": 4050},
        category: "wine"
    },
    {
        name: "Jim Beam",
        image: "../assets/IFL/LCIN01085.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1800, "3 Btl": 4800},
        category: "whiskey"
    },
    {
        name: "Teacher H/L",
        image: "../assets/IFL/2000185_3_8e23lu3bgoekog0d.jpg",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1800, "3 Btl": 4800},
        category: "whiskey"
    },
    {
        name: "Cutty Shark Ltr",
        image: "../assets/IFL/LCIN00598.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1800, "3 Btl": 4800},
        category: "whiskey"
    },
    {
        name: "Red Label Ltr",
        image: "../assets/IFL/images.jpeg",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1800, "3 Btl": 4800},
        category: "whiskey"
    },
    {
        name: "BushMills Original",
        image: "../assets/IFL/LCIN02176.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1700, "3 Btl": 4800},
        category: "whiskey"
    },
    {
        name: "Tanqueray",
        image: "../assets/IFL/LCIN01919.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1700, "3 Btl": 4800},
        category: "gin"
    },
    {
        name: "Bombay Sapphire Gin",
        image: "../assets/IFL/LCIN00310.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1700, "3 Btl": 4800},
        category: "gin"
    },
    // {
    //     name: "Camino Gold/ Silver",
    //     image: "https://example.com/path/to/hennessy.jpg",
    //     sizes: ["1 Btl", "3 Btl"],
    //     prices: { "1 Btl": 1700, "3 Btl": 4800},
    //     category: "brandy"
    // },
    {
        name: "Jameson Irish Whiskey",
        image: "../assets/IFL/LCIN01071.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1800, "3 Btl": 5100},
        category: "whiskey"
    },
    {
        name: "Johnnie Walker Blonde",
        image: "../assets/IFL/LCIN01040.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1800, "3 Btl": 5100},
        category: "brandy"
    },
    {
        name: "Ballantine's 7 Years",
        image: "../assets/IFL/LCIN00166.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 1800, "3 Btl": 5100},
        category: "whiskey"
    },
    {
        name: "Johnnie Walker Black Label",
        image: "../assets/IFL/LCIN01131.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 2400, "3 Btl": 6600},
        category: "whiskey"
    },
    {
        name: "Chivas Regal 12 Years",
        image: "../assets/IFL/LCIN00515.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 2400, "3 Btl": 6600},
        category: "whiskey"
    },
    {
        name: "Jack Daniels Old No 7",
        image: "../assets/IFL/LCIN01044.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 2400, "3 Btl": 6600},
        category: "whiskey"
    },
    {
        name: "Jack Daniels Fire",
        image: "../assets/IFL/LCIN01043.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 2400, "3 Btl": 6600},
        category: "whiskey"
    },
    {
        name: "Jack Daniels Tennessee Honey",
        image: "../assets/IFL/LCIN01049.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 2400, "3 Btl": 6600},
        category: "whiskey"
    },
    {
        name: "Jack Daniels Tennessee Apple",
        image: "../assets/IFL/LCIN01076.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 2400, "3 Btl": 6600},
        category: "whiskey"
    },
    // {
    //     name: "Jaegermesiter",
    //     image: "https://example.com/path/to/hennessy.jpg",
    //     sizes: ["1 Btl", "3 Btl"],
    //     prices: { "1 Btl": 2400, "3 Btl": 6600},
    //     category: "brandy"
    // },
    {
        name: "Grey Goose Vodka",
        image: "../assets/IFL/LCIN00904.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 2600, "3 Btl": 7200},
        category: "vodka"
    },
    {
        name: "Ciroc Vodka",
        image: "../assets/IFL/LCIN00528.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 2600, "3 Btl": 7200},
        category: "vodka"
    },
    {
        name: "Belvedere Vodka",
        image: "../assets/IFL/LCIN00219.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 2700, "3 Btl": 7500},
        category: "vodka"
    },
    {
        name: "Ardmore",
        image: "../assets/IFL/LCIN01963.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 2800, "3 Btl": 7950},
        category: "whiskey"
    },
    {
        name: "Beluga Noble Vodka",
        image: "../assets/IFL/LCIN00215.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 4700, "3 Btl": 13500},
        category: "vodka"
    },
    {
        name: "Monkey Shoulder",
        image: "../assets/IFL/LCIN01441.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 3000, "3 Btl": 8100},
        category: "whiskey"
    },
    {
        name: "Suntory Toki",
        image: "../assets/IFL/LCIN01901.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 3000, "3 Btl": 8100},
        category: "whiskey"
    },
    {
        name: "Johnnie Walker Double Black",
        image: "../assets/IFL/LCIN01139.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 3000, "3 Btl": 8700},
        category: "whiskey"
    },
    {
        name: "Johnnie Walker Black Label Ltr",
        image: "../assets/IFL/LCIN01134.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 3000, "3 Btl": 8700},
        category: "whiskey"
    },
    {
        name: "Bowmore 12 Yr",
        image: "../assets/IFL/LCIN00334.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 3000, "3 Btl": 8700},
        category: "whiskey"
    },
    {
        name: "The Glenlivet 12 Yr",
        image: "../assets/IFL/LCIN01989.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 3300, "3 Btl": 9300},
        category: "whiskey"
    },
    {
        name: "Glenmorangie The Original 10 Yr",
        image: "../assets/IFL/LCIN00864.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 3300, "3 Btl": 9300},
        category: "whiskey"
    },
    {
        name: "Singleton 12 Yr",
        image: "../assets/IFL/LCIN01806.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 3300, "3 Btl": 9300},
        category: "scotch"
    },
    {
        name: "Glenfiddich 12 Yr",
        image: "../assets/IFL/LCIN01984.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 3500, "3 Btl": 9900},
        category: "whiskey"
    },
    {
        name: "Glenlivet 15 Yr",
        image: "../assets/IFL/LCIN01990.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 6000, "3 Btl": 16800},
        category: "whiskey"
    },
    {
        name: "Glenfiddich 15 Yr",
        image: "../assets/IFL/LCIN01985.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 6000, "3 Btl": 16800},
        category: "whiskey"
    },
    {
        name: "Glenlivet 18 Yr",
        image: "../assets/IFL/LCIN01987.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 9200, "3 Btl": 26400},
        category: "whiskey"
    },
    {
        name: "Glenfiddich 18 Yr",
        image: "../assets/IFL/LCIN00836.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 9200, "3 Btl": 26400},
        category: "whiskey"
    },
    {
        name: "Johnnie Walker Double Black Ltr",
        image: "../assets/IFL/LCIN01139 (1).webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 4200, "3 Btl": 12000},
        category: "whiskey"
    },
    {
        name: "Johnnie Walker Gold Label",
        image: "../assets/IFL/LCIN01140.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 4200, "3 Btl": 12000},
        category: "whiskey"
    },
    {
        name: "Dalwhinnie 15",
        image: "../assets/IFL/LCIN00607.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 4200, "3 Btl": 12000},
        category: "whiskey"
    },
    {
        name: "Chivas Regal 18 Yr",
        image: "../assets/IFL/LCIN00518.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 5000, "3 Btl": 15000},
        category: "whiskey"
    },
    {
        name: "Johnnie Walker Gold Label Ltr",
        image: "../assets/IFL/LCIN01140.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 5400, "3 Btl": 15600},
        category: "whiskey"
    },
    {
        name: "Hendrick Gin",
        image: "../assets/IFL/LCIN00976.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 3200, "3 Btl": 9000},
        category: "gin"
    },
    {
        name: "Roku Gin",
        image: "../assets/IFL/LCIN01689.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 3200, "3 Btl": 9000},
        category: "gin"
    },
    {
        name: "Johnnie Walker 18 Yr",
        image: "../assets/IFL/LCIN01129.webp",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 7200, "3 Btl": 21000},
        category: "whiskey"
    },
    {
        name: "Johnnie Walker Blue Label",
        image: "../assets/IFL/JOHNNIE-WALKER-BLUE-LABEL-SCOTCH-1216.jpg",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 16000, "3 Btl": 46500},
        category: "whiskey"
    },
    {
        name: "Royal Salute 21 Yr",
        image: "../assets/IFL/ROYAL-SALUTE-21-YEARS-SCOTCH-1223.jpg",
        sizes: ["1 Btl", "3 Btl"],
        prices: { "1 Btl": 14000, "3 Btl": 40500},
        category: "whiskey"
    },
    {
        name: "Jacob's Creek",
        image: "../assets/IFL/LCIN01051.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 1100},
        category: "wine"
    },
    {
        name: "Moet & Chandon Brut",
        image: "../assets/IFL/LCIN01432.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 6500},
        category: "champagne"
    },
    {
        name: "Moet & Chandon Rose",
        image: "../assets/IFL/LCIN01431.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 7500},
        category: "champagne"
    },
    {
        name: "Lagavulin 16 Yr",
        image: "../assets/IFL/LCIN01224.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 9500},
        category: "whiskey"
    },
    {
        name: "Singleton 15 Yr",
        image: "../assets/IFL/LCIN01805.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 4500},
        category: "whiskey"
    },
    {
        name: "Singleton 18 Yr",
        image: "../assets/IFL/LCIN01807.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 7500},
        category: "whiskey"
    },
    {
        name: "Don Julio Reposado",
        image: "../assets/IFL/LCIN00661.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 6500},
        category: "wine"
    },
    {
        name: "Don Julio Blanco",
        image: "../assets/IFL/LCIN00660.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 6000},
        category: "tequila"
    },
    {
        name: "Don Julio Anejo",
        image: "../assets/IFL/LCIN00659.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 9000},
        category: "tequilla"
    },
    {
        name: "Talsiker 10 Yr",
        image: "../assets/IFL/LCIN01913.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 3800},
        category: "whiskey"
    },
    {
        name: "Patron Reposado",
        image: "../assets/IFL/LCIN01574.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 5000},
        category: "tequilla"
    },
    // {
    //     name: "Patrons Blanco",
    //     image: "../assets/IFL/GRANTS-DISTINCTION-1332.jpg",
    //     sizes: ["1 Btl"],
    //     prices: { "1 Btl": 4000},
    //     category: "whiskey"
    // },
    {
        name: "Jose Curvo",
        image: "../assets/IFL/LCIN01106.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 2000},
        category: "tequila"
    },
    {
        name: "King Dewid",
        image: "../assets/IFL/LCIN01179.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 600},
        category: "whiskey"
    },
    {
        name: "Kelvin Bridge",
        image: "../assets/IFL/LCIN01164.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 900},
        category: "whiskey"
    },
    {
        name: "Ballantine's 12 Yr",
        image: "../assets/IFL/LCIN00167.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 2200},
        category: "whiskey"
    },
    {
        name: "Jameson Stout",
        image: "../assets/IFL/JAMESON-STOUT-EDITION-WHISKY-1418.jpg",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 2200},
        category: "whiskey"
    },
    {
        name: "Macallan 12 Yr",
        image: "../assets/IFL/LCIN01319.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 7500},
        category: "whiskey"
    },
    {
        name: "Lapproig 10 Yr",
        image: "../assets/IFL/LCIN01229.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 4500},
        category: "whiskey"
    },
    {
        name: "1800 Reposado",
        image: "../assets/IFL/LCIN00010.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 5200},
        category: "tequila"
    },
    {
        name: "1800 Anejo",
        image: "../assets/IFL/LCIN00009.webp",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 5800},
        category: "tequila"
    },
    {
        name: "Don Julio 1942",
        image: "../assets/IFL/DON-JULIO-1942-1130.jpg",
        sizes: ["1 Btl"],
        prices: { "1 Btl": 27000},
        category: "tequila"
    },
];
// Carousel functionality
// function setupCarousel() {
//     const carousel = document.getElementById('carousel');
//     carouselImages.forEach((src, index) => {
//         const img = document.createElement('img');
//         img.src = src;
//         img.className = index === 0 ? 'active' : '';
//         carousel.appendChild(img);
//     });
// }

// function rotateCarousel() {
//     const images = document.querySelectorAll('.carousel img');
//     const activeImage = document.querySelector('.carousel img.active');
//     activeImage.classList.remove('active');
//     const nextImage = activeImage.nextElementSibling || images[0];
//     nextImage.classList.add('active');
// }

// setupCarousel();
// setInterval(rotateCarousel, 3000);

// Search and filter functionality
document.getElementById('searchInput').addEventListener('input', function(e) {
    filterProducts(e.target.value);
});

function filterCategory(category) {
    filterProducts(document.getElementById('searchInput').value, category);
}
const cartModal = document.getElementById('cartModal');
const closeModal = document.querySelector('.close');

closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

function filterProducts(searchTerm, category = 'all') {
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category === 'all' || product.category === category)
    );
    renderProducts(filteredProducts);
}
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">₹${product.prices[product.sizes[0]]}.00</p>
        <div class="size-options">
            ${product.sizes.map(size => `
                <div class="size-option" data-size="${size}">${size}</div>
            `).join('')}
        </div>
        <div class="quantity-control">
            <button class="minus">-</button>
            <span class="quantity">0</span>
            <button class="plus">+</button>
        </div>
        <button class="add-to-cart">Add</button>
    `;

    const sizeOptions = card.querySelectorAll('.size-option');
    const quantityControl = card.querySelector('.quantity-control');
    const priceElement = card.querySelector('.price');
    const addToCartButton = card.querySelector('.add-to-cart');

    sizeOptions.forEach(option => {
        option.addEventListener('click', () => {
            sizeOptions.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            const selectedSize = option.dataset.size;
            priceElement.textContent = `₹${product.prices[selectedSize]}.00`;
            quantityControl.classList.add('visible');
            quantityControl.querySelector('.quantity').textContent = '0';
        });
    });

    const minusButton = card.querySelector('.minus');
    const plusButton = card.querySelector('.plus');
    const quantitySpan = card.querySelector('.quantity');

    minusButton.addEventListener('click', () => updateQuantity(-1));
    plusButton.addEventListener('click', () => updateQuantity(1));

    function updateQuantity(change) {
        let quantity = parseInt(quantitySpan.textContent) + change;
        quantity = Math.max(0, quantity);
        quantitySpan.textContent = quantity;
    }

    addToCartButton.addEventListener('click', () => {
        const selectedSize = card.querySelector('.size-option.selected');
        if (selectedSize) {
            const size = selectedSize.dataset.size;
            const quantity = parseInt(quantitySpan.textContent);
            if (quantity > 0) {
                updateCart(product, quantity, size);
                document.getElementById('viewCart').style.display = 'block';
            }
        } else {
            alert('Please select a size first');
        }
    });

    return card;
}
const cart = {};

function updateCart(product, quantity, size) {
    const key = `${product.name}-${size}`;
    if (quantity > 0) {
        cart[key] = { product, quantity, size };
    } else {
        delete cart[key];
    }
    updateViewCartButton();
}

function updateViewCartButton() {
    const viewCartButton = document.getElementById('viewCart');
    const totalItems = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    viewCartButton.style.display = totalItems > 0 ? 'block' : 'none';
    viewCartButton.textContent = `View Cart (${totalItems})`;
}

function renderProducts(productsToRender) {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    productsToRender.forEach(product => {
        grid.appendChild(createProductCard(product));
    });
}

document.getElementById('viewCart').addEventListener('click', showCart);

function showCart() {
    const cartItems = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    cartItems.innerHTML = '';
    let total = 0;

    for (const key in cart) {
        const item = cart[key];
        const itemTotal = item.product.prices[item.size] * item.quantity;
        total += itemTotal;
        cartItems.innerHTML += `
            <p>${item.product.name} - ${item.size} x ${item.quantity}: ₹${itemTotal}</p>
        `;
    }

    const deliveryFee = 100;
    const platformFee = 10;
    const grandTotal = total + deliveryFee + platformFee;

    cartSummary.innerHTML = `
        <p>Subtotal: ₹${total}</p>
        <p>Delivery Fee: ₹${deliveryFee}</p>
        <p>Platform Fee: ₹${platformFee}</p>
        <h3>Total: ₹${grandTotal}</h3>
        <div class="input-group">
            <input type="tel" id="phoneInput" placeholder="Enter your phone number" pattern="[0-9]{10}" required><br>
            <input type="text" id="locationInput" placeholder="Enter your delivery location" required>
        </div>
    `;

    document.getElementById('cartModal').style.display = 'block';
}

function placeOrder() {
    const phoneNumber = document.getElementById('phoneInput').value;
    const location = document.getElementById('locationInput').value;
    if (!location) {
        alert('Please enter your delivery location');
        return;
    }
    if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }
    let orderDetails = "🛒 *New Order*\n\n";
    orderDetails += "🍺 *Item Details:*\n";
    let subtotal = 0;

    for (const key in cart) {
        const item = cart[key];
        const itemTotal = item.product.prices[item.size] * item.quantity;
        subtotal += itemTotal;
        orderDetails += `▪️ ${item.product.name} - ${item.size}\n   Quantity: ${item.quantity}\n   Price: ₹${item.product.prices[item.size]} × ${item.quantity} = ₹${itemTotal}\n\n`;
    }

    const deliveryFee = 100;
    const platformFee = 10;
    const grandTotal = subtotal + deliveryFee + platformFee;

    orderDetails += "\n💲 *Price Details:*\n";
    orderDetails += `⭐ Subtotal: ₹${subtotal}\n`;
    orderDetails += `⭐ Delivery Fee: ₹${deliveryFee}\n`;
    orderDetails += `⭐ Platform Fee: ₹${platformFee}\n`;
    orderDetails += `⭐ *Total Amount: ₹${grandTotal}*\n\n`;
    
    orderDetails += "📞 *Customer Details:*\n";
    orderDetails += `▪️ Phone: ${phoneNumber}\n`;
    orderDetails += `▪️ Address: ${location}\n\n`;
    
    orderDetails += "💳 Payment Method: Cash on Delivery";

    const encodedOrder = encodeURIComponent(orderDetails);
    const whatsappNumber = "8610363310"; // Replace with your actual WhatsApp number
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedOrder}`, '_blank');
    document.getElementById('cartModal').style.display = 'none';

    // Clear the cart (optional - uncomment if you want to clear the cart after order)
    // cart = {};
    // updateViewCartButton();    
}

renderProducts(products);