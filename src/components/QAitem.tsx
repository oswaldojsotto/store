import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type QAitemProps = {
  id: number;
  question: string;
  answer: string;
};

export const QAitem = ({ id, question, answer }: QAitemProps) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div key={id} className="qa-items">
      <Accordion>
        <AccordionSummary
          style={accordionTheme}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography style={!isHover ? questionTheme : questionThemeHover}>
            {question}
          </Typography>
        </AccordionSummary>

        <AccordionDetails style={accordionTheme}>
          <Typography style={answerTheme}>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const accordionTheme = {
  background: "#D6F2EE",
};

const questionTheme = {
  fontFamily: "Quicksand",
  color: " rgb(37, 63, 63)",
  fontWeight: "bold",
  fontSize: "larger",
  letterSpacing: "-1px",
};

const questionThemeHover = {
  fontFamily: "Quicksand",
  color: " rgb(37, 63, 63)",
  fontWeight: "bold",
  fontSize: "larger",
  letterSpacing: "-1px",
  textShadow: "2px 3px 3px rgba(16,10,2,0.36)",
  transition: "all 100ms ease-in",
};

const answerTheme = {
  fontFamily: "Quicksand",
  color: " rgb(37, 63, 63)",
  fontSize: "medium",
  letterSpacing: "-1px",
  cursor: "default",
};
