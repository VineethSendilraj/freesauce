import ResourceTable from "@/components/resources/ResourceTable"
import { textToBinary } from "@/lib/utils"

export default function Home() {
  const originalHeading = "Find anything you need";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="pt-12 pb-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-6 border border-blue-200">
            <div className="flex -space-x-3 mr-3">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face&auto=format"
                alt="Builder"
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=24&h=24&fit=crop&crop=face&auto=format"
                alt="Builder"
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=24&h=24&fit=crop&crop=face&auto=format"
                alt="Builder"
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
              />
            </div>
            Trusted by 5,000+ builders
          </div>

          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-3 tracking-tight leading-tight binary-text" aria-label={originalHeading}>
            {textToBinary(originalHeading)}<br/>
            <span className="text-gray-600">to build for free</span>
          </h1>

          <p className="text-md text-gray-500 mb-6 max-w-xl mx-auto">
            Free tools, API credits, and resources for builders
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 pb-20 max-w-6xl">
        <ResourceTable />
      </div>
    </div>
  )
}
