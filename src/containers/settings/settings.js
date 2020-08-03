import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Menu, Container, } from './settings.styled'

export class Settings extends Component {

  state = { L: 3, M: 5, N: 7, Ver: 0.5 };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  getValidationState(value) {
    if (isNaN(value) || value > 35 || String(value).includes(".")) return true;
  }

  getDisableButton() {
    const { L, M, N } = this.state;
    if (
      this.getValidationState(L) ||
      this.getValidationState(M) ||
      this.getValidationState(N)
    )
      return true;
  }

  render() {
    const { L, M, N, Ver } = this.state;
    return (
      <Container>
        <Menu>
          <TextField
            error={this.getValidationState(L)}
            id="outlined-error"
            label="L"
            margin="normal"
            variant="outlined"
            value={L}
            onChange={this.handleChange}
            name="L"
          />
          <TextField
            error={this.getValidationState(M)}
            id="outlined-error"
            label="M"
            margin="normal"
            variant="outlined"
            value={M}
            onChange={this.handleChange}
            name="M"
          />
          <TextField
            error={this.getValidationState(N)}
            id="outlined-error"
            label="N"
            margin="normal"
            variant="outlined"
            value={N}
            onChange={this.handleChange}
            name="N"
          />
          <Button
            disabled={this.getDisableButton()}
            variant="outlined"
            color="primary"
            onClick={() =>
              this.props.handleClick(Number(L), Number(M), Number(N))
            }
          >
            Отобразить решетку
          </Button>
          <Button
            disabled={this.props.isBoardClear}
            variant="outlined"
            color="primary"
            onClick={this.props.onClickCheck}
          >
            Посчитать домены
          </Button>
        </Menu>
        <Menu>
          <TextField
            error={Ver > 0.99 || Ver < 0.01 || isNaN(Ver)}
            id="outlined-error"
            label="Вероятность"
            margin="normal"
            variant="outlined"
            value={Ver}
            onChange={this.handleChange}
            name="Ver"
          />
          <Button
            disabled={this.props.isBoardClear || Ver > 0.99 || Ver < 0.01 || isNaN(Ver)}
            variant="outlined"
            color="primary"
            onClick={() => this.props.auto(Ver)}
          >
            АВТО
          </Button>
        </Menu>
      </Container>
    );
  }
}
