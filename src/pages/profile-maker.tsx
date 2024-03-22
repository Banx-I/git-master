import { MutableRefObject, useRef, useState } from "react";
import Tag from "../components/tag";
import Button from "../components/button";

const ProfileMaker = () => {
  const [name, setName] = useState("Ivan Sakoman");
  const [tags, setTags] = useState<string[]>([]);

  const inputRef = useRef(null);

  const addTag = (input: MutableRefObject<HTMLInputElement | null>) => {
    if (input.current) {
      const newTag = input.current.value;
      setTags([...tags, newTag]);
      input.current.value = "";
    }
  };

  return (
    <>
      <div className="profile">
        <div className="profile__card">
          <img
            className="profile__card__img"
            src="https://scontent-fra5-2.cdninstagram.com/v/t39.30808-6/433660787_18429230407032357_3857898762968739859_n.jpg?stp=dst-jpg_e15_s320x320&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi44NTd4ODU3LnNkciJ9&_nc_ht=scontent-fra5-2.cdninstagram.com&_nc_cat=109&_nc_ohc=0k4hqyKjvE8AX-7XeHH&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfClGjX9z8yL-5H3-LAy9sMlqA1dRKx8YWQ3YWdqDAFbqA&oe=6603904F&_nc_sid=8b3546"
            alt="Profile picture"
          />
          <div className="profile__card__name">{name}</div>
          <div className="tag__wrapper mt-4">
            {tags.map((tag, index) => {
              return <Tag key={index}>{tag}</Tag>;
            })}
          </div>
        </div>
        <div className="profile__form">
          <div className="field">
            <label className="field__label" htmlFor="name">
              Name
            </label>
            <input
              className="input"
              defaultValue="Ivan Sakoman"
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
            />
          </div>
          <div className="field">
            <label htmlFor="name" className="field__label">
              Tags
            </label>
            <div className="field__group">
              <input className="input" ref={inputRef} type="text" id="name" />
              <Button
                className="button"
                onClick={() => {
                  addTag(inputRef);
                }}
              >
                ADD
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileMaker;
