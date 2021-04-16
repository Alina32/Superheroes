import axios from 'axios'

export const getSuperhero = async (_id) => {
    const res = await axios.get(`/api/superheroes/${_id}`)
    
    return res.data
}

export const getSuperheroes = () => {
    return axios
        .get('api/superheroes')
        .then(res => {
            return res.data
        })
}

export const addSuperheroes = ({
    nickname,
    real_name,
    description,
    superpowers,
    catch_phrase,
    photos,
}) => {
    const formData = new FormData();

    formData.append("nickname", nickname);
    formData.append("real_name", real_name);
    formData.append("description", description);
    formData.append("superpowers", superpowers);
    formData.append("catch_phrase", catch_phrase);

    for (const photo of photos) {
        formData.append("photos", photo);
    }

    console.log('formData', formData);

    return axios.post(`/api/superheroes`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export const updateSuperheroes = ({
    _id,
    nickname,
    real_name,
    description,
    superpowers,
    catch_phrase,
    photos,
}) => {
    const formData = new FormData();

    formData.append("nickname", nickname);
    formData.append("real_name", real_name);
    formData.append("description", description);
    formData.append("superpowers", superpowers);
    formData.append("catch_phrase", catch_phrase);

    for (const photo of photos) {
        formData.append("photos", photo);
    }

    console.log('formData', formData);

    return axios.put(`/api/superheroes/${_id}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export const deleteSuperheroes = _id => {
    return axios
        .delete(`/api/superheroes/${_id}`)
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error)
        })
}