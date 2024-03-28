import { useState } from "react"

export default function Player({ intialName, symbol, isActive }) {
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState(intialName)

    function handleEdit() {
        setIsEditing((editing) => !editing)
    }

    function handleNameChange(e) {
        setName(e.target.value)
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing ? <input onChange={handleNameChange} type="text" required value={name} /> : <span className="player-name">{name}</span>
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}