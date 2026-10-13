import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="w-full rounded-full bg-brand px-12 py-4 font-body text-sm font-semibold uppercase text-white transition-colors duration-200 hover:bg-brand-dark sm:w-auto"
          >
            смотреть всю коллекцию
          </button>
        </div>
      </div>
    </main>
  );
}
