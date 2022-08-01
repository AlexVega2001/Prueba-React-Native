import { useState, useEffect } from 'react';

import { http } from '../helpers/getListAuthors';

export const useFetchAuthors = () => {
    const [author, setAuthor] = useState([]);

    useEffect( () => {
        http.get('/author')
            .then(resp => {
                setAuthor(resp.data)
                })
                //console.log('Activado!');
    },[]);

    return author;  //{data: resp.data, loading = false }
}

export const useFetchPlays = (nameAuthor) => {
    const [plays, setPlays] = useState([]);

    useEffect( () => {
        http.get(`/author/${nameAuthor}/title`)
            .then(resp => {
                setPlays(resp.data)
                })
                //console.log('Activado!');
    },[]);

    return plays;  //{data: resp.data, loading = false }
}

export const useFetchPlaysFragment = (titlePlay) => {
    const [playFragment, setPlayFragment] = useState([]);

    useEffect( () => {
        http.get(`/title/${titlePlay}`)
            .then(resp => {
                setPlayFragment(resp.data)
                })
                //console.log('Activado!');
    },[]);

    return playFragment;  //{data: resp.data, loading = false }
}