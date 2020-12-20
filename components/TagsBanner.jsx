import React, { useEffect } from "react";
import styles from "./styles/TagsBanner.module.css";

import Tag from "./Tag";
import { useSelector } from "react-redux";

const TagsBanner = () => {
  const tags = useSelector((state) => state.tags);

  return (
    <div className='row'>
      <div id='' className={styles.com_secondary_tag}>
        {tags.map((x, i) => (
          <Tag key={i} title={x.tag} slug={x.slug} />
        ))}
      </div>
    </div>
  );
};

export default TagsBanner;
