import products from '@/components/products/product-details';
import ProductDetailClient from '@/components/products/ProductDetailClient';

export default async function Page({ searchParams }: { searchParams?: Promise<{ [key: string]: string | string[] | undefined }> }) {
    const params = await searchParams;
    const idParam = Array.isArray(params?.id) ? params?.id[0] : params?.id;
    const id = Number(idParam || 0);
    const product = products.find((p) => p.id === id) || products[0];
    const related = products.filter(p => p.id !== product.id).slice(0, 4);

    return <ProductDetailClient product={product} related={related} />;
}
