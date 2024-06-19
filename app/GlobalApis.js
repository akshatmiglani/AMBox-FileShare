import axios from 'axios';

const SendEmail = async (data) => {
  try {
    const response = await axios.post('/api/send', data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Server responded with error:', error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from server:', error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('Error setting up request:', error.message);
    }
    throw error; // Re-throw the error for the caller to handle
  }
};

export default {
  SendEmail
};
