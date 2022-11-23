import Marque from "react-fast-marquee";
import { Link } from "react-router-dom";
type Props = {};

const Marquee = (props: Props) => {
  return (
    <Marque className="marquee-container" gradient={false} pauseOnHover={true}>
      <p className="marquee-item">
        {" "}
        Complete your first order to get 15% off + free shipping!!!{" "}
        <Link to={"/store"}>
          <button className="marquee-link">Shop Now!</button>
        </Link>
      </p>
      <p className="marquee-item">
        Use our custom texting platform to swap, skip or cancel your next order.{" "}
      </p>
      <p className="marquee-item">
        Remember, free shipping all around the country!!!{" "}
      </p>
    </Marque>
  );
};

export default Marquee;
