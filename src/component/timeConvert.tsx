function TimeConvert(second_: number) {
  var timeM: string = ('0' + Math.floor(second_ / 60)).slice(-2);
  var timeS: string = ('0' + Math.floor(second_ % 60)).slice(-2);
  var timeString: string = timeM + ':' + timeS;

  return timeString;
}

export default TimeConvert;
