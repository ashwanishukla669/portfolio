"use client"

type Props = {
    active: string;
    setActive: (value: string) => void;
}

export const PortfolioTabs = ({ active, setActive }: Props) => {
    const tabs = ["all", "static", "wordPress", "shopify", "react"];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
        {tabs.map((tab) => (
            <button 
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-3 sm:px-4 py-2 rounded-full cursor-pointer font-bold capitalize text-sm transition-all ${
                    active === tab 
                    ? "bg-emerald-500 text-black hover:bg-emerald-400" 
                    : "bg-gray-800 text-gray-300 hover:bg-emerald-400 hover:text-black"
                }`}
            >{tab}</button>
        ))}
    </div>
  )
}
