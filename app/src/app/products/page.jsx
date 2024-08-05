import axios from 'axios';
import { ProductList, ErrorHandler } from '../../components/layout';
import useConfig from '../../hooks/useConfig';
import { parseError } from '../../utils/format';

export default async function ProductListingPage() {
  const { API_URL } = useConfig();

  let products = [];
  let Component = null;

  try {
    const res = await axios.get(`${API_URL}/api/products`);
    products = res.data;
    Component = <ProductList products={products} />;
  } catch (err) {
    console.error(err);
    Component = <ErrorHandler error={parseError(err)} />;
  }

  return <div>{Component}</div>;
}
