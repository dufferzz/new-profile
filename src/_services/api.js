import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.dufferz.net/v2/',
})

export const getPosts = (page, payload) =>
    api.get(`profile/posts?page=${page}`, payload)
export const addPost = () => api.post(`profile/posts`)
export const editPost = (id, payload) => api.put(`profile/posts/${id}`, payload)
export const deletePost = (id) => api.delete(`profile/posts/${id}`)

const apis = {
    getPosts,
    addPost,
    editPost,
    deletePost,
}

export default apis
