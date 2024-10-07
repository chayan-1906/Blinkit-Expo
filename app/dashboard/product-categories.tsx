import {ActivityIndicator, View} from "react-native";
import {useCallback, useEffect, useState} from "react";
import BlinkitHeader from "@/app/components/ui/BlinkitHeader";
import {Color} from "ansi-fragments/build/fragments/Color";
import {Colors} from "@/utils/Constants";
import Sidebar from "@/app/components/category/Sidebar";
import {getAllCategoriesApi} from "@/service/productService";
import {Category} from "@/types/index.dt";
import {data} from "@remix-run/router/utils";

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

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        /** main container */
        <View className={'flex-1 bg-white'}>
            <BlinkitHeader title={selectedCategory?.name || 'Categories'}/>

            {/** sub container */}
            <View className={'flex-1 flex-row items-center'}>
                {
                    categoriesLoading ? (
                        <ActivityIndicator size={'small'} color={Colors.border}/>
                    ) : (
                        <Sidebar categories={categories} selectedCategory={selectedCategory} onCategoryPress={(category: Category) => setSelectedCategory(category)}/>
                    )
                }

                {/** center */}
                <View className={'flex-1 justify-center items-center'}>

                </View>
            </View>
        </View>
    );
}

export default ProductCategories;
