'use client';
import styles from './MeowArticle.module.css';
import { useState, useEffect } from 'react';

export default function MeowArticle() {
  const [text, setText] = useState('Roading...');

  useEffect(() => {
    fetch('https://meowfacts.herokuapp.com')
      .then((res) => res.json())
      .then((res) => setText(res.data[0]));
  }, []);

  return <article className={styles.article}>{text}</article>;
}
