import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import { config } from '../../../../Constant/environment';
import './News1.css';
import Cookies from 'js-cookies';
import { useNavigate } from 'react-router-dom';

const News1 = () => {
    const [image, setImage] = useState(null);
    const [editingNews, setEditingNews] = useState(null);
    const [news, setNews] = useState([]);
    const [newNews, setNewNews] = useState({
        title: '',
        content: '',
        type: '',
        image: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewNews((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleAddAdvertisement = () => {
        if (!newNews.title || !newNews.content) return;
        setNews((prevNews) => [...prevNews, newNews]);
    };

    const handleDeleteAdvertisement = (id) => {
        const updatedNews = news.filter((news) => news.id !== id);
        setNews(updatedNews);
    };

    const handleEditStart = (id) => {
        setEditingNews(id);
    };

    const handleEditChange = (event, id, field) => {
        const updatedNews = news.map((news) => {
            if (news.id === id) {
                return {
                    ...news,
                    [field]: event.target.value,
                };
            }
            return news;
        });
        setNews(updatedNews);
    };

    const handleEditEnd = async (id) => {
        const newsToUpdate = news.find((news) => news.id === id);
        if (!newsToUpdate) return;
        const formData = new FormData();
        formData.append('title', newsToUpdate.title);
        formData.append('content', newsToUpdate.content);
        formData.append('type', 'news');
        formData.append('image', image);
        formData.append('image_id', newsToUpdate.image_id);

        await axios
            .post(`${config.baseUrl}/${config.updateInformation}`, formData, {
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

        setEditingNews(null);
    };

    const handlePostData = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', newNews.title);
        formData.append('content', newNews.content);
        formData.append('type', 'news');
        formData.append('image', image);
        formData.append('image_id', newNews.image_id);

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
            .get(`${config.baseUrl}/${config.newsAll}`)
            .then((res) => {
                console.log(res.data.data);
                setNews(res.data.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="advertisements-list">
            <h2>News List</h2>
            <div className="add-advertisement-form">
                <form onSubmit={handlePostData}>
                    <input
                        type="text"
                        name="title"
                        value={newNews.title}
                        onChange={handleInputChange}
                        placeholder="Title"
                        className="input-field"
                    />
                    <input
                        type="text"
                        name="content"
                        value={newNews.content}
                        onChange={handleInputChange}
                        placeholder="Content"
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
                    <h3>Add New News</h3>
                </form>
            </div>
            <div className="advertisement-list">
                {news && news.map((advertisement) => (
                    <div key={advertisement.id} className="advertisement-item">
                        {editingNews === advertisement.id ? (
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

export default News1;
