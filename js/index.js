$(document).ready(function(){
  console.log('xxxxx');
  if(typeof jQuery!=='undefined'){
    console.log('jQuery Loaded');
  }
  else{
      console.log('not loaded yet');
  }
  $('#data-back-btn').click(function(){
    window.location.href='index.html';
  });
  $('#data-upload-btn').click(function(e){
    console.log("12312123123: " + $('.myForm').serialize());
    
    $.ajax({
      url:'http://10.124.18.115:8080/apis/v1/article/',
      data:$('.myForm').serialize(), 
      type:'post',
      dataType: "json",
      crossDomain: true,
      success:function(data){
        // console.log(errmsg);
        // alert(data.errcode + ': ' +data.errmsg);
        $(".error").remove();
        if(data.errcode == 400101) {
          $("<span class='error'>Token cannot be empty</span>").insertAfter("#tokenL");
        }
        if(data.errcode == 400126) {
          $("<span class='error'>Article title required</span>").insertAfter("#titleL");
        }
        if(data.errcode == 400127) {
          $("<span class='error'>Article brief_image required</span>").insertAfter("#imageL");
        }
        if(data.errcode == 400128) {
          $("<span class='error'>Article banner required</span>").insertAfter("#bannerL");
        }
        if(data.errcode == 400129) {
          $("<span class='error'>Article content required</span>").insertAfter("#contentL");
        }
        if(data.errcode == 0) {
          alert("You have successfully submmitted a new artical!")
          window.location.href='index.html';
        }
      },
      error:function(){
        // console.log(errmsg);
      }
    });
    return false;
  });
  
});
