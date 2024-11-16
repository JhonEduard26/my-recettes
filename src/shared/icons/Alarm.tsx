interface Props {
  width?: number
  height?: number
}

export const AlarmIcon = ({ width = 40, height = 40 }: Props) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24">
      <g fill="none">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
        <path
          fill="currentColor"
          d="M12 4a9 9 0 1 1 0 18a9 9 0 0 1 0-18m0 4a1 1 0 0 0-.993.883L11 9v3.986a1 1 0 0 0 .202.617l.09.104l2.106 2.105a1 1 0 0 0 1.498-1.32l-.084-.094L13 12.586V9a1 1 0 0 0-1-1m6-5.394a12 12 0 0 1 3.272 2.776a1 1 0 0 1-1.544 1.27a10 10 0 0 0-2.729-2.315a1 1 0 1 1 1.002-1.731Zm-10.634.365A1 1 0 0 1 7 4.337a10 10 0 0 0-2.729 2.316a1 1 0 1 1-1.544-1.27a12 12 0 0 1 3.271-2.777a1 1 0 0 1 1.367.365Z"
        ></path>
      </g>
    </svg>
  )
}
