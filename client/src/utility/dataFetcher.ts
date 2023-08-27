// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import dataService from "./dataService";

export const fetchData = async (url) => {

    try {
        const result = await dataService.get(url);
       const  response = await result.data;
        return response;
    } catch (error) {
        console.error(error);
    }
    // return response;
}
