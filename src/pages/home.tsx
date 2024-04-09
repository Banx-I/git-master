import IconAdd from "../assets/add";
import IconDots from "../assets/dots";
import profileImageUrl from "../assets/profile-img.jpg";
import Button from "../components/button";
import Tag from "../components/tag";
import croatiaFlagUrl from "../assets/croatia.png";
import IconArrowTopRight from "../assets/arrow-top-right";

type ProfileDataType = {
  firstName: string;
  lastName: string;
  profileDescription: string;
  skills: string[];
  country: string;
  city: string;
  experience: string;
  aboutMe: string;
  links: {
    [name: string]: string;
  };
  email: string;
};

const data: ProfileDataType = {
  firstName: "Ivan",
  lastName: "Sakoman",
  country: "Croatia",
  city: "Osijek",
  profileDescription: "I'm frontend developer based in Osijek.",
  skills: ["UX/UI design", "HTML/XML", "CSS/SASS", "JS/TS", "React", "Shopify"],
  experience:
    "I specialise in UX/UI, frontend development and i love creating animations.",
  aboutMe:
    "I'm a frontend developer and web designer passionate about refining user interfaces and experiences for web applications. I really enjoy making animations that grab people's attention and make websites more interesting for them.",
  links: {
    codepen: "https://codepen.io/ssaakkaa",
    instagram: "https://www.instagram.com/ssaakkaaa/",
    linkedIn: "https://hr.linkedin.com/in/ivan-sakoman-256149107",
  },
  email: "isakoman@layer.agency",
};

const Home = () => {
  return (
    <>
      <div className="personal">
        <div className="personal__top"></div>
        <div className="personal__header">
          <div className="personal__header__img">
            <img src={profileImageUrl} alt="profile image" />
          </div>
          <div className="personal__header__info">
            <div className="personal__header__name">
              {data.firstName} {data.lastName}
            </div>
            <div className="personal__header__description">
              {data.profileDescription}
            </div>
          </div>
          <div className="personal__header__actions">
            <Button color="blue">
              <IconDots />
            </Button>
            <Button color="blue">Hire me</Button>
            <Button color="blue" leftElement={<IconAdd />}>
              Folow
            </Button>
          </div>
        </div>
        <div className="personal__body">
          <div className="personal__body__pannel personal__body__main">
            <h2 className="personal__body__title">Experience</h2>
            <p className="personal__body__p mb-8">{data.experience}</p>
            <h2 className="personal__body__title">About me</h2>
            <p className="personal__body__p mb-8">{data.aboutMe}</p>
          </div>
          <div className="personal__body__pannel personal__body__side">
            <h3 className="personal__body__subtitle mb-2">Skills</h3>
            <div className="mb-8 tag__wrapper tag__wrapper--left">
              {data.skills.map((skill) => {
                return (
                  <Tag key={skill} size="sm">
                    {skill}
                  </Tag>
                );
              })}
            </div>
            <h3 className="personal__body__subtitle mb-2">Location</h3>
            <div className="flex flex--ac mb-8">
              <img
                width={24}
                className="display--block mr-2"
                src={croatiaFlagUrl}
                alt="Flag of Croatia"
              />
              <span>
                {data.city}, {data.country}
              </span>
            </div>
            <h3 className="personal__body__subtitle mb-2">Links</h3>
            <div className="mb-8">
              {Object.keys(data.links).map((key) => {
                return (
                  <>
                    <a
                      className="link link--icon"
                      href={data.links[key]}
                      key={key}
                      target="_blank"
                    >
                      <IconArrowTopRight width={16} />
                      {key}
                    </a>
                  </>
                );
              })}
            </div>
            <h3 className="personal__body__subtitle mb-2">Email</h3>
            <div>{data.email}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
