
				var text1=document.getElementById('text');
			var eventblock =document.getElementById('eventsdatablock');
			var extradata=document.getElementById('eventsdatablock');
			document.getElementById('eventsdatablock').style.height="150px"
			document.getElementById('eventsdatablock').style.width="300px"
			document.getElementById('extradatablock').style.height="150px"
			document.getElementById('extradatablock').style.width="300px"
			document.getElementById('classroomdatablock').style.height="150px"
			document.getElementById('classroomdatablock').style.width="300px"

						/*retriving data*/

			

	function submitclick(){
			var firebaseRef =firebase.database().ref();
			
		var eventsvalue=document.getElementById('eventsdatablock').value;
			firebaseRef.child("Text").set(eventsvalue);


									/*retriving data*/
		var	firebasedataRef=firebase.database().ref().child("Text");
		firebasedataRef.on('value',function(retrivedata){
		//	extradata.innerText=retrivedata.val();
			text1.innerText=retrivedata.val();
		});
	}

