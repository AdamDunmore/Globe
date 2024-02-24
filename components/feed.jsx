import { Component, useEffect, useState } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

import apiKey from "../data/apiKey";

import Card from './card.jsx'

function Feed() {
    const [items, setItems] = useState([]);

    // useEffect(() => {
    //     const fetchData = async (inputQuery, inputLang, inputCountry) => {
    //         inputQuery = "Pizza"
    //         inputLang = ""
    //         inputCountry = ""

    //         requestData = {
    //             query: inputQuery,
    //             lang: inputLang,
    //             key: apiKey,
    //             country: inputCountry,
    //             bannedDomains: "dailymail.co.uk"
    //         }
        
    //         languages = {
    //             English : 'en'
    //         }
        
    //         link = `https://newsdata.io/api/1/news?apikey=${apiKey}`
    //         link += `&q=${requestData.query}` //Adds Search
    //         link += `&language=${languages.English}`
    //         // link += `&country=${requestData.country}` //Adds country
    //         // link += `&excludedomain=${requestData.bannedDomains}` //Bans domains
        
    //         await fetch(new Request(link))
    //             .then((data) => data.json())
    //             .then(json => {setItems(json.results); console.log(items);})
    //             .catch(err => console.log(err))
    //     };fetchData();

        
    //     // Return an empty function
    //     return () => {};
    // }, [])

    useEffect(() => {
        setItems([{"ai_region": "ONLY AVAILABLE IN CORPORATE PLANS", "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "article_id": "8ad80111dd41ef5de3301c8f2152dfb4", "category": ["top"], "content": "ONLY AVAILABLE IN PAID PLANS", "country": ["united states of america"], "creator": ["Cassandra Seale"], "description": "These products are skyrocketing in popularity, because they solve pretty universal problems efficiently and for the right price.", "image_url": "https://imgix.bustle.com/uploads/image/2024/2/22/80cae64b-3af3-42dc-ae94-944a8ba57d10-the-60-coolest-things-that-are-skyrocketing-in-popularity-on-amazon-this-year.jpg?w=500&fit=max&auto=format%2Ccompress", "keywords": ["affiliate", "hidden", "affiliate-social"], "language": "english", "link": "https://www.mic.com/shopping/coolest-things-that-are-skyrocketing-in-popularity-on-amazon-this-year", "pubDate": "2024-02-24 03:15:24", "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "source_icon": "https://i.bytvi.com/domain_icons/mic.png", "source_id": "mic", "source_priority": 10276, "source_url": "https://www.mic.com", "title": "The 60 coolest things that are skyrocketing in popularity on Amazon this year", "video_url": null}, {"ai_region": "ONLY AVAILABLE IN CORPORATE PLANS", "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "article_id": "1fc0b012f94f9939880e9e67f9374357", "category": ["entertainment"], "content": "ONLY AVAILABLE IN PAID PLANS", "country": ["united states of america"], "creator": ["cheyenne"], "description": "Tax season is upon us! The time of year where we get a nice little reminder of all the hard work we’ve put in during 2023. We woke up and clocked in, worked those long Mondays and thought to ourselves, “one down, four to go”. And we did the really hard part: we paid our […] The post 52 Amazon Gadgets You Need To Spend Your Tax Return On appeared first on 22 Words.", "image_url": "https://twentytwowords.com/wp-content/uploads/2024/02/now-300x171.jpg", "keywords": ["home"], "language": "english", "link": "https://twentytwowords.com/52-amazon-gadgets-you-need-to-spend-your-tax-return-on/", "pubDate": "2024-02-24 03:04:48", "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "source_icon": "https://i.bytvi.com/domain_icons/twentytwowords.png", "source_id": "twentytwowords", "source_priority": 44987, "source_url": "https://twentytwowords.com", "title": "52 Amazon Gadgets You Need To Spend Your Tax Return On", "video_url": null}, {"ai_region": "ONLY AVAILABLE IN CORPORATE PLANS", "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "article_id": "ce66b7adcbfc138de0b77cf4388a3ee8", "category": ["top"], "content": "ONLY AVAILABLE IN PAID PLANS", "country": ["united states of america"], "creator": ["Eric Webb"], "description": "You would think that ordering from a fast food restaurant isn’t that hard. But if you talked to a fast food worker, you’d know better. TikTok creator Maya (@aa.mayaaaaaaaa) regularly posts content about the quirks of working at Taco Bell to more than 6,000 followers. Last month, she uploaded a viral video about working the drive-thru that had viewers rushing to the comments to commiserate. The video has almost 3 million views and more than 371,000 likes. “Hi, what can I get for you?” Maya says into a drive-thru headset in the video skit. The unseen “customer” orders a No. 10. Maya asks what they’d like for the drink that comes with the meal. “Um, I don’t want the drink. I just want the burrito,” the customer replies. “So, you don’t want the combo then?” Maya asks. “No, I want the combo, just the burrito by itself,” the customer says. The video ends with Maya beset by comic frustration. Viewers really felt Maya’s pain. One commenter wrote, “or they’ll say not the combo then end up ordering a combo separately.” Another viewer replied, “Nah if they do that they getting charged for that all separately (I do this all the time).” Someone else replied, “really depends on the person for me. i call it stupids fee.” “As an ex [Taco Bell] employee this is so real man,” another person wrote. “I work at McDonald’s and this drives me Insane,” a comment read. “This was me today at work at [Chick-fil-A]. I guess everybody doesn’t have common sense,” one viewer commented. Maya replied, “Working in fast food makes you realize how stupid people can be.” Several commenters posted their own versions of frustrating customer service interactions: “‘do you want me to make that a combo?’ ‘no i just want the sub, chips, and drink.’” Another variation: “‘Anything else for you today?’ ‘Yes’ …… silence ‘okay what can I get for you’ ‘nothing that’s everything.’” @aa.mayaaaaaaaa #fyp #fastfood #tacobell #relatable ♬ original sound - Maya ❤️‍🔥 “I’ll ask if they want the combo and they’ll be like ‘no just the sandwich’ they get to the window and be like e ‘where my drink’ huhhhhh,” a viewer chimed in. One commenter wrote, “the worst is when fast food employees visit other fast food places, and do this.” “The way people used to test my sanity. Working fast food is not for the weak,” someone else commented. “At my old job, this lady asked for a cheese pizza with pepperoni on it so I had said ‘a pepperoni pizza ma’am?’ She said no a cheese pizza with pep,” one viewer wrote. Some commenters came with encouragement: “be strong queen we have all been there with those type of people.” The Daily Dot reached out to Maya via TikTok and Taco Bell via email. TikTok has become a forum for fast food workers to share their most vexing customer interactions. One worker said a customer parked in the drive-thru for 20 minutes to eat her breakfast. And a McDonald’s drive-thru worker complained about customers who ask for sauce at the window instead of during their order. Sign up to receive the Daily Dot’s Internet Insider newsletter for urgent news from the frontline of online. The post ‘This is so real man’: Taco Bell worker drags customers who keep making this mistake when ordering a combo appeared first on The Daily Dot.", "image_url": "https://uploads.dailydot.com/2024/02/Tacobell-combo.jpg?auto=compress&fm=pjpg", "keywords": ["trending", "apple news feed", "drive-thru", "fast food", "labor", "samsung news feed", "taco bell", "tiktok"], "language": "english", "link": "https://www.dailydot.com/news/taco-bell-drive-thru-combo/", "pubDate": "2024-02-24 03:01:25", "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "source_icon": "https://i.bytvi.com/domain_icons/dailydot.png", "source_id": "dailydot", "source_priority": 3320, "source_url": "https://www.dailydot.com", "title": "‘This is so real man’: Taco Bell worker drags customers who keep making this mistake when ordering a combo", "video_url": null}, {"ai_region": "ONLY AVAILABLE IN CORPORATE PLANS", "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "article_id": "9f258a6686cd43da4ce34f656a7e1abb", "category": ["top"], "content": "ONLY AVAILABLE IN PAID PLANS", "country": ["india"], "creator": ["Saumya Agrawal"], "description": "Varsha’s daughter, a Class 4 student, selflessly assisted a specially-abled child by being her reader/writer during exams. Varsha shared this heartwarming story on social media, highlighting the challenges faced by differently-abled children and the importance of inclusive education. Check out viral thread below!", "image_url": "https://images.news9live.com/wp-content/uploads/2024/02/Class-4-girl-helps-specially-abled-child-give-exams.png", "keywords": ["viral"], "language": "english", "link": "https://www.news9live.com/viral-news/class-4-girl-helps-specially-abled-child-give-exams-kind-gesture-wins-hearts-2448091", "pubDate": "2024-02-24 02:51:00", "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "source_icon": "https://i.bytvi.com/domain_icons/news9live.png", "source_id": "news9live", "source_priority": 193096, "source_url": "https://www.news9live.com", "title": "Class 4 girl helps specially-abled child give exams, kind gesture wins hearts", "video_url": null}, {"ai_region": "ONLY AVAILABLE IN CORPORATE PLANS", "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "article_id": "1492f6a2c17c8cf042f892026437fb2c", "category": ["top"], "content": "ONLY AVAILABLE IN PAID PLANS", "country": ["united states of america"], "creator": ["Victor Valley News Group"], "description": "VICTORVILLE, Calif. (VVNG.com) – The growing trend of business closures in the Victor Valley region persists with the latest announcement that the Carl’s Jr. restaurant, located at 14503 7TH ST in Victorville, has closed its doors due to underperformance, making it the third business to shutter this week alone. This development follows a series of …", "image_url": "https://i0.wp.com/www.vvng.com/wp-content/uploads/2024/02/CARLS-JR-7TH-STREET-CLOSED.png?fit=1024%2C647&ssl=1", "keywords": ["all news", "featured", "victorville news", "7th street", "business closing", "business closures", "carl's jr", "victorville"], "language": "english", "link": "https://www.vvng.com/victor-valley-business-closures-continue-as-carls-jr-on-7th-street-shuts-down/", "pubDate": "2024-02-24 02:24:18", "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "source_icon": "https://i.bytvi.com/domain_icons/vvng.png", "source_id": "vvng", "source_priority": 34500, "source_url": "http://www.vvng.com", "title": "Victor Valley Business Closures Continue as Carl’s Jr. on 7th Street Shuts Down", "video_url": null}, {"ai_region": "ONLY AVAILABLE IN CORPORATE PLANS", "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "article_id": "62be86f2ac9054a832aa3988426ea587", "category": ["top"], "content": "ONLY AVAILABLE IN PAID PLANS", "country": ["united states of america"], "creator": ["Yasmine Singh"], "description": "Everything on this list is designed to make your home so much better without breaking the bank.", "image_url": "https://imgix.bustle.com/uploads/image/2024/2/23/f7cffada-57d2-4cdb-b7e8-45145268b93a-60-weird-things-that-make-your-home-so-much-better-for-under-30.jpg?w=500&fit=max&auto=format%2Ccompress", "keywords": ["affiliate", "hidden", "affiliate-social"], "language": "english", "link": "https://www.inverse.com/shopping/weird-things-that-make-your-home-so-much-better-for-under-30", "pubDate": "2024-02-24 02:00:24", "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "source_icon": "https://i.bytvi.com/domain_icons/inverse.png", "source_id": "inverse", "source_priority": 1679, "source_url": "https://www.inverse.com", "title": "60 Weird Things That Make Your Home So Much Better for Under $30", "video_url": null}, {"ai_region": "ONLY AVAILABLE IN CORPORATE PLANS", "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "article_id": "a1869d655fe27d7a3124150e3ec24cf3", "category": ["business"], "content": "ONLY AVAILABLE IN PAID PLANS", "country": ["pakistan"], "creator": ["none@none.com (Zia Ul Islam Zuberi)"], "description": "Karachi is home to two of the busiest ports of Pakistan, the Karachi Port and Port Qasim, it is also the largest city of Pakistan with a population of roughly 20.3 million. What interests me is the Karachi’s coastline. The whole of Pakistan has a 1050-long coast line of which 250 km falls in the Sindh province. Out of this, Karachi has a 70km long coastline. For all intents and purposes Karachi is a city by the sea but it is very hard to discover this glaring fact by ordinary visitors as unlike other cities by the sea, Karachi has none of the distinctive signage that you see in other coastal towns. There are no distinctive seaside food outlets with imaginative names such as I found in other cities like The Catcher’s Cove, Oceanic Delights, Seaside Feast, The Seafood Shack, SaltwaterBistro, The Clamshell, etc. It is not that there is any dearth of space for putting up these signs or opening outlets that provide quality sea food. For as long as I can remember the road from downtown Karachi and its suburbs to seaside spots like Sands Pit and Hawkesbay is a long and winding one but it has failed to attract any high quality sea food places and the only hospitality the shopkeepers offer are in the form of crates of cold drinks which can be obtained after a deposit. Even in the city of Karachi at prominent places and especially outside five-star hotels there are hardly any bill boards inviting our visitors to go either sailing from the nearby port of Keamari or to spend a day at the beach. With the advent of social media there is some activity online but not just enough to place Karachi as a seaside fun town with top-notch seafood restaurants and seaside entertainment in the same league as Singapore, Hong Kong or other cities by the sea. In Hong Kong, for example, there is the Jumbo restaurant. This is on a ship in the sea and you have to have prior reservations which entitle you to a boat ride that takes you to this attractive ship that serves mouthwatering delicacies at premium prices. In a clever move the management of this famous restaurant has also arranged for your photoshoot while you await your dinner. Patrons can get dressed up like Chinese emperors from the past and get their pictures taken. The outfits are provided by the management. For a price of course. Another question that comes to my mind is why are we so shy to promote our city? A popular sign in many seaside cities is “Welcome to Paradise”. Yes I know we have our shortcomings and maybe not eligible for such a caption but why can’t we improve and justify such slogans for our beloved city of Karachi. As a start we can start providing basic facilities on the beach. In all seaside facilities there are stands from where you can hire necessary stuff like towels, caps, etc., and buy lotions, creams and other necessary items. What is stopping concerned authorities from creating fancy stands at the beach and renting them out to use the money earned for more development at our beaches. Now that the sea front at Seaview beach in Clifton has not only been extended but improved this could be an ideal place for providing these stands with seaside utilities. What surprises me again is the absence of catchy names and attractive eateries at this newly developed Seaview extension, which has the same old mundane snack joints, pizza outlets and rather rundown tea and cold drink outlets. The few new high class restaurants also have routine names that have no association with their location. Buffet restaurants, for example, are a dime a dozen in this city but some place located in the middle of the prime sea front property can come up with a more attractive name that is related to its seaside location. I have observed that certain signs have sprung up in the city with such captions as “Karachi. City of Cricket”, “Karachi and Houston twin cities”, etc. No signs that I have come across indicate our presence by the sea. Maybe it is time to reconsider and launch an entirely new campaign targeting what is most important and making it the central theme: Karachi by the sea. Copyright Business Recorder, 2024", "image_url": "https://i.brecorder.com/large/2024/02/65d942f524ed3.jpg", "keywords": ["opinion"], "language": "english", "link": "https://www.brecorder.com/news/40290457/karachi-by-the-sea", "pubDate": "2024-02-24 01:56:00", "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "source_icon": "https://i.bytvi.com/domain_icons/brecorder.png", "source_id": "brecorder", "source_priority": 384715, "source_url": "https://www.brecorder.com", "title": "Karachi by the sea", "video_url": null}, {"ai_region": "ONLY AVAILABLE IN CORPORATE PLANS", "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "article_id": "72e6805339d8a3510673025ce9d744bd", "category": ["health"], "content": "ONLY AVAILABLE IN PAID PLANS", "country": ["new zealand"], "creator": ["Jaime Lyth, Chris Marriner"], "description": "The Auckland worker who went viral for his ingenious sun protection at mahi speaks.", "image_url": "https://www.nzherald.co.nz/resizer/1frqXvjTqw43GTvaBMnydjg3H4w=/300x300/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/UIIVJGVGPVDIPPYRBRLIZCMGFE.jpg", "keywords": null, "language": "english", "link": "https://www.nzherald.co.nz/lifestyle/slice-of-heaven-auckland-traffic-control-worker-reveals-why-he-wore-pizza-box-on-his-head/PIEUQO3G65HVDCOJN3MIZE7CSM/", "pubDate": "2024-02-24 01:45:25", "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "source_icon": null, "source_id": "nzherald", "source_priority": 7971, "source_url": "https://www.nzherald.co.nz", "title": "Slice of heaven: Auckland traffic control worker reveals why he wore pizza box on his head", "video_url": null}, {"ai_region": "ONLY AVAILABLE IN CORPORATE PLANS", "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "article_id": "9b0c3a27e474bb6ad19256a6b78e1ed0", "category": ["top"], "content": "ONLY AVAILABLE IN PAID PLANS", "country": ["canada"], "creator": ["Michael Riley, Local Journalism Initiative Reporter The Bancroft Times"], "description": "Whitney Public School is having a Spaghetti Dinner fundraiser with a silent auction on March 2 from 4 p.m. to 7 p.m. at St. Martin of Tours Catholic School’s lower hall at 41 Post Street in Whitney. The cost is…", "image_url": null, "keywords": null, "language": "english", "link": "https://www.therecord.com/news/canada/whitney-public-school-fundraiser-coming-march-2/article_7126e791-aef6-5a22-a489-18bfff5c09bd.html", "pubDate": "2024-02-24 00:38:31", "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "source_icon": "https://i.bytvi.com/domain_icons/therecord.png", "source_id": "therecord", "source_priority": 246859, "source_url": "https://www.therecord.com", "title": "Whitney Public School fundraiser coming March 2", "video_url": null}, {"ai_region": "ONLY AVAILABLE IN CORPORATE PLANS", "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "article_id": "48d8f89e8a3ee53bb22beb0f22036379", "category": ["top"], "content": "ONLY AVAILABLE IN PAID PLANS", "country": ["united states of america"], "creator": ["Victor Valley News Group"], "description": "Three family members died and one was seriously injured in a DUI crash in Hesperia. The family is raising funds for funeral and medical costs after the tragic incident. Read the article on VVNG.com #vvng #hesperia", "image_url": "https://i0.wp.com/www.vvng.com/wp-content/uploads/2024/02/3-killed-on-mariposa-road.png?fit=1024%2C592&ssl=1", "keywords": ["all news", "featured", "hesperia news", "barstow", "crash", "familia valencia saucedo", "hesperia", "mariposa road"], "language": "english", "link": "https://www.vvng.com/mom-dad-son-killed-by-dui-driver-on-mariposa-road-surving-son-critical-funds-sought-for-burials/", "pubDate": "2024-02-24 00:16:25", "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS", "source_icon": "https://i.bytvi.com/domain_icons/vvng.png", "source_id": "vvng", "source_priority": 34500, "source_url": "http://www.vvng.com", "title": "Mom, Dad, Son Killed By DUI Driver on Mariposa Road, Surving Son Critical; Funds Sought For Burials", "video_url": null}])
        return () => {};
    }, [])
    return (  
        <View style={styles.reactDiv}>
            {items[0] != undefined && <View style={styles.container}>  
                <FlatList 
                    data={items}
                    renderItem={({item}) => <Card data={item}></Card>}
                />
            </View>}
        </View>
    );
}

const styles = StyleSheet.create({
    reactDiv: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',

        backgroundColor: '#101010',

        padding: 30,
    }
})

export default Feed;