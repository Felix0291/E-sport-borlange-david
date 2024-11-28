import { useState } from "react"
import { Link } from "react-router-dom"

let AddPlayer = ({team1, team2, addPlayer}) => {
    let [username, setUsername] = useState("")
    let [selectedTeam, setSelectedTeam] = useState("")
    let [userFeedback, setUserFeedback] = useState("") 

    let handleAddPlayer = () => {
        if (!username.trim()) {
            alert("Läggg in ett jävla namn!!!")
            return
        } 
        if (!selectedTeam) {
            alert("Välj ett jävla lag!!!")
            return
        }
        if (team1.players.includes(username) || team2.players.includes(username)) {
            alert("Namnet är redan valt ditt jävla UFO!")
            return
        }
        addPlayer(username, selectedTeam)
        setUsername('')
        updateFeedback(username, selectedTeam);
    }

 const updateFeedback = (username, teamName) => {

    if (selectedTeam === '1'){
        selectedTeam = team1.name
    } else if (selectedTeam === '2') {
        selectedTeam = team2.name
    }
        setUserFeedback(`${username} successfully added to ${selectedTeam}`);
        setTimeout(() => setUserFeedback(""), 3000); 
    }

    return(
        <>
        <div className="addPlayer-container">
        <h1>Add player</h1>

        <label htmlFor="playerName">Player name: </label>
        <input type="text" placeholder="Enter something.." value={username} onChange={(e) => setUsername(e.target.value)}/>
        </div>
        
        <div className="radio-container">

        <input type="radio" id="team1" name="team" value="1" checked={selectedTeam === "1"}
        onChange={(e) => setSelectedTeam(e.target.value)}/>

        <label htmlFor="team1">{team1.name}</label>

        <input type="radio" id="team2" name="team" value="2" checked={selectedTeam === "2"}
        onChange={(e) => setSelectedTeam(e.target.value)}/>

        <label htmlFor="team2">{team2.name}</label>
        
        </div>
        <div>
        <button onClick={handleAddPlayer}>Add player</button>
        </div>

        

        <button><Link to="/">Back</Link></button>
        
        {userFeedback && <p>{userFeedback}</p>}

        </>
        
    )
}

export default AddPlayer