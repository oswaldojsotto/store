import errorpage from "/public/error.svg";

type Props = {};

const Errorpage = (props: Props) => {
  return (
    <div className="error-page-main">
      <div className="error-container">
        <img src={errorpage} className="error-image"></img>
      </div>
      <h1 className="error-title">Page not found</h1>
    </div>
  );
};

export default Errorpage;
