import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: pink;
  height: 100vh;
  background-size: cover;
`

export const Card = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  min-height: 200px;
  min-width: 350px;
  border-radius: 8px;
  text-align: center;
`

export const InputContiner = styled.div`
  display: flex;
  justify-content: center;
  aligin-items: center;
  line-height: 0px;
`

export const Paragraph = styled.p`
  text-align: center;
  color: black;
  margin-right: 20px;
  font-weight: bold;
`

export const InputElement = styled.input`
  margin-right: 8px;
  border-width: 2px;
  border-color: pink;
  &:hover {
    border: solid 2px orange;
    box-shadow: none;
  }
`

export const ButtonElement = styled.button`
  color: white;
  background-color: blue;
  height: 30px;
  width: 60px;
  border-width: 0px;
  border-radius: 5px;
`
