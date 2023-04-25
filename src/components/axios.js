import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:90000'
})

export default instance