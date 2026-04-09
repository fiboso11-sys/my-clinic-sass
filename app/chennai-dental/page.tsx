// app/chennai-dental/page.tsx
export default function ChennaiDentalClinic() {
  return (
    <main
      style={{
        fontFamily: "sans-serif",
        minHeight: "100vh",
        backgroundColor: "#f9f9f9",
        padding: "2rem",
        color: "#2c3e50",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "2rem",
          maxWidth: "800px",
          margin: "0 auto",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#1a5276" }}>
          Chennai Dental Clinic Dashboard
        </h1>
        <p style={{ textAlign: "center", marginBottom: "2rem" }}>
          Powered by <strong>Kodikz</strong> — Manage appointments, collect payments, and subscribe to our SaaS service.
        </p>

        {/* Appointment Section */}
        <section style={{ marginBottom: "2rem" }}>
          <h2>Book an Appointment</h2>
          <form>
            <label>
              Patient Name:
              <input
                type="text"
                name="name"
                style={{
                  marginLeft: "1rem",
                  padding: "0.4rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </label>
            <br /><br />
            <label>
              Date:
              <input
                type="date"
                name="date"
                style={{
                  marginLeft: "1rem",
                  padding: "0.4rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </label>
            <br /><br />
            <button
              type="submit"
              style={{
                background: "#3498db",
                color: "#fff",
                padding: "0.6rem 1.2rem",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Book Appointment
            </button>
          </form>
        </section>

        {/* Payment Section */}
        <section style={{ marginBottom: "2rem" }}>
          <h2>Pay Clinic Fees</h2>
          <p>Click below to pay securely via UPI.</p>
          <button
            style={{
              background: "#27ae60",
              color: "#fff",
              padding: "0.6rem 1.2rem",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Pay with UPI
          </button>
        </section>

        {/* Subscription Section */}
        <section>
          <h2>Subscribe to SaaS</h2>
          <p>Get full access to clinic management features.</p>
          <button
            style={{
              background: "#e67e22",
              color: "#fff",
              padding: "0.6rem 1.2rem",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Subscribe Now
          </button>
        </section>

        <footer
          style={{
            textAlign: "center",
            marginTop: "2rem",
            fontSize: "0.9rem",
            color: "#555",
          }}
        >
          © 2026 Kodikz — Empowering Chennai Dental Clinic with smart SaaS solutions.
        </footer>
      </div>
    </main>
  );
}