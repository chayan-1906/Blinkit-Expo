import {APIs} from "@/constants/ApiEndpoints";
import axios from "axios";
import {Category, Product} from "@/types/index.dt";

export const getAllCategoriesApi = async () => {
    try {
        console.log('getAllCategoriesApi called 🍏🍎🍋🍊🍞', APIs.getCategories);
        const response = await axios.get(APIs.getCategories);
        const {data: {categories}}: { data: { categories: Category[] } } = await axios.get(APIs.getCategories);

        console.log('categories fetched ✅:', JSON.stringify(categories), ' 🎉');
        return {categories};
    } catch (err: any) {
        console.log('getAllCategoriesApi ❌:', err.response?.data?.error);
    }
}

export const getAllProductsByCategoryIdApi = async (categoryId: string) => {
    try {
        console.log('getAllProductsByCategoryIdApi called 🍏🍎🍋🍊🍞', APIs.getProductByCategory(categoryId));
        const response = await axios.get(APIs.getProductByCategory(categoryId));
        const {data: {category, products}}: { data: { category: Category, products: Product[] } } = await axios.get(APIs.getProductByCategory(categoryId));

        console.log(`products fetched for ${category?.name} category ✅:`, JSON.stringify(products), ' 🎉');
        return {category, products};
    } catch (err: any) {
        console.log('getAllProductsByCategoryIdApi ❌:', err.response?.data?.error);
    }
}
