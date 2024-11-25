import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { config } from '../../../../Constant/environment';
import './Advertisements.css';
import Cookies from 'js-cookies';
import { useNavigate } from 'react-router-dom';

const Advertisements = () => {
    const [image, setImage] = useState(null);
    const [editingAdvertisement, setEditingAdvertisement] = useState(null);
    const [advertisements, setAdvertisements] = useState([]);
    const [newAdvertisement, setNewAdvertisement] = useState({
        title: '',
        content: '',
        type: '',
        image: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewAdvertisement((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAddAdvertisement = () => {
        if (!newAdvertisement.title || !newAdvertisement.content) return;
        setAdvertisements((prevAdvertisements) => [...prevAdvertisements, newAdvertisement]);
    };

    const handleDeleteAdvertisement = (id) => {
        const updatedAdvertisements = advertisements.filter((advertisement) => advertisement.id !== id);
        setAdvertisements(updatedAdvertisements);
    };

    const handleEditStart = (id) => {
        setEditingAdvertisement(id);
    };

    const handleEditChange = (event, id, field) => {
        const updatedAdvertisements = advertisements.map((advertisement) => {
            if (advertisement.id === id) {
                return {
                    ...advertisement,
                    [field]: event.target.value,
                };
            }
            return advertisement;
        });
        setAdvertisements(updatedAdvertisements);
    };

    const handleEditEnd = async (id) => {
        const advertisementToUpdate = advertisements.find((advertisement) => advertisement.id === id);
        if (!advertisementToUpdate) return;
        const formData = new FormData();
        formData.append('title', advertisementToUpdate.title);
        formData.append('content', advertisementToUpdate.content);
        formData.append('type', advertisementToUpdate.type);
        formData.append('image', image);
        formData.append('image_id', advertisementToUpdate.image_id);

        await axios
            .post(`${config.baseUrl}/${config.updateAdvertisement}`, formData, {
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

        setEditingAdvertisement(null);
    };

    const handlePostData = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', newAdvertisement.title);
        formData.append('content', newAdvertisement.content);
        formData.append('type', newAdvertisement.type);
        formData.append('image', image);
        formData.append('image_id', newAdvertisement.image_id);

        await axios
            .post(`${config.baseUrl}/${config.addInformation}`, formData, {
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
            .get(`${config.baseUrl}/${config.sliders}`)
            .then((res) => {
                console.log(res.data.data);
                setAdvertisements(res.data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="advertisements-list">
            <h2>Advertisements List</h2>
            <div className="add-advertisement-form">
                <form onSubmit={handlePostData}>
                    <input
                        type="text"
                        name="title"
                        value={newAdvertisement.title}
                        onChange={handleInputChange}
                        placeholder="Title"
                        className="input-field"
                    />
                    <input
                        type="text"
                        name="content"
                        value={newAdvertisement.content}
                        onChange={handleInputChange}
                        placeholder="Content"
                        className="input-field"
                    />
                    <input
                        type="text"
                        name="type"
                        value={newAdvertisement.type}
                        onChange={handleInputChange}
                        placeholder="Type"
                        className="input-field"
                    />
                    <input
                        type="file"
                        name="image"
                        onChange={uploadImage}
                        className="input-field"
                    />
                    <button type="submit" className="btn-submit">
                        Submit
                    </button>
                    <h3>Add New Advertisement</h3>
                </form>
            </div>
            <div className="advertisement-list">
                {advertisements && advertisements.map((advertisement) => (
                    <div key={advertisement.id} className="advertisement-item">
                        {editingAdvertisement === advertisement.id ? (
                            <div className="edit-mode">
                                <input
                                    type="text"
                                    value={advertisement.title}
                                    onChange={(e) => handleEditChange(e, advertisement.id, 'title')}
                                    className="input-field"
                                />
                                <input
                                    type="text"
                                    value={advertisement.content}
                                    onChange={(e) => handleEditChange(e, advertisement.id, 'content')}
                                    className="input-field"
                                />
                                <input
                                    type="text"
                                    value={advertisement.type}
                                    onChange={(e) => handleEditChange(e, advertisement.id, 'type')}
                                    className="input-field"
                                />
                                <input
                                    type="file"
                                    onChange={uploadImage}
                                    className="input-field"
                                />
                                <button
                                    className="btn-save"
                                    onClick={() => handleEditEnd(advertisement.id)}
                                >
                                    Save
                                </button>
                            </div>
                        ) : (
                            <div className="view-mode">
                                <h4>{advertisement.title}</h4>
                                <p>{advertisement.content}</p>
                                <p>{advertisement.type}</p>
                                <img src={advertisement.image} width={'200px'} height={'100px'} alt="Advertisement" />
                                <div className="edit-delete-icons">
                                    <FaEdit
                                        className="edit-icon"
                                        onClick={() => handleEditStart(advertisement.id)}
                                    />
                                    <FaTrash
                                        className="delete-icon"
                                        onClick={() => handleDeleteAdvertisement(advertisement.id)}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Advertisements;
