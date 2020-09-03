import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID DrVkCwFjJLP0Bm4xw5tJOcJCzzb88Bz_HqM0ZhVMccA'
    }
})