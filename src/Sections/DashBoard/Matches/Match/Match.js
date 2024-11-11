import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { config } from '../../../../Constant/environment';
import './Match.css';
import useGet from '../../../../custom Hooks/useGet';
import Cookies from 'js-cookies'
import { useNavigate } from 'react-router-dom';

const Match = () => {
  const [plan1, setplan] = useState(null);
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState({
    round: '',
    play_ground: '',
    when: '',
    channel: '',
    club1_id: '',
    club2_id: '',
    season_id: '',
    plan: '',
    status:'',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPlayer((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddPlayer = () => {
    if (!newPlayer.uuid || !newPlayer.name) return;
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
  };

  
  const handleDeletePlayer = (uuid) => {
    const updatedPlayers = players.filter((player) => player.uuid !== uuid);
    setPlayers(updatedPlayers);
  };

  const handleEditStart = (uuid) => {
    setEditingPlayer(uuid);
  };

  const handleEditChange = (event, uuid, field) => {
    const updatedPlayers = players.map((player) => {
      if (player.uuid === uuid) {
        return {
          ...player,
          [field]: event.target.value,
        };
      }
      return player;
    });
    setPlayers(updatedPlayers);
  };

  const handleEditEnd = async (uuid) => {
    const playerToUpdate = players.find((player) => player.uuid === uuid);
    if (!playerToUpdate) return;
    const formData1 = new FormData();
    formData1.append('status', playerToUpdate.status);
    formData1.append('channel', playerToUpdate.channel);
    formData1.append('play_ground', playerToUpdate.play_ground);
    formData1.append('season_id', playerToUpdate.season_id);
    formData1.append('club1_id', playerToUpdate.club1_id);
    formData1.append('club2_id', playerToUpdate.club2_id);

    formData1.append('plan', plan1); 

   await axios
      .post(`${config.baseUrl}/${config.updatePlayer}`, formData1, {
        headers: {
          Authorization: `Bearer ${Cookies.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setEditingPlayer(null);
  };
  const handlePostData = async(e) => {
    e.preventDefault();
    console.log(plan1);
    const formData = new FormData();
    formData.append('round', newPlayer.round);
    formData.append('status', newPlayer.status);
    formData.append('play_ground', newPlayer.play_ground);
    formData.append('when', newPlayer.when);
    formData.append('channel', newPlayer.channel);
    formData.append('club1_id', newPlayer.club1_id);
    formData.append('club2_id', newPlayer.club1_id);
    formData.append('season_id', newPlayer.season_id);
    formData.append('plan', plan1); // تم تعديل هنا

    await axios
      .post(`${config.baseUrl}/${config.addMatch}`, formData, {
        headers: {
          Authorization: `Bearer ${Cookies.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadplan = (e) => {
    const file = e.target.files[0];
    setplan(file);
  };

  useEffect(() => {
    axios
      .get(`${config.baseUrl}/${config.matchNotStarted}`)
      .then((res) => {
        console.log(res.data);
        setPlayers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="player-list">
      <h2>Add Match</h2>
      <div className="add-player-form">
        <form>
         
          <input
            type="text"
            name="round"
            value={newPlayer.round}
            onChange={handleInputChange}
            placeholder="round"
            className="input-field"
          />
         
          <input
            type="text"
            name="play_ground"
            value={newPlayer.play_ground}
            onChange={handleInputChange}
            placeholder="play_ground"
            className="input-field"
          />
          <input
            type="date"
            min="2024-1-31"
            name="when"
            value={newPlayer.when}
            onChange={handleInputChange}
            placeholder="when"
            className="input-field"
          />
          <input
            type="text"
            name="channel"
            value={newPlayer.channel}
            onChange={handleInputChange}
            placeholder="channel"
            className="input-field"
          />
          <input
            type="text"
            name="club1_id"
            value={newPlayer.club1_id}
            onChange={handleInputChange}
            placeholder="Club 1"
            className="input-field"
          />
           <input
            type="text"
            name="club2_id"
            value={newPlayer.club1_id}
            onChange={handleInputChange}
            placeholder="Club 2"
            className="input-field"
          />
          <input
            type="text"
            name="season_id"
            value={newPlayer.season_id}
            onChange={handleInputChange}
            placeholder="season_id"
            className="input-field"
          />
          <input
            type="file"
            name="plan"
            className="input-field"
            onChange={uploadplan}
            placeholder="plan"
          />

          <button type="submit" onClick={handlePostData} className="save-button">
            Save Data
          </button>
        </form>
            </div>
            <table className="player-table">
                <thead>
                    <tr>
                        <th>When</th>
                        <th>Status</th>
                        <th>plan</th>
                        <th>Channel</th>
                        <th>Round</th>
                        <th>PlayGround</th>
                        <th>club1_id</th>
                        <th>club2_id</th>
                        <th>season_id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                        <tr key={player.uuid}>
                        <td>
                                {editingPlayer === player.uuid ? (
                                    <input
                                        type="date"
                                        min='2024-1-31'
                                        value={player.when}
                                        onChange={(event) => handleEditChange(event, player.uuid, "when")}
                                    />
                                ) : (
                                    player.when
                                )}
                            </td>
                            <td>
                                {editingPlayer === player.uuid ? (
                                    <input
                                        type="text"
                                        value={player.status}
                                        onChange={(event) => handleEditChange(event, player.uuid, "status")}
                                    />
                                ) : (
                                    player.status
                                )}
                            </td>
                            <td>
                                {editingPlayer === player.uuid ? (
                                    <input
                                        type="file"
                                        onChange={uploadplan}
                                    />
                                ) : (
                                    player.plan
                                )}
                            </td>
                            <td>
                                {editingPlayer === player.uuid ? (
                                    <input
                                        type="text"
                                        value={player.channel}
                                        onChange={(event) => handleEditChange(event, player.uuid, "channel")}
                                    />
                                ) : (
                                    player.channel
                                )}
                            </td>
                            <td>
                                {editingPlayer === player.uuid ? (
                                    <input
                                        type="number"
                                        value={player.round}
                                        onChange={(event) => handleEditChange(event, player.uuid, "round")}
                                    />
                                ) : (
                                    player.round
                                )}
                            </td>
                         
                            <td>
                                {editingPlayer === player.uuid ? (
                                    <input
                                        type="text"
                                        value={player.play_ground}
                                        onChange={(event) => handleEditChange(event, player.uuid, "play_ground")}
                                    />
                                ) : (
                                    player.play_ground
                                )}
                            </td>
                           
                           
                            <td>
                                {editingPlayer === player.uuid ? (
                                    <input
                                        type="text"
                                        value={player.club1_id}
                                        onChange={(event) => handleEditChange(event, player.uuid, "club1_id")}
                                    />
                                ) : (
                                    player.club1_id
                                )}
                            </td>
                            <td>
                                {editingPlayer === player.uuid ? (
                                    <input
                                        type="text"
                                        value={player.club2_id}
                                        onChange={(event) => handleEditChange(event, player.uuid, "club2_id")}
                                    />
                                ) : (
                                    player.club2_id
                                )}
                            </td>
                            <td>
                                {editingPlayer === player.uuid ? (
                                    <input
                                        type="text"
                                        value={player.season_id}
                                        onChange={(event) => handleEditChange(event, player.uuid, "season_id")}
                                    />
                                ) : (
                                    player.season_id
                                )}
                            </td>
                          
                            <td>
                                {editingPlayer === player.uuid ? (
                                    <span>
                                        <button
                                            type="button"
                                            onClick={() => {handleEditEnd(player.uuid)}}
                                            className="edit-button"
                                        >
                                            Done
                                        </button>
                                    </span>
                                ) : (
                                    <span>
                                        <button
                                            type="button"
                                            onClick={() => handleEditStart(player.uuid)}
                                            className="edit-button"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDeletePlayer(player.uuid)}
                                            className="delete-button"
                                        >
                                            <FaTrash />
                                        </button>
                                    </span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Match;