import axios from 'axios';

const baseURL = 'http://192.168.0.224:5000/api';

// Create an Axios instance to handle all API requests
const api = axios.create({
  baseURL,
});

// Define all API functions
export const getRecetas = async () => {
  try {
    const response = await api.get('/recetas');
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const getRecetaById = async (id, personas = null) => {
  try {
    const queryParam = personas ? `?personas=${personas}` : '';
    const response = await api.get(`/recetas/${id}${queryParam}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching recipe with id ${id}:`, error);
    throw error;
  }
};

export const createReceta = async (receta) => {
  try {
    const response = await api.post('/recetas', receta);
    return response.data;
  } catch (error) {
    console.error('Error creating recipe:', error);
    throw error;
  }
};

export const updateReceta = async (id, receta) => {
  try {
    await api.put(`/recetas/${id}`, receta);
  } catch (error) {
    console.error(`Error updating recipe with id ${id}:`, error);
    throw error;
  }
};

export const deleteReceta = async (id) => {
  try {
    await api.delete(`/recetas/${id}`);
  } catch (error) {
    console.error(`Error deleting recipe with id ${id}:`, error);
    throw error;
  }
};

export const calculateMacros = async (id) => {
  try {
    const response = await api.get(`/recetas/${id}/calcular-macros`);
    return response.data;
  } catch (error) {
    console.error(`Error calculating macros for recipe with id ${id}:`, error);
    throw error;
  }
};

// Functions for managing 'alimentos'
export const getAlimentos = async () => {
  try {
    const response = await api.get('/alimentos');
    return response.data;
  } catch (error) {
    console.error('Error fetching foods:', error);
    throw error;
  }
};

export const createAlimento = async (alimento) => {
  try {
    const response = await api.post('/alimentos', alimento);
    return response.data;
  } catch (error) {
    console.error('Error creating food:', error);
    throw error;
  }
};

export const updateAlimento = async (id, alimento) => {
  try {
    await api.put(`/alimentos/${id}`, alimento);
  } catch (error) {
    console.error(`Error updating food with id ${id}:`, error);
    throw error;
  }
};

export const deleteAlimento = async (id) => {
  try {
    await api.delete(`/alimentos/${id}`);
  } catch (error) {
    console.error(`Error deleting food with id ${id}:`, error);
    throw error;
  }
};
