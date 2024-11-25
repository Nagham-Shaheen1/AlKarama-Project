import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../Constant/environment";
import usePost from "../../custom Hooks/usePost";
import {
	Advertisements,
	BestGoals,
	Championships,
	Footer,
	LastNews,
	MatchTable,
	MatchesNexts,
	TopOfNewsPage,
} from "../../Sections";
import { Navbar, NextMatch } from "../../component";
import Cookies from "js-cookies";

const Home = () => {
	const [news, setNews] = useState();
	useEffect(() => {
		axios
			.get(`${config.baseUrl}/${config.newsAll}`)
			.then((res) => {
				console.log(res.data.data);
				setNews(res.data.data);
			})
			.catch((err) => console.log(err));
	}, []);

	const [data, postFunc] = usePost(config.nextMatch, {
		sport: Cookies.getItem("sport"),
	});
	useEffect(() => {
		postFunc();
		console.log(data);
	}, []);

	return (
		<div>
			<div className="nav container-fluid flex-column row p-0 m-0">
				<Navbar />
			</div>
			<div className="container">
				<Advertisements />
				<div className="slider-home">
					<TopOfNewsPage a={news && news} valid={false} />
				</div>
				<div className="next-match">
					<NextMatch data={data && data} />
				</div>
				<div className="last-news">
					<LastNews data={news && news} />
				</div>
				<div className="matches-table">
					<MatchTable dataMatch1={news && news} />
				</div>
				<div className="matches-nexts">
					<MatchesNexts />
				</div>
				<div className="best-goals">
					<BestGoals data={news && news} />
				</div>
			</div>
			<div className="footer">
				<Footer />
			</div>
		</div>
	);
};

export default Home;