import longhair from "../../theme/assets/profiles/longhair.jpg";
import mrglasses from "../../theme/assets/profiles/mrglasses.jpg";
import mylady from "../../theme/assets/profiles/mylady.jpg";
import img1 from "../../theme/assets/work-images/pexels-alotrobo-1653080.jpg";
import img2 from "../../theme/assets/work-images/pexels-daria-usanova-2820883.jpg";
import img3 from "../../theme/assets/work-images/pexels-felipe-moutinho-1756640.jpg";
import img4 from "../../theme/assets/work-images/pexels-justin-hamilton-204594.jpg";
import img5 from "../../theme/assets/work-images/pexels-laura-tancredi-7078525.jpg";
import img6 from "../../theme/assets/work-images/pexels-mark-sukhanov-849227.jpg";
import img7 from "../../theme/assets/work-images/pexels-migs-reyes-5427708.jpg";
import img8 from "../../theme/assets/work-images/pexels-rohi-bernard-codillo-17908347.jpg";
import img9 from "../../theme/assets/work-images/pexels-talha-riaz-2282473.jpg";
import img10 from "../../theme/assets/work-images/pexels-tim-durgan-3938802.jpg";
import img11 from "../../theme/assets/work-images/pexels-brett-sayles-1029039.jpg";
import img12 from "../../theme/assets/work-images/pexels-helena-lopes-4009901.jpg";
import img13 from "../../theme/assets/work-images/pexels-patrick-porto-3029826.jpg";
import img14 from "../../theme/assets/work-images/pexels-taryn-elliott-5235049.jpg";
import { CSSProperties, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

interface RandomImageProps {
  isProfile?: boolean;
  style?: CSSProperties;
}

/// todo: remove when ready
export function RandomImg({ isProfile = true, style }: RandomImageProps) {
  const [src, setSrc] = useState(longhair);

  useEffect(() => {
    let images: { id: number; src: string }[];
    if (isProfile) {
      images = profileImages;
    } else {
      images = bkImages;
    }

    const id = faker.number.int({ min: 1, max: isProfile ? 3 : 14 });
    setSrc(images.find((img) => img.id === id)?.src || longhair);
  }, [isProfile]);

  return (
    <img
      src={src}
      className={isProfile ? "profile-avatar" : "work-img"}
      style={style}
    />
  );
}

const profileImages = [
  {
    id: 1,
    src: longhair,
  },
  {
    id: 2,
    src: mrglasses,
  },
  {
    id: 3,
    src: mylady,
  },
];

const bkImages = [
  {
    id: 1,
    src: img1,
  },
  {
    id: 2,
    src: img2,
  },
  {
    id: 3,
    src: img3,
  },
  {
    id: 4,
    src: img4,
  },
  {
    id: 5,
    src: img5,
  },
  {
    id: 6,
    src: img6,
  },
  {
    id: 7,
    src: img7,
  },
  {
    id: 8,
    src: img8,
  },
  {
    id: 9,
    src: img9,
  },
  {
    id: 10,
    src: img10,
  },
  {
    id: 11,
    src: img11,
  },
  {
    id: 12,
    src: img12,
  },
  {
    id: 13,
    src: img13,
  },
  {
    id: 14,
    src: img14,
  },
];
