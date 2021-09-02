const convertTime = (time) =>
  [Math.floor((time % 3600) / 60), Math.floor(time % 60)]
    .map((e) => `${e}`.padStart(2, '0'))
    .join(':')

export default convertTime
