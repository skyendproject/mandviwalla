import products from '@/components/products/product-details';
import ProductDetailClient from '@/components/products/ProductDetailClient';

export default function Page({ searchParams }: { searchParams?: { [key: string]: string | string[] | undefined } }) {
    const idParam = Array.isArray(searchParams?.id) ? searchParams?.id[0] : searchParams?.id;
    const id = Number(idParam || 0);
    const product = products.find((p) => p.id === id) || products[0];
    const related = products.filter(p => p.id !== product.id).slice(0, 4);

    return <ProductDetailClient product={product} related={related} />;
}
