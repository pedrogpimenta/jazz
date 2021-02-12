export const MUSIC = [
  {
    __html: `<span>Grant Green</span> Idle Moments`,
    img: '/assets/albums/GrantGreenIdleMoments.jpg',
    src: 'https://www.youtube.com/watch?v=wWaH2PSREWo',
  },
  {
    __html: `<span>Grant Green</span> Street of Dreams`,
    img: '/assets/albums/GrantGreenStreetofDreams.jpg',
    src: 'https://www.youtube.com/watch?v=08balpAm9Ak',
  },
  {
    __html: `<span>Miles Davis</span> Kind of Blue`,
    img: '/assets/albums/MilesDavisKindofBlue.jpg',
    src: 'https://www.youtube.com/watch?v=j9QXpfvgSVk',
  },
  {
    __html: `<span>Miles Davis</span> Miles In The Sky`,
    img: '/assets/albums/MilesDavisMilesInTheSky.jpg',
    src: 'https://www.youtube.com/watch?v=abzjkAGT_VI',
  },
  {
    __html: `Workin' with the <span>Miles Davis</span> Quintet`,
    img: '/assets/albums/WorkinwiththeMilesDavisQuintet.jpg',
    src: 'https://www.youtube.com/watch?v=gw4NmBPLNBI',
  },
  {
    __html: `Steamin' with the <span>Miles Davis</span> Quintet`,
    img: '/assets/albums/SteaminwiththeMilesDavisQuintet.jpg',
    src: 'https://www.youtube.com/watch?v=mMyOAFWxEF0',
  },
  {
    __html: `<span>Miles Davis</span> meets <span>Thelonious Monk</span> | Jazz Essentials`,
    img: '/assets/albums/MilesDavisMeetsTheloniousMonkEssentialJazz.jpg',
    src: 'https://www.youtube.com/watch?v=O7zaUceGCmY',
  },
]

export const COLORS = [
  '#D86830',
  '#FF6888',
  '#082868',
  '#982820',
  '#481050',
  '#82B825',
]

export const CONTROLS_MUSIC_BGS = [
  <svg className="control__music--bg" width="936" height="390" viewBox="0 0 312 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M45.017 125.5L44.9585 125.499L44.9002 125.503L1.53897 128.394L4.465 6.47649L310.476 1.52485L308.523 128.483L45.017 125.5Z"
          fill="white"
          stroke={COLORS[Math.floor(Math.random() * COLORS.length)]}
          stroke-width="3"
    />
  </svg>,
  <svg className="control__music--bg" width="936" height="390" viewBox="0 0 312 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M304.546 2.50957L308.452 128.482L45.017 125.5L44.9585 125.499L44.9002 125.503L11.3901 127.737L2.60991 4.48948L304.546 2.50957Z"
          stroke={COLORS[Math.floor(Math.random() * COLORS.length)]}
          stroke-width="3"
          fill="white"
    />
  </svg>,
  <svg className="control__music--bg" width="936" height="390" viewBox="0 0 312 130" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M45.017 125.5L44.9585 125.499L44.9002 125.503L1.55015 128.393L5.45412 1.51423L310.422 4.4847L304.076 128.433L45.017 125.5Z"
          stroke={COLORS[Math.floor(Math.random() * COLORS.length)]}
          stroke-width="3"
          fill="white"
    />
  </svg>,
]