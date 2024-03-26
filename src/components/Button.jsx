export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="py-2 px-4 rounded-md text-xs md:text-base bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
    >
      {children}
    </button>
  );
}
