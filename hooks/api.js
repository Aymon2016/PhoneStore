import axios from 'axios'

const params = {
    Headers: {
        Authorization: "bearer" + process.env.NEXT_STRAPI_PUB_TOKEN,
    }
}



const fetchDataFromApi = async (url) => {
    const mainurl = process.env.NEXT_PUBLIC_STRAPI_URL

    try {

        const { data } = await axios.get(`${mainurl}` + url, params)
        return data;
    } catch (error) {

        console.log(error)
        return error
    }
}
export default fetchDataFromApi