const SPLASH_IMAGES = [
  {
    id: "aaf7b843-4336-40bf-adac-37d53579138b",
    title: "Een",
    large:
      "https://res.cloudinary.com/dunew51zn/image/upload/v1617058733/splash/een-xl_q1uph3.jpg",
    small:
      "https://res.cloudinary.com/dunew51zn/image/upload/v1617058733/splash/een-md_xtd57q.jpg",
    background:
      "https://res.cloudinary.com/dunew51zn/image/upload/v1617058733/splash/bg-een-xl_cegyh2.jpg",
  },
  {
    id: "7c11cd3c-5f76-4a4e-b17a-1957d83c6d36",
    title: "FF",
    large:
      "https://res.cloudinary.com/dunew51zn/image/upload/v1617058733/splash/ff-xl_xgs6yu.jpg",
    small:
      "https://res.cloudinary.com/dunew51zn/image/upload/v1617058733/splash/ff-md_zetkud.jpg",
    background:
      "https://res.cloudinary.com/dunew51zn/image/upload/v1617058733/splash/bg-ff-xl_dhkfcq.jpg",
  },
  {
    id: "d39ecfde-e207-4c7c-8b35-75696b882a09",
    title: "Squiggle",
    large:
      "https://res.cloudinary.com/dunew51zn/image/upload/v1617058733/splash/squiggle-xl_k51qlt.jpg",
    small:
      "https://res.cloudinary.com/dunew51zn/image/upload/v1617058733/splash/squiggle-md_rgvljx.jpg",
    background:
      "https://res.cloudinary.com/dunew51zn/image/upload/v1617058733/splash/bg-squiggle-xl_jerven.jpg",
  },
  {
    id: "e3d2cbd0-71da-45bd-89cf-9315910fd834",
    title: "Sumo",
    large:
      "https://res.cloudinary.com/dunew51zn/image/upload/v1617058733/splash/sumo-xl_tkmprq.jpg",
    small:
      "https://res.cloudinary.com/dunew51zn/image/upload/v1617058733/splash/sumo-md_cyacrd.jpg",
    background:
      "https://res.cloudinary.com/dunew51zn/image/upload/v1617058733/splash/bg-sumo-xl_cqp9gg.jpg",
  },
  {
    id: "27ed3539-8ac2-4520-8c58-a86bf52195d4",
    title: "Tawli",
    large:
      "https://res.cloudinary.com/dunew51zn/image/upload/v1617058733/splash/tawli-xl_xl85rv.jpg",
    small:
      "https://res.cloudinary.com/dunew51zn/image/upload/v1617058733/splash/tawli-md_byby0p.jpg",
    background:
      "https://res.cloudinary.com/dunew51zn/image/upload/v1617058733/splash/bg-tawli-xl_dwehzx.jpg",
  },
];

function loadSplashBackground() {
  const image = getRandomImage();
  const imageSize = getImageSize(image);

  document.documentElement.style.setProperty(
    "--splash-bg-img",
    `url(${imageSize})`
  );
}

// get random image from the SPLASH_IMAGES array
function getRandomImage() {
  return SPLASH_IMAGES[Math.floor(Math.random() * SPLASH_IMAGES.length)];
}

function getImageSize(image) {
  if (typeof window !== "undefined") {
    const mql = window.matchMedia("(min-width: 768px)");
    return mql.matches ? image.large : image.small;
  }

  return image.small;
}

loadSplashBackground();
