import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo_alkarama.png";
import { Link } from "react-router-dom";
// facebook  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
//   <path d="M9.54623 5.865V8.613H7.53223V11.973H9.54623V21.959H13.6802V11.974H16.4552C16.4552 11.974 16.7152 10.363 16.8412 8.601H13.6972V6.303C13.6972 5.96 14.1472 5.498 14.5932 5.498H16.8472V2H13.7832C9.44323 2 9.54623 5.363 9.54623 5.865Z" fill="#CAD8DB"/>
//   </svg>

// youtube <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
//   <path d="M18.312 5.01663H6.645C4.355 5.01663 2.5 6.85163 2.5 9.11563V14.8836C2.5 17.1476 4.356 18.9836 6.645 18.9836H18.312C20.602 18.9836 22.457 17.1476 22.457 14.8836V9.11563C22.457 6.85163 20.601 5.01562 18.312 5.01562V5.01663ZM15.509 12.2796L10.052 14.8546C10.0187 14.8707 9.98192 14.878 9.94503 14.876C9.90815 14.874 9.87237 14.8626 9.84103 14.8431C9.8097 14.8235 9.78382 14.7964 9.7658 14.7641C9.74779 14.7318 9.73822 14.6956 9.738 14.6586V9.34963C9.73867 9.3125 9.74872 9.27614 9.76722 9.24395C9.78573 9.21176 9.81208 9.18477 9.84382 9.1655C9.87556 9.14624 9.91167 9.13532 9.94877 9.13377C9.98587 9.13221 10.0228 9.14008 10.056 9.15663L15.514 11.8916C15.5504 11.9098 15.5809 11.9378 15.602 11.9725C15.6232 12.0071 15.6341 12.0471 15.6336 12.0877C15.6331 12.1283 15.6211 12.168 15.5991 12.2021C15.577 12.2362 15.5458 12.2634 15.509 12.2806V12.2796Z" fill="#CAD8DB"/>
//   </svg>

//instagram <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
//   <path d="M16.517 2H8.447C6.87015 2.00185 5.35844 2.62914 4.24353 3.74424C3.12862 4.85933 2.50159 6.37115 2.5 7.948L2.5 16.018C2.50185 17.5948 3.12914 19.1066 4.24424 20.2215C5.35933 21.3364 6.87115 21.9634 8.448 21.965H16.518C18.0948 21.9631 19.6066 21.3359 20.7215 20.2208C21.8364 19.1057 22.4634 17.5938 22.465 16.017V7.947C22.4631 6.37015 21.8359 4.85844 20.7208 3.74353C19.6057 2.62862 18.0938 2.00159 16.517 2V2ZM20.457 16.017C20.457 16.5344 20.3551 17.0468 20.1571 17.5248C19.9591 18.0028 19.6689 18.4371 19.303 18.803C18.9371 19.1689 18.5028 19.4591 18.0248 19.6571C17.5468 19.8551 17.0344 19.957 16.517 19.957H8.447C7.40222 19.9567 6.40032 19.5415 5.66165 18.8026C4.92297 18.0638 4.508 17.0618 4.508 16.017V7.947C4.50827 6.90222 4.92349 5.90032 5.66235 5.16165C6.40122 4.42297 7.40322 4.008 8.448 4.008H16.518C17.5628 4.00827 18.5647 4.42349 19.3034 5.16235C20.042 5.90122 20.457 6.90322 20.457 7.948V16.018V16.017Z" fill="#CAD8DB"/>
//   <path d="M12.4823 6.81934C11.1137 6.82145 9.80184 7.36612 8.83421 8.33394C7.86658 9.30176 7.32216 10.6138 7.32031 11.9823C7.3219 13.3513 7.86634 14.6637 8.83421 15.6317C9.80209 16.5998 11.1144 17.1445 12.4833 17.1463C13.8524 17.1447 15.165 16.6002 16.1331 15.6321C17.1012 14.664 17.6457 13.3514 17.6473 11.9823C17.6452 10.6134 17.1003 9.30122 16.132 8.33353C15.1637 7.36584 13.8512 6.82166 12.4823 6.82034V6.81934ZM12.4823 15.1383C11.6456 15.1383 10.8431 14.8059 10.2514 14.2143C9.65971 13.6226 9.32731 12.8201 9.32731 11.9833C9.32731 11.1466 9.65971 10.3441 10.2514 9.75241C10.8431 9.16074 11.6456 8.82834 12.4823 8.82834C13.3191 8.82834 14.1216 9.16074 14.7132 9.75241C15.3049 10.3441 15.6373 11.1466 15.6373 11.9833C15.6373 12.8201 15.3049 13.6226 14.7132 14.2143C14.1216 14.8059 13.3191 15.1383 12.4823 15.1383Z" fill="#CAD8DB"/>
//   <path d="M17.6559 8.09509C18.3391 8.09509 18.8929 7.54127 18.8929 6.85809C18.8929 6.17492 18.3391 5.62109 17.6559 5.62109C16.9728 5.62109 16.4189 6.17492 16.4189 6.85809C16.4189 7.54127 16.9728 8.09509 17.6559 8.09509Z" fill="#CAD8DB"/>
// </svg>

// X <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//   <path d="M19.354 17.354l-4.354-4.354 4.354-4.354-2.646-2.646-4.354 4.354-4.354-4.354-2.646 2.646 4.354 4.354-4.354 4.354 2.646 2.646 4.354-4.354 4.354 4.354z"/>
//   </svg>

function Footer(props) {
	return (
		<div className="footer-card">
			<div className="footer-background">
				<hr></hr>
				<div className="logo-alkarama">
					<img
						src={require("../../assets/images/footer_logo.png")}
						alt="logo image1"
					/>
				</div>
				<div className="links-footer">
					<div className="col-text">
						<p className="header-footer-links">الكرامة</p>
						<p className="footer-links-text">
							<Link
								to="/news"
								className="footer-links-text"
							>
								الأخبار
							</Link>{" "}
						</p>
						<p className="footer-links-text">
							{" "}
							<Link
								to="/matches"
								className="footer-links-text"
							>
								المباريات
							</Link>
						</p>
						<p className="footer-links-text">
							<Link
								to="/about"
								className="footer-links-text"
							>
								حول النادي
							</Link>
						</p>
						<p className="footer-links-text"> اللاعبين</p>
					</div>
					<div className="col-text">
						<p className="header-footer-links">المساعدة</p>
						<p className="footer-links-text">
							<Link
								to="/contactus"
								className="footer-links-text"
							>
								{" "}
								إتصل بنا
							</Link>
						</p>
						<p className="footer-links-text"> الإبلاغ والشكاوي</p>
					</div>
					<div className="col-text">
						<p className="header-footer-links">حمل التطبيق</p>
						<div>
							<img
								src={require("../../assets/images/appstore.png")}
								alt="app store"
							/>
						</div>{" "}
						<div>
							<img
								src={require("../../assets/images/Vector.png")}
								alt="app store"
							/>
						</div>
					</div>
				</div>
				<div className="footer-icon">
					<p className="pis">
						اتصل بنا . سياسة الخصوصية . تفضيلات ملفات تعريف الإرتباط
					</p>
					<div className="footer-icons">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="24"
							viewBox="0 0 25 24"
							fill="none"
						>
							<path
								d="M9.54623 5.865V8.613H7.53223V11.973H9.54623V21.959H13.6802V11.974H16.4552C16.4552 11.974 16.7152 10.363 16.8412 8.601H13.6972V6.303C13.6972 5.96 14.1472 5.498 14.5932 5.498H16.8472V2H13.7832C9.44323 2 9.54623 5.363 9.54623 5.865Z"
								fill="#CAD8DB"
							/>
						</svg>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="24"
							viewBox="0 0 25 24"
							fill="none"
						>
							<path
								d="M18.312 5.01663H6.645C4.355 5.01663 2.5 6.85163 2.5 9.11563V14.8836C2.5 17.1476 4.356 18.9836 6.645 18.9836H18.312C20.602 18.9836 22.457 17.1476 22.457 14.8836V9.11563C22.457 6.85163 20.601 5.01562 18.312 5.01562V5.01663ZM15.509 12.2796L10.052 14.8546C10.0187 14.8707 9.98192 14.878 9.94503 14.876C9.90815 14.874 9.87237 14.8626 9.84103 14.8431C9.8097 14.8235 9.78382 14.7964 9.7658 14.7641C9.74779 14.7318 9.73822 14.6956 9.738 14.6586V9.34963C9.73867 9.3125 9.74872 9.27614 9.76722 9.24395C9.78573 9.21176 9.81208 9.18477 9.84382 9.1655C9.87556 9.14624 9.91167 9.13532 9.94877 9.13377C9.98587 9.13221 10.0228 9.14008 10.056 9.15663L15.514 11.8916C15.5504 11.9098 15.5809 11.9378 15.602 11.9725C15.6232 12.0071 15.6341 12.0471 15.6336 12.0877C15.6331 12.1283 15.6211 12.168 15.5991 12.2021C15.577 12.2362 15.5458 12.2634 15.509 12.2806V12.2796Z"
								fill="#CAD8DB"
							/>
						</svg>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="24"
							viewBox="0 0 25 24"
							fill="none"
						>
							<path
								d="M16.517 2H8.447C6.87015 2.00185 5.35844 2.62914 4.24353 3.74424C3.12862 4.85933 2.50159 6.37115 2.5 7.948L2.5 16.018C2.50185 17.5948 3.12914 19.1066 4.24424 20.2215C5.35933 21.3364 6.87115 21.9634 8.448 21.965H16.518C18.0948 21.9631 19.6066 21.3359 20.7215 20.2208C21.8364 19.1057 22.4634 17.5938 22.465 16.017V7.947C22.4631 6.37015 21.8359 4.85844 20.7208 3.74353C19.6057 2.62862 18.0938 2.00159 16.517 2V2ZM20.457 16.017C20.457 16.5344 20.3551 17.0468 20.1571 17.5248C19.9591 18.0028 19.6689 18.4371 19.303 18.803C18.9371 19.1689 18.5028 19.4591 18.0248 19.6571C17.5468 19.8551 17.0344 19.957 16.517 19.957H8.447C7.40222 19.9567 6.40032 19.5415 5.66165 18.8026C4.92297 18.0638 4.508 17.0618 4.508 16.017V7.947C4.50827 6.90222 4.92349 5.90032 5.66235 5.16165C6.40122 4.42297 7.40322 4.008 8.448 4.008H16.518C17.5628 4.00827 18.5647 4.42349 19.3034 5.16235C20.042 5.90122 20.457 6.90322 20.457 7.948V16.018V16.017Z"
								fill="#CAD8DB"
							/>

							<path
								d="M12.4823 6.81934C11.1137 6.82145 9.80184 7.36612 8.83421 8.33394C7.86658 9.30176 7.32216 10.6138 7.32031 11.9823C7.3219 13.3513 7.86634 14.6637 8.83421 15.6317C9.80209 16.5998 11.1144 17.1445 12.4833 17.1463C13.8524 17.1447 15.165 16.6002 16.1331 15.6321C17.1012 14.664 17.6457 13.3514 17.6473 11.9823C17.6452 10.6134 17.1003 9.30122 16.132 8.33353C15.1637 7.36584 13.8512 6.82166 12.4823 6.82034V6.81934ZM12.4823 15.1383C11.6456 15.1383 10.8431 14.8059 10.2514 14.2143C9.65971 13.6226 9.32731 12.8201 9.32731 11.9833C9.32731 11.1466 9.65971 10.3441 10.2514 9.75241C10.8431 9.16074 11.6456 8.82834 12.4823 8.82834C13.3191 8.82834 14.1216 9.16074 14.7132 9.75241C15.3049 10.3441 15.6373 11.1466 15.6373 11.9833C15.6373 12.8201 15.3049 13.6226 14.7132 14.2143C14.1216 14.8059 13.3191 15.1383 12.4823 15.1383Z"
								fill="#CAD8DB"
							/>
							<path
								d="M17.6559 8.09509C18.3391 8.09509 18.8929 7.54127 18.8929 6.85809C18.8929 6.17492 18.3391 5.62109 17.6559 5.62109C16.9728 5.62109 16.4189 6.17492 16.4189 6.85809C16.4189 7.54127 16.9728 8.09509 17.6559 8.09509Z"
								fill="#CAD8DB"
							/>
						</svg>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="25"
							height="24"
							viewBox="0 0 25 24"
							fill="none"
						>
							<path
								d="M22.5 5.90668C21.7504 6.23405 20.9565 6.44871 20.144 6.54368C20.9968 6.04291 21.638 5.24878 21.948 4.30968C21.14 4.78 20.2587 5.11128 19.341 5.28968C18.9545 4.88488 18.4897 4.56306 17.9748 4.34385C17.4598 4.12464 16.9056 4.01264 16.346 4.01468C14.08 4.01468 12.243 5.82468 12.243 8.05468C12.243 8.37068 12.279 8.67968 12.349 8.97468C10.7236 8.89737 9.13212 8.48208 7.67617 7.75531C6.22022 7.02855 4.93176 6.00626 3.893 4.75368C3.52883 5.36808 3.33742 6.06946 3.339 6.78368C3.3397 7.45164 3.50683 8.10891 3.82529 8.69607C4.14375 9.28323 4.6035 9.78179 5.163 10.1467C4.51248 10.1257 3.87602 9.952 3.305 9.63968V9.68968C3.305 11.6477 4.72 13.2807 6.595 13.6527C6.24261 13.7462 5.87958 13.7936 5.515 13.7937C5.25 13.7937 4.993 13.7687 4.742 13.7187C5.01008 14.5266 5.52311 15.231 6.20982 15.734C6.89653 16.237 7.72284 16.5137 8.574 16.5257C7.11407 17.6502 5.32182 18.2577 3.479 18.2527C3.147 18.2527 2.821 18.2327 2.5 18.1967C4.38125 19.3874 6.56259 20.018 8.789 20.0147C16.336 20.0147 20.462 13.8577 20.462 8.51868L20.448 7.99568C21.2529 7.42935 21.9481 6.72152 22.5 5.90668Z"
								fill="#CAD8DB"
							/>
						</svg>
					</div>
					<p className="pis">جميع الحقوق محفوظة لنادي الكرامة</p>
				</div>
				<hr></hr>
				<div className="sponsors">
					<p>SPONSORS</p>
					<div className="img-sponsors">
						<img
							src={logo}
							alt="sponsors img"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
