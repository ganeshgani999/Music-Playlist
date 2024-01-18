import {AiOutlineDelete} from 'react-icons/ai'

import {
  MusicListItem,
  TrackInfoContainer,
  MusicTrackImg,
  NameGerneContainer,
  Name,
  Genre,
  DurationContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const MusicItem = props => {
  const {musicItemDetails, onClickDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = musicItemDetails

  const onDeleteTrack = () => {
    onClickDeleteTrack(id)
  }

  return (
    <MusicListItem>
      <TrackInfoContainer>
        <MusicTrackImg src={imageUrl} alt="track" />
          <NameGerneContainer>
            <Name>{name}</Name>
            <Genre>{genre}</Genre>
          </NameGerneContainer>
      </TrackInfoContainer>
      <DurationContainer>
        <Duration>{duration}</Duration>
        <DeleteButton
          type="button"
          data-testid="delete"
          onClick={onDeleteTrack}
        >
          <AiOutlineDelete size={25} />
        </DeleteButton>
      </DurationContainer>
    </MusicListItem>
  )
}
export default MusicItem
