import { Link } from "react-router-dom"
import { useState } from "react"
import AddPlayer from "./AddPlayer"

let Home = ({team1, team2, changeTeamName, removePlayer, movePlayer}) => {
    const [selectedTeam, setSelectedTeam] = useState("")
    const [newName, setNewName] = useState("")


    const handleChangeName = () => {
       changeTeamName(selectedTeam, newName);
       setNewName("");
    }

    return(
        <>
        <h1>E-Sport</h1>
        

        <header>
            
            <label htmlFor="team1">{team1.name}</label>
            <input id="team1" type="radio" checked={selectedTeam === "1"} onChange={() => setSelectedTeam("1")}/>
            <label htmlFor="team1">{team2.name}</label>
           <input id="team2" type="radio" checked={selectedTeam === "2"} onChange={() => setSelectedTeam("2")}/>
            <input type="text" value={newName} onChange={(event) => setNewName(event.target.value)} placeholder="New Name" />
            <button onClick={handleChangeName}>Change name</button>
                
        </header>
            <div className="team-container">
            <div className="team1">
                
                <div className="team1-header">
                    <h2>{team1.name}</h2>
                </div>  
                {team1.players.map((player, index) => {
                    return (
                     <> 
                     <p key={index}>{player}</p>

                    <button onClick={() => removePlayer(player, '1')}>Remove</button> 
                    <button onClick={() => movePlayer(player, "1", "2")}>Swap to {team2.name}</button>
                    </>
                )})}
               
            </div> 
            <div className="team2">
                <div className="team2-header">
            <h2>{team2.name}</h2>            
            {team2.players.map((player, index) => {
                return (
                <> 
                <p key={index}>{player}</p>

                <button onClick={() => removePlayer(player, "2")}>Remove</button>
                <button onClick={() => movePlayer(player, "2", "1")}>Swap to {team1.name}</button>
                </>
     )})}
            
            </div>
    </div>
    
</div>
<button className="addBtn"><Link to={"/addplayer"}>Add player</Link></button>

        </>
    )
}

export default Home