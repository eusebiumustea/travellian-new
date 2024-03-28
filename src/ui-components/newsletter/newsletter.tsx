export function Newsletter() {
  return (
    <div className="w-full m-4 flex-col flex md:flex-row bg-white py-10 justify-center px-12 rounded-3xl gap-10 self-center">
      <h1 className=" text-3xl md:text-5xl text-placeholder font-playfair self-center">
        Our Newsletter
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-end gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="font-rubik text-placeholder text-xl">Email</h1>
          <input
            type="email"
            placeholder="Enter your email"
            className="placeholder:text-primary font-rubik placeholder:text-base py-4 bg-surface rounded-xl px-7 pr-12 outline-none sm:w-[80vw] md:w-auto"
          />
        </div>
        <button className="sm:w-[80vw] md:w-auto px-8 py-4 bg-primary font-rubik text-base rounded-xl text-white">
          Subscribe
        </button>
      </div>
    </div>
  );
}
