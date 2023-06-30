import Link from "next/link";

function Navbar() {
  return (
    <>
      <nav className="flex w-screen justify-around p-7 font-bold">
        <Link href="/">Home</Link>
        <Link href="/UseStateHook">Usestate</Link>
        <Link href="/UseReducerHook">UseReducer</Link>
        <Link href="/UseEffectHook">UseEffect</Link>
        <Link href="/UseRefHook">UseRef</Link>
        <Link href="/UseContextHook">UseContext</Link>
      </nav>
    </>
  );
}

export default Navbar;
