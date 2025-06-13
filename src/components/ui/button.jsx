export function Button({ children, asChild }) {
  const Comp = asChild ? "a" : "button";
  return (
    <Comp className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition">
      {children}
    </Comp>
  );
}
