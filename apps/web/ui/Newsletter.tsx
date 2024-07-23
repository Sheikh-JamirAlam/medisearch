export default function Newsletter() {
  return (
    <section className="py-16 text-primary-white bg-secondary-black">
      <div className="w-fit mx-auto text-center">
        <h2 className="text-5xl font-outfit font-semibold hidden-css">Join our newsletter</h2>
        <p className="mt-2 mb-6 text-primary-light-grey text-xl font-medium hidden-css">Get news about MediSearch and interesting medical topics.</p>
        <div className="w-fit mx-auto flex gap-6">
          <input
            className="w-full p-2 rounded-lg border-2 bg-secondary-light-blue border-secondary-dark-blue outline-none overflow-y-hidden font-sans text-primary-black transition-all hover:translate-y-[-0.25rem] focus:border-secondary-blue hidden-css"
            type="email"
            placeholder="Enter your email"
          />
          <button className="px-5 py-2 font-semibold rounded-lg border-2 border-secondary-blue text-primary-white bg-primary-blue drop-shadow transition-all hover:translate-y-[-0.25rem] hover:bg-secondary-blue hidden-css">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
