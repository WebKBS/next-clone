'use client';

import { signIn, useSession } from 'next-auth/react';
import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function Login() {
  const session = useSession();
  const router = useRouter();

  console.log(session);

  useEffect(() => {
    if (session.status === 'authenticated') {
      // window.location.href = '/dashboard';
      router.push('/dashboard');
    }
  }, [router, session]);

  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn('credentials', { email, password, callbackUrl: '/', redirect: false }).then((err) => {
      if (err.error !== null) {
        alert(err.error);
      }
    });
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <input type="email" placeholder="email" className={styles.input} required />
        <input type="password" placeholder="password" className={styles.input} required />
        <button className={styles.button}>Login</button>
      </form>
      <Link href="/dashboard/register" className={styles.signup}>
        Sign Up
      </Link>
      <button className={styles.google} onClick={() => signIn('google')}>
        Login with Google
      </button>
    </div>
  );
}

export default Login;
