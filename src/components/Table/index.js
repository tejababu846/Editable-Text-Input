import {Component} from 'react'
import {
  MainContainer,
  Card,
  InputContiner,
  Paragraph,
  InputElement,
  ButtonElement,
} from './styledComponents'

class Table extends Component {
  state = {EditText: '', isButtonClicked: false}

  onChangeText = event => {
    this.setState({EditText: event.target.value})
  }

  onButtonClick = () => {
    this.setState(prevState => ({isButtonClicked: !prevState.isButtonClicked}))
  }

  render() {
    const {EditText, isButtonClicked} = this.state
    const ButtonText = isButtonClicked ? 'Edit' : 'Save'
    return (
      <MainContainer>
        <Card>
          <h1 className="mb-10px">Editable Text Input</h1>
          <InputContiner>
            {isButtonClicked ? (
              <Paragraph>{EditText}</Paragraph>
            ) : (
              <InputElement
                type="text"
                onChange={this.onChangeText}
                value={EditText}
              />
            )}
            <ButtonElement onClick={this.onButtonClick}>
              {ButtonText}
            </ButtonElement>
          </InputContiner>
        </Card>
      </MainContainer>
    )
  }
}

export default Table
