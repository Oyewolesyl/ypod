import type { Product } from "@/lib/shop/products";
import { ProductModelViewer } from "./ProductModelViewer";

export function ProductGallery({ product, selectedColor }: { product: Product; selectedColor?: string }) {
  if (product.modelPath) {
    return <ProductModelViewer modelPath={product.modelPath} color={selectedColor} />;
  }

  return (
    <div className="gallery-grid" aria-label={`${product.name} gallery`}>
      {product.images.map((image, index) => (
        <article className="gallery-card" key={image}>
          <img src={image} alt={`${product.name} gallery image ${index + 1}`} />
          <p>{index === 0 ? product.tagline : product.features[index - 1] ?? product.name}</p>
        </article>
      ))}
    </div>
  );
}
