import ResourceTable from "@/components/resources/ResourceTable"
import Image from "next/image"

export default function Home() {
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

          <div className="flex items-center justify-center gap-4 mb-3">
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Find anything you need<br/>
              <span className="text-gray-600">to build for free</span>
            </h1>
            <Image
              src="/images/labubu/labubu-3.png"
              alt="Labubu mascot"
              width={100}
              height={100}
              className="hidden md:block drop-shadow-lg"
            />
          </div>
          
          <p className="text-md text-gray-500 mb-6 max-w-xl mx-auto">
            Free tools, API credits, and resources for builders
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 pb-20 max-w-6xl relative">
        <div className="absolute left-0 top-10 opacity-60 hidden lg:block">
          <Image
            src="/images/labubu/labubu-4.png"
            alt="Labubu decoration"
            width={70}
            height={70}
            className="drop-shadow-lg"
          />
        </div>
        <div className="absolute right-0 top-20 opacity-60 hidden lg:block">
          <Image
            src="/images/labubu/labubu-5.png"
            alt="Labubu decoration"
            width={70}
            height={70}
            className="drop-shadow-lg"
          />
        </div>
        <ResourceTable />
      </div>
    </div>
  )
}
