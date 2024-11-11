import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { config } from '../../../../Constant/environment';
import Cookies from 'js-cookies'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
const VideosForFan1 = () => {
  const [image1, setImage] = useState(null);
  const [editingVideo, setEditingVideo] = useState(null);
  const [video, setVideo] = useState([]);
  const [associationOptions, setAssociationOptions] = useState([]);
  const [newVideo, setNewVideo] = useState({
    url: '',
    description: '',
    association_id: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewVideo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddPlayer = () => {
    if (!newVideo.uuid || !newVideo.name) return;
    setVideo((prevvideo) => [...prevvideo, newVideo]);
  };


  const handleDeletePlayer = (uuid) => {
    const updatedvideo = video.filter((player) => player.uuid !== uuid);
    setVideo(updatedvideo);
  };

  const handleEditStart = (uuid) => {
    setEditingVideo(uuid);
  };

  const handleEditChange = (event, uuid, field) => {
    const updatedvideo = video.map((video) => {
      if (video.uuid === uuid) {
        return {
          ...video,
          [field]: event.target.value,
        };
      }
      return video;
    });
    setVideo(updatedvideo);
  };

  const handleEditEnd = async (uuid) => {
    const videoToUpdate = video.find((video) => video.uuid === uuid);
    if (!videoToUpdate) return;
    const formData1 = new FormData();
    formData1.append('url', videoToUpdate.url);
    formData1.append('description', videoToUpdate.description);
    formData1.append('association_id', videoToUpdate.association_id);

    await axios
      .post(`${config.baseUrl}/${config.updateVideo}`, formData1, {
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

    setEditingVideo(null);
  };
  const handlePostData = async (e) => {
    e.preventDefault();
    console.log(image1);
    const formData = new FormData();
    formData.append('url', newVideo.url);
    formData.append('description', newVideo.description);
    formData.append('association_id', newVideo.association_id);

    await axios
      .post(`${config.baseUrl}/${config.addVideo}`, formData, {
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
      .get(`${config.baseUrl}/${config.allvideo}`)
      .then((res) => {
        console.log(res.data.data);
        setVideo(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="player-list">
      <h2>video list</h2>
      <div className="add-player-form">
        <form>

          <input
            type="number"
            name="url"
            value={newVideo.url}
            onChange={handleInputChange}
            placeholder="Height"
            className="input-field"
          />

          <input
            type="text"

            name="description"
            value={newVideo.description}
            onChange={handleInputChange}
            placeholder="Description"
            className="input-field"
          />
          <input
            type="text"
            name="association_id"
            value={newVideo.association_id}
            onChange={handleInputChange}
            placeholder="association_id"
            className="association_id"
          />

          <button type="button" onClick={handleAddPlayer} className="add-button">
            <FaPlus />
            Add video
          </button>
          <button type="submit" onClick={handlePostData} className="save-button">
            Save Data
          </button>
        </form>
      </div>
      <table className="player-table">
        <thead>
          <tr>
            <th>Association_id</th>
            <th>Url</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {video.map((player) => (
            <tr key={player.uuid}>


              <select
                name="association_id"
                value={newVideo.association_id}
                onChange={handleInputChange}
                className="association_id"
              >
                {associationOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.name}
                  </option>
                ))}
              </select>
              <td>
                {editingVideo === player.uuid ? (
                  <input
                    type="number"
                    value={player.url}
                    onChange={(event) => handleEditChange(event, player.uuid, "url")}
                  />
                ) : (
                  player.url
                )}
              </td>
              <td>
                {editingVideo === player.uuid ? (
                  <input
                    type="text"
                    value={player.description}
                    onChange={(event) => handleEditChange(event, player.uuid, "description")}
                  />
                ) : (
                  player.description
                )}
              </td>




              <td>
                {editingVideo === player.uuid ? (
                  <span>
                    <button
                      type="button"
                      onClick={() => { handleEditEnd(player.uuid) }}
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
  )
}

export default VideosForFan1