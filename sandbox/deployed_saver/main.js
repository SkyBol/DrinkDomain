import * as fs from 'fs';
import axios from 'axios';

const url = 'http://drunkfisch.sytes.net:8085';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const fetchingOneImage = async (bottle) => {
    const image = await axios({
        method: 'get',
        url: url + "/storage/" + bottle.img_id,
        responseType: 'stream',
        timeout: 5000,
    });

    const contentType = image.headers['content-type'];

    let fileExtension = '.png';
    if (contentType.includes('jpeg') || contentType.includes('jpg')) {
        fileExtension = '.jpg';
    } else if (contentType.includes('png')) {
        fileExtension = '.png';
    } else if (contentType.includes('gif')) {
        fileExtension = '.gif';
    }

    image.data.pipe(fs.createWriteStream("./images/" + bottle.img_id + fileExtension));
}

const code = async () => {
    const bottles = await axios.get(url + "/call/bottles");

    fs.writeFileSync("./raw_bottles.json", JSON.stringify(bottles.data))

    for (const bottle of bottles.data) {
        if (bottle.img_id === null || bottle.img_id === '') {
            continue;
        }

        try {
            await sleep(100)

            await fetchingOneImage(bottle);
        } catch (error) {
            console.error("Encountered error:", error)
        }
        
    }
}

code();