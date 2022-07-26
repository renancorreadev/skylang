/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSelector, TypedUseSelectorHook } from 'react-redux'
//@ts-ignore
import { GameConfigPayload } from '@types/GameConfig'

interface RootState {
  GameConfig: GameConfigPayload
}

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector
