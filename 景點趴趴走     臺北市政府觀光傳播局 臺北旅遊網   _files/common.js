function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}

function openWindow(mypage, myname, w, h, scroll) {
  var winl=(screen.width - w) / 2;
  var wint=(screen.height - h) / 2;
  winprops='height='+h+',width='+w+',top='+wint+',left='+winl+',toolbar=no,menubar=no,scrollbars=' + scroll + ',resizable=no';
  win = window.open(mypage, myname, winprops);
  if (parseInt(navigator.appVersion) >= 4) { 
    win.window.focus(); 
  }
}

function setSelectedOption(selectObject,selectedLabel){
	for(var i=0;i<selectObject.options.length;i++){
		if(selectObject.options[i].value==selectedLabel){
			selectObject.options[i].selected=true;
			return;
		}
	}
}

function removeAllElements(elements) {
	with (elements) {
		while (elements.length > 0) {
			elements.remove(0);
		}
	}	
}
function doSearch(dateIndex,dateId1,dateId2,searchFormId){
		var tag1=false;
		var tag2=false;
		var date1;
		var date2;
		if($(dateId1)&&$(dateId1).value!=""){date1 =$(dateId1).value;tag1=true;}
		if($(dateId2)&&$(dateId2).value!=""){date2 =$(dateId2).value;tag2=true;}
		if($('searchSelect').selectedIndex==dateIndex&&tag1&&tag2){
			var error = '開始日期不得大於結束日期！';
			var ymd1 = date1.split('/');
			var ymd2 = date2.split('/');
			var y1=ymd1[0]-0; var m1=ymd1[1]-0;	var d1=ymd1[2]-0;
			var y2=ymd2[0]-0; var m2=ymd2[1]-0;	var d2=ymd2[2]-0;
			if(y1>y2){
				alert(error);
			}else if(y1==y2){
				if(m1>m2){
					alert(error);
				}else if(m1==m2){
					if(d1>d2){
						alert(error);
					}else{
						$(searchFormId).submit();
					}
				}else{
					$(searchFormId).submit();
				}
			}else{
				$(searchFormId).submit();
			}
			
		}else{
			$(searchFormId).submit();
		}
	}