import * as fs from 'fs';
import axios from 'axios';

const url = 'http://drunkfisch.sytes.net:8085';
const images = '../../db_saves/bottles+images/16.11.2024-1240/images';
const token = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwZDhmYTQ0Yy01NGZkLTRjZDAtYWNlOS0yYTdkYTU3OTkyZGUiLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiREVGQVVMVCJ9XSwiaWF0IjoxNzMyNDc3OTI5LCJleHAiOjE3MzI1Nzc5MjksImlzcyI6InVrMjIzIn0.OVJs654RhPb3jX0OycE_NZ0bqetCk3vsP5VYG2vJR6g';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const uploadOneImage = async (imagePath, imageName) => {
    if (!fs.existsSync(imagePath)) {
        return null;
    }

    const formData = new FormData();
    const file = new File([fs.readFileSync(imagePath)], imageName, { type: 'image/png' });
    formData.append('file', file);

    const response = await axios.post(`${url}/storage`, formData,
        {
            headers: {
                Authorization: token,
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
}

const updateBottleImgId = async (bottle, newImgId) => {
    return await axios.put(`${url}/call/bottles/${bottle.id}`, {
        ...bottle,
        img_id: newImgId,
    }, {
        headers: {
            "Content-Type": "application/json",
            Authorization: token,
        }
    });
};

const code = async () => {
    const bottles = await axios.get(url + "/call/bottles");

    for (const bottle of bottles.data) {
        if (bottle.img_id === null || bottle.img_id === '') {
            continue;
        }

        try {
            await sleep(100)

            const image = await uploadOneImage(`${images}/${bottle.img_id}.png`, bottle.img_id + ".png");

            if (image === null) {
                continue;
            }

            const newBottle = await updateBottleImgId(bottle, image.id);

            console.log(newBottle.data.id, newBottle.data.img_id)
        } catch (error) {
            console.error(error);
        }
    }
}

code();