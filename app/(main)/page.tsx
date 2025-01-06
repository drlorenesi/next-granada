export default function Home() {
  return (
    // <div className="space-y-6">
    //   <h1 className="text-4xl font-bold">Welcome to Our Platform</h1>
    //   <p className="text-xl">
    //     This is the home page of our application. From here, you can access all
    //     the features and tools we offer.
    //   </p>
    //   <ul className="list-disc list-inside space-y-2">
    //     <li>Explore our AI models in the Models section</li>
    //     <li>Test and experiment in the Playground</li>
    //     <li>Learn more about our platform in the Documentation</li>
    //     <li>Manage your account and preferences in Settings</li>
    //   </ul>
    // </div>
    <div className="space-y-4">
      <h2 className="text-3xl font-bold tracking-tight">
        Welcome to Our Platform
      </h2>
      <p className="text-sm text-muted-foreground">
        Disclaimer text goes here. This is a disclaimer text that explains the
      </p>
      <div className="space-y-2">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          This is the home page of our application. From here, you can access
          all the features and tools we offer.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Explore our AI models in the Models section</li>
          <li>Test and experiment in the Playground</li>
          <li>Learn more about our platform in the Documentation</li>
          <li>Manage your account and preferences in Settings</li>
        </ul>
      </div>
    </div>
  );
}
