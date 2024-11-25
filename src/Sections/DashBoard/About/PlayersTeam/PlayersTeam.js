import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { config } from '../../../../Constant/environment';
import './PlayersTeam.css';
import useGet from '../../../../custom Hooks/useGet';
import Cookies from 'js-cookies'
import { useNavigate } from 'react-router-dom';

const PlayersTeam = () => {
  const [image1, setImage] = useState(null);
  const [editingPlayer, setEditingPlayer] = useState(null);
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState({
    name: '',
    high: '',
    play: '',
    number: '',
    born: '',
    from: '',
    first_club: '',
    career: '',
    image: '',
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
    formData1.append('play', playerToUpdate.play);
    formData1.append('number', playerToUpdate.number);
    formData1.append('career', playerToUpdate.career);
    formData1.append('player_id', playerToUpdate.uuid);
    formData1.append('image', image1); 

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
    console.log(image1);
    const formData = new FormData();
    formData.append('name', newPlayer.name);
    formData.append('high', newPlayer.high);
    formData.append('play', newPlayer.play);
    formData.append('number', newPlayer.number);
    formData.append('born', newPlayer.born);
    formData.append('from', newPlayer.from);
    formData.append('first_club', newPlayer.first_club);
    formData.append('career', newPlayer.career);
    formData.append('sport_id', Cookies.getItem('sport'));
    formData.append('image', image1); // تم تعديل هنا

    await axios
      .post(`${config.baseUrl}/${config.addPlayer}`, formData, {
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

  const uploadImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  useEffect(() => {
    axios
      .get(`${config.baseUrl}/${config.allPlayers}`)
      .then((res) => {
        console.log(res.data.data);
        setPlayers(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="player-list">
      <h2>Player List</h2>
      <div className="add-player-form">
        <form>
          <input
            type="text"
            name="name"
            value={newPlayer.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="input-field"
          />
          <input
            type="number"
            name="high"
            value={newPlayer.high}
            onChange={handleInputChange}
            placeholder="Height"
            className="input-field"
          />
          <input
            type="text"
            name="play"
            value={newPlayer.play}
            onChange={handleInputChange}
            placeholder="Position"
            className="input-field"
          />
          <input
            type="number"
            name="number"
            value={newPlayer.number}
            onChange={handleInputChange}
            placeholder="Number"
            className="input-field"
          />
          <input
            type="date"
            min="1975-12-31"
            max="2005-12-31"
            name="born"
            value={newPlayer.born}
            onChange={handleInputChange}
            placeholder="Date of Birth"
            className="input-field"
          />
          <input
            type="text"
            name="from"
            value={newPlayer.from}
            onChange={handleInputChange}
            placeholder="From"
            className="input-field"
          />
          <input
            type="text"
            name="first_club"
            value={newPlayer.first_club}
            onChange={handleInputChange}
            placeholder="First Club"
            className="input-field"
          />
          <input
            type="text"
            name="career"
            value={newPlayer.career}
            onChange={handleInputChange}
            placeholder="Career"
            className="input-field"
          />
          <input
            type="file"
            name="image"
            className="input-field"
            onChange={uploadImage}
            placeholder="Image"
          />

          <button type="button" onClick={handleAddPlayer} className="add-button">
            <FaPlus />
            Add Player
          </button>
          <button type="submit" onClick={handlePostData} className="save-button">
            Save Data
          </button>
        </form>
            </div>
            <table className="player-table">
                <thead>
                    <tr>
                        <th>UUID</th>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Position</th>
                        <th>Number</th>
                        <th>Date of Birth</th>
                        <th>From</th>
                        <th>First Club</th>
                        <th>Career</th>
                        <th>image</th>

                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map((player) => (
                        <tr key={player.uuid}>
                            <td>{player.uuid}</td>
                            <td>
                                {editingPlayer === player.uuid ? (
                                    <input
                                        type="text"
                                        value={player.name}
                                        onChange={(event) => handleEditChange(event, player.uuid, "name")}
                                    />
                                ) : (
                                    player.name
                                )}
                            </td>
                            <td>
                                {editingPlayer === player.uuid ? (
                                    <input
                                        type="number"
                                        value={player.high}
                                        onChange={(event) => handleEditChange(event, player.uuid, "high")}
                                    />
                                ) : (
                                    player.high
                                )}
                            </td>
                            <td>
                                {editingPlayer === player.uuid ? (
                                    <input
                                        type="text"
                                        value={player.play}
                                        onChange={(event) => handleEditChange(event, player.uuid, "play")}
                                    />
                                ) : (
                                    player.play
                                )}
                            </td>
                            <td>
                                {editingPlayer === player.uuid ? (
                                    <input
                                        type="number"
                                        value={player.number}
                                        onChange={(event) => handleEditChange(event, player.uuid, "number")}
                                    />
                                ) : (
                                    player.number
                                )}
                            </td>
                            <td>
                                {editingPlayer === player.uuid ? (
                                    <input
                                        type="date"
                                        min='1975-12-31'
                                        max='2005-12-31'
                                        value={player.born}
                                        onChange={(event) => handleEditChange(event, player.uuid, "born")}
                                    />
                                ) : (
                                    player.born
                                )}
                            </td>
                            <td>
                                {editingPlayer === player.uuid ? (
                                    <input
                                        type="text"
                                        value={player.from}
                                        onChange={(event) => handleEditChange(event, player.uuid, "from")}
                                    />
                                ) : (
                                    player.from
                                )}
                            </td>
                            <td>
                                {editingPlayer === player.uuid ? (
                                    <input
                                        type="text"
                                        value={player.first_club}
                                        onChange={(event) => handleEditChange(event, player.uuid, "first_club")}
                                    />
                                ) : (
                                    player.first_club
                                )}
                            </td>
                            <td>
                                {editingPlayer === player.uuid ? (
                                    <input
                                        type="text"
                                        value={player.career}
                                        onChange={(event) => handleEditChange(event, player.uuid, "career")}
                                    />
                                ) : (
                                    player.career
                                )}
                            </td>
                            <td>
                                {editingPlayer === player.uuid ? (
                                    <input
                                        type="file"
                                        onChange={uploadImage}
                                    />
                                ) : (
                                    player.image
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

export default PlayersTeam;