import { useState } from "react";
import wave from "/aboutwave.svg";
import person11 from "/person11.jpg";
import person12 from "/person12.jpg";
import person13 from "/person13.jpg";
import task1 from "/task1.svg";
import task2 from "/task2.svg";
import task3 from "/task3.svg";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const About = () => {
  const [open, setOpen] = useState(false);
  const [currentName, setCurrentName] = useState("");
  const [currentUniversity, setCurrentUniversity] = useState("");
  const [currentBio, setCurrentBio] = useState("");
  const handleClose = () => {
    setOpen(false);
    setCurrentName("");
    setCurrentUniversity("");
  };

  const openModal = (name: string, university: string, bio: string) => {
    setCurrentName(name);
    setCurrentUniversity(university);
    setCurrentBio(bio);
    setOpen(true);
  };

  return (
    <>
      <Modal className="modal" open={open} onClose={handleClose}>
        <Box sx={style}>
          <h1>{currentName}</h1>
          <br />
          <h3> {currentUniversity}</h3>
          <br />
          {currentBio}
        </Box>
      </Modal>
      <div className="about-container">
        <div className="title-container">
          <p className="about-title">Wanna know more about Us?</p>
        </div>
        <div className="about-wave-container">
          <img className="about-wave" src={wave}></img>
        </div>
        <article className="article-container">
          <h2 className="article-title">Our Research Partners</h2>
          <p className="article-text">
            Eveniet odit quia obcaecati nemo harum mollitia voluptate ducimus
            ad. Modi quas cupiditate repellat incidunt! Voluptatem totam
            perferendis ipsam fuga non impedit, eligendi enim dolor maxime
            eveniet dolore, mollitia similique. Eius, dolorem.
          </p>
        </article>
        <div className="about-partners">
          <div className="partner-container">
            <img src={person11} className="partner-photo"></img>
            <p className="partner-name">Quentin Tarantino</p>
            <p className="partner-charge">Oklahoma Research University</p>
            <p
              className="partner-bio"
              onClick={() =>
                openModal(
                  "Quentin Tarantino",
                  "Oklahoma Research University",
                  "Quentin Jerome Tarantino (/ˌtærən'ti:noʊ/; born March 27, 1963)[1] is an American filmmaker, author, and actor. His films are characterized by frequent references to popular culture and film genres, non-linear storylines, dark humor, stylized violence, extended dialogue, pervasive use of profanity, cameos and ensemble casts. Other directorial tropes that identify his style include the use of songs from the 1960s and 70s, fictional brand parodies, and imagery of women's bare feet. "
                )
              }>
              View Bio
            </p>
          </div>
          <div className="partner-container">
            <img src={person12} className="partner-photo"></img>
            <p className="partner-name">Ramona Flowers</p>
            <p className="partner-charge">L'aquila University</p>
            <p
              className="partner-bio"
              onClick={() =>
                openModal(
                  "Ramona Flowers",
                  "L'aquila University",
                  "Ramona Victoria 'Rammy' Flowers is an American expatriate who lived in New York and now works as a Ninja delivery girl for Amazon.ca in Canada. She is 24 years old and Scott's main love interest. She reveals very little about herself and is very guarded about her past in New York before she moved to Toronto. She is capable of traveling through Subspace and has seven evil exes who challenge Scott for her affection. She is also a tea enthusiast, as discovered when Scott is bombarded with a list of teas in one of Ramona's cupboards of her home. "
                )
              }>
              View Bio
            </p>
          </div>
          <div className="partner-container">
            <img src={person13} className="partner-photo"></img>
            <p className="partner-name">Lana Del Rey</p>
            <p className="partner-charge">Venezuela Central University</p>
            <p
              className="partner-bio"
              onClick={() =>
                openModal(
                  "Lana Del Rey",
                  "Venezuela Central University",
                  "Elizabeth Woolridge Grant (born June 21, 1985), known professionally as Lana Del Rey, is an American singer-songwriter. Her music is noted for its cinematic quality and exploration of tragic romance, glamour, and melancholia, with frequent references to contemporary pop culture and 1950s-1960s Americana.[1] She is the recipient of various accolades, including two Brit Awards, two MTV Europe Music Awards, and a Satellite Award, in addition to nominations for six Grammy Awards and a Golden Globe Award.[2] Variety honored her at their Hitmakers Awards for being one of the most influential singer-songwriters of the 21st century."
                )
              }>
              View Bio
            </p>
          </div>
        </div>
      </div>
      <div className="about-wave-container">
        <img src={wave} className="about-wave-two" />
      </div>
      <div className="about-mission">
        <p className="mission-title"> Our Mission</p>
        <div className="about-first-mission">
          <article className="first-mission-info">
            <p className="mission-info-title">ΔE = q + w</p>
            <p className="mission-text">
              Energy doesn't simply materialize or disappear. Any gain in energy
              by the system will correspond to a loss in energy by the
              surroundings, or any loss in energy by the system will correspond
              to a gain in energy by the surroundings.
            </p>
          </article>
          <div className="mission-img-container">
            <img src={task1} alt="" className="mission-img" />
          </div>
        </div>
        <div className="about-second-mission">
          <div className="mission-img-container">
            <img src={task2} alt="" className="mission-img" />
          </div>
          <article className="first-mission-info">
            <p className="mission-info-title">Second Law</p>
            <p className="mission-text">
              The Second Law of Thermodynamics states that the state of entropy
              of the entire universe, as an isolated system, will always
              increase over time. The second law also states that the changes in
              the entropy in the universe can never be negative.
            </p>
          </article>
        </div>
        <div className="about-first-mission">
          <article className="first-mission-info">
            <p className="mission-info-title">Third law</p>
            <p className="mission-text">
              The entropy of a system approaches a constant value when its
              temperature approaches absolute zero. This constant value cannot
              depend on any other parameters characterizing the closed system,
              such as pressure or applied magnetic field. At absolute zero (zero
              kelvins) the system must be in a state with the minimum possible
              energy. Entropy is related to the number of accessible
              microstates, and there is typically one unique state (called the
              ground state) with minimum energy
            </p>
          </article>
          <div className="mission-img-container">
            <img src={task3} alt="" className="mission-img" />
          </div>
        </div>
        <div className="transfer"></div>
      </div>
    </>
  );
};

export default About;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "#12433D",
  borderRadius: "2rem",
  boxShadow: 24,
  p: 4,
};
