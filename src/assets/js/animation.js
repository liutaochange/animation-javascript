let options = {
  imgUrl: './assets/images/rabbit-big.png',
  positions: ['0 -854','-174 -852','-349 -852','-524 -852','-698 -852','-873 -848'],
  ele: document.getElementById('rabbit')
}
let {imgUrl,positions,ele} = options
Animation(ele,positions,imgUrl)
function Animation(ele,positions,imgUrl){
  ele.style.backgroundImage = `url(${imgUrl})`
  ele.style.backgroundRepeat = 'no-repeat'
  let index = 0
  function run(){
    let currentPosition = positions[index].split(' ')
    console.log(currentPosition)
    ele.style.backgroundPosition = `${currentPosition[0]}px ${currentPosition[1]}px`
    index++;
    if(index>=positions.length){
      index = 0;
    }
    setInterval(run, 80)
  }
  run()
}