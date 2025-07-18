import ResourceTable from "@/components/resources/ResourceTable"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-8 border border-blue-200">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Trusted by 5,000+ builders
          </div>

          <h1 className="text-6xl font-bold text-gray-900 mb-16 tracking-tight leading-tight">
            Find anything you need<br/>
            <span className="text-gray-600">to build for free</span>
          </h1>
        </div>

        {/* Resource Table */}
        <ResourceTable />
      </div>
    </div>
  )
}
