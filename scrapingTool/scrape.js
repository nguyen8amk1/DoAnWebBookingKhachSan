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

    const url = 'https://www.booking.com/index.vi.html';
    await page.goto(url, { timeout: 60000, waitUntil: 'domcontentloaded' });

    // "https://www.booking.com/searchresults.vi.html?
    //  ss=Vu%CC%83ng+Ta%CC%80u%2C+Vi%C3%AA%CC%A3t+Nam&ssne=Vu%CC%83ng+Ta%CC%80u&ssne_untouched=Vu%CC%83ng+Ta%CC%80u&efdco=1&label=gen173nr-1FCAEoggI46AdIKlgEaPQBiAEBmAEquAEXyAEM2AEB6AEB-AECiAIBqAIDuALNssOoBsACAdICJGExMGRlNmFlLWIyYjEtNDhlNC1iZjNlLTFmMTMwODAxMGNjM9gCBeACAQ&aid=304142&lang=vi&sb=1&src_elem=sb&src=index&dest_id=-3733750&dest_type=city&group_adults=2&no_rooms=1&group_children=0&sb_travel_purpose=leisure"


    // Sample data
    // Endpoint to retrieve data
    // const uploadSelector = "#gb > div.gb_id.gb_cd.gb_od.gb_nd > div.gb_hd.gb_rd.gb_nd.gb_we.gb_Je.gb_Oe > div.gb_9d.gb_7d > div > div > div:nth-child(1) > div > div:nth-child(1) > div > div.HCIe8c > span > div.VfPpkd-dgl2Hf-ppHlrf-sM5MNb > button > div.VfPpkd-RLmnJb";
    // const computerSelector = "#ucc-0 > ul > li.amqM1.VfPpkd-StrnGf-rymPhb-ibnC6b";
    // const translateSelector = "#ucc-5 > span.VfPpkd-rOvkhd-jPmIDe-dgl2Hf";
    // await page.locator(uploadSelector).click();
    // await page.locator(computerSelector).wait();

    // const [fileChooser] = await Promise.all([
    //     page.waitForFileChooser(),
    //     page.click(computerSelector)
    //     // some button that triggers file selection
    // ]);
    // await fileChooser.accept(['./images/captcha.png']);
    // console.log("done");
    // await page.locator(translateSelector).click();
    // const textResultSelector = "#yDmH0d > c-wiz > div > div.a4wa9e > div > div > div > div.b57KQc > c-wiz > div > div > div > div.UJ8EBe > div.F0mDWe > div > div > div.TCimBb > div > div > div";
    // await page.locator(textResultSelector).wait();
    // let element = await page.$(textResultSelector)
    // let value = await page.evaluate(el => el.textContent, element)
    // console.log(value);
};

scrape();