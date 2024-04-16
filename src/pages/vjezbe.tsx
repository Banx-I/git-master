import { vjezbeLinks } from "../data/vjezbe";

const Vjezbe = () => {
  return (
    <>
      <>
        <h1>Popis vježbi</h1>
        <div>
          {vjezbeLinks.map((link) => {
            return (
              <a className="link" key={link.href} href={link.href}>
                {link.label}
              </a>
            );
          })}
        </div>
      </>
    </>
  );
};

export default Vjezbe;
