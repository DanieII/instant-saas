export default function Header() {
  return (
    <div className="container mx-auto px-8 py-20">
      <div className="flex flex-col items-center space-y-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight">
          Launch your app{" "}
          <span className="bg-primary text-primary-content">instantly</span>
        </h1>
        <p className="text-xl font-bold">
          Instant is a free and open-source SaaS template
        </p>
        <div>
          <a href="#pricing" className="btn btn-primary btn-lg">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
