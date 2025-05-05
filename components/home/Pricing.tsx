import SubscribeButton from "./SubscribeButton";

const plans = [
  {
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_************************"
        : "price_************************",
    price: 10,
    title: "Monthly",
    features: [
      "Some cool feature",
      "Another cool feature",
      "Even more cool features",
    ],
  },
  {
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_************************"
        : "price_************************",
    price: 5,
    title: "Yearly",
    features: [
      "Some cool feature",
      "Another cool feature",
      "Even more cool features",
      "Save $60 with yearly pricing (50% off)",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="container mx-auto px-8 py-20" id="pricing">
      <div className="space-y-12">
        <h2 className="text-center text-4xl font-bold tracking-tight">
          Pricing
        </h2>
        <div className="flex flex-col justify-center gap-8 lg:flex-row">
          {plans.map((plan) => (
            <div
              className={`card bg-base-100 relative w-full shadow-sm lg:w-96 ${plan.title === "Yearly" && "border-primary border-2 shadow-xl"}`}
              key={plan.title}
            >
              {plan.title === "Yearly" && (
                <div className="badge badge-primary absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
                  Popular
                </div>
              )}
              <div className="card-body">
                <div className="flex flex-col justify-between gap-4">
                  <h2 className="text-2xl font-bold">{plan.title}</h2>
                  <div className="space-x-2">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-base-content/60 text-xl">
                      /month{plan.title === "Yearly" && ", billed yearly"}
                    </span>
                  </div>
                </div>
                <ul className="my-4 flex flex-col gap-2">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-success me-2 inline-block size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto space-y-2">
                  <SubscribeButton priceId={plan.priceId} />
                  <p className="text-base-content/80 flex items-center justify-center gap-2 text-sm font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Secure payments with Stripe
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
