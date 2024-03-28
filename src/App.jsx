import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"

function derivedActivePlayer(gameTurns) {
  let currPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currPlayer = 'O'
  }

  return currPlayer
}


function App() {
  // const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = derivedActivePlayer(gameTurns)

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns(prevTurns => {
      const currPlayer = derivedActivePlayer(prevTurns)

      const updatedTurns = [{
        square: {
          row: rowIndex,
          col: colIndex
        },
        player: currPlayer
      }, ...prevTurns]
      return updatedTurns
    })
  }

  return (
    <main>
      <h1>Tic-Tac-Toe</h1>

      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player intialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player intialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard turns={gameTurns} onSelectSquare={handleSelectSquare} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
