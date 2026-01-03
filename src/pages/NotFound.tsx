
export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="hero flex-1 flex flex-col items-center justify-center text-center px-4 py-16">
        <h1 className="text-[clamp(32px,6vw,60px)] font-extrabold mb-5">
          404 – Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg mb-6">
          Looks like this page doesn't exist.
          <br />
          You can head back home or check our system status.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://kea-software.github.io"
            className="btn btn-primary px-5 py-2 rounded-lg font-semibold bg-teal-700 text-white hover:bg-teal-500"
          >
            Go Home
          </a>
          <a
            href="https://kea-software.github.io/status"
            className="btn btn-outline px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            Status Page
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 text-gray-500 text-sm">
        <div className="container mx-auto flex flex-col items-center gap-2 py-5 sm:flex-row sm:justify-between px-4">
          <span>© 2025 Kea Software</span>
          <span>
            <a
              href="https://kea-software.github.io/resources/terms.html"
              className="hover:text-teal-700"
            >
              Terms
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}