"use client"
import { useRouter } from "next/navigation" 

export default function Price(){

      const features = [
        { items: "Chat / Conversation" },
        { items: "Knowledge & Search" },
        { items: "Productivity Tools" },
        { items: "Content Creation" },
        { items: "Image / Media AI" },
        { items: "Voice & Speech" },
        { items: "Chat Support" },
        { items: "Customization" },
        { items: "Enterprise Support" },
        { items: "Investments" },
        { items: "Advanced AI Features" },
        { items: "API access for developers" },
      ];
    
      const plans = [
        { name: "Price-Base", limit: 7, price: "Free", route: "/auth" },
        { name: "Price-Personal", limit: 9, price: "399Rs/month", route: "/pay" },
        { name: "Price-Family", limit: 10, price: "499Rs/month", route: "/pay" },
        { name: "Price-Pro", limit: features.length, price: "699Rs/month", route: "/pay" },
      ];

    const router = useRouter();

    return( <section className="mx-auto w-full bg-black rounded my-10 flex flex-col sm:flex-row flex-wrap gap-6 p-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="flex-1 min-w-[250px] text-center rounded-2xl min-h-[600px] bg-blue-900 text-white border border-white p-6"
          >
            <h1 className="mt-5 text-4xl font-bold border border-white rounded p-2">
              {plan.name}
            </h1>

            <div className="mt-6 space-y-4">
              {features.slice(0, plan.limit).map((feature, index) => (
                <p key={index} className="text-lg bg-white/10 text-white rounded py-2">
                  - {feature.items}
                </p>
              ))}
            </div>

            <button
              className="mt-6 w-full bg-green-600 text-xl text-white py-3 rounded-2xl hover:bg-green-500"
              onClick={() => router.push(plan.route)}
            >
              {plan.price}
            </button>
          </div>
        ))}
      </section>)
}
