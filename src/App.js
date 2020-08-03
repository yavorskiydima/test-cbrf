import React, { Component } from "react";

import { Board, } from "./containers/board";
import { Settings, } from "./containers/settings";
import { View, } from "./containers/view";

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

class App extends Component {
  state = { board: [], color: [], stat: [] };

  handleClick = (L, M, N) => {
    const arr = [];
    for (let i = 1; i < L + M; i++) {
      const tempArr = Array(N + L - 1);
      for (let j = 1; j < N + L; j++) {
        if (L - i >= j && i < L) {
          tempArr[j - 1] = null;
        } else if (i > M && i + j > M + L + N - 1) tempArr[j - 1] = null;
        else tempArr[j - 1] = 0;
      }
      arr.push(tempArr);
    }
    this.setState({ board: arr, color: arr });
  };

  changeValue = (x, y) => {
    const arr = [...this.state.board];
    arr[x][y] === 0 ? (arr[x][y] = 1) : (arr[x][y] = 0);
    this.setState({ board: arr });
  };

  checkDomain = (board, updateStat = false, ver) => {
    const arr = board.map(a => [...a]);
    let colorDomain = getRandomColor();
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[0].length; j++) {
        if (arr[i][j] === 1) {
          color(i, j);
          colorDomain = getRandomColor();
        }
      }
    }

    this.setState({ color: arr });

    if (updateStat) {
      const stat = arr.flat();
      const all = stat.filter(
        (v, i, a) => a.indexOf(v) === i && v !== 0 && v !== null
      );
      const allDomain = all.length;
      const notOne = all.filter(a => stat.indexOf(a) !== stat.lastIndexOf(a))
        .length;
      const allCell = stat.filter(a => a !== null).length;
      const allOne = stat.filter(a => a !== 0 && a !== null).length;

      this.setState(state =>
        state.stat.length > 9
          ? {
            stat: [
              ...state.stat.slice(1, 10),
              { ver: ver, allDomain, notOne, allCell, allOne }
            ]
          }
          : {
            stat: [...state.stat, { ver, allDomain, notOne, allCell, allOne }]
          }
      );
    }

    function color(i, j) {
      arr[i][j] = colorDomain;
      if (i > 0 && arr[i - 1][j] === 1) color(i - 1, j);
      if (i > 0 && arr[i - 1][j + 1] === 1) color(i - 1, j + 1);
      if (arr[i][j - 1] === 1) color(i, j - 1);
      if (arr[i][j + 1] === 1) color(i, j + 1);
      if (i < arr.length - 1 && arr[i + 1][j] === 1) color(i + 1, j);
      if (i < arr.length - 1 && arr[i + 1][j - 1] === 1) color(i + 1, j - 1);
    }
  };

  auto = ver => {
    const arr = this.state.board.map(a =>
      a.map(b => (b === null ? null : Math.random() < ver ? 1 : 0))
    );
    this.setState({ board: arr });
    this.checkDomain(arr, true, ver);
  };

  onClickCheck = () => {
    this.checkDomain(this.state.board);
  };

  render() {
    return (
      <div>
        <Settings
          handleClick={this.handleClick}
          auto={this.auto}
          isBoardClear={this.state.board.length === 0}
          onClickCheck={this.onClickCheck}
        />
        <Board
          board={this.state.board}
          changeValue={this.changeValue}
          color={this.state.color}
        />
        <View data={this.state.stat} />
      </div>
    );
  }
}

export default App;
