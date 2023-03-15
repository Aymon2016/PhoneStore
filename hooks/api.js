import axios from 'axios'

const params = {
    Headers: {
        Authorization: "bearer" + process.env.STRAPI_PUB_TOKEN,
    }
}

const URL = process.env.STRAPI_URL

const fetchDataFromApi = async (url) => {
    try {

        const { data } = await axios.get("http://localhost:1337" + url, params)
        return data;
    } catch (error) {

        console.log(error)
        return error
    }
}
export default fetchDataFromApi