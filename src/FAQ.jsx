import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "./index.css";
const data = {
  title: "FAQ",
  rows: [
    {
      title: "Can education flashcards be used for all age groups?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "How do education flashcards work?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Can education flashcards be used for test preparation?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
  ],
};

const styles = {
  titleTextColor: "blue",
  titleTextSize: "40px",
  rowTitleColor: "#28262C",
  rowContentTextSize: "16px",
  rowContentColor: "#696671",
  rowContentMarginTop: "20px",
  arrowColor: "#28262C",
};

const config = {
  animate: true,
  tabFocus: true,
};

export default function FQA() {
  return (
    <div className="px-6 md:px-10 lg:px-[104px] mb-6 max-w-[1000px]">
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}
