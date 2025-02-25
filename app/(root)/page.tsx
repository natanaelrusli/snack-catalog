import SnackCatalog from "@/components/SnackCatalog";

export default function Page() {
  return (
    <div className="pt-16 flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-8">Snack Catalog</h1>
      <SnackCatalog />
    </div>
  );
}
