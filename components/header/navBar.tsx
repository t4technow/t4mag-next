'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./navBar.module.css";
import { Category } from "@/utils/types";

type Props = {
	categories: Array<Category>;
};

const NavBar = ({ categories }: Props) => {
	const [isSticky, setIsSticky] = useState(false);

	const user = {
		is_authenticated: true,
		profile_pic: { url: "/favicon.ico" },
		is_author: true,
		is_superuser: true,
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 50) {
			setIsSticky(true);
		} else {
			setIsSticky(false);
		}
	};

	const handleClick = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		event.preventDefault();
	};

	return (
		<div
			className={`header-main header-main-style-1 navbar-wrap ${isSticky ? styles.sticky : ""
				}`}
			id="navbar-wrap"
		>
			<div className="container">
				<div className="row">
					<div className="d-flex align-items-center justify-content-between">
						<div className="site-branding">
							<Link className="dark-logo" href="/">
								<Image
									width="162"
									height="52"
									src="/images/logo/logo-dark.png"
									alt="t4technow"
									className="element"
								/>
							</Link>
							<Link className="light-logo" href="/">
								<Image
									width="162"
									height="52"
									src="/images/logo/logo-light.png"
									alt="t4technow"
									className="element"
								/>
							</Link>
						</div>

						<div className="main-menu">
							<nav className="main-menu__nav">
								<ul>
									<li className="main-menu__nav_sub list active">
										<Link className="animation" href="/">
											Home
										</Link>
									</li>
									<li className="main-menu__nav_sub list">
										<Link
											className="animation"
											href="/posts/"
											onClick={handleClick}
										>
											Features
										</Link>
										<ul className="main-menu__dropdown">
											<li className="main-menu__nav_sub">
												<a href="#">Top X</a>
												<ul>
													<li>
														<a href="#">Single Post 01</a>
													</li>
													<li>
														<a href="#">Single Post 02</a>
													</li>
													<li>
														<a href="#">Single Post 03</a>
													</li>
												</ul>
											</li>
											<li>
												<Link href="/authors/">Author Details</Link>
											</li>
										</ul>
									</li>
									<li className="main-menu__nav_sub list">
										<Link
											className="animation"
											href="/categories/"
											onClick={handleClick}
										>
											Categories{" "}
										</Link>
										<ul className="main-menu__dropdown">
											{categories.map(
												(category) =>
													category.post_count > 0 && (
														<li key={category.id}>
															<Link
																href="category/[category_slug]"
																as={`category/${category.slug}`}
															>
																{category.title}
															</Link>
														</li>
													)
											)}
										</ul>
									</li>
									<li className="main-menu__nav_sub list">
										<Link
											className="animation"
											href="/pages/"
											onClick={handleClick}
										>
											Pages
										</Link>
										<ul className="main-menu__dropdown">
											<li>
												<a href="about.html">About Us</a>
											</li>
											<li>
												<a href="contact.html">Contact Us</a>
											</li>
											<li>
												<a href="404.html">404</a>
											</li>
										</ul>
									</li>
								</ul>
							</nav>
						</div>

						<ul className="header-action-items">
							<li className="item">
								<span id="search-toggle">
									<i className="fas fa-search"></i>
								</span>
							</li>
							<li className="main-menu__nav_sub list">
								<span className="animation">
									{user.is_authenticated ? (
										user.profile_pic ? (
											<Image
												src={user.profile_pic.url}
												alt=""
												className="user-image circle"
												width={100}
												height={100}
											/>
										) : (
											<i className="far fa-user-circle"></i>
										)
									) : (
										<i className="far fa-user-circle"></i>
									)}
								</span>
								<ul className="main-menu__dropdown">
									{user.is_authenticated ? (
										<>
											<li>
												<Link href="">Profile</Link>
											</li>
											<li>
												<Link href="">Following Authors</Link>
											</li>
											{user.is_author || user.is_superuser ? (
												<li>
													<Link href="">Author Dashboard</Link>
												</li>
											) : (
												<li>
													<a href="">Become an author</a>
												</li>
											)}

											{user.is_superuser ? (
												<li>
													<Link href="/admin" as="/admin">
														Admin Dashboard
													</Link>
												</li>
											) : (
												<li>
													<a href="{% url 'user_logout' %}">Logout</a>
												</li>
											)}
										</>
									) : (
										<>
											<li>
												<a href="{% url 'user_login' %}">Login</a>
											</li>
											<li>
												<a href="{% url 'user_registration' %}">
													Become a member
												</a>
											</li>
											<li>
												<a href="{% url 'admin_login' %}">Admin</a>
											</li>
										</>
									)}
								</ul>
							</li>

							<li className="item humburger offcanvas-menu-btn menu-status-open">
								<span></span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
