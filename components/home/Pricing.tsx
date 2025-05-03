import SubscribeButton from "./SubscribeButton";

const plans = [
  {
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_************************"
        : "price_************************",
    price: 10,
    title: "Monthly",
  },
  {
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_************************"
        : "price_************************",
    price: 5,
    title: "Yearly",
  },
];

export default function Pricing() {
  return (
    <div className="container mx-auto px-8 py-20" id="pricing">
      <div className="space-y-8">
        <h2 className="text-center text-4xl font-bold tracking-tight">
          Pricing
        </h2>
        <div className="flex flex-col justify-center gap-8 lg:flex-row">
          {plans.map((plan) => (
            <div
              className={`card bg-base-100 w-full shadow-sm lg:w-96 ${plan.title === "Yearly" && "border-primary border-2"}`}
              key={plan.title}
            >
              <div className="card-body">
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">{plan.title}</h2>
                  <span className="text-xl">${plan.price}/mo</span>
                </div>
                <ul className="my-6 flex flex-col gap-2 text-xs">
                  <li>
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
                    <span>High-resolution image generation</span>
                  </li>
                  <li>
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
                    <span>Customizable style templates</span>
                  </li>
                  <li>
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
                    <span>Batch processing capabilities</span>
                  </li>
                  <li>
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
                    <span>AI-driven image enhancements</span>
                  </li>
                  {plan.title === "Yearly" && (
                    <li>
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
                      <span className="text-success">Save $60 (50%)</span>
                    </li>
                  )}
                </ul>
                <div className="mt-auto">
                  <SubscribeButton priceId={plan.priceId} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
