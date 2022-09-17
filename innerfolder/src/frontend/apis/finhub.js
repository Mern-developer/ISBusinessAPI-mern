import axios from 'axios'

const TOKEN ='cc9kuoqad3i82ecr8jig';
export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
       token: TOKEN     
    }  
})