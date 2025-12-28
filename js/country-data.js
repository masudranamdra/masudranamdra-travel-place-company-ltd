// Country Data
const countries = [
    {
        id: 'bangladesh',
        name: ' Bangladesh',
        image: 'image/Bangladesh Image/m024t0284_h_flag_bangladesh_02dec22.jpg',
        description: 'Golden Bengal, a celebration of green',
        details: {
            history: 'The history of Bangladesh is ancient and rich with heritage. In early times, the region was known for its fertile land nourished by the Ganges, Brahmaputra, and Meghna rivers, and it flourished under the Maurya, Gupta, Pala, and Sena dynasties in education, culture, and trade. Later, Muslim rule contributed greatly to the development of architecture, literature, and administration in Bengal. After the Battle of Plassey in 1757, Bengal came under British colonial rule and faced long periods of exploitation and inequality. In 1947, the partition of India made East Bengal a part of Pakistan, but political, economic, and linguistic discrimination led to strong resistance among the Bengali people. This struggle culminated in the Language Movement of 1952, the mass uprising of 1969, and finally the Liberation War of 1971, through which Bangladesh achieved independence and established its identity as a sovereign nation.',
            culture: 'The culture of Bangladesh is rich, diverse, and deeply rooted in human values. Its foundations lie in rural life, the riverine environment, and a heritage spanning thousands of years. The Bengali language, folk music, Baul songs, Bhatiali, traditional embroidery, Nakshi Kantha, and rural crafts make Bangladeshi culture unique. Festivals like Pohela Boishakh, International Mother Language Day, Eid, Durga Puja, and various local celebrations bring joy and unity to people’s lives. Hospitality, compassion, and strong social bonds are integral to the cultural identity of Bangladesh. The harmonious blend of tradition and modernity makes the culture vibrant and a source of national pride.',
            heritage: 'Bangladesh, a riverine country, is world-renowned for its rich natural and cultural heritage, making it a unique destination for travelers. In the southeastern part of the country lies Cox’s Bazar, the world’s longest natural sea beach, stretching over 120 kilometers. The golden sands, clear blue waters, and breathtaking sunsets make it a paradise for tourists. Historically, Cox’s Bazar was significant during the reign of local rulers in Chittagong and served as a hub for fishing and trade. Nearby destinations such as Inani Beach, Himchhari, Maheshkhali, and Ukhiya offer additional attractions. Visitors can enjoy swimming, boating, local seafood, and traditional handicraft shopping along the beach.In the southwest, the Sundarbans are the largest mangrove forest in the world and the habitat of the majestic Royal Bengal Tiger. The Sundarbans’ rivers, diverse wildlife, and dense forests provide tourists with an unparalleled nature experience. Historically, the Sundarbans were also used as trade routes and settlements along the river islands. Visitors can explore the forest by boat, observe wildlife, and enjoy the pristine scenery.The northeastern Sylhet region is another popular tourist destination, famous for Jaflong, Bichanakandi, Shahparir Dip, and countless tea gardens. Jaflong’s hilly rivers and scenic landscapes captivate visitors, while the centuries-old tea plantations offer insight into the region’s colonial and Mughal-era history. Tourists can experience tea tasting, walks through lush gardens, and the serene village lifestyle.The Chittagong Hill Tracts, including Bandarban and Rangamati, provide travelers with spectacular hills, waterfalls,and lakes.                                                                                                                                                                                                                                                                                                                                                                              Attractions like Nilgiri, Shahin Jharn, Ruma, Shailkupa, Kaptai Lake, and Lake Side areas in Rangamati offer a combination of natural beauty and cultural richness. The region has a rich history, with indigenous tribes maintaining their traditional lifestyles and ancient hill forts reflecting the past. Hiking, trekking, and boating are popular activities for visitors here.The capital city Dhaka is historically significant and culturally vibrant. Lalbagh Fort, Ahsan Manzil, Shahjahan Mosque, Jagannath Temple, and Old Dhaka attract tourists with their architectural and historical value. The city’s narrow streets, bustling markets, and handicraft shops allow travelers to experience local culture up close. Near Dhaka, Sonargaon, the ancient capital of Bengal, offers historic boat ghats, the Palashi River, and traditional handicrafts, connecting visitors with the region’s rich past.In northern Bangladesh, Rajshahi and Dinajpur offer a mix of history and archaeology. Rajshahi is home to the historic Battle of Plassey site, while Dinajpur has the Mahasthangarh ruins, Nilphamari hills, and Himalayan foothills. Travelers can explore ancient temples, mosques, and archaeological remains. Chapainawabganj, Kurigram, and Gaibandha showcase rural landscapes, rivers, and small hills, providing peaceful countryside experiences. The haor regions in the north-east, with seasonal wetlands and villages, offer unique eco-tourism experiences.Barisal and the haor areas of Bangladesh are also significant for tourists.                                                                                                                                                                                                                                                  The Barisal rivers, Padma River, Kirtipur, and surrounding wetlands provide opportunities for boating, fishing, and observing rural life and local festivals. In addition, Mymensingh, Netrokona, Kishoreganj, and Sunamganj offer waterfalls, small hills, wetlands, and rivers that enhance the natural charm of these regions.Bangladesh’s tourist destinations do more than showcase natural beauty—they connect visitors with the nation’s history, culture, language, religion, cuisine, and lifestyle. Each site has its own unique history, heritage, natural beauty, and rural traditions, establishing the country as a recognized international tourism destination. The combination of rivers, hills, beaches, lakes, wetlands, waterfalls, forests, and village life makes tourism in Bangladesh special and distinctive. Visitors not only enjoy traveling but also experience the warm hospitality, cultural richness, and historical legacy of the country. In this way, Bangladesh presents a dreamlike and educational experience, where nature, history, and culture come together to offer a comprehensive journey for travelers.',
            touristSpots: [
                {
                    name: 'Cox’s Bazar:',
                    description: 'The world’s longest natural sandy sea beach.',
                    image: 'image/Bangladesh image/Cox-Bazer.jpg'
                },
                {
                    name: 'Sundarbans:',
                    description: 'A UNESCO World Heritage Site and the largest mangrove forest in the world.',
                    image: 'image/Bangladesh image/sun-banner-3.webp'
                },
                {
                    name: 'Sajek Valley:',
                    description: 'A unique destination in the clouds atop the hills.',
                    image: 'image/Bangladesh image/sajek vale.jpg'
                },
                {
                    name: 'Saint Martin’s Island:',
                    description: 'The only coral island in Bangladesh.',
                    image: 'image/Bangladesh image/Saint_Martins_Island_with_boats_in_foreground.jpg'
                },
                {
                    name: 'Rangamati:',
                    description: 'Famous for the Kaptai Lake and its natural hilly beauty.',
                    image: 'image/Bangladesh image/Rangamati.jpg'
                }, 
                {
                    name: 'Bandarban:',
                    description: 'Home to stunning hilly spots like Nilgiri, Nilrongo, and Boga Lake.',
                    image: 'image/Bangladesh image/Bandorban.webp'
                }, 
                {
                    name: 'Sylhet (Jaflong & Bichanakandi):',
                    description: 'Popular for tea gardens and hill waterfalls',
                    image: 'image/Bangladesh image/bichanakandi.webp'
                }, 
                {
                    name: 'Srimangal:',
                    description: 'Known as the tea capital of Banglades',
                    image: 'image/Bangladesh image/aerial-view-beautiful-sky-road-top-mountains-with-green-jungle-nan-province-thailand.jpg'
                }, 
                {
                    name: 'Kuakata:',
                    description: 'Where you can witness both sunrise and sunset over the sea.',
                    image: 'image/Bangladesh image/Kuakata_beach (1).jpg'
                }, 
                {
                    name: 'Sixty Dome Mosque (Bagerhat):',
                    description: 'A UNESCO-recognized historical archaeological monument.',
                    image: 'image/Bangladesh image/sixty-dome-60-gombuj-mosque-bagerhat-02.jpg'
                },    
            ]
        }
    },
    {
        id: 'pakistan',
        name: ' Pakistan',
        image: 'image/Pakistan Image/flag-pakistan.jpg',
        description: 'The sixth most populous country in the world',
        details: {
            history: 'The history of Pakistan is closely linked to the political changes of the Indian subcontinent and the movement for a separate Muslim homeland. In ancient times, the region that is now Pakistan was home to the Indus Valley Civilization, one of the world’s earliest urban civilizations. Over the centuries, the area was ruled by various powers, including the Aryans, Persians, Greeks, Kushans, and later Muslim dynasties such as the Ghaznavids and the Mughals. After a long period of British colonial rule, the demand for a separate state for Muslims grew under the leadership of the All-India Muslim League. As a result, Pakistan was created in 1947 through the partition of British India. Since independence, Pakistan has experienced periods of political instability, military rule, and constitutional challenges, shaping its ongoing national development.',
            culture: 'Pakistan’s culture is rich, diverse, and deeply rooted in history. It reflects a unique blend of South Asian, Central Asian, and Middle Eastern influences. The country is home to various ethnic groups such as Punjabi, Sindhi, Pashtun, Baloch, and Kashmiri, each contributing its own traditions, languages, and customs. Urdu is the national language, while regional languages play a vital role in cultural identity. Traditional clothing, especially the shalwar kameez, is widely worn and often decorated with intricate embroidery. Music holds a special place in Pakistani culture, with qawwali and ghazals being particularly popular around the world. Legendary artists like Nusrat Fateh Ali Khan helped introduce this musical heritage internationally. Folk dances such as Bhangra, Attan, and Jhumar add color and energy to festivals and celebrations. Pakistani cuisine is also an important cultural element, known for flavorful dishes like biryani, nihari, kebabs, and haleem. Hospitality is a core value in Pakistani society, where guests are treated with great respect and warmth. Religious festivals such as Eid-ul-Fitr and Eid-ul-Adha bring families and communities together. Architecture, including mosques, shrines, and historical monuments, reflects the nation’s cultural depth. Overall, Pakistan’s culture is a harmonious combination of tradition, faith, diversity, and hospitality.',
            heritage: 'Pakistan’s Heritage is rich, diverse, and deeply rooted in history. It reflects the legacy of ancient civilizations such as the Indus Valley Civilization, along with strong Islamic and regional cultural influences. Historical sites like Mohenjo-daro, Taxila, Lahore Fort, and the Badshahi Mosque showcase Pakistan’s architectural and archaeological heritage. Traditional music, folk dances, handicrafts, languages, and festivals also form an important part of the nation’s cultural heritage. Together, these elements preserve Pakistan’s identity and connect its past with the present.',
            touristSpots: [
                {
                    name: 'Hunza Valley',
                    description: 'Famous for its towering mountains, snow-capped peaks, clear rivers, and serene environment, it is considered one of the most stunning valleys in the world.',
                    image: 'image/Pakistan Image/Hunza Valley.jpg'
                },
                {
                    name: 'Swat Valley',
                    description: 'Known as the “Switzerland of Pakistan,” it captivates visitors with its green hills, waterfalls, rivers, and picturesque landscapes.',
                    image: 'image/Pakistan Image/Swat Valley.jpg'
                }
            ]
        }
    },
    {
        id: 'japan',
        name: 'Japan',
        image: 'image/japan image/flag-japan.jpg',
        description: 'Land of the Rising Sun',
        details: {
            History: 'The History of Japan is rich, ancient, and complex. Human settlements in Japan date back to around 3000 BCE. In the early period, communities of hunters and farmers lived across the islands. The Jomon period (c. 14,000–300 BCE) is characterized by the use of pottery and stone tools, reflecting the lifestyle of the people. This was followed by the Yayoi period (c. 300 BCE–300 CE), which saw the introduction of metal tools, rice cultivation, and more organized social structures.👁️‍🗨️Buddhism was introduced to Japan in the 6th century, greatly influencing art, architecture, and culture. During the medieval period, the rise of the samurai led to the establishment of the shogunate system, under which Japan was governed militarily for nearly 700 years. In the 16th century, European traders arrived, but Japan later isolated itself from foreign influence under the Sakoku policy for over two centuries.👁️‍🗨️💦In 1868, the Meiji Restoration transformed Japan into a modern state, promoting industrialization, a modern military, and a new education system. During the 19th and 20th centuries, Japan became an imperial power in Asia, culminating in its involvement in World War II. After 1945, Japan adopted a new constitution and emerged as a peaceful nation focused on industry, technology, and education.Today, Japan is a leading global nation in technology, culture, and economy. Its history reflects a journey from ancient civilizations to a modern state, shaped by culture, religion, warfare, and peace.',
            Culture: 'Japanese culture is a unique blend of ancient traditions and modern influences. Shinto and Buddhist beliefs strongly shape their society. Traditional practices like tea ceremonies, wearing kimonos, Kagura dances, and cherry blossom festivals reflect their rich heritage. Japanese cuisine, including sushi, ramen, and sashimi, is famous worldwide. Additionally, anime, manga, and video games have made Japanese pop culture globally popular. Japanese society values discipline, politeness, and punctuality. Natural beauty, such as Mount Fuji, gardens, and lakes, is an integral part of life. Traditional architecture, including temples and Japanese houses, is internationally recognized. Overall, Japanese culture is rich, diverse, and perfectly balances tradition with modernity.',
            Heritage: 'Japan has a rich and diverse heritage that reflects thousands of years of history, culture, and tradition. The country’s heritage is deeply influenced by Shintoism and Buddhism, which shape its festivals, rituals, and daily life. Traditional practices such as tea ceremonies, wearing kimonos, calligraphy, and ikebana (flower arranging) are important parts of Japanese cultural identity. Japan is also known for its historic architecture, including Shinto shrines, Buddhist temples, castles, and traditional wooden houses called machiya. UNESCO has recognized several Japanese sites as World Heritage, including Himeji Castle, Itsukushima Shrine, and the Historic Villages of Shirakawa-go. Festivals like Gion Matsuri, cherry blossom celebrations (Hanami), and New Year rituals preserve centuries-old traditions. Japanese gardens, with their carefully designed landscapes and ponds, reflect harmony with nature and aesthetic beauty. Traditional performing arts such as Noh, Kabuki, and Bunraku puppetry showcase the country’s artistic heritage. Japan’s heritage also extends to craftsmanship, including pottery, sword making, and textile arts. Despite modernization, the Japanese people take pride in preserving their intangible heritage, such as folklore, music, and traditional etiquette. Overall, Japan’s heritage represents a perfect balance between ancient traditions and modern life, making it one of the most fascinating cultural landscapes in the world.',
            touristSpots: [
                {
                    name: 'Mount Fuji',
                    description: 'Japan’s highest mountain and an iconic symbol of the country. Its scenic surroundings, including lakes and forests, make it breathtakingly beautiful',
                    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
                },
                {
                    name: 'Kyoto',
                    description: 'The cultural capital of ancient Japan, famous for its Shinto shrines, Buddhist temples, traditional gardens, and people wearing kimonos.',
                    image: 'https://images.unsplash.com/photo-1505567745926-ba890a6f5fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
                }
            ]
        }
    },
    {
        id: 'switzerland',
        name: 'Switzerland',
        image: 'image/Switzerland image/Switzerland_Wrinkled_Flag.png',
        description: 'The country of the Alps, located in the heart of Europe',
        details: {
            history: 'Switzerland has a long and unique history, characterized by its neutrality and independence. The country became officially confederated in 1291 when three regions joined together for mutual defense, which laid the foundation of modern Switzerland. Over centuries, Switzerland avoided involvement in major European wars, establishing itself as a neutral state. The nation played a key role in international diplomacy and is home to many organizations like the Red Cross. Switzerland also developed a strong tradition of direct democracy, allowing citizens to participate actively in decision-making. Its historical cities, fortresses, and old towns reflect a rich past. Swiss history is also marked by the development of banking, watchmaking, and mountain tourism. Despite being a small country, Switzerland has maintained a stable political system and a strong economy throughout history. Its ability to balance tradition and modernity makes Swiss history unique and inspiring.',
            culture: 'Swiss culture is diverse and influenced by its four national languages: German, French, Italian, and Romansh. This multilingualism gives Switzerland a rich cultural variety. Traditional Swiss music, folklore, and dances are still celebrated in festivals and local events. Switzerland is famous for its culinary specialties like cheese fondue, raclette, and chocolate. The country has a strong tradition in arts, literature, and architecture, with museums, galleries, and theaters in almost every city. Alpine sports, especially skiing and mountaineering, are also a significant part of Swiss life. Swiss people value punctuality, organization, and high-quality work. Festivals such as Sechseläuten and Fête de l’Escalade reflect the local customs. Overall, Swiss culture is a harmonious blend of tradition and modernity, shaped by its geography and multilingual heritage.',
            heritage: 'Switzerland’s heritage is a mix of natural beauty and historical achievements. The Swiss Alps, lakes, and valleys form a stunning natural landscape that is central to its heritage. UNESCO has recognized many Swiss sites, including the Old City of Bern, the Lavaux Vineyard Terraces, and the Jungfrau-Aletsch region. Traditional Swiss craftsmanship, such as watchmaking, chocolate production, and wood carving, reflects the country’s dedication to quality and precision. Historic castles, monasteries, and churches preserve architectural heritage. Swiss festivals, folklore, and local customs maintain intangible cultural heritage. Hiking trails, mountain villages, and alpine farms represent a lifestyle connected to nature. Switzerland’s heritage emphasizes harmony with the environment while valuing history, art, and community traditions.',
            touristSpots: [
                {
                    name: 'Matterhorn',
                    description: ' The iconic peak of the Swiss Alps, internationally famous for its stunning scenery and skiing opportunities. ',
                    image: 'https://images.unsplash.com/photo-1519482816300-149c5d3e16b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
                },
                {
                    name: 'Lucerne',
                    description: 'A historic city known for its ancient bridges, beautiful lake, and surrounding mountain landscapes.',
                    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
                }
            ]
        }
    },
    {
        id: 'dubai',
        name: 'Dubai',
        image: 'image/Dubai image/Dubai.jpeg',
        description: 'Symbol of modernity',
        details: {
            history: 'Dubai’s history is relatively recent but fascinating. Originally a small fishing and trading village on the Arabian Gulf, it transformed rapidly in the 20th century with the discovery of oil in 1966. This discovery brought wealth and development, turning Dubai into a global business and tourism hub. The city’s history also reflects Bedouin traditions and maritime trade, which shaped its social and economic structure. Dubai has grown from a desert town into a modern metropolis with iconic skyscrapers, luxurious hotels, and world-class infrastructure. Its journey from humble beginnings to a leading international city is truly remarkable.',
            culture: 'Dubai’s culture is a unique blend of traditional Arab customs and modern cosmopolitan influences. Islamic traditions shape daily life, architecture, and festivals. At the same time, Dubai is home to people from around the world, giving it a multicultural environment. Traditional music, dance, and cuisine, including dishes like shawarma and biryani, coexist with international art, fashion, and entertainment. Festivals such as Ramadan, Eid, and the Dubai Shopping Festival showcase the city’s cultural diversity. Dubai’s culture reflects a balance between respecting heritage and embracing modernity.',
            heritage: 'Dubai’s heritage highlights its roots and historical identity. Traditional souks (markets), wind towers (Barjeel), and the Dubai Museum preserve its architectural and cultural past. Heritage sites like Al Fahidi Historic District and Al Shindagha demonstrate how people lived before the city’s rapid modernization. Bedouin traditions, pearl diving, and maritime trade are also key parts of Dubai’s intangible heritage. Even as a global city, Dubai emphasizes preserving its history through museums, cultural centers, and festivals. Its heritage serves as a link between the past and the future, reminding residents and visitors of its origins.',
            touristSpots: [
                {
                    name: 'Burj Khalifa',
                    description: 'The tallest building in the world, offering breathtaking city views from its observation decks.',
                    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
                },
                {
                    name: 'Palm Jumeirah',
                    description: 'A man-made island shaped like a palm tree, famous for luxury resorts and beaches.',
                    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
                }
            ]
        }
    },
    {
        id: 'malaysia',
        name: 'Malaysia',
        image: 'image/Malaysia image/malaysia.jpg',
        description: 'Asias Tiger Economy',
        details: {
            history: 'Malaysia has a rich and diverse history shaped by indigenous kingdoms, colonial powers, and trade. The Malay Sultanates ruled the region for centuries, maintaining local culture and governance. During the 16th to 20th centuries, Portugal, the Netherlands, and Britain colonized parts of Malaysia, influencing its architecture, legal systems, and trade. Malaysia gained independence from British rule in 1957, forming a constitutional monarchy. Its history reflects a blend of indigenous traditions, foreign influences, and modern development. Strategic trade ports like Malacca made Malaysia an important hub in Southeast Asia.',
            culture: 'Malaysia’s culture is a harmonious blend of Malay, Chinese, Indian, and indigenous traditions. Festivals such as Hari Raya, Chinese New Year, and Deepavali showcase this multicultural identity. Traditional music, dance, and clothing, including batik and songket, are widely celebrated. Malaysian cuisine, including nasi lemak, laksa, and roti canai, reflects cultural diversity. Islam is the dominant religion, but freedom of religion is practiced, creating a culturally tolerant society. Modern urban life coexists with traditional villages and practices, showing Malaysia’s balance of modernity and tradition.',
            heritage: 'Malaysia’s heritage includes both tangible and intangible elements. Historic cities like Malacca and George Town are UNESCO World Heritage Sites, showcasing colonial architecture, temples, and mosques. Traditional crafts such as batik, songket weaving, and wood carving highlight Malaysian craftsmanship. Indigenous cultural practices, folklore, and festivals preserve the intangible heritage. Natural heritage, including rainforests, national parks, and islands, adds to the country’s identity. Malaysia’s heritage reflects its history, multicultural society, and respect for nature.',
            touristSpots: [
                {
                    name: 'Petronas Twin Towers',
                    description: 'Iconic twin skyscrapers in Kuala Lumpur, famous for observation decks and city views.',
                    image: 'https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
                },
                {
                    name: 'Langkawi Islands',
                    description: 'A group of beautiful islands with beaches, rainforests, and luxury resorts.',
                    image: 'https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
                }
            ]
        }
    },
    {
        id: 'china',
        name: 'China',
        image: 'image/china image/ch.jpg',
        description: 'The oldest civilization in the world',
        details: {
            history: 'China has one of the oldest and richest histories in the world, spanning thousands of years. Ancient dynasties such as the Shang, Zhou, Qin, and Han laid the foundations of Chinese civilization. The Great Wall of China, built over several dynasties, protected the country from invasions and is a symbol of its historical strength. China has also made significant contributions to science, technology, philosophy, and trade, including the Silk Road. The country experienced both unity and fragmentation over time, with imperial rule shaping its social, political, and cultural systems. Modern China emerged in the 20th century, undergoing political revolutions and rapid economic growth, making it a global power today.',
            culture: 'Chinese culture is a blend of tradition and modernity, deeply influenced by Confucianism, Taoism, and Buddhism. Festivals like Chinese New Year, Mid-Autumn Festival, and Dragon Boat Festival highlight its cultural richness. Traditional arts such as calligraphy, painting, martial arts, and music are highly valued. Chinese cuisine, including dumplings, Peking duck, and noodles, reflects regional diversity. Language, literature, philosophy, and family values are central to daily life. Modern urban centers coexist with ancient towns, showing the balance of heritage and progress.',
            heritage: 'China’s heritage includes both tangible and intangible elements. UNESCO has recognized many sites like the Great Wall, Forbidden City, Terracotta Army, and the Ancient City of Pingyao. Traditional crafts such as porcelain, silk weaving, and jade carving highlight Chinese artistry. Folk music, opera, and traditional medicine preserve intangible cultural heritage. Natural landscapes, including the Yangtze River, Guilin hills, and Huangshan mountains, are also part of China’s identity. China’s heritage reflects its long history, cultural diversity, and respect for tradition while embracing modern development.',
            touristSpots: [
                {
                    name: 'Great Wall of China',
                    description: 'A monumental wall stretching thousands of kilometers, symbolizing China’s historical strength and engineering skill.',
                    image: 'https://images.unsplash.com/photo-1512529904539-2034f9e1c8b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
                },
                {
                    name: 'Forbidden City',
                    description: 'A massive imperial palace in Beijing, showcasing ancient Chinese architecture and royal history.',
                    image: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
                }
            ]
        }
    },
    {
        id: 'america',
        name: 'Saudi Arabia',
        image: 'image/Saudi image/saudi-arabia--20250729213050.jpg',
        description: 'One of the largest Muslim countries in the world',
        details: {
            history: 'The history of Saudi Arabia is closely linked to one of the oldest regions in the world. This area forms part of the Arabian Peninsula and was inhabited by various tribes in ancient times. The desert landscapes, high mountains, and vast sandy plains influenced the way of life of its people. Ancient Arabs primarily engaged in agriculture, livestock rearing, and limited desert trade. Tribal governance and Bedouin lifestyle were central to the social structure.Before the advent of Islam in the 7th century, the region followed diverse religious practices. The city of Mecca was a major trade hub, housing various idols and sacred sites, including the Kaaba. With the arrival of Islam, Saudi Arabia gained significance not only as a spiritual center but also politically, socially, and economically on the global stage. Prophet Muhammad (PBUH) was born in Mecca, and through his teachings, the principles of Islam were established. The revelation of the Quran and adherence to the Sunnah instilled justice, equality, and moral values in society.After the emergence of Islam, Mecca and Medina became the two holiest cities for Muslims worldwide. Through the Hijrah, Prophet Muhammad (PBUH) established an Islamic state in Medina, which became the foundation for the spread of Islam across the Arabian Peninsula. During the Rashidun, Umayyad, and Abbasid Caliphates, the region’s influence extended internationally.In 1932, the modern Kingdom of Saudi Arabia was founded, unifying the country and giving birth to contemporary Saudi Arabia. King Abdul Aziz Al Saud led this unification, bringing stability, national unity, and international recognition. Religious institutions, educational systems, and economic development progressed together. The discovery of oil in the 20th century further positioned Saudi Arabia as a key player in global trade and economy.Today, Saudi Arabia takes pride in its history. Millions of Muslims visit Mecca and Medina annually for Hajj and Umrah, connecting a tradition over 1,400 years old with the present. The history of Saudi Arabia is not only political but deeply spiritual, cultural, and social. It serves as a source of inspiration for Muslims and a center of historical knowledge for the world.',
            culture: 'The culture of Saudi Arabia is deeply rooted in Islamic principles and Arab heritage. Daily life, social behavior, clothing, and customs are largely guided by the Quran and Sunnah. Hospitality, generosity, and respect for elders are highly valued in Saudi society, reflecting the core characteristics of Arab-Islamic civilization.One of the main features of Saudi culture is traditional attire and customs. Women typically wear the abaya, reflecting modesty and cultural identity, while men wear the thobe, suitable for the desert climate and Arab heritage. Social gatherings and celebrations strictly observe religious and social norms. Major festivals like Eid al-Fitr and Eid al-Adha are celebrated with devotion and generosity, bringing families, friends, and communities together for prayer, charity, and communal bonding.Food and hospitality hold special significance in Saudi culture. Sharing dates, coffee, and traditional meals strengthens friendship and hospitality among guests and families. Cafes and restaurants blend tradition with modernity, offering both traditional dishes and international cuisine to visitors and locals alike.In contemporary Saudi Arabia, urban life and technology coexist with rural lifestyles, desert experiences, and Bedouin traditions. Camel racing, falconry, coffee and date ceremonies, fairs, and festivals collectively preserve the cultural identity rooted in Islam and Arab heritage.Religious education and spirituality form another important aspect of Saudi culture. The holy cities of Mecca and Medina are not only pilgrimage destinations but also centers of learning. Quranic schools, religious classes, and Islamic universities are essential to Saudi cultural life, shaping the new generation into responsible, faith-driven citizens.',
            heritage: 'Saudi Arabia’s heritage is deeply connected to the holiest sites in the Muslim world. Mecca and Medina not only hold spiritual significance but also serve as the center of Islamic history and civilization. Masjid al-Haram and the Kaaba are the heart of Islam, where millions of Muslims perform Hajj and Umrah annually. Masjid an-Nabawi in Medina, the residence and center of religious activity of Prophet Muhammad (PBUH), is historically renowned. These sacred places function as the center of religious, cultural, and social heritage.Ancient Saudi cities such as Diriyah and Al-Ula represent historical and architectural heritage, reflecting the country’s political and social history. Diriyah, the birthplace of the Saudi royal family, showcases ancient forts, stone houses, and traditional markets. Al-Ula, with its Nabatean architecture, rock carvings, and statues, highlights the ancient art and construction skills of Saudi Arabia.Intangible and living cultural heritage is also an integral part of Saudi identity. Storytelling, poetry, Quranic memorization, classical music, Arab dance, and local festivals have been preserved from generation to generation. Bedouin traditions, desert lifestyles, and events like camel racing make Saudi culture unique and special. These elements of heritage enhance spiritual and cultural consciousness among Muslims.Natural heritage also forms a crucial aspect of Saudi Arabia’s identity. Expansive deserts, quiet oases, mountainous regions, and desert towns tell stories of ancient ways of life. These sites represent not only natural beauty but also human endurance, resilience, and communal harmony.Saudi Arabia’s heritage is unique for Muslim pilgrims. Every year, performing Hajj and Umrah allows Muslims to experience spiritual rejuvenation and connect with 1,400 years of Islamic heritage. The Kaaba, holy mosques, Saudi cities, and warm desert landscapes collectively form a center for spiritual, cultural, and social education. The heritage of Saudi Arabia links the past with the present and provides every visitor with both classical and spiritual experiences.',
            touristSpots: [
                {
                    name: 'Masjid al-Haram',
                    description: 'The holiest site in Islam, surrounding the Kaaba, where millions of Muslims perform Hajj and Umrah.',
                    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
                },
                {
                    name: 'Masjid an-Nabawi',
                    description: 'The Prophet’s Mosque, a sacred place for prayer, learning, and spiritual reflection.',
                    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80'
                }
            ]
        }
    }
];

// Weather Data (Mock)
const weatherData = {
    bangladesh: {
        temp: '৩০°C',
        condition: 'আংশিক মেঘলা',
        humidity: '৭৫%',
        wind: '১০ কিমি/ঘণ্টা'
    },
    pakistan: {
        temp: '৩৫°C',
        condition: 'রৌদ্রজ্জ্বল',
        humidity: '৪০%',
        wind: '১৫ কিমি/ঘণ্টা'
    },
    japan: {
        temp: '২২°C',
        condition: 'হালকা বৃষ্টি',
        humidity: '৮৫%',
        wind: '২০ কিমি/ঘণ্টা'
    },
    switzerland: {
        temp: '১৫°C',
        condition: 'তুষারপাত',
        humidity: '৬০%',
        wind: '২৫ কিমি/ঘণ্টা'
    },
    dubai: {
        temp: '৪০°C',
        condition: 'রৌদ্রজ্জ্বল',
        humidity: '৩০%',
        wind: '১২ কিমি/ঘণ্টা'
    },
    malaysia: {
        temp: '৩২°C',
        condition: 'বৃষ্টি',
        humidity: '৯০%',
        wind: '১০ কিমি/ঘণ্টা'
    },
    china: {
        temp: '২৫°C',
        condition: 'কুয়াশা',
        humidity: '৮০%',
        wind: '৮ কিমি/ঘণ্টা'
    },
    america: {
        temp: '২০°C',
        condition: 'পরিষ্কার',
        humidity: '৫৫%',
        wind: '১৮ কিমি/ঘণ্টা'
    }
};

// Get country by ID
function getCountryById(id) {
    return countries.find(country => country.id === id);
}

// Get weather by country
function getWeatherByCountry(countryId) {
    return weatherData[countryId] || {
        temp: 'N/A',
        condition: 'তথ্য পাওয়া যায়নি',
        humidity: 'N/A',
        wind: 'N/A'
    };
}

// Export data
window.countryData = {
    countries,
    weatherData,
    getCountryById,
    getWeatherByCountry
};