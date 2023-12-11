import {useState} from 'react'

import {
  UnlockLockContainer,
  ImageAndTextContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setButton] = useState(false)
  const imageUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const imageText = isUnlocked
    ? 'Your Device is UnLocked'
    : 'Your Device is Locked'

  const altText = isUnlocked ? 'unlock' : 'lock'

  const buttonText = isUnlocked ? 'Lock' : 'UnLock'

  const onClickButton = () => setButton(prevState => !prevState)

  return (
    <UnlockLockContainer>
      <ImageAndTextContainer>
        <Image src={imageUrl} alt={altText} />
        <Text>{imageText}</Text>
      </ImageAndTextContainer>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </UnlockLockContainer>
  )
}

export default Unlock
