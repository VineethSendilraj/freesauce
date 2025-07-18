import ResourceTable from "@/components/resources/ResourceTable"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Builder Sauce
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover amazing free tools, credits, and resources to help you build your next project. 
          From AI APIs to design tools, we&apos;ve curated the best free resources for builders.
        </p>
      </div>

      {/* Resource Table */}
      <ResourceTable />
    </div>
  )
}
