/* Listen for messages */
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.command && (msg.command == "remove")) {

    while($("li[role=listitem]:first div").size() > 0){

    	$("li[role=listitem]:first div").click();

    	sleepFor(500);

		$("button[aria-label='İşlemler']").click();

		sleepFor(200);

		$("li:contains('Konuşmayı Sil...')").click();

		sleepFor(200);


		$("input[name='delete_conversation']").parent().click();

		sleepFor(500);
    }

	

    sendResponse("ok");
  }
});

function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}