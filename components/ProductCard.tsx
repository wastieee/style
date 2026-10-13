import Image from "next/image";
import type { Product } from "@/data/products";

type ProductCardProps = Product;

export default function ProductCard({
  image,
  title,
  description,
  price,
}: ProductCardProps) {
  return (
    <article className="flex h-full w-full flex-col rounded-[32px] bg-white p-5">
      <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[20px] bg-photo">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="h-full w-full object-contain"
        />
      </div>

      <h3 className="mt-6 font-title text-2xl font-extrabold lowercase leading-tight text-ink">
        {title}
      </h3>

      <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-slate-700">
        {description}
      </p>

      <p className="mt-2 font-body text-sm text-slate-700">{price} ₽</p>

      <button
        type="button"
        className="mt-4 self-start rounded-full bg-brand px-6 py-3 font-body text-xs font-semibold uppercase text-white transition-colors duration-200 hover:bg-brand-dark"
      >
        в корзину
      </button>
    </article>
  );
}
