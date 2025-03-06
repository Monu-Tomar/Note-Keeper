// import axios from 'axios';

// const API_URL = 'https://66d19f5362816af9a4f44d1d.mockapi.io/Google-think-note';

// export const getData = async () => {
//     try {
//         const response = await axios.get(`${API_URL}`);
//         return response.data;
//     } catch (error) {
//         console.error("Error fetching notes:", error);
//         throw error;
//     }
// };

// export const addData = async (note) => {
//     try {
//         const response = await axios.post(`${API_URL}`, note);
//         return response.data;
//     } catch (error) {
//         console.error("Error adding note:", error);
//         throw error;
//     }
// };

// export const updateData = async (id, note) => {
//     try {
//         const response = await axios.put(`${API_URL}/${id}`, note);
//         return response.data;
//     } catch (error) {
//         console.error("Error updating note:", error);
//         throw error;
//     }
// };

// export const deleteData = async (id) => {
//     try {
//         await axios.delete(`${API_URL}/${id}`);
//     } catch (error) {
//         console.error("Error deleting note:", error);
//         throw error;
//     }
// };
