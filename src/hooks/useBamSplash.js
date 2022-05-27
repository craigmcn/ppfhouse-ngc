const bamSplashImages = [
  'https://res.cloudinary.com/dunew51zn/image/upload/v1617059121/bam/atlas_grvhwz.jpg',
  'https://res.cloudinary.com/dunew51zn/image/upload/v1617059121/bam/bench_jlxyyo.jpg',
  'https://res.cloudinary.com/dunew51zn/image/upload/v1617059121/bam/the-fight_b4tmfv.jpg',
];

const useBamSplash = () => {
  const random = Math.floor(Math.random() * bamSplashImages.length);

  if (typeof window !== 'undefined') {
    const mql = window.matchMedia('(min-width: 768px)');
    return mql.matches ? bamSplashImages[random] : null;
  }

  return null;
};
export default useBamSplash;
