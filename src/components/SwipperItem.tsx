import StarIcon from "@mui/icons-material/Star";

type SwipperItemProps = {
  name: string;
  stars: number;
  review: string;
  city: string;
  country: string;
  user: string;
  photo: string;
};

const SwipperItem = ({
  photo,
  name,
  stars,
  review,
  city,
  country,
  user,
}: SwipperItemProps) => {
  const starCounter: JSX.Element[] = [];
  for (let i = 1; i <= stars; i++) {
    starCounter.push(<StarIcon key={i} />);
  }

  return (
    <div className="swipper-container">
      <div className="swipper-img-container">
        <img alt="customer-photo" src={photo} className="swipper-img"></img>
      </div>
      <div className="swipper-text-container">
        <h3 className="swipper-stars-rating">{starCounter}</h3>
        <p className="swipper-text-rating">{review}</p>
        <p className="swipper-rater-name">
          {name} {user} | {city}, {country}
        </p>
      </div>
    </div>
  );
};

export default SwipperItem;
