import styled from 'styled-components'

export const UnlockLockContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center,
  background-image:linear-gradient(to bottom,#161617,#0b0c1e,#3c2940);
  background-size:cover;
  min-height:100vh;
`

export const ImageAndTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Image = styled.img`
  width: 96px;
`

export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #e2e8f0;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const Button = styled.button`
  background-color: #06b6d4;
  color: #e2e8f0;
  border-radius: 8px;
  font-family: 'Roboto';
  align-items: center;
`
