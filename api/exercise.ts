import axios from 'axios';

const baseURL = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url) => {
    const options = {
      method: 'GET',
      url,
      params: {
        limit: '10',
        offset: '0'
      },
      headers: {
        'x-rapidapi-key': '5f14f582d8msh343a8e2e34460dap18b674jsn06e79466a882',
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchBodyPart = async (bodyPart) => {
    let data = await apiCall(baseURL + `/exercises/bodyPart/${bodyPart}`);
    return data;
}