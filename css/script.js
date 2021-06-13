var imagesource=["https://media.beam.usnews.com/33/8f/f70820f24e8e9fd76e70010efefe/140702-editorial.jpg","https://africa.cgtn.com/wp-content/photo-gallery/2021/06/GettyImages-1251486618.jpg","https://images.theconversation.com/files/93771/original/image-20150903-8808-1pbmzl7.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"]
var index=0;
setInterval(function(){
if(index===imagesource.length){
  index=0;
}
// document.getElementsByTagName("header")[0].style.backgroundImage="url(imagesource[index])";
document.getElementsByClassName("header")[0].style.backgroundImage="linear-gradient(to right, rgba(19, 37, 53, 0.6), rgba(22, 30, 68, 0.6)),url('"+imagesource[index]+"')";
index++;
},3500);