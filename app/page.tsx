// app/page.tsx
export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#2c3e50" }}>Clinic SaaS Dashboard</h1>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Manage appointments, collect payments, and subscribe to our SaaS service.
      </p>

      {/* Appointment Booking Section */}
      <section style={{ marginBottom: "2rem", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h2>Book an Appointment</h2>
        <form>
          <label>
            Patient Name:
            <input type="text" name="name" style={{ marginLeft: "1rem" }} />
          </label>
          <br /><br />
          <label>
            Date:
            <input type="date" name="date" style={{ marginLeft: "1rem" }} />
          </label>
          <br /><br />
          <button type="submit" style={{ background: "#3498db", color: "#fff", padding: "0.5rem 1rem", border: "none", borderRadius: "4px" }}>
            Book Appointment
          </button>
        </form>
      </section>

      {/* Payment Section */}
      <section style={{ marginBottom: "2rem", padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h2>Pay Clinic Fees</h2>
        <p>Click below to pay securely via UPI.</p>
        <button style={{ background: "#27ae60", color: "#fff", padding: "0.5rem 1rem", border: "none", borderRadius: "4px" }}>
          Pay with UPI
        </button>
      </section>

      {/* Subscription Section */}
      <section style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h2>Subscribe to SaaS</h2>
        <p>Get full access to clinic management features.</p>
        <button style={{ background: "#e67e22", color: "#fff", padding: "0.5rem 1rem", border: "none", borderRadius: "4px" }}>
          Subscribe Now
        </button>
      </section>
    </main>
  );
}