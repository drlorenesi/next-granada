export default function Home() {
  return (
    // <div className="container mx-auto p-6 space-y-8">
    //   <div className="space-y-2">
    //     <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
    //       Inicio
    //     </h3>
    //     <p className="text-sm text-muted-foreground">
    //       Inicio de la aplicación.
    //     </p>
    //   </div>
    // </div>
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Welcome to Our Platform</h1>
      <p className="text-xl">
        This is the home page of our application. From here, you can access all
        the features and tools we offer.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Explore our AI models in the Models section</li>
        <li>Test and experiment in the Playground</li>
        <li>Learn more about our platform in the Documentation</li>
        <li>Manage your account and preferences in Settings</li>
      </ul>
    </div>
  );
}
