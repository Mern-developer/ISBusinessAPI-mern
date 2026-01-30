import axios from 'axios'

// const TOKEN ='d5r5ki9r01qqqlh9v4cgd5r5ki9r01qqqlh9v4d0';
const TOKEN ='d5r5ki9r01qqqlh9v4cgd5r5ki9r01qqqlh9v4d0';
// const TOKEN ='cc9kuoqad3i82ecr8jig';
export default axios.create({
    baseURL: "https://finnhub.io/api/v1",
    params: {
       token: TOKEN     
    }  
})