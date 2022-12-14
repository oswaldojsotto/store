import person1 from "/person1.jpg";
import person2 from "/person2.jpg";
import person3 from "/person3.jpg";
import person4 from "/person4.jpg";

export const reviews: {
  name: string;
  stars: number;
  review: string;
  city: string;
  country: string;
  user: string;
  photo: string;
}[] = [
  {
    name: "Oswaldo Soto",
    user: "@oswaldojsoto",
    stars: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.r modi minus excepturi!",
    city: "Caracas",
    country: "Venezuela",
    photo: person1,
  },
  {
    name: "Corimar Del Duca",
    user: "@corimar69nice",
    stars: 4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tempora ratione iste repellendus, veniam impedit, aliquam sequi nam atque vitae deserunt officiis.",
    city: "Rome",
    country: "Italy",
    photo: person2,
  },
  {
    name: "Carl Sagan",
    user: "@carl88sagan",
    stars: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.r modi minus excepturi! adipisicing elit. Exercitationem!",
    city: "Chicago",
    country: "USA",
    photo: person4,
  },
  {
    name: "Kath Loren Smith",
    user: "@kath22smth",
    stars: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.r modi minus excepturi!",
    city: "Santiago",
    country: "Chile",
    photo: person3,
  },
];

export default reviews;
