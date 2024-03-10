export function Newsletter() {
  return (
    <div className="flex flex-row bg-white py-10 justify-center px-12 w-2/4 rounded-3xl gap-10 self-center">
      <h1 className="text-5xl text-placeholder font-playfair self-center">
        Our Newsletter
      </h1>
      <div className="flex flex-row items-end gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="font-rubik text-placeholder text-xl">Email</h1>
          <input
            type="email"
            placeholder="Enter your email"
            className="placeholder:text-primary font-rubik placeholder:text-base py-4 bg-surface rounded-xl px-7 pr-12 outline-none"
          />
        </div>
        <button className="px-8 py-4 bg-primary font-rubik text-base rounded-xl text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
}
