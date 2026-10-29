import url from "../../datas/api/url.json";
import { oauthData } from '../../datas/api/rawData';
import { httpRequest } from "../../helpers/requestUtils";

const baseURL = url.bearerTokken;



export async function generateAccessToken() {
    try {
        const response = await httpRequest('post', baseURL, oauthData, {
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        console.log(response);
        let instanceUrl = response.data.instance_url
        let bearerTokken = `${response.data.access_token}`
        return [instanceUrl, bearerTokken];

    } catch (error) {
        console.error("Error generating access token:", error);
        throw error;
    }
}

generateAccessToken();
