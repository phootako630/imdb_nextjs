"use client";
import { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

export default function Videos({ movieId }) {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const fetchVideos = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=e1df78ebf3ea087fdff801a68661d267&append_to_response=videos`);

            const data = await res.json();

            const trailer = data?.videos?.results?.find((video) => video.name === 'Official Trailer');

            setVideos(trailer ? [trailer] : []);
        };
        fetchVideos();
    }, [movieId]);


    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };
    console.log('Videos', videos)
    return (
        <div>
            {videos.length > 0 ? (
                <YouTube videoId={videos[0].key} opts={opts} />
            ) : (
                <p>No trailers found for this movie.</p>
            )}
        </div>
    );
}
