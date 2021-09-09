


//window.addEventListener('DOMContentLoaded', function(){
	
	var distributedstart = {
		go:function(loadUrlList,loadEndFunc){
			var script;
			var okCount=ngCount=0,
				listMax = loadUrlList.length;
			
				
			loadUrlList.forEach((url, list_index, targetArray) => {
				
				window.addEventListener('load', function(){
					script = document.createElement('script');
					script.src = url;
					script.onload = function() {
						++okCount;
						console.log('count -----',listMax);
						console.log(this);
						console.log('load OK:'+url);
						decisionRun();
					};
					script.onerror = function(){
						++ngCount;
						console.warn('load NG:'+url);
						decisionRun();
					}
					console.log('count -----',listMax, script.src);
					console.log(script);
					
					document.getElementsByTagName('body')[0].appendChild(script);

				});
				
				function decisionRun(){
					console.log('ok:'+okCount,'ng:'+ngCount,'Max'+listMax);
					if(okCount+ngCount==listMax)
						if(okCount==listMax){
							console.log('All Loading OK!!!');
							loadEndFunc();
						}else{
							console.error('All Loading NG!!!');
						}
				}
			});
		}
	};

//});
