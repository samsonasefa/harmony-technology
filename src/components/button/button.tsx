export default function Button({ children, className }: any) {
  return (
    <button
      type="button"
      className={`text-white bg-primary-color font-medium rounded text-base px-8 py-2 border-none ${className}`}
    >
      {children}
    </button>
  );
}
