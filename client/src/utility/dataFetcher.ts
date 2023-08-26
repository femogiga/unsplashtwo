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
