const HowItWorks = () => (
  <section className="p-10 text-center">
    <h2 className="text-2xl font-bold mb-6">How It Works</h2>
    <div className="flex flex-col md:flex-row justify-around gap-8">
      {["Upload License", "Get Valuation", "Get Paid"].map((step, index) => (
        <div key={index} className="p-4 shadow rounded bg-gray-50">
          <div className="text-4xl">🔄</div>
          <h3 className="text-xl font-semibold mt-2">{step}</h3>
        </div>
      ))}
    </div>
  </section>
);
export default HowItWorks;
