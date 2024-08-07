'use client';
import { usePathname } from 'next/navigation';
import DefaultNav from './DefaultNav';
import ProductDetailNav from './ProductDetailNav';

export default function TopNavigation() {
  const pathname = usePathname();
  const isDetailPage = pathname.includes('/products/');

  return isDetailPage ? <ProductDetailNav /> : <DefaultNav />;
}
