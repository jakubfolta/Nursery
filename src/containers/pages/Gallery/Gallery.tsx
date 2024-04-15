import React, { useContext, useEffect, useState } from "react";
import Hero from "../../../components/Hero/Hero";
import mobileParrot from "../../../assets/images/parrot-mobile.png";
import desktopParrot from "../../../assets/images/parrot-desktop.png";
import { WebpageContext } from "../../../store/webpage-context";
import { Arrow, ArrowContainer, ArrowIconContainer, CarouselContainer, CarouselImage, CarouselImageContainer, CarouselImagesContainer, CarouselSlides, CloseIcon, CloseIconContainer, GalleryContainer, GalleryStyledImage, StyledImage, StyledImageContainer } from "./styles";
import { Backdrop } from "../../../components";
import { CONSTANTS } from "../../../styles/global";
import { Scrollbar } from "smooth-scrollbar/scrollbar";

const menuAnimationDuration = CONSTANTS.menuAnimationDuration * 1000;

const Gallery: React.FC<{theme: string, scrollbar?: Scrollbar}> = props => {
  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');
  const [maluszkowoGallerySectionHeading, setMaluszkowoGallerySectionHeading] = useState('');
  const [starszakowoGallerySectionHeading, setStarszakowoGallerySectionHeading] = useState('');
  const [maluszkowoImagesUrls, setMaluszkowoImagesUrls] = useState<string[]>([]);
  const [starszakowoImagesUrls, setStarszakowoImagesUrls] = useState<string[]>([]);
  const [isPhotoClicked, setIsPhotoClicked] = useState(false);
  const [isBackdropClicked, setIsBackdropClicked] = useState(false);
  const [facilityCarousel, setFacilityCarousel] = useState('');
  const [carouselLength, setCarouselLength] = useState(-1);
  const [carouselTranslateValue, setCarouselTranslateValue] = useState('');
  const [isFirstImage, setIsFirstImage] = useState(false);
  const [isLastImage, setIsLastImage] = useState(false);
  
  const galleryPageContent = useContext(WebpageContext).pages['Gallery'];
  const galleryImages = useContext(WebpageContext).gallery;
  const headerHeight = useContext(WebpageContext).headerHeight;
  const translatePercentValue = 100;
  const hash = window.location.hash.replace('#', '');

  useEffect(() => {
    if (galleryPageContent && galleryImages) {
      setHeroHeading(galleryPageContent.heading_1);
      setHeroDescription(galleryPageContent.text_1);
      if (galleryPageContent.heading_2 && galleryImages['Maluszkowo'].length) {
        setMaluszkowoGallerySectionHeading(galleryPageContent.heading_2);
        setMaluszkowoImagesUrls(galleryImages['Maluszkowo']);
      }
      if (galleryPageContent.heading_3 && galleryImages['Starszakowo'].length) {
        setStarszakowoGallerySectionHeading(galleryPageContent.heading_3);
        setStarszakowoImagesUrls(galleryImages['Starszakowo']);
      }
    }
  }, [galleryPageContent, galleryImages]);

  useEffect(() => {
    const carousel = document.getElementById('carousel');

    if (carousel) {
      (carousel as HTMLElement).style.top = props.scrollbar?.offset.y + 'px';
      
      props.scrollbar?.addListener(function(status) {
        let offset = status.offset;
        (carousel as HTMLElement).style.top = offset.y + 'px';
      });
    }

  }, [isPhotoClicked]);

  useEffect(() => {
    if (hash === 'maluszkowo-gallery' || hash === 'starszakowo-gallery') {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, [hash, headerHeight]);

  const scrollToSection = ((sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const position = sectionElement!.offsetTop - headerHeight - 10;
    props.scrollbar?.scrollTo(0, position);    
  });

  const onPhotoClickHandler = (event: any, facility: string) => {
    const imageId = +event.target.id.replace(/^\D+/g, '');
    const translateValue = `${imageId * translatePercentValue}`;
    const facilityImages = facility === 'maluszkowo' ? maluszkowoImagesUrls : starszakowoImagesUrls;

    setTimeout(() => {
      const carousel = document.getElementById('carousel');
      
      carousel?.addEventListener('wheel', e => e.preventDefault());
      carousel?.addEventListener('touchmove', e => e.preventDefault());
    }, 200);

    setIsFirstImage(!imageId);
    setIsLastImage(imageId + 1 === facilityImages.length);
    setCarouselTranslateValue(translateValue);
    setIsBackdropClicked(false);
    setIsPhotoClicked(true);
    setFacilityCarousel(facility);
    setCarouselLength(facilityImages.length);
  }

  const closeSlider = () => {
    setIsBackdropClicked(true);

    setTimeout(() => {setIsPhotoClicked(false);}, menuAnimationDuration)
  }

  const onPreviousClickHandler = () => {
    if (isFirstImage) return;
    if (isLastImage) setIsLastImage(false);

    const updatedCarouselTranslateValue = (+carouselTranslateValue - translatePercentValue).toString();

    setCarouselTranslateValue(updatedCarouselTranslateValue);
    updatedCarouselTranslateValue === '0' && setIsFirstImage(true);
  }

  const onNextClickHandler = () => {
    if (isLastImage) return;
    if (isFirstImage) setIsFirstImage(false);

    const updatedCarouselTranslateValue = (+carouselTranslateValue + translatePercentValue).toString();
    const lastImageTranslateValue = ((carouselLength - 1) * translatePercentValue).toString();

    setCarouselTranslateValue(updatedCarouselTranslateValue);
    updatedCarouselTranslateValue === lastImageTranslateValue && setIsLastImage(true);
  }

  return (
    <>
      <Hero 
        theme={props.theme}
        heading={heroHeading}
        description={heroDescription}>
        <StyledImageContainer>
          <StyledImage 
            srcSet={`${mobileParrot} 520w, ${desktopParrot} 700w`}
            sizes="(max-width: 767px) 520px, 700px"
            src={desktopParrot}
            alt="Papuga"
          />
        </StyledImageContainer>
      </Hero>

      {isPhotoClicked &&
        <>
          <CarouselContainer id="carousel">
            <Backdrop
              onBackdropClick={closeSlider}
              isClicked={isBackdropClicked}
              isGallery />
            <ArrowContainer
              isBackdropClicked={isBackdropClicked}
              isLeft
              isFirstImage={isFirstImage}
              headerHeight={headerHeight}
              onClick={onPreviousClickHandler}>
              <ArrowIconContainer isLeft>
                <Arrow isLeft />
              </ArrowIconContainer>
            </ArrowContainer>
            <ArrowContainer
              isBackdropClicked={isBackdropClicked}
              isLastImage={isLastImage}
              headerHeight={headerHeight}
              onClick={onNextClickHandler}>
              <ArrowIconContainer>
                <Arrow />
              </ArrowIconContainer>
            </ArrowContainer>
            <CloseIconContainer 
              isBackdropClicked={isBackdropClicked}
              headerHeight={headerHeight}
              onClick={closeSlider}>
              <CloseIcon />
              <CloseIcon />
            </CloseIconContainer>
            <CarouselImagesContainer
              onClick={closeSlider}
              isClicked={isBackdropClicked}
              headerHeight={headerHeight}>
              
              <CarouselSlides 
                id="carousel-slides"
                translateValue={carouselTranslateValue}>
                {facilityCarousel === 'maluszkowo'
                  ? maluszkowoImagesUrls.map(url => 
                      <CarouselImageContainer>
                        <CarouselImage 
                          src={url}
                          alt="Zdjęcie z Maluszkowa"
                        />
                      </CarouselImageContainer>
                    )
                  : starszakowoImagesUrls.map(url =>
                      <CarouselImageContainer>
                        <CarouselImage 
                          src={url}
                          alt="Zdjęcie ze Starszakowa"
                        />
                      </CarouselImageContainer>
                    )
                }
              </CarouselSlides>
            </CarouselImagesContainer>
          </CarouselContainer>
        </>
      }

      {maluszkowoGallerySectionHeading &&
        <section>
          <div id="maluszkowo-gallery">
            <h2>{maluszkowoGallerySectionHeading}</h2>
            <GalleryContainer>
              {maluszkowoImagesUrls.map((url, index) => 
                <GalleryStyledImage
                  id={`maluszkowo-image-${index}`}
                  src={url}
                  alt="Zdjęcie z Maluszkowa"
                  onClick={(event) => onPhotoClickHandler(event, 'maluszkowo')}
                />
              )}
            </GalleryContainer>
          </div>
        </section>
      }

      {starszakowoGallerySectionHeading &&
        <section>
          <div id="starszakowo-gallery">
            <h2>{starszakowoGallerySectionHeading}</h2>
            <GalleryContainer>
              {starszakowoImagesUrls.map((url, index) => 
                <GalleryStyledImage
                  id={`starszakowo-image-${index}`}
                  src={url}
                  alt="Zdjęcie ze Starszakowa"
                  onClick={(event) => onPhotoClickHandler(event, 'starszakowo')}
                />
              )}
            </GalleryContainer>
          </div>
        </section>
      }
    </>
  );
}

export default Gallery;