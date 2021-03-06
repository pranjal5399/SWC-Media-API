import React, { useEffect } from "react";
import styles from "./HomeScreen.module.css";
import SearchBar from "./SearchBar/SearchBar";
import homescreenimg from "../../../images/homescreen.svg";
import gift from "../../../images/gift.svg";
import users from "../../../images/users.svg";
import repeat from "../../../images/repeat.svg";
// ${styles.HomeScreen}

const HomeScreen = (props) => {
  const { courses } = props;

  // useEffect(() => {
  //   console.log("HScrn loaded", courses);
  // }, [courses]);

  return (
    <div
      id="content"
      className={`container-fluid pb-4 d-flex align-items-center px-4 px-md-5 ${styles.content}`}
    >
      <div className={`row ${styles.wrapper}`}>
        <div
          className={`col-12 col-md-6 col-lg-6 px-2 px-sm-5 py-0 py-sm-5 ${styles.introBlock}`}
        >
          <p
            id="introPara"
            className={`text-center text-sm-left ${styles.introPara}`}
          >
            SWC Courses, <span>A simple and sweet learning platform.</span>
          </p>
          <SearchBar courses={courses} />
        </div>
        <div className={`col-12 col-md-6 col-lg-6 px-1 py-5 ${styles.imgCont}`}>
          <img src={homescreenimg} className={styles.hsimg} />
        </div>
        <div
          class={`container-fluid pl-2 pl-md-5 text-center text-sm-left d-none d-sm-flex ${styles.tagsCont}`}
        >
          <div class="row" className={styles.threetagscontainer}>
            <div className={(`col-4`, styles.tagcontainer)}>
              <div className={styles.threetags}>
                <img className={styles.tagimg} src={gift}></img>
                <p className={styles.tagname}>Quality Courses</p>
              </div>
            </div>
            <div class="col-4" className={styles.tagcontainer}>
              <div className={styles.threetags}>
                <img className={styles.tagimg} src={users}></img>
                <p className={styles.tagname}>Peer Learning</p>
              </div>
            </div>
            <div className={(`col-4`, styles.tagcontainer)}>
              <div className={styles.threetags}>
                <img className={styles.tagimg} src={repeat} />
                <p className={styles.tagname}>Basic to Advanced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
