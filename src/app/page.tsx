import { Attribution } from "~/components";
import classes from "./page.module.scss";

export default function Home() {
  return (
    <>
      <main className={classes["main"]}>Home</main>
      <Attribution />
    </>
  );
}
