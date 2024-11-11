import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { config } from '../../../../Constant/environment';
import './Bosses.css';
import useGet from '../../../../custom Hooks/useGet';
import Cookies from 'js-cookies'
import { useNavigate } from 'react-router-dom';

const Bosses = () => {
  const [image1, setImage] = useState(null);
  const [editingBosses, setEditingBosses] = useState(null);
  const [bosses, setBosses] = useState([]);
  const [newBosses, setNewBosses] = useState({
    name: '',
    work: '',
    'jop-type': '',
    image: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBosses((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddbosses = () => {
    if (!newBosses.uuid || !newBosses.name) return;
    setBosses((prevbosses) => [...prevbosses, newBosses]);
  };

  
  const handleDeletebosses = (uuid) => {
    const updatedbosses = bosses.filter((bosses) => bosses.uuid !== uuid);
    setBosses(updatedbosses);
  };

  const handleEditStart = (uuid) => {
    setEditingBosses(uuid);
  };

  const handleEditChange = (event, uuid, field) => {
    const updatedbosses = bosses.map((bosses) => {
      if (bosses.uuid === uuid) {
        return {
          ...bosses,
          [field]: event.target.value,
        };
      }
      return bosses;
    });
    setBosses(updatedbosses);
  };

  const handleEditEnd = async (uuid) => {
    const bossesToUpdate = bosses.find((bosses) => bosses.uuid === uuid);
    if (!bossesToUpdate) return;
    const formData1 = new FormData();
    formData1.append('name', bossesToUpdate.play);
    formData1.append('employee_id', bossesToUpdate.uuid);
    formData1.append('image', image1); 

   await axios
      .post(`${config.baseUrl}/${config.updateBosses}`, formData1, {
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

    setEditingBosses(null);
  };
  const handlePostData = async(e) => {
    e.preventDefault();
    console.log(image1,Cookies.getItem('sport'));
    const formData = new FormData();
    formData.append('name', newBosses.name);
    formData.append('jop_type', newBosses.jop_type);
    formData.append('work', newBosses.work);    
    formData.append('sport_id', Cookies.getItem('sport'));
    formData.append('image', image1); // تم تعديل هنا

    await axios
      .post(`${config.baseUrl}/${config.addBosses}`, formData, {
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
      .get(`${config.baseUrl}/${config.stuff}`)
      .then((res) => {
        console.log(res.data.data.coaches);
        setBosses(res.data.data.coaches);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bosses-list">
      <h2>bosses List</h2>
      <div className="add-bosses-form">
        <form>
          <input
            type="text"
            name="name"
            value={newBosses.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="input-field"
          />
          <input
            type="text"
            name="jop_type"
            value={newBosses.jop_type}
            onChange={handleInputChange}
            placeholder="jop_type"
            className="input-field"
          />
          <input
            type="text"
            name="work"
            value={newBosses.work}
            onChange={handleInputChange}
            placeholder="work"
            className="input-field"
          />
         
          <input
            type="file"
            name="image"
            className="input-field"
            onChange={uploadImage}
            placeholder="Image"
          />

         
          <button type="submit" onClick={handlePostData} className="save-button">
            Save Data
          </button>
        </form>
            </div>
            <table className="bosses-table">
                <thead>
                    <tr>
                        <th>UUID</th>
                        <th>Name</th>
                        <th>work</th>
                        <th>image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bosses.map((bosses) => (
                        <tr key={bosses.uuid}>
                            <td>{bosses.uuid}</td>
                            <td>
                                {editingBosses === bosses.uuid ? (
                                    <input
                                        type="text"
                                        value={bosses.name}
                                        onChange={(event) => handleEditChange(event, bosses.uuid, "name")}
                                    />
                                ) : (
                                    bosses.name
                                )}
                            </td>
                          
                            <td>
                                {editingBosses === bosses.uuid ? (
                                    <input
                                        type="text"
                                        value={bosses.play}
                                        onChange={(event) => handleEditChange(event, bosses.uuid, "work")}
                                    />
                                ) : (
                                    bosses.work
                                )}
                            </td>
                           
                           
                           
                           
                           
                            <td>
                                {editingBosses === bosses.uuid ? (
                                    <input
                                        type="file"
                                        onChange={uploadImage}
                                    />
                                ) : (
                                    bosses.image
                                )}
                            </td>
                            <td>
                                {editingBosses === bosses.uuid ? (
                                    <span>
                                        <button
                                            type="button"
                                            onClick={() => {handleEditEnd(bosses.uuid)}}
                                            className="edit-button"
                                        >
                                            Done
                                        </button>
                                    </span>
                                ) : (
                                    <span>
                                        <button
                                            type="button"
                                            onClick={() => handleEditStart(bosses.uuid)}
                                            className="edit-button"
                                        >
                                            <FaEdit />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDeletebosses(bosses.uuid)}
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

export default Bosses;