import { Attribution } from "~/components";
import classes from "./page.module.scss";

export default function Home() {
  return (
    <>
      <article className={classes["main"]}>
        <img
          className={classes["image"]}
          loading="lazy"
          decoding="async"
          src="/images/image-qr-code.png"
        />
        <div className={classes["body"]}>
          <h1 className={classes["title"]}>
            Improve your front-end skills by building projects
          </h1>
          <p className={classes["subtitle"]}>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </article>
      <Attribution />
    </>
  );
}
