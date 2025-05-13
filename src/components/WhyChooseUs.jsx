const WhyChooseUs = () => (
  <section className="bg-gray-100 p-10 text-center">
    <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        "Fast Payouts",
        "100% Secure",
        "Top Valuation",
        "24/7 Support"
      ].map((point, index) => (
        <div key={index} className="p-4 bg-white rounded shadow">
          <div className="text-3xl mb-2">✅</div>
          <p className="font-semibold">{point}</p>
        </div>
      ))}
    </div>
  </section>
);
export default WhyChooseUs;
