import styled from 'styled-components'

export const MusicListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
`
export const TrackInfoContainer = styled.div`
    display: flex;
    align-items: center;
    width: 500px;
`
export const MusicTrackImg = styled.img`
    height: 90px;
    width: 140px;
    margin-right: 20px;
`
export const NameGerneContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const Name = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
    color: #ffffff;
    font-weight: 500;
`
export const Genre = styled.p`
    font-family: 'Roboto';
    color: #3b82f6;
    font-size: 18px;
    font-weight: 500;
`
export const DurationContainer = styled.div`
    display: flex;
    align-items: center;
`
export const Duration = styled.p`
    font-family: 'Roboto';
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
    margin-right: 50px;
`
export const DeleteButton = styled.button`
    background-color: transparent;
    outline: none;
    cursor: pointer;
    border: none;
    color: #ffffff;
`
