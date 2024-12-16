
const products1 = [
    {
        id: 1,
        name: "Dior Sauvage",
        detail: "A Closer Look at the Innovation Inside Dior's New Cologne",
        description: "Dior Sauvage is a bold and captivating men's fragrance that embodies the spirit of untamed masculinity. Launched in 2015, it combines raw, fresh, and spicy notes to create an intense yet sophisticated scent. The top notes of Calabrian bergamot and pepper give it an immediate burst of citrusy brightness and spice, while Sichuan pepper and lavender in the heart bring depth and complexity. The base notes of ambroxan, patchouli, and vetiver add earthy, woody undertones, enhancing the fragrance’s rugged appeal. With its long-lasting, powerful projection, Dior Sauvage has become a modern classic, appealing to those seeking a fragrance that is both invigorating and refined.",
        prices: 132,
        imgSrc: "../src/img/productImg/p1.jpg"
    },
    {
        id: 2,
        name: "Bleu De Chanel",
        detail: "BLEU DE CHANEL Parfum Spray - 3.4 FL. OZ. | CHANEL",
        description: "**Bleu de Chanel** is a sophisticated and timeless fragrance for men, launched in 2010 by the renowned French luxury brand Chanel. Created by perfumer Jacques Polge, this fragrance is known for its fresh, woody, and aromatic character, making it a versatile scent suitable for both day and night wear. Bleu de Chanel opens with invigorating notes of citrus, such as grapefruit and lemon, combined with a touch of mint and pink pepper, creating a bright and energizing first impression. The heart of the fragrance is more complex, featuring aromatic notes of ginger, nutmeg, and jasmine, which add depth and warmth to the composition. In the base, rich woody notes of sandalwood, cedar, and patchouli mix with incense and amber, giving the fragrance a grounded, masculine finish. Bleu de Chanel is often praised for its elegance, balance, and long-lasting wear, making it a favorite among those who appreciate refined, modern scents. The sleek, minimalist bottle reflects the fragrance's modern sophistication and timeless appeal.",
        prices: 118,
        imgSrc: "../src/img/productImg/p2(new1).jpg"
    },
    {
        id: 3,
        name: "Stronger With You",
        detail: "Emporio Armani Stronger with You Fragrance - Armani Beauty",
        description: "**Stronger With You** is a warm and spicy fragrance for men, introduced by Giorgio Armani in 2017. This scent exudes an intense, passionate, and modern character, designed for the confident and charismatic man. The fragrance opens with fresh and aromatic top notes of pink pepper, mint, and violet leaves, offering an initial burst of freshness. As it evolves, the heart reveals a blend of sweet and spicy notes, such as cinnamon and roasted chestnut, which give the fragrance its unique and inviting warmth. The base notes feature vanilla, amber, and suede, adding a creamy, sensual depth to the composition. The combination of these elements makes **Stronger With You** a balanced and enduring scent, perfect for evening wear or colder weather. With its distinctive warmth and seductive appeal, it has become a popular choice for those looking for a fragrance that is both bold and comforting. The sleek, dark bottle reflects the fragrance’s modern and sophisticated nature.",
        prices: 115,
        imgSrc: "../src/img/productImg/p3.jpg"
    },
    {
        id: 4,
        name: "Versace",
        detail: "VERSACE Perfume - Versace Fragrance For Personal Care Products Price",
        description: "Versace is a prestigious Italian luxury brand known for its high-end fashion, accessories, and fragrances. Founded in 1978 by Gianni Versace, the brand has become synonymous with bold, glamorous designs and cutting-edge style. Versace’s fragrance collection is equally iconic, offering a range of scents that embody sophistication, opulence, and sensuality.",
        prices: 99.99,
        imgSrc: "../src/img/productImg/p4.jpg"
    },
    {
        id: 9,
        name: "Afnan 9pm",
        detail: "Buy Afnan 9pm Eau De Parfum Spray For Men 100ml",
        description: "Afnan 9PM is an alluring and sophisticated fragrance designed for those who seek elegance with a touch of mystery. This scent opens with a captivating blend of fruity and floral notes, featuring hints of bergamot and peach, which transition smoothly into a heart of rose and jasmine. The base is warm and inviting, combining sweet vanilla, musk, and woody undertones, creating a balanced and long-lasting trail. Ideal for evening wear, Afnan 9PM exudes an aura of confidence and charm, making it a perfect choice for special occasions or a night out. Its rich complexity makes it both memorable and timeless.",
        prices: 35,
        imgSrc: "../src/img/productImg/p9.jpg"
    },
    {
        id: 10,
        name: "Creed Aventus",
        detail: "Buy Creed Aventus Eau De Parfum Spray For Men 100ml",
        description: "Creed Aventus is a powerful and dynamic fragrance that exudes confidence and success. This scent features a blend of fruity notes like pineapple and blackcurrant, followed by birch and patchouli in the heart. The base is rich and warm with musk, oakmoss, and vanilla, creating a bold, sophisticated, and unforgettable fragrance.",
        prices: 400,
        imgSrc: "../src/img/productImg/p10.jpg"
    },
    {
        id: 11,
        name: "Armaf Club De Nuit Intense Man",
        detail: "Buy Armaf Club De Nuit Intense Man Eau De Parfum For Men 105ml",
        description: "Armaf Club De Nuit Intense Man is a powerful and invigorating fragrance that offers a bold, smoky scent with citrus, blackcurrant, and apple notes. The heart is a blend of rose, birch, and jasmine, while the base contains vanilla, amber, and musk. It is often considered a clone of Creed Aventus.",
        prices: 35,
        imgSrc: "../src/img/productImg/p11.jpg"
    },
    {
        id: 12,
        name: "Jean Paul Gaultier Le Male",
        detail: "Buy Jean Paul Gaultier Le Male Eau De Toilette For Men 125ml",
        description: "Jean Paul Gaultier Le Male is a timeless, aromatic fragrance that blends freshness and sensuality. It opens with invigorating notes of mint, lavender, and bergamot, followed by a heart of cinnamon, cumin, and orange blossom. The base is rich with vanilla, amber, and sandalwood, making it perfect for evening wear or a romantic date.",
        prices: 90,
        imgSrc: "../src/img/productImg/p12.jpg"
    },
    {
        id: 13,
        name: "Paco Rabanne Invictus",
        detail: "Buy Paco Rabanne Invictus Eau De Toilette For Men 100ml",
        description: "Paco Rabanne Invictus is a bold and sporty fragrance, capturing the spirit of victory. With top notes of grapefruit, bay leaf, and mandarin orange, the scent evolves into a heart of jasmine and guaiac wood, before finishing with ambergris, patchouli, and oakmoss.",
        prices: 80,
        imgSrc: "../src/img/productImg/p13.jpg"
    },
    {
        id: 14,
        name: "Abercrombie & Fitch Fierce",
        detail: "Buy Abercrombie & Fitch Fierce Eau De Toilette For Men 100ml",
        description: "Abercrombie & Fitch Fierce is a fresh and vibrant fragrance that exudes youthful energy and confidence. It opens with crisp notes of fir, lemon, and orange, followed by a heart of jasmine, rose, and lily of the valley. The base notes of musk, sandalwood, and oakmoss provide a warm, earthy finish, making it a perfect scent for casual, everyday wear.",
        prices: 70,
        imgSrc: "../src/img/productImg/p14.jpg"
    },
    {
        id: 15,
        name: "Armani Code Homme",
        detail: "Shop Armani Code Homme Eau De Parfum for Men - 100ml",
        description: "Armani Code Homme is a seductive and mysterious fragrance, offering a captivating blend of citrus, leather, and tobacco. The top notes feature zesty lemon and bergamot, leading into a heart of olive blossom and guaiac wood. The base notes include deep leather, tonka bean, and a touch of tobacco, making this fragrance rich, intense, and perfect for evening wear or special occasions.",
        prices: 120,
        imgSrc: "../src/img/productImg/p15.jpg"
    },
    {
        id: 16,
        name: "Tom Ford Noir Extreme",
        detail: "Buy Tom Ford Noir Extreme Eau De Parfum For Men 100ml",
        description: "Tom Ford Noir Extreme is an intense, warm fragrance with rich and exotic notes. It opens with a spicy blend of cardamom, saffron, and nutmeg, while the heart features rose, jasmine, and orange blossom. The base is luxurious with amber, vanilla, and sandalwood, making it perfect for evening wear.",
        prices: 160,
        imgSrc: "../src/img/productImg/p16.jpg"
    },
    {
        id: 17,
        name: "Yves Saint Laurent La Nuit De L'Homme",
        detail: "Buy Yves Saint Laurent La Nuit De L'Homme Eau De Toilette For Men 100ml",
        description: "Yves Saint Laurent La Nuit De L'Homme is a sensual, woody-spicy fragrance that opens with cardamom, bergamot, and cedar. The heart is composed of lavender and violet, while the base notes include vetiver, caraway, and cumin. It is perfect for evening wear and date nights.",
        prices: 90,
        imgSrc: "../src/img/productImg/p17.jpg"
    },
    {
        id: 18,
        name: "Hugo Boss Bottled",
        detail: "Buy Hugo Boss Bottled Eau De Toilette For Men 100ml",
        description: "Hugo Boss Bottled is a fresh, fruity, and spicy fragrance that opens with apple and citrus notes, leading to a heart of cinnamon, cloves, and geranium. The base is composed of sandalwood, vetiver, and vanilla. It is a versatile scent suitable for both daytime and evening wear.",
        prices: 75,
        imgSrc: "../src/img/productImg/p18.jpg"
    },
    {
        id: 19,
        name: "Aventus Cologne by Creed",
        detail: "Buy Aventus Cologne by Creed Eau De Parfum For Men 100ml",
        description: "Aventus Cologne by Creed is a citrus, fresh fragrance with notes of ginger, mandarin, and sandalwood. It combines a smooth, woody base with the energetic freshness of citrus, creating a modern, vibrant fragrance.",
        prices: 375,
        imgSrc: "../src/img/productImg/p19.jpg"
    },
    {
        id: 20,
        name: "Armaf Derby Club House",
        detail: "Buy Armaf Derby Club House Eau De Parfum For Men 105ml",
        description: "Armaf Derby Club House is a sophisticated, woody fragrance with a blend of spicy and citrus notes. It opens with lime, bergamot, and lemon, followed by a spicy heart of lavender, geranium, and cinnamon, and finishes with vanilla, musk, and amber. It is often considered a clone of Creed Aventus.",
        prices: 30,
        imgSrc: "../src/img/productImg/p20.jpg"
    },
    {
        id: 21,
        name: "Tom Ford Tobacco Vanille",
        detail: "Buy Tom Ford Tobacco Vanille Eau De Parfum For Men 100ml",
        description: "Tom Ford Tobacco Vanille is a warm, spicy fragrance that combines tobacco leaf and vanilla with a rich, smoky base. The heart features spicy notes of ginger, cinnamon, and clove, while the base includes dried fruit, tonka bean, and tobacco. It is perfect for winter and evening wear.",
        prices: 225,
        imgSrc: "../src/img/productImg/p21.jpg"
    },
    {
        id: 22,
        name: "Montblanc Explorer",
        detail: "Buy Montblanc Explorer Eau De Parfum For Men 100ml",
        description: "Montblanc Explorer is a fresh and adventurous fragrance with notes of bergamot, patchouli, and vetiver. It opens with a burst of citrus and spices, leading into a heart of leather and woody notes, and finishing with a deep base of ambroxan and cacao. It evokes the spirit of exploration.",
        prices: 65,
        imgSrc: "../src/img/productImg/p22.jpg"
    },
    {
        id: 23,
        name: "Davidoff Cool Water",
        detail: "Buy Davidoff Cool Water Eau De Toilette For Men 125ml",
        description: "Davidoff Cool Water is a fresh and aquatic fragrance with notes of mint, green nuances, and lavender. The heart contains jasmine and sandalwood, while the base features musk, amber, and tobacco. It is a classic fragrance that offers a crisp and invigorating scent.",
        prices: 45,
        imgSrc: "../src/img/productImg/p23.jpg"
    },
    {
        id: 34,
        name: "Burberry Mr. Burberry Indigo",
        detail: "Buy Burberry Mr. Burberry Indigo Eau De Toilette for Men - 100ml",
        description: "Burberry Mr. Burberry Indigo is a fresh, vibrant fragrance that combines the zest of lemon and grapefruit with aromatic rosemary and green violet leaf. The heart reveals a mix of oakmoss and driftwood, while the base features a blend of amber and musk, offering a clean, crisp scent. This fragrance is ideal for the modern, energetic man, perfect for casual wear or daytime activities.",
        prices: 85,
        imgSrc: "../src/img/productImg/p34.jpg"
    },
    {
        id: 35,
        name: "Proud Of You",
        detail: "Shop Proud Of You Eau De Parfum for Men - 100ml",
        description: "Proud Of You is a dynamic, bold fragrance that opens with vibrant top notes of fresh bergamot and spicy ginger. The heart features aromatic lavender and a touch of nutmeg, while the base is a sophisticated blend of cedarwood, amber, and leather. This fragrance is designed for a man who exudes confidence and strength, perfect for both day-to-day wear and evening outings.",
        prices: 35,
        imgSrc: "../src/img/productImg/p35.jpg"
    }
]

const products2 = [
    {
        id: 5,
        name: "Miss Dior",
        detail: "Dior Miss Dior Parfum (2024) 35 / 50 / 80 ml Parfume ",
        description: "Miss Dior is a classic and iconic fragrance that embodies elegance, romance, and femininity. Launched by Christian Dior, this perfume opens with a fresh and zesty burst of citrus notes, including Italian mandarin and orange, which are perfectly balanced by floral heart notes of graceful jasmine, rose, and peony. The scent then evolves into a warm and sensual base of patchouli, sandalwood, and vanilla, adding depth and richness. Miss Dior is known for its timeless appeal, offering a sophisticated, delicate, and captivating scent that evokes a sense of luxury, making it an ideal choice for any occasion, from casual outings to evening affairs.",
        prices: 129.99,
        imgSrc: "../src/img/productImg/p5.jpg"
    },
    {
        id: 6,
        name: "Valentino Donna",
        detail: "VALENTINO Donna Born In Roma EDP Spray 100ml - 3.4oz Indonesia",
        description: "Valentino Donna is a luxurious and refined fragrance that exudes elegance and sophistication. Launched by the Italian fashion house, this perfume opens with a delicate blend of bright bergamot and sweet damask rose, offering a fresh and floral introduction. The heart of the fragrance reveals a rich combination of iris, leather, and spicy notes, adding depth and complexity. The base is warm and sensual, with hints of vanilla, patchouli, and musk, creating a soft yet lasting impression. Valentino Donna is a timeless scent that embodies the essence of modern femininity, making it the perfect choice for those seeking a bold, yet graceful, fragrance for both day and night.",
        prices: 79.99,
        imgSrc: "../src/img/productImg/p6.jpg"
    },
    {
        id: 7,
        name: "COCO Chanel",
        detail: "Chanel Coco Women's Eau de Parfum Spray - 3.4 Fl. Oz. (100ml)",
        description: "Coco Chanel is a timeless and iconic fragrance that embodies the essence of sophistication, elegance, and bold femininity. Created by the legendary designer, Coco Chanel, this perfume opens with a vibrant blend of citrus notes, including orange and mandarin, that give way to a rich floral heart of jasmine, rose, and ylang-ylang. The fragrance deepens into a luxurious base of patchouli, vetiver, vanilla, and sandalwood, offering warmth and sensuality. Coco Chanel is known for its complex and bold character, exuding a sense of confidence and mystery. Perfect for evening wear or special occasions, this fragrance remains a symbol of classic luxury and enduring allure.",
        prices: 571.60,
        imgSrc: "../src/img/productImg/p7.jpg"
    },
    {
        id: 8,
        name: "Versace Bright Crystal",
        detail: "Versace Bright Crystal by Versace for Women 6.7 oz Eau de Toilette Spray",
        description: "Versace Bright Crystal is a fresh, vibrant, and feminine fragrance that embodies elegance and sensuality. This perfume opens with a sparkling blend of juicy pomegranate and refreshing yuzu, creating an immediate sense of brightness and energy. The heart reveals a delicate floral bouquet of peony, magnolia, and lotus flower, adding a soft, romantic touch. The fragrance settles into a warm and subtle base of amber, musk, and acajou wood, providing a smooth and sophisticated finish. Versace Bright Crystal is perfect for those who enjoy light, airy scents with a touch of luxury, making it an ideal choice for daily wear or special occasions.",
        prices: 79.45,
        imgSrc: "../src/img/productImg/p8.jpg"
    },
    {
        id: 24,
        name: "Chanel No. 5",
        detail: "Buy Chanel No. 5 Eau De Parfum Spray For Women 100ml",
        description: "Chanel No. 5 is a timeless and iconic fragrance known for its sophisticated and elegant scent. It opens with fresh top notes of aldehydes and neroli, leading into a heart of jasmine, rose, and iris. The base is warm and luxurious with sandalwood, vanilla, and amber, making it a perfect scent for formal occasions.",
        prices: 135,
        imgSrc: "../src/img/productImg/p24.jpg"
    },
    {
        id: 25,
        name: "Dior J'adore",
        detail: "Buy Dior J'adore Eau De Parfum For Women 100ml",
        description: "Dior J'adore is a luxurious, floral fragrance that radiates femininity. It features a bouquet of flowers, including ylang-ylang, Damascus rose, and jasmine, complemented by fruity notes of pear and melon. The base consists of sandalwood and musk, creating a rich, elegant scent ideal for evening wear.",
        prices: 125,
        imgSrc: "../src/img/productImg/p25.jpg"
    },
    {
        id: 26,
        name: "Tom Ford Black Orchid",
        detail: "Buy Tom Ford Black Orchid Eau De Parfum For Women 100ml",
        description: "Tom Ford Black Orchid is a bold and exotic fragrance with an intoxicating blend of floral, fruity, and spicy notes. The fragrance opens with black truffle, ylang-ylang, and bergamot, followed by a heart of black orchid, spice, and fruit. The base is rich with patchouli, vanilla, and incense, making it ideal for evening wear.",
        prices: 190,
        imgSrc: "../src/img/productImg/p26.jpg"
    },
    {
        id: 27,
        name: "Yves Saint Laurent Mon Paris",
        detail: "Buy Yves Saint Laurent Mon Paris Eau De Parfum For Women 90ml",
        description: "Yves Saint Laurent Mon Paris is a romantic, fruity-floral fragrance that captures the essence of Parisian love. It features top notes of strawberry and pear, followed by a heart of jasmine, peony, and orange blossom. The base is composed of patchouli and white musk, creating an elegant and sensual scent.",
        prices: 115,
        imgSrc: "../src/img/productImg/p27.jpg"
    },
    {
        id: 28,
        name: "Chloé Eau De Parfum",
        detail: "Buy Chloé Eau De Parfum For Women 75ml",
        description: "Chloé Eau De Parfum is a sophisticated, floral fragrance that exudes femininity and elegance. It opens with fresh and floral notes of peony and lychee, leading into a heart of rose, lily of the valley, and magnolia. The base includes warm and woody notes of amber, cedarwood, and honey, making it a versatile scent suitable for both day and night wear.",
        prices: 120,
        imgSrc: "../src/img/productImg/p28.jpg"
    },
    {
        id: 29,
        name: "Armaf Club De Nuit Intense Women",
        detail: "Buy Armaf Club De Nuit Intense Women Eau De Parfum For Women 105ml",
        description: "Armaf Club De Nuit Intense Women is a bold and seductive fragrance that offers a similar scent profile to the more expensive originals. It opens with citrus notes of lemon and black currant, leading into a heart of rose, jasmine, and orchid. The base includes vanilla, amber, and musk, offering a sweet and sensual dry-down.",
        prices: 40,
        imgSrc: "../src/img/productImg/p29.jpg"
    },
    {
        id: 30,
        name: "Dior Hypnotic Poison",
        detail: "Buy Dior Hypnotic Poison Eau De Toilette For Women 100ml",
        description: "Dior Hypnotic Poison is a seductive and mysterious fragrance with a sweet, spicy, and warm profile. It opens with almond and caraway, followed by a heart of jasmine and orange blossom. The base is rich with vanilla, sandalwood, and musk, making it a perfect fragrance for evening and special occasions.",
        prices: 120,
        imgSrc: "../src/img/productImg/p30.jpg"
    },
    {
        id: 31,
        name: "La Vie Est Belle by Lancôme",
        detail: "Buy La Vie Est Belle by Lancôme Eau De Parfum For Women 100ml",
        description: "La Vie Est Belle by Lancôme is a sweet, floral fragrance that evokes the beauty of life. It opens with notes of black currant and pear, followed by a heart of iris, jasmine, and orange blossom. The base is a gourmand mix of praline, tonka bean, and vanilla, making it a warm and inviting fragrance.",
        prices: 105,
        imgSrc: "../src/img/productImg/p31.jpg"
    },
    {
        id: 32,
        name: "Armani Si",
        detail: "Buy Armani Si Eau De Parfum For Women 100ml",
        description: "Armani Si is a modern, sophisticated fragrance with a blend of fruity, floral, and woody notes. It opens with blackcurrant nectar, followed by a heart of rose and freesia. The base consists of vanilla, patchouli, and oakmoss, creating a balanced and elegant scent for everyday wear.",
        prices: 115,
        imgSrc: "../src/img/productImg/p32.jpg"
    },
    {
        id: 33,
        name: "Viktor & Rolf Flowerbomb",
        detail: "Buy Viktor & Rolf Flowerbomb Eau De Parfum For Women 100ml",
        description: "Viktor & Rolf Flowerbomb is an explosive, floral fragrance that captures the essence of femininity. It features top notes of bergamot, green tea, and freesia, followed by a heart of jasmine, orange blossom, and orchid. The base is composed of patchouli, vanilla, and musk, creating a rich and intoxicating scent.",
        prices: 145,
        imgSrc: "../src/img/productImg/p33.jpg"
    }
]

export default {
    products1,
    products2
}