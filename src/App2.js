import { useState } from "react";
import style from "./app.module.css";

const App2 = (props) => {
  const [dataList] = useState(props.article);

  return (
    <div className={style.mainWrapper}>
      <div>
        <h1 className={style.h1Title}>My Blog</h1>
      </div>
      <div className={style.boxWrapper}>
        {dataList.map((data) => {
          return (
            <div key={data} className={style.boxStyle}>
              <div className={style.imageArticle}>
                <div
                  className={style.image}
                  // image random by unsplash API
                  style={{
                    backgroundImage: `url("https://source.unsplash.com/random/${data.image}")`,
                  }}
                ></div>
              </div>
              <div className={style.postMeta}>
                <a href="/" className={style.category}>
                  {data.category}
                </a>
              </div>
              <h3 className={style.title}>
                <a href="/">{data.title}</a>
              </h3>
              <div className={style.body}>
                <p>{data.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App2;
