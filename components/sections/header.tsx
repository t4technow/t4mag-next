import React, { Suspense } from "react";
import NavBar from "../header/navBar";
import TopBar from "../header/topBar";
import { getCategories, getRecentPosts } from "@/services/apiService";

const Header = async () => {

	const recentPosts = await getRecentPosts();
	const categories = await getCategories();

	return (
		<header className="rt-header sticky-on">
			<div id="sticky-placeholder"></div>
			<Suspense fallback='loading...'>
				<TopBar recentPosts={recentPosts} />
			</Suspense>
			<Suspense fallback='loading...'>
				<NavBar categories={categories} />
			</Suspense>
		</header>
	);
};

export default Header;
