import React, { useEffect, useState } from "react";

export default function socials(props) {
  const [socials, setSocials] = useState([]);
  useEffect(() => {
    props.social.map((name, id, link) => {
      setSocials([...socials, { id: id, name: name, link: link }]);
    });
  }, []);

  return (
    <div className="grid grid-rows-1">
      links.map(link => (
      <Link
        className={link.className}
        activeClassName={link.activeClassName}
        to={link.to}
      >
        {link.name}
      </Link>
      ))}
    </div>
  );
}
