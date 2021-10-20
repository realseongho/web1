var Link = {
  setcolor:function(color){
    var links = document.querySelectorAll('a');
    var i = 0;
    while(i < links.length){
    links[i].style.color=color;
    i = i + 1;
    }
  }
}
var Body = {
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor=color;
  },
  setColor:function(color){
    document.querySelector('body').style.color=color;
  }
}
function nightdayhandle(self){
var target = document.querySelector('body')
if(self.value==='night')
{
Body.setBackgroundColor('black');
Body.setColor('white');
self.value='day';
Link.setcolor('Cornsilk');

}else
{
Body.setBackgroundColor('white');
Body.setColor('black');
self.value='night';
Link.setcolor('LightCoral');
}
}
