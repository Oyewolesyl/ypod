"use client";

import Link from "next/link";
import { useCart } from "@/lib/shop/cart";

export function ShopNav() {
  const { items, openCart } = useCart();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="shop-nav">
      <Link className="shop-brand" href="/">
        ypod
      </Link>
      <nav className="shop-nav-links" aria-label="shop navigation">
        <Link href="/shop">shop</Link>
        <Link href="/pitch-room">pitch room</Link>
        <button type="button" onClick={openCart} aria-label={`open cart with ${count} items`}>
          cart {count > 0 ? `(${count})` : ""}
        </button>
      </nav>
    </header>
  );
}
