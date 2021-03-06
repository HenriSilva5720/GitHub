import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "../../components/Header";
import RepoCard from "../../components/RepoCard";
import { useOrganization } from "../../providers/Organization";
import { usePage } from "../../providers/Pagination";
import api from "../../services/api";
import styles from "./organization.module.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { RiTwitterLine } from "react-icons/ri";
import { BiLink, BiFolder } from "react-icons/bi";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { IOrganizationRepos } from "../../types";

export default function OrganizationPage() {
  const { organization } = useOrganization();

  const { page, setPage, previousPage, nextPage } = usePage();

  const [organizationRepos, setOrganizationRepos] = useState<
    IOrganizationRepos[]
  >([]);

  useEffect(() => {
    api
      .get(`/orgs/${organization.login}/repos?per_page=10&page=${page}`)
      .then((res) => setOrganizationRepos(res.data))
      .catch((err) => console.log(err));
  }, [page, organization.login]);

  return (
    <>
      <Head>
        <title>{`GitHub - ${organization.name}`}</title>
      </Head>
      <Header search={true} />
      <main className={styles.container}>
        <section className={styles.containerInfos}>
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
            {organization.description && (
              <p className={styles.description}>{organization.description}</p>
            )}
            <div className={styles.containerSocial}>
              {organization.location && (
                <div className={styles.social}>
                  <MdOutlineLocationOn className={styles.icon} />
                  <span>{organization.location}</span>
                </div>
              )}
              {organization.twitter_username && (
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
              )}
              {organization.blog && (
                <div className={styles.social}>
                  <BiLink className={styles.icon} />
                  <Link href={organization.blog} passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      {organization.blog}
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </section>
        <section>
          <div className={styles.containerSection}>
            <div className={styles.sectionContent}>
              <BiFolder className={styles.icon} />
              <span>Repositories</span>
              <div className={styles.sectionBoxArrow} />
              <div className={styles.sectionBox}>
                {organization.public_repos}
              </div>
            </div>
            <hr className={styles.sectionBar} />
          </div>
          <hr className={styles.dividerBar} />
        </section>
        <section className={styles.containerRepos}>
          {organizationRepos.map((repo, idx) => (
            <div key={idx} className={styles.containerRepo}>
              <RepoCard repository={repo} />
            </div>
          ))}
          <div className={styles.containerPageButtons}>
            <a href="#top" className={styles.backToTop}>
              <button
                className={styles.button}
                disabled={page === 1 && true}
                onClick={previousPage}
              >
                <RiArrowLeftSLine className={styles.buttonIcon} />
                Previous
              </button>
            </a>
            <div className={styles.containerPageNumbers}>
              {page > 1 && (
                <a href="#top" className={styles.backToTop}>
                  <div
                    className={styles.number}
                    onClick={() => setPage(page - 1)}
                  >
                    {page - 1}
                  </div>
                </a>
              )}
              <div className={styles.currentPage}>{page}</div>
              {organizationRepos.length === 10 && (
                <a href="#top" className={styles.backToTop}>
                  <div
                    className={styles.number}
                    onClick={() => setPage(page + 1)}
                  >
                    {page + 1}
                  </div>
                </a>
              )}
            </div>
            <a href="#top" className={styles.backToTop}>
              <button
                id="nextPage"
                className={styles.button}
                disabled={organizationRepos.length < 10 && true}
                onClick={() => nextPage(organizationRepos.length)}
              >
                Next
                <RiArrowRightSLine className={styles.buttonIcon} />
              </button>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
