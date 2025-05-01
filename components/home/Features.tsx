export default function Features() {
  return (
    <div className="bg-base-200" id="features">
      <div className="container mx-auto px-8 py-20">
        <div className="flex flex-col items-center space-y-8">
          <h2 className="text-center text-4xl font-bold">Features</h2>
          <div className="mx-auto flex max-w-xl flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-primary self-start rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-primary-content size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <p className="text-xl font-semibold">
                  Lorem ipsum dolor sit amet
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
                  natus. Ducimus distinctio eum esse voluptates quod at quis
                  fugit.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-secondary self-start rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-secondary-content size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <p className="text-xl font-semibold">
                  Lorem ipsum dolor sit amet
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
                  natus. Ducimus distinctio eum esse voluptates quod at quis
                  fugit.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-accent self-start rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-accent-content size-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <p className="text-xl font-semibold">
                  Lorem ipsum dolor sit amet
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui,
                  natus. Ducimus distinctio eum esse voluptates quod at quis
                  fugit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
