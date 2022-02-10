import styles from "../styles/index.module.css";
import Address from "../components/Address";

const address = [
  "New Viet Nam Studies Initiative",
  "3113 Hart Hall",
  "University of California Davis",
  "One Shields Avenue",
  "Davis, CA 95616",
];

const contact = [
  "Contact Us",
  "newvietnamstudies@gmail.com",
  "Phone: (530) 333 3137",
];

export default function Home() {
  return (
    <div id={styles.homePage}>
      <h1 id={styles.welcomeHeader}>WELCOME</h1>
      <p id={styles.welcomeBody}>
        Welcome to the New Viet Nam Studies Initiative where we bring together
        scholars, industry experts, government officials, scientists, activists,
        and artists to lend their knowledge of the many contemporary dimensions
        of Viet Nam and its diasporic population. Highlighting the economic
        reconstruction and cultural renewal through programing and publication
        directly engages with the challenges and successes of this dynamic
        nation.
      </p>
      <div id={styles.address}>
        <Address PhysAddress={address} ContactInfo={contact} />
      </div>
    </div>
  );
}
