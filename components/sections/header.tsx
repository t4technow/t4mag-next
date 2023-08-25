import React from "react";
import NavBar from "../header/navBar";
import TopBar from "../header/topBar";
import { Category, Post } from "@/utils/types";
import { getCategories, getRecentPosts } from "@/services/apiService";

type Props = {
	recentPosts: Array<Post>;
	categories: Array<Category>;
};

const Header = async () => {

	const recentPosts: Post[] = await getRecentPosts();
	const categories: Category[] = await getCategories();

	return (
		<header className="rt-header sticky-on">
			<div id="sticky-placeholder"></div>
			<TopBar recentPosts={recentPosts} />

			<NavBar categories={categories} />
		</header>
	);
};

export default Header;
