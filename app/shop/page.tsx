import { CartDrawer } from "@/components/shop/CartDrawer";
import { ProductCard } from "@/components/shop/ProductCard";
import { ShopHero } from "@/components/shop/ShopHero";
import { ShopNav } from "@/components/shop/ShopNav";
import { products } from "@/lib/shop/products";

export default function ShopPage() {
  return (
    <main className="shop-shell">
      <ShopNav />
      <div className="shop-page">
        <ShopHero />

        <section id="products" className="shop-section">
          <p className="section-kicker">products</p>
          <h2>sleep audio, bedside control, and customization in one system.</h2>
          <div className="shop-grid">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </section>

        <section className="shop-section custom-teaser" aria-labelledby="customization-title">
          <div>
            <p className="section-kicker">customization</p>
            <h2 id="customization-title">Make it yours.</h2>
            <p>Choose colors, wraps, and personal design options built for your sleep setup.</p>
            <div className="shop-actions">
              <a className="shop-button" href="/shop/custom-wraps">
                Customize YPOD
              </a>
            </div>
          </div>
          <div className="custom-swatches" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </section>

        <section className="shop-section feature-strip" aria-label="shop feature strip">
          <article>
            <p className="section-kicker">sleep</p>
            <h3>Designed for sleep</h3>
          </article>
          <article>
            <p className="section-kicker">wraps</p>
            <h3>Personalized wraps</h3>
          </article>
          <article>
            <p className="section-kicker">fit</p>
            <h3>Premium comfort</h3>
          </article>
          <article>
            <p className="section-kicker">remote</p>
            <h3>Calm bedside control</h3>
          </article>
        </section>
      </div>
      <CartDrawer />
    </main>
  );
}
