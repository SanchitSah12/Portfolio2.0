import './index.scss'

type AnimatedLettersProps = {
  letterClass: string,
  strArray: string[],
  idx: number
}

const AnimatedLetters = ({letterClass, strArray, idx}: AnimatedLettersProps) => {
  return (
    <span>
        {
            strArray.map((char,i)=>{
                return <span key = {char+i} className={`${letterClass} _${i+idx}`}>
                    {char}
                </span>
            })
        }
    </span>
  )
}

export default AnimatedLetters