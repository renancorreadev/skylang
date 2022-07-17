import { useFetchAudio } from '@hooks'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  ListenAudioContainer,
  Title,
  CarouselWrapper,
  CarouselTitle,
  CarouselDescription,
  CarouselLanguage
} from './styles'

// Import Swiper styles
import 'swiper/css'
import './customSwiper.css'
import { CustomAudioPlayer } from '@components/CustomAudioPlayer'

export function ListenAudio() {
  const { listAudioFiles } = useFetchAudio()

  return (
    <ListenAudioContainer>
      <Title>Listen to phrases in English and Portuguese constantly.</Title>
      <CarouselWrapper>
        <Swiper
          spaceBetween={20}
          slidesPerView={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {listAudioFiles.map((item) => {
            return (
              <SwiperSlide
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '0.6em'
                }}
                key={item.id}
                className="swiperSlider"
              >
                <CarouselWrapper>
                  <CarouselLanguage>{item.language} </CarouselLanguage>
                </CarouselWrapper>
                <CarouselWrapper>
                  <CarouselTitle>{item.phrase_en}</CarouselTitle>
                </CarouselWrapper>
                <CarouselWrapper>
                  <CarouselDescription>{item.audiocontent}</CarouselDescription>
                </CarouselWrapper>
                <CarouselWrapper>
                  <CustomAudioPlayer key={item.id} src={item.url} />
                </CarouselWrapper>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </CarouselWrapper>
    </ListenAudioContainer>
  )
}
