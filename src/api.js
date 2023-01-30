import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const params = {
  key: '30651133-37623b4f3852317d355011ed5',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 12,
  isImageModalOpen: false,
};

export const fetchImages = async (query, page) => {
  const response = await axios.get(`/?q=${query}&page=${page}`, { params });
  return response.data;
};
