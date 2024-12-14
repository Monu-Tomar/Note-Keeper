const API_URL = 'https://66d19f5362816af9a4f44d1d.mockapi.io/notes';

export const getNotes = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching notes:", error);
        throw error;
    }
};

export const addNote = async (note) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });
        return response.json();
    } catch (error) {
        console.error("Error adding note:", error);
        throw error;
    }
};

export const updateNote = async (id, note) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });
        return response.json();
    } catch (error) {
        console.error("Error updating note:", error);
        throw error;
    }
};

export const deleteNote = async (id) => {
    try {
        await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error("Error deleting note:", error);
        throw error;
    }
};
