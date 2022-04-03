import Image from "next/image";
import Link from "next/link";
import Header from "../../components/header";
import { useOrganization } from "../../providers/Organization";
import styles from "./organization.module.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiTwitterLine } from "react-icons/ri";
import { BiLink } from "react-icons/bi";

export default function OrganizationPage() {
  const { organization } = useOrganization();

  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.containerInfos}>
          <picture>
            <Image
              className={styles.image}
              src={organization.avatar_url}
              alt={`${organization.name}_img`}
              width="100px"
              height="100px"
            />
          </picture>
          <div className={styles.containerContent}>
            <div className={styles.containerTitle}>
              <h1 className={styles.name}>{organization.name}</h1>
              <span
                className={
                  organization.is_verified
                    ? styles.verified
                    : styles.notVerified
                }
              >
                {organization.is_verified ? "Verified" : "Not Verified"}
              </span>
            </div>
            <p className={styles.description}>{organization.description}</p>
            <div className={styles.containerSocial}>
              <div className={styles.social}>
                <MdOutlineLocationOn className={styles.icon} />
                <span>{organization.location}</span>
              </div>
              <div className={styles.social}>
                <RiTwitterLine className={styles.icon} />
                <Link
                  href={`https://twitter.com/${organization.twitter_username}`}
                  passHref
                >
                  <a
                    className={styles.social}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {`@${organization.twitter_username}`}
                  </a>
                </Link>
              </div>
              <div className={styles.social}>
                <BiLink className={styles.icon} />
                <Link href={organization.blog} passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    {organization.blog}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
