import React from "react";
import AddPageHeader from "../components/AddPageHeader";
import AddSongForm from "../components/AddSongForm";
import styles from "../styles/Add.module.css";

export default function Add() {
  return (
    <div className={styles.container}>
      <AddPageHeader />
      <h2>Add a new song:</h2>
      <AddSongForm />
    </div>
  );
}
