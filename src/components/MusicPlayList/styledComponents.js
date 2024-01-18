import styled from 'styled-components'

export const BgContainer = styled.div`
    background-color: #152850;
    min-height: 100vh;
`
export const SingerBg = styled.div`
    background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
    background-size: cover;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 100px;
`
export const SingerName = styled.h1`
    font-family: 'Roboto';
    font-size: 32px;
    color: #ffffff;
    font-weight: bold;
`
export const SingerInfo = styled.p`
    font-family: 'Roboto';
    font-size: 28px;
    color: #ffffff;
    font-weight: 300;
`
export const PlayListContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 50px;
    padding-right: 50px;
    align-items: center;
`
export const PlayListHeading = styled.h1`
    font-family: 'Roboto';
    font-size: 28px;
    font-weight: 500;
    color: #ffffff;
`
export const SearchInput = styled.input`
    height: 30px;
    width: 240px;
    padding-left: 15px;
    font-family: 'Roboto';
    color: #ffffff;
    border: 1px solid #cbd5e1;
    background-color: transparent;
    cursor: pointer;
`
export const MusicList = styled.ul`
    margin-left: 50px;
    margin-right: 50px;
`
export const EmptyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const NoSongsText = styled.p`
    font-family: 'Roboto';
    font-size: 32px;
    color: #ffffff;
    font-weight: bold;
`
