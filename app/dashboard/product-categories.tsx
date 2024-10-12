import {ActivityIndicator, View} from "react-native";
import {useCallback, useEffect, useState} from "react";
import BlinkitHeader from "@/app/components/ui/BlinkitHeader";
import {Color} from "ansi-fragments/build/fragments/Color";
import {Colors} from "@/utils/Constants";
import Sidebar from "@/app/components/category/Sidebar";
import {getAllCategoriesApi, getAllProductsByCategoryIdApi} from "@/service/productService";
import {Category} from "@/types/index.dt";
import {data} from "@remix-run/router/utils";
import ProductList from "@/app/components/category/ProductList";
import BlinkitSafeAreaView from "@/app/components/global/BlinkitSafeAreaView";
import withCart from "@/app/components/cart/WithCart";

function ProductCategories() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<Category>(null);
    const [products, setProducts] = useState<any>([]);
    const [categoriesLoading, setCategoriesLoading] = useState<boolean>(true);
    const [productsLoading, setProductsLoading] = useState<boolean>(false);

    const fetchCategories = async () => {
        try {
            setCategoriesLoading(true);
            const data = await getAllCategoriesApi();
            setCategories(data.categories);
            if (data?.categories && data.categories.length > 0) {
                setSelectedCategory(data.categories[0]);
            }
        } catch (error) {
            console.log('Error fetching categories:', error, '❌');
        } finally {
            setCategoriesLoading(false);
        }
    }

    const fetchProducts = async () => {
        try {
            setProductsLoading(true);
            const data = await getAllProductsByCategoryIdApi(selectedCategory?._id);
            setProducts(data.products);
        } catch (error) {
            console.log('Error fetching products:', error, '❌');
        } finally {
            setProductsLoading(false);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        if (categories.length !== 0 && selectedCategory) fetchProducts();
    }, [selectedCategory]);

    return (
        /** main container */
        <BlinkitSafeAreaView className={'flex-1'}>
            <BlinkitHeader title={selectedCategory?.name || 'Categories'} search/>

            <View className={'flex w-full h-full justify-center items-center'}>
                {
                    categoriesLoading ? (
                        <ActivityIndicator size={'small'} color={Colors.border}/>
                    ) : (
                        /** sub container */
                        <View className={'flex flex-row w-full justify-center items-center'}>
                            <Sidebar categories={categories} selectedCategory={selectedCategory} onCategoryPress={(category: Category) => setSelectedCategory(category)}/>

                            {/** product list for selected category */}
                            <View className={'flex h-full w-[75%] justify-center items-center bg-backgroundSecondary'}>
                                {
                                    productsLoading ? (
                                        <ActivityIndicator size={'small'} color={Colors.border}/>
                                    ) : (
                                        <ProductList products={products}/>
                                    )
                                }
                            </View>
                        </View>
                    )
                }
            </View>
        </BlinkitSafeAreaView>
    );
}

export default withCart(ProductCategories);
