import { Card, CardContent } from "@/components/ui/card";
import { ImageCarousel } from "@/components/ImageCarousel";
import { snacks } from "@/data/snacks";
import { formatPrice } from "@/lib/price-utils";

export default function SnackCatalog() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {snacks.map((snack) => (
          <Card key={snack.id} className="overflow-hidden">
            <CardContent className="p-0">
              <ImageCarousel images={snack.images} alt={snack.name} />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">{snack.name}</h2>
                <ul className="space-y-2">
                  {snack.variants.map((variant) => (
                    <li
                      key={variant.weight}
                      className="flex justify-between items-center text-sm"
                    >
                      <span>{variant.weight}g</span>
                      <span className="font-semibold">
                        IDR {formatPrice(variant.price)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
