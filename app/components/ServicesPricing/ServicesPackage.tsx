import React from 'react'

export const ServicesPackage = () => {
  return (
      <div className="max-w-6xl mx-auto pb-14">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Service Packages
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-800 text-left text-gray-300">
            <thead>
              <tr className="bg-[#111827] text-center">
                <th className="p-6 border border-gray-800"></th>
                <th className="p-6 border border-gray-800 text-green-400">
                  Static Website
                </th>
                <th className="p-6 border border-gray-800 text-blue-400">
                  WordPress
                </th>
                <th className="p-6 border border-gray-800 text-purple-400">
                  React / Next.js
                </th>
                <th className="p-6 border border-gray-800 text-pink-400">
                  Shopify
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Price Row */}
              <tr className="text-center bg-[#0f172a]">
                <td className="p-6 border border-gray-800 font-semibold text-white">
                  Starting Price
                </td>
                <td className="p-6 border border-gray-800 text-xl font-bold">
                  ₹25,000
                </td>
                <td className="p-6 border border-gray-800 text-xl font-bold">
                 ₹45,000
                </td>
                <td className="p-6 border border-gray-800 text-xl font-bold">
                  ₹95,000+
                </td>
                <td className="p-6 border border-gray-800 text-xl font-bold">
                  ₹60,000
                </td>
              </tr>

              {/* Best For */}
              <tr>
                <td className="p-6 border border-gray-800 font-semibold text-white">
                  Best For
                </td>
                <td className="p-6 border border-gray-800">
                  Landing Pages, Portfolio
                </td>
                <td className="p-6 border border-gray-800">
                  Business Websites, Blogs
                </td>
                <td className="p-6 border border-gray-800">
                  Startups, SaaS, Web Apps
                </td>
                <td className="p-6 border border-gray-800">
                  E-commerce Brands
                </td>
              </tr>

              {/* Responsive */}
              <tr>
                <td className="p-6 border border-gray-800 font-semibold text-white">
                  Fully Responsive
                </td>
                <td className="p-6 border border-gray-800 text-center">✔</td>
                <td className="p-6 border border-gray-800 text-center">✔</td>
                <td className="p-6 border border-gray-800 text-center">✔</td>
                <td className="p-6 border border-gray-800 text-center">✔</td>
              </tr>

              {/* TypeScript */}
              <tr>
                <td className="p-6 border border-gray-800 font-semibold text-white">
                  TypeScript Support
                </td>
                <td className="p-6 border border-gray-800 text-center">—</td>
                <td className="p-6 border border-gray-800 text-center">Optional</td>
                <td className="p-6 border border-gray-800 text-center">✔</td>
                <td className="p-6 border border-gray-800 text-center">—</td>
              </tr>

              {/* SEO */}
              <tr>
                <td className="p-6 border border-gray-800 font-semibold text-white">
                  SEO Optimized
                </td>
                <td className="p-6 border border-gray-800 text-center">✔</td>
                <td className="p-6 border border-gray-800 text-center">✔</td>
                <td className="p-6 border border-gray-800 text-center">✔</td>
                <td className="p-6 border border-gray-800 text-center">✔</td>
              </tr>

              {/* Delivery */}
              <tr>
                <td className="p-6 border border-gray-800 font-semibold text-white">
                  Delivery Time
                </td>
                <td className="p-6 border border-gray-800 text-center">
                  5-15 Days
                </td>
                <td className="p-6 border border-gray-800 text-center">
                  10-15 Days
                </td>
                <td className="p-6 border border-gray-800 text-center">
                  3-4 Weeks
                </td>
                <td className="p-6 border border-gray-800 text-center">
                  3-5 Weeks
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  )
}
