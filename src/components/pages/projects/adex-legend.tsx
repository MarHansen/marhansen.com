import Container from "../../containers/container";
import "../../../css/custom.css";
import "../../../css/index.css";
// import { Helmet } from "react-helmet";
import Transition from "../../animation/page-transition";
import { Outlet } from "react-router-dom";
import ReturnButton from "../../buttons/return-button";
import CustomButton from "../../buttons/main-button";
import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FigmaIcon from "../../techstack/figma-icon";
import HTMLIcon from "../../techstack/html-icon";
import CSSIcon from "../../techstack/css-icon";
import JSIcon from "../../techstack/javascript-icon";
import HeadHelmet from "../../head-helmet";

const images = [
  "/showcase/adex/adex-1.webp",
  "/showcase/adex/adex-2.webp",
  "/showcase/adex/adex-3.webp",
  "/showcase/adex/adex-4.webp",
];

function Adex() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAuto, setIsAuto] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const preloadImages = (imageUrls: any) => {
    imageUrls.forEach((imageUrl: any) => {
      const img = new Image();
      img.src = imageUrl;
    });
  };

  preloadImages(images);

  const variants = useMemo(
    () => ({
      initial: (direction: any) => {
        return {
          x: direction > 0 ? "100%" : "-100%",
        };
      },
      animate: {
        x: 0,
        opacity: 1,

        transition: {
          x: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
        },
      },
      exit: (direction: any) => {
        return {
          x: direction > 0 ? "-100%" : "100%",

          transition: {
            x: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
          },
        };
      },
    }),
    []
  );

  useEffect(() => {
    if (isAuto) {
      const timer = setTimeout(() => {
        next();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [index, isAuto]);

  const next = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection(1);
      setIndex((prevIndex) =>
        prevIndex + 1 === images.length ? 0 : prevIndex + 1
      );

      setTimeout(() => {
        setIsAnimating(false);
      }, 400);
    }
  }, [isAnimating, setDirection, setIndex]);

  const prev = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection(-1);
      setIndex((prevIndex) =>
        prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
      );

      setTimeout(() => {
        setIsAnimating(false);
      }, 400);
    }
  }, [isAnimating, setDirection, setIndex]);

  const dot = useCallback(
    (indexs: any) => {
      setDirection(indexs > index ? 1 : -1);
      setIndex(indexs);
    },
    [setDirection, setIndex]
  );
  return (
    <>
      <Transition>
        <HeadHelmet title="Adex──marhansen"></HeadHelmet>
        <Container>
          <>
            <div className="mt-24 mb-10">
              <ReturnButton></ReturnButton>
              <section className="h-full grid lg:grid-cols-3 grid-cols-1">
                <section className="flex flex-col gap-10">
                  <h1 className="font-serif text-[4rem]">Adex Legend</h1>
                  <div className="flex flex-wrap lg:flex-col flex-row justify-start lg:gap-20 gap-16">
                    <div>
                      <h1 className="font-body font-bold text-black text-opacity-75">
                        ROLE
                      </h1>
                      <p>Frontend ── UI/UX</p>
                    </div>
                    <div>
                      <h1 className="font-body font-bold text-black text-opacity-75">
                        DEVELOPED
                      </h1>
                      <p>May 2022</p>
                    </div>
                    <div>
                      <h1 className="font-body font-bold text-black text-opacity-75">
                        DOCUMENTATION
                      </h1>
                      <div className="w-fit flex flex-wrap gap-5 mt-3">
                        <CustomButton
                          to="https://github.com/MarHansen/HCI--Adex-Legends"
                          openInNewTab
                        >
                          Github
                        </CustomButton>
                        <CustomButton
                          to="https://www.behance.net/gallery/171659489/Serene"
                          openInNewTab
                        >
                          Bēhance
                        </CustomButton>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="lg:col-span-2 col-span-1 flex flex-col lg:mt-5 mt-20 gap-5">
                  <h1 className="font-body font-bold text-black text-opacity-75">
                    ABOUT
                  </h1>
                  <p className="font-medium text-[#7D0F10]">
                    Adex Legends theme was decided by University as a main theme
                    for the final project. Adex Legend is simply a copy of Apex
                    Legends battle royale game with heroes abilities.
                  </p>
                  <div className="flex lg:flex-row flex-col gap-3">
                    <p className="w-fit">
                      Adex Legends is my first time debut designing a UI/UX mega
                      project with figma prototyping. The 'Game' theme in this
                      project is the most challenging part too work at. Game
                      theme usually contains colorful theme and flashy content
                      in the game that represent the game itself. To work with
                      that, we need to do a research from all tactical shooter
                      game websites like 'Valorant' and 'Rainbow 6 siege' and do
                      a benchamarking for each website to find the selling
                      points from the website design itself.
                    </p>
                    <p className="w-fit">
                      The frontend development is the most challenging part.
                      Because the design is quite hard to be done in responsive
                      page and this website project only allowed using vanilla
                      HTML, CSS, JS. We manage to do with some design tweaking
                      in the frontend parts and cutoff the hardest part to do
                      with responsive pages.
                    </p>
                  </div>
                  <h1 className="font-body font-bold text-black text-opacity-75">
                    TECH STACK
                  </h1>
                  <div className="flex flex-wrap gap-3">
                    <FigmaIcon></FigmaIcon>
                    <HTMLIcon></HTMLIcon>
                    <CSSIcon></CSSIcon>
                    <JSIcon></JSIcon>
                  </div>

                  <div
                    onMouseEnter={() => setIsAuto(false)}
                    onMouseLeave={() => setIsAuto(true)}
                    className="m-auto w-full aspect-[calc(16/9)] relative overflow-hidden"
                  >
                    <AnimatePresence initial={false} custom={direction}>
                      <motion.img
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        key={images[index]}
                        src={images[index]}
                        alt="caraousel"
                        custom={direction}
                        draggable={false}
                        className="absolute top-0 left-0 w-full h-full object-cover object-center"
                      />
                    </AnimatePresence>

                    <button
                      className="absolute lg:scale-100 scale-75 top-1/2 lg:left-5 left-2 transform -translate-y-1/2"
                      onClick={prev}
                    >
                      <div
                        data-cursor-size="60px"
                        data-cursor-stick="#stick-item"
                        data-cursor-exclusion
                      >
                        {" "}
                        <svg
                          width="42"
                          height="42"
                          viewBox="0 0 42 42"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_b_324_42)">
                            <circle
                              cx="21"
                              cy="21"
                              r="21"
                              transform="matrix(-1 0 0 1 42 0)"
                              fill="#2B2724"
                              fill-opacity="0.7"
                            />
                          </g>
                          <path
                            d="M25 30L16 21L25 12"
                            stroke="#EDE8E2"
                            stroke-width="2"
                          />
                          <defs>
                            <filter
                              id="filter0_b_324_42"
                              x="-60"
                              y="-60"
                              width="162"
                              height="162"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feGaussianBlur
                                in="BackgroundImageFix"
                                stdDeviation="30"
                              />
                              <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_324_42"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_324_42"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </button>
                    <button
                      className="absolute lg:scale-100 scale-75 top-1/2 lg:right-5 right-2 transform -translate-y-1/2"
                      onClick={next}
                    >
                      <div
                        data-cursor-size="60px"
                        data-cursor-stick="#stick-item"
                        data-cursor-exclusion
                      >
                        <svg
                          width="42"
                          height="42"
                          viewBox="0 0 42 42"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g filter="url(#filter0_b_324_41)">
                            <circle
                              cx="21"
                              cy="21"
                              r="21"
                              fill="#2B2724"
                              fill-opacity="0.7"
                            />
                          </g>
                          <path
                            d="M17 30L26 21L17 12"
                            stroke="#EDE8E2"
                            stroke-width="2"
                          />
                          <defs>
                            <filter
                              id="filter0_b_324_41"
                              x="-60"
                              y="-60"
                              width="162"
                              height="162"
                              filterUnits="userSpaceOnUse"
                              color-interpolation-filters="sRGB"
                            >
                              <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                              />
                              <feGaussianBlur
                                in="BackgroundImageFix"
                                stdDeviation="30"
                              />
                              <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_324_41"
                              />
                              <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_324_41"
                                result="shape"
                              />
                            </filter>
                          </defs>
                        </svg>
                      </div>
                    </button>
                  </div>
                  <div
                    onMouseEnter={() => setIsAuto(false)}
                    onMouseLeave={() => setIsAuto(true)}
                    className="flex justify-center gap-5 items-center"
                  >
                    {images.map((_, indexs) => (
                      <div
                        key={indexs}
                        data-cursor-size="30px"
                        data-cursor-stick="#stick-item"
                        data-cursor-exclusion
                        className={`w-[0.5rem] h-[0.5rem] rounded-full bg-black bg-opacity-50 cursor-pointer transition duration-300 ease-cubic-bezier${
                          index === indexs
                            ? "bg-black bg-opacity-100 w-[0.7rem] h-[0.7rem] transition duration-300 ease-cubic-bezier"
                            : ""
                        }`}
                        onClick={() => dot(indexs)}
                      ></div>
                    ))}
                  </div>
                </section>
              </section>

              {/* <Footer></Footer> */}
              <Outlet />
            </div>
          </>
        </Container>
      </Transition>
    </>
  );
}

export default Adex;
