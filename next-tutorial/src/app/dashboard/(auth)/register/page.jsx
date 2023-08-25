'use client';

import Link from 'next/link';
import styles from './page.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function Register() {
  const [err, setErr] = useState(false);

  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      res.status === 201 && router.push('/dashboard/login?success=로그인에 성공하였습니다.');
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitHandler}>
        <input type="text" placeholder="username" className={styles.input} required />
        <input type="email" placeholder="email" className={styles.input} required />
        <input type="password" placeholder="password" className={styles.input} required />
        <button className={styles.button}>Register</button>
      </form>
      {err && <p className={styles.err}>Something went wrong</p>}
      <Link href="/dashboard/login" className={styles.link}>
        Login
      </Link>
    </div>
  );
}

export default Register;
