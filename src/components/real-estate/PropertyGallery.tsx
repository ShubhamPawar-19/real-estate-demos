import { ArrowUpRight } from "lucide-react";

type GalleryItem = {
  image: string;
  label: string;
};

type Props = {
  gallery: GalleryItem[];
};

export function PropertyGallery({ gallery }: Props) {
  return (
    <div className="mt-12">
      <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2">
        {gallery.map((item, index) => (
          <div
            key={item.image}
            className={`group relative overflow-hidden rounded-xl bg-black/5 ${
              index === 0
                ? "md:col-span-7 md:row-span-2"
                : "md:col-span-5"
            }`}
          >
            <img
              src={item.image}
              alt={`${item.label} property space`}
              className={`w-full object-cover transition duration-700 ease-out group-hover:scale-[1.025] ${
                index === 0
                  ? "aspect-4/3 h-full min-h-105"
                  : "aspect-video"
              }`}
            />

            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/55 via-black/10 to-transparent p-5">
              <div className="flex items-end justify-between gap-4">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/85">
                  {item.label}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-[#181816] opacity-0 transition duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}