const puppeteer = require('puppeteer-extra');
const fs = require('fs');
// Add stealth plugin and use defaults 
const pluginStealth = require('puppeteer-extra-plugin-stealth');



// Use stealth 
puppeteer.use(pluginStealth());

const scrape = async () => {
    const browser = await puppeteer.launch({
        executablePath: "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
        headless: false,
        defaultViewport: false,
        userDataDir: "./tmp", // store history, cookies, ...
        args: ['--start-maximized',
            '--disable-infobars',
        ]
    });


    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
        'upgrade-insecure-requests': '1',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9,en;q=0.8'
    });

    const urls = [
        {
            city: "vungtau",
            link: 'https://www.booking.com/searchresults.vi.html?ss=Vu%CC%83ng+Ta%CC%80u%2C+Vi%C3%AA%CC%A3t+Nam&efdco=1&label=gen173nr-1FCAEoggI46AdIKlgEaPQBiAEBmAEquAEXyAEM2AEB6AEB-AECiAIBqAIDuAKfjd-oBsACAdICJDNjNTI0OTY2LTRiOTItNDY3Ni1hZDY0LTA2YmJhMTdjN2Y4ZNgCBeACAQ&aid=304142&lang=vi&sb=1&src_elem=sb&src=index&dest_id=-3733750&dest_type=city&checkin=2023-10-16&checkout=2023-10-19&group_adults=2&no_rooms=1&group_children=0&sb_travel_purpose=leisure'
        },
        {
            city: 'dalat',
            link: 'https://www.booking.com/searchresults.vi.html?ss=%C4%90%C3%A0+L%E1%BA%A1t%2C+Vi%C3%AA%CC%A3t+Nam&ssne=Vu%CC%83ng+Ta%CC%80u&ssne_untouched=Vu%CC%83ng+Ta%CC%80u&label=gen173nr-1FCAEoggI46AdIKlgEaPQBiAEBmAEquAEXyAEM2AEB6AEB-AECiAIBqAIDuALb4eOoBsACAdICJGRkM2VkNWFiLTk3YWItNDQ1NS1hYmFkLTFiZTU1NTcwNTE3N9gCBeACAQ&aid=304142&lang=vi&sb=1&src_elem=sb&src=searchresults&dest_id=-3712045&dest_type=city&checkin=2023-10-16&checkout=2023-10-19&group_adults=2&no_rooms=1&group_children=0'
        },

        {
            city: 'hanoi',
            link: 'https://www.booking.com/searchresults.vi.html?ss=Ha%CC%80+N%C3%B4%CC%A3i%2C+Vi%C3%AA%CC%A3t+Nam&ssne=%C4%90%C3%A0+L%E1%BA%A1t&ssne_untouched=%C4%90%C3%A0+L%E1%BA%A1t&label=gen173nr-1FCAEoggI46AdIKlgEaPQBiAEBmAEquAEXyAEM2AEB6AEB-AECiAIBqAIDuALb4eOoBsACAdICJGRkM2VkNWFiLTk3YWItNDQ1NS1hYmFkLTFiZTU1NTcwNTE3N9gCBeACAQ&aid=304142&lang=vi&sb=1&src_elem=sb&src=searchresults&dest_id=-3714993&dest_type=city&checkin=2023-10-16&checkout=2023-10-19&group_adults=2&no_rooms=1&group_children=0'
        },

        { city: 'hcm', link: 'https://www.booking.com/searchresults.vi.html?ss=TP.+H%C3%B4%CC%80+Chi%CC%81+Minh%2C+Vi%C3%AA%CC%A3t+Nam&ssne=%C4%90%C3%A0+N%E1%BA%B5ng&ssne_untouched=%C4%90%C3%A0+N%E1%BA%B5ng&label=gen173nr-1FCAEoggI46AdIKlgEaPQBiAEBmAEquAEXyAEM2AEB6AEB-AECiAIBqAIDuALb4eOoBsACAdICJGRkM2VkNWFiLTk3YWItNDQ1NS1hYmFkLTFiZTU1NTcwNTE3N9gCBeACAQ&aid=304142&lang=vi&sb=1&src_elem=sb&src=searchresults&dest_id=-3730078&dest_type=city&checkin=2023-10-16&checkout=2023-10-19&group_adults=2&no_rooms=1&group_children=0' },
        { city: 'danang', link: 'https://www.booking.com/searchresults.vi.html?ss=%C4%90%C3%A0+N%E1%BA%B5ng%2C+Vi%C3%AA%CC%A3t+Nam&ssne=Ha%CC%80+N%C3%B4%CC%A3i&ssne_untouched=Ha%CC%80+N%C3%B4%CC%A3i&label=gen173nr-1FCAEoggI46AdIKlgEaPQBiAEBmAEquAEXyAEM2AEB6AEB-AECiAIBqAIDuALb4eOoBsACAdICJGRkM2VkNWFiLTk3YWItNDQ1NS1hYmFkLTFiZTU1NTcwNTE3N9gCBeACAQ&aid=304142&lang=vi&sb=1&src_elem=sb&src=searchresults&dest_id=-3712125&dest_type=city&checkin=2023-10-16&checkout=2023-10-19&group_adults=2&no_rooms=1&group_children=0' }
    ]


    const getHotelsInUrl = async (place) => {
        const url = place.link;
        await page.goto(url, { timeout: 60000, waitUntil: 'domcontentloaded' });
        let hotels = [];

        // What to take: 
        // Hotel: 
        // Name: class .f6431b446c .a23c043802
        // Images: c90a25d457 img 
        // Score:  class .a3b8729ab1 .d86cee9b25            
        // Address: co roi 

        // Description: #property_description_content > div > p
        // Review: #reviewFloater > div.reviews-carousel-container > div > div.reviews-carousel-scroll > div:nth-child(1) > p > span 

        //div.aaee4e7cd3.e7a57abb1e > div > div:nth-child(1) > div > h3 > a

        const links = await page.$$eval('div.aaee4e7cd3.e7a57abb1e > div > div:nth-child(1) > div > h3 > a', links => links.map(img => img.getAttribute('href')));
        // console.log(links, links.length);

        // await page.goto(links[0], { timeout: 60000, waitUntil: 'domcontentloaded' });
        // let hotel = {};

        // console.log(hotel);

        for (let l = 0; l < links.length; l++) {
            const link = links[l];
            // console.log(link);
            await page.goto(link, { timeout: 60000, waitUntil: 'domcontentloaded' });
            let hotel = {};
            hotel.link = link;

            try {
                const nameHandle = await page.waitForSelector('#hp_hotel_name > div > h2');
                hotel.name = await nameHandle.evaluate(el => el.textContent);
            } catch(e) {
                console.log("Can't found name");
                hotel.name = null;
                // continue;
            }

            try {
                const scoreHandle = await page.waitForSelector('#js--hp-gallery-scorecard > a > div > div > div > div.a3b8729ab1.d86cee9b25');
                hotel.score = await scoreHandle.evaluate(el => el.textContent);
            } catch(e) {
                console.log("Can't found score");
                hotel.score = null;
                // continue;
            }

            let bo3images = [];
            try {
                for (let i = 3; i <= 5; i++) {
                    const imageHandle = await page.waitForSelector(`#hotel_main_content > div > div > div.clearfix.bh-photo-grid.fix-score-hover-opacity > div:nth-child(${i}) > a > img`);
                    const imageSrc = await imageHandle.evaluate(el => el.getAttribute("src"));;
                    bo3images.push(imageSrc);
                }
                hotel.mainImages = bo3images;
            } catch(e) {
                console.log("Can't found image");
                hotel.mainImages = bo3images;
                // continue;
            }

            // let smallImages = [];
            // for(let i = 1; i <=6 ; i++) {
            //     const imageHandle = await page.waitForSelector(`#hotel_main_content > div > div > div.clearfix.bh-photo-grid.bh-photo-grid--space-down.fix-score-hover-opacity > div.bh-photo-grid-thumbs-wrapper > div > div:nth-child(${i}) > a`);
            //     const imageSrc = await imageHandle.evaluate(el => el.getAttribute("style"));;
            //     smallImages.push(imageSrc);
            // }


            try {
                const addressHandle = await page.waitForSelector('#showMap2 > span.hp_address_subtitle.js-hp_address_subtitle.jq_tooltip');
                hotel.address = await addressHandle.evaluate(el => el.textContent);
            } catch(e) {
                console.log("Can't found address");
                hotel.address = null;
                // continue;
            }

            // Description: #property_description_content > div > p
            try {
                const descriptionHandle = await page.waitForSelector('#property_description_content > div > p');
                hotel.description = await descriptionHandle.evaluate(el => el.textContent);
            } catch(e) {
                console.log("Can't found address");
                hotel.description = null;
            }

            // Review: #reviewFloater > div.reviews-carousel-container > div > div.reviews-carousel-scroll > div:nth-child(1) > p > span 
            try {
                const reviewHandle = await page.waitForSelector('#reviewFloater > div.reviews-carousel-container > div > div.reviews-carousel-scroll > div:nth-child(1) > p > span');
                hotel.review = await reviewHandle.evaluate(el => el.textContent);
            } catch(e) {
                console.log("Can't found address");
                hotel.review = null;
            }

            console.log(hotel);
            hotels.push(hotel);
        }
        return hotels;
    }

    // console.log(urls[0]);
    let data = [];
    // let hotels = await getHotelsInUrl(urls[1]);
    for(let i = 0; i < urls.length; i++) {
        let hotels = await getHotelsInUrl(urls[i]);
        let places = {
            city: urls[i].city,
            hotels: hotels
        }
        data.push(places);
    }
    // let hotels;

    // const data = JSON.stringify(hotels);
    fs.writeFile("./scrapedData/data.json", JSON.stringify(data), function (err) {
        if (err) throw err;
        console.log('complete');
    }
    );
    // console.log(hotels);
};

scrape();