import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const URL = 'http://localhost:3010'

export const addUser = async (data)=>{
    try {
        return await axios.post(`${URL}/add-user`, data)
    } catch (error) {
        console.log('error')
    }
}
export const editUser = async (data)=>{
    try {
        return await axios.post(`${URL}/edit-user`, data)
    } catch (error) {
        console.log('error')
    }
}
export const getUsers = async ()=>{
    try {
        return await axios.get(`${URL}`);
    } catch (error) {
        console.log('error')
    }
}

export const deleteUser = async(data)=>{
    try {
        return await axios.post(`${URL}/delete`,data)
    } catch (error) {
        console.log(error)
    }
}
export const getUser = async(id)=>{
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log(error)
    }
}
