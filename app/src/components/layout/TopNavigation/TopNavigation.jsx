'use client';
import { usePathname } from 'next/navigation';
import DefaultNav from './DefaultNav';
import ProductDetailNav from './ProductDetailNav';

/**
 * TopNavigation component.
 *
 * This component represents the top navigation bar of the application. It conditionally renders
 * either the `ProductDetailNav` or `DefaultNav` component based on the current pathname.
 *
 * @returns {JSX.Element} The rendered top navigation component.
 */
export default function TopNavigation() {
  const pathname = usePathname();
  const isDetailPage = pathname.includes('/products/');

  return isDetailPage ? <ProductDetailNav /> : <DefaultNav />;
}
