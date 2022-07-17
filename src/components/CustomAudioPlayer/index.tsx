/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useState, useRef, useEffect } from 'react'
import { ArrowLeft, ArrowRight, Pause, Play } from 'phosphor-react'
import {
  AudioContainer,
  AudioPayer,
  ButtonBack,
  ButtonForward,
  ButtonPlay,
  CurrentTime,
  Duration,
  ProgressBar,
  ProgressBarContainer,
  SecoundColum,
  FirstContainer
} from './styles'

interface AudioPlayerProps {
  src: string | undefined
  // url?: string | undefined
}

export const CustomAudioPlayer = ({ src = '' }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)
  const [isEnded, setIsEnded] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)
  const progressRef = useRef<HTMLInputElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    if (
      audioRef &&
      audioRef.current != undefined &&
      progressRef &&
      progressRef.current != undefined
    ) {
      const seconds = Math.floor(audioRef?.current?.duration)
      setDuration(seconds)

      const newSecounds = seconds.toString()
      progressRef.current.max = newSecounds
    }
  }, [audioRef?.current?.onloadedmetadata, audioRef?.current?.readyState])

  useEffect(() => {
    if (currentTime === duration) {
      if (progressRef.current) {
        progressRef.current.valueAsNumber = 0
      }
      setIsEnded(true)
    } else {
      setIsEnded(false)
    }
  }, [currentTime, duration])

  const handlePlayOrPause = () => {
    setIsPlaying(!isPlaying)

    if (!isPlaying) {
      audioRef.current?.play()
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioRef.current && audioRef.current.pause()
      //@ts-ignore
      animationRef && cancelAnimationFrame(animationRef?.current)
    }
  }

  const whilePlaying = () => {
    if (
      progressRef.current != undefined &&
      audioRef.current != undefined &&
      animationRef.current != undefined
    ) {
      progressRef.current.value = audioRef.current.currentTime.toString()
      changePlayerCurrentTime()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const value = whilePlaying
      animationRef.current = requestAnimationFrame(value)
    }
  }

  const calculateTime = (secs: number) => {
    const minutes = Math.floor(secs / 60)
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const seconds = Math.floor(secs % 60)
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${returnedMinutes}:${returnedSeconds}`
  }

  const changePlayerCurrentTime = () => {
    // setCurrentTime()
    if (progressRef.current != undefined) {
      const _currentTime = parseInt(progressRef.current.value)

      progressRef.current.style.setProperty(
        `##26c9c3`,
        `${(_currentTime / duration) * 100}%`
      )
      setCurrentTime(_currentTime)
    }
  }

  const changeRange = () => {
    if (audioRef.current != undefined && progressRef.current != undefined) {
      audioRef.current.currentTime = parseInt(progressRef.current.value)
      changePlayerCurrentTime()
    }
  }

  const backThirty = () => {
    if (progressRef.current != undefined) {
      const _currentTime = parseInt(progressRef.current.value)
      const new_currentTime = _currentTime - 30
      new_currentTime
      changeRange()
    }
  }

  const forwardThirty = () => {
    if (progressRef.current != undefined) {
      const _currentTime = parseInt(progressRef.current.value)
      const new_currentTime = _currentTime + 30
      new_currentTime
      changeRange()
    }
  }

  const IconToEnable = () => {
    if (isPlaying && !isEnded) {
      return <Pause size={32} />
    } else if (!isPlaying && !isEnded) {
      return <Play size={32} />
    }
    return <Play size={32} />
  }

  // const afterEnded = () => {
  //   if (audioRef.current != undefined) {
  //     audioRef.current.src = url
  //     audioRef.current.play()
  //   }
  // }

  return (
    <AudioContainer>
      <AudioPayer ref={audioRef} src={src} preload="metada" />

      <FirstContainer>
        <ButtonBack onClick={backThirty}>
          <ArrowLeft size={32} />
        </ButtonBack>
        <ButtonPlay onClick={handlePlayOrPause}>
          <IconToEnable />
        </ButtonPlay>
        <ButtonForward onClick={forwardThirty}>
          <ArrowRight size={32} />
        </ButtonForward>
      </FirstContainer>

      <SecoundColum>
        <CurrentTime>
          {isEnded ? '00:00' : calculateTime(currentTime)}
        </CurrentTime>

        <ProgressBarContainer>
          <ProgressBar
            type="range"
            ref={progressRef}
            defaultValue="0"
            onChange={changeRange}
          />
        </ProgressBarContainer>

        <Duration>
          {duration && !isNaN(duration) && calculateTime(duration)}
        </Duration>
      </SecoundColum>
    </AudioContainer>
  )
}
