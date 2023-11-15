import React from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import videos from '../../jsons/db.json'
import styled from 'styled-components'

const PlayerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem auto 10rem auto;

    h1 {
        font-size: 32px;
        font-weight: 500;
        margin: 3rem 0 5rem 0;
    }
`

function Player() {
    const params = useParams()
    const selectedVideo = videos.find(video => video.id === Number(params.id))

    return (
        <div>
            <Banner url={'/images/banner-player.png'} />

            <PlayerContainer>
                <h1>Player</h1>

                <iframe
                    width="50%"
                    height="480"
                    src={selectedVideo.link}
                    title={selectedVideo.titulo}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
            </PlayerContainer>
        </div>
    )
}

export default Player