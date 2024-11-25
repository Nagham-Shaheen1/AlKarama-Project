import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { config } from "../../../../Constant/environment";
import "./News1.css";
import Cookies from "js-cookies";
import { useNavigate } from "react-router-dom";

const News1 = () => {
	const [image, setImage] = useState(null);
	const [editingNews, setEditingNews] = useState(null);
	const [news, setNews] = useState([]);
	const [newNews, setNewNews] = useState({
		title: "",
		content: "",
		type: "",
		image: "",
	});
	const [update, setUpdate] = useState(false);

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
		const updatedNews = news.filter((news) => news.uuid !== id);
		setNews(updatedNews);
	};

	const handleEditStart = (id) => {
		setEditingNews(id);
	};

	const handleEditChange = (event, id, field) => {
		const updatedNews = news.map((news) => {
			if (news.uuid === id) {
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
		const newsToUpdate = news.find((news) => news.uuid === id);
		if (!newsToUpdate) return;
		const formData = new FormData();
		formData.append("title", newsToUpdate.title);
		formData.append("information_id", newsToUpdate.uuid);
		formData.append("content", newsToUpdate.content);
		formData.append("type", "news");
		formData.append("image", image);
		formData.append("image_id", newsToUpdate.image_id);
		setTimeout(() => {
			setUpdate(!update);
		}, 500);

		await axios
			.post(`${config.baseUrl}/${config.updateInformation}`, formData, {
				headers: {
					Authorization: `Bearer ${Cookies.getItem("token")}`,
				},
			})
			.then((res) => {})
			.catch((err) => {
				console.log(err);
			});

		setEditingNews(null);
	};

	const handlePostData = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("title", newNews.title);
		formData.append("content", newNews.content);
		formData.append("type", "news");
		formData.append("image", image);
		formData.append("image_id", newNews.image_id);

		await axios
			.post(`${config.baseUrl}/${config.addInformation}`, formData, {
				headers: {
					Authorization: `Bearer ${Cookies.getItem("token")}`,
				},
			})
			.then((res) => {})
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
				setNews(res.data.data);
			})
			.catch((err) => console.log(err));
	}, [update]);

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
						placeholder="title"
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
					<button
						type="submit"
						className="btn-submit"
					>
						Submit
					</button>
					<h3>Add New News</h3>
				</form>
			</div>
			<div className="advertisement-list">
				{news &&
					news.map((one_news) => (
						<div
							key={one_news.uuid}
							className="advertisement-item"
						>
							{editingNews === one_news.uuid ? (
								<div
									className="edit-mode"
									key={one_news.uuid}
								>
									<input
										type="text"
										value={one_news.title}
										onChange={(e) =>
											handleEditChange(e, one_news.uuid, "title")
										}
										className="input-field"
									/>
									<input
										type="text"
										value={one_news.content}
										onChange={(e) =>
											handleEditChange(e, one_news.uuid, "content")
										}
										className="input-field"
									/>

									<input
										type="file"
										onChange={uploadImage}
										className="input-field"
									/>
									<img src={one_news.image} />
									<button
										className="btn-save"
										onClick={() => handleEditEnd(one_news.uuid)}
									>
										Save
									</button>
								</div>
							) : (
								<div className="view-mode">
									<h4>{one_news.title}</h4>
									<p>{one_news.content}</p>
									<img
										src={one_news.image}
										width={"200px"}
										height={"100px"}
										alt="Advertisement"
									/>
									<div className="edit-delete-icons">
										<FaEdit
											className="edit-icon"
											onClick={() => handleEditStart(one_news.uuid)}
										/>
										<FaTrash
											className="delete-icon"
											onClick={() => handleDeleteAdvertisement(one_news.id)}
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
