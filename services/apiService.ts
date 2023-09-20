import { baseUrl } from "@/config/constants";
import { Category, CategoryDetails, FullPost, Post, Tag, TagDetails } from "@/utils/types";

export const fetchData = async<T>(url: string): Promise<T | null> => {
	try {
		const response = await fetch(baseUrl+url, {
			next: {
				revalidate: 10
			}
		});
		return response.json() as T;
	} catch (error) {
		console.error("Error fetching data:", error);
		return null;
	}
};

export const getPosts = () => fetchData<Post[]>("/posts/");
export const getAllPosts = () => fetchData<Post[]>("");
export const getRecentPosts = () => fetchData<Post[]>("/posts/recent/");
export const getPopularPosts = () => fetchData<Post[]>("/posts/popular/");
export const getPostDetails = (slug: string) => fetchData<FullPost>("/posts/"+slug)

export const getCategories = () => fetchData<Category[]>("/categories/");
export const getCategoryLatestPost = () => fetchData<Post[]>('categories/posts/latest/')
export const getCategoryDetails = (url?: string | string[]) =>
	fetchData<CategoryDetails>(`/categories/${url}/`);

export const getTags = () => fetchData<Tag[]>("/tags/");
export const getTagDetails = (url?: string | string[]) =>
	fetchData<TagDetails>(`/tags/${url}/`);
