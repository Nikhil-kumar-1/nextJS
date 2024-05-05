"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const [state, setState] = useState(0);

  const Inc = () => {
    setState(state + 1);
  };

  const Dec = () => {
    setState(state - 1);
  };

  // UseRouter
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };

  return (
    <main className={styles.main}>
      <h1>Count {state}</h1>
      <button onClick={Inc}>Plus</button>
      <button onClick={Dec} disabled={state === 0}>
        Minus
      </button>

      <Link href="/login">Go to Login Page</Link>
      <Link href="/about">Go to about page</Link>

      <button onClick={() => navigate("/login")}>Go to login page</button>
      <button onClick={() => navigate("/about")}>Go to about page</button>
    </main>
  );
}
