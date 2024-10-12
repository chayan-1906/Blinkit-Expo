import {FlatList, StyleSheet, Text, View} from "react-native";
import {Product} from "@/types/index.dt";
import {Colors} from "@/utils/Constants";
import ProductItem from "@/app/components/category/ProductItem";

function ProductList({products}: { products: Product[] }) {
    return (
        <FlatList
            data={products}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item._id}
            style={{flex: 1, height: '100%', backgroundColor: Colors.backgroundSecondary, paddingHorizontal: 0, width: '100%'}}
            contentContainerStyle={styles.content} numColumns={2}
            renderItem={({item, index}: { item: Product, index: number }) => (
                <ProductItem product={item} index={index}/>
            )}
        />
    );
}

export default ProductList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: Colors.secondary,
    },
    content: {
        paddingHorizontal: 0,
        paddingTop: 10,
        paddingBottom: 100,
    },
});
