/**
 * 帧动画库类
 * @constructor
 */
class Animation {
  constructor(){

  }
  /**
   * 添加一个同步任务，去预加载图片
   * @param imglist 图片数组
   */
  loadImg(imglist){

  }
  /**
   * 添加一个异步定时任务，通过定时改变背景图位置，实现帧动画
   * @param {dom对象} ele 
   * @param {背景位置数组} positions 
   * @param {图片地址} imgUrl 
   */
  changePosition(ele,positions,imgUrl){

  }
  /**
   * 添加一个异步定时任务，通过定时改变img的src属性，实现帧动画
   * @param {*dom对象} ele 
   * @param {*图片地址数组} imgSrcList 
   */
  changeSrc(ele,imgSrcList){

  }
  /**
   * 高级任务 添加一个异步定时任务
   * @param {自定义帧动画的任务执行函数} taskFn 
   */
  enterFrame(taskFn){

  }
  /**
   * 添加一个同步任务，在上一个任务结束之后执行
   * @param {要执行的回调函数} callback 
   */
  done(callback){

  }
  /**
   * 开始执行的任务
   * @param {函数执行的时间间隔，毫秒为单位} interval 
   */
  start(interval){

  }
  /**
   * 定义一个同步任务，可以回退到上一个任务执行时
   * 实现上一个任务重复执行的效果
   * @param {定义重复的次数} times 
   */
  repeat(times){

  }
  /**
   * 添加一个同步任务，可以无限执行，是repeat()更友好的接口
   */
  repeatForever(){

  }
  /**
   * 设置当前任务执行结束后到下一个任务开始执行之前的等待时间
   * @param {定义等待的毫秒数} time 
   */
  wait(time){

  }
  /**
   * 暂停当前的异步定时任务
   */
  pause(){

  }
  /**
   * 重新开始执行上一次暂停的异步定时任务
   */
  restart(){

  }
  /**
   * 释放占用的资源
   */
  release(){

  }
}