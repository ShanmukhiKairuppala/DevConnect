// import axios from 'axios';

// const ADZUNA_API_URL = 'https://api.adzuna.com/v1/api/jobs';
// const API_ID = '01aa0a0d';  // Replace with your Adzuna API ID
// const API_KEY = 'a0ac6aea494a5835ccbe1b31b642e15d';  // Replace with your Adzuna API Key

// export const fetchJobs = async (filters) => {
//     try {
       
//         const response = await axios.get(`${ADZUNA_API_URL}/in/search/1`, {
//             params: {
//                 app_id: API_ID,
//                 app_key: API_KEY,
//                 what: filters.role || '',
//                 where: filters.location || ''
//                // contract: contractTypes.join(',') || ''
//                 // experience: filters.experience || ''
//             },
//         });
//         return response.data.results;
//     } catch (error) {
//         console.error('Error fetching jobs:', error);
//         throw error;
//     }
// };


import axios from 'axios';

const ADZUNA_API_URL = 'https://api.adzuna.com/v1/api/jobs';
const API_ID = '01aa0a0d';  // Replace with your Adzuna API ID
const API_KEY = 'a0ac6aea494a5835ccbe1b31b642e15d';  // Replace with your Adzuna API Key

export const fetchJobs = async (filters) => {
    try {
        const params = {
            app_id: API_ID,
            app_key: API_KEY,
            what: filters.role || '',
            where: filters.location || '',
           
        };

        if (filters.fullTime) {
            params.full_time = '1';
        }
        if (filters.partTime) {
            params.part_time = '1';
        }
        if (filters.contract) {
            params.contract = '1';
        }
        

        const response = await axios.get(`${ADZUNA_API_URL}/in/search/1/`, { params });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching jobs:', error);
        throw error;
    }
};
