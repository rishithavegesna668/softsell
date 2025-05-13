const Testimonials = () => (
  <section className="p-10 text-center">
    <h2 className="text-2xl font-bold mb-6">What Our Customers Say</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {[
        { name: "Alice", role: "IT Manager", company: "TechCorp" },
        { name: "Bob", role: "CFO", company: "FinancePro" }
      ].map((user, index) => (
        <div key={index} className="bg-white p-6 shadow rounded">
          <p>"SoftSell helped us liquidate licenses in a week!"</p>
          <p className="mt-2 text-sm text-gray-500">{user.name} – {user.role}, {user.company}</p>
        </div>
      ))}
    </div>
  </section>
);
export default Testimonials;
