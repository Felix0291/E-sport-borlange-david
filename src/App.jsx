import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddPlayer from './pages/AddPlayer'


function App() {
  let [team1, setTeam1] = useState({name: 'team1', players: ['Stefan'] })
  let [team2, setTeam2] = useState({name: 'team2', players: ['Leif'] })

  const changeTeamName = (team, newName) => {
    if (team === '1') {
      setTeam1({...team1, name: newName})
    } else if (team === '2') {
      setTeam2({...team2, name: newName}) }
  }


  const removePlayer = (player, team) => {
    if (team === '1') {
      setTeam1({ ...team1, players: team1.players.filter(p => p !== player)})
    } else if (team === '2') {
      setTeam2({ ...team2, players: team2.players.filter(p => p !== player)})
    }
  }

const addPlayer = (player, team) => {
    if (team === '1' && team1.players.length < 5) {
      setTeam1({ ...team1, players: [...team1.players, player]})
    } else if (team === '2' && team2.players.length < 5) {
      setTeam2({ ...team2, players: [...team2.players, player] })
    }
}

const movePlayer = (player, fromTeam, toTeam) => {
  if (fromTeam === '1' && toTeam === '2') {
    setTeam1({ ...team1, players: team1.players.filter(p => p !== player) });
    setTeam2({ ...team2, players: [...team2.players, player] });
  } else if (fromTeam === '2' && toTeam === '1') {
    setTeam2({ ...team2, players: team2.players.filter(p => p !== player) });
    setTeam1({ ...team1, players: [...team1.players, player] });
  }


}


  return (
    <>
    <Routes>
      <Route path="/" element={<Home team1={team1} team2={team2} changeTeamName={changeTeamName} removePlayer={removePlayer} movePlayer={movePlayer}/>}/>
      <Route path="addplayer" element={<AddPlayer team1={team1} team2={team2} addPlayer={addPlayer}/>}/>
      
    </Routes>
      
    </>
  )
}

export default App
