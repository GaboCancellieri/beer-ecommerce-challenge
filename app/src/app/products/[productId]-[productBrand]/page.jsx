import axios from "axios";
import ProductDetails from "../../../components/layout/ProductDetails";
import useConfig from "../../../hooks/useConfig";

export default async function ProductDetailsPage({ params }) {
  try {
    const { productId } = params;
    const { API_URL } = useConfig();
    const productRes = await axios.get(`${API_URL}/api/products/${productId}`);
    const product = productRes.data;

    const variantPromises = product.skus.map((sku) =>
      axios.get(`${API_URL}/api/stock-price/${sku.code}`)
    );
    const variantResponses = await Promise.all(variantPromises);
    const variants = variantResponses.map((response) => response.data);

    return <ProductDetails product={product} variants={variants} />;
  } catch (error) {
    console.error(error);
    return <div>Something went wrong</div>;
  }
}
