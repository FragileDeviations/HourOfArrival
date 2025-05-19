
    var baseurl = 'www.freerebelart.net/call/';
    
    function createRequestObject() {
        var reqObj;
        var browser = navigator.appName;
        if(browser == "Microsoft Internet Explorer"){
            reqObj = new ActiveXObject("Microsoft.XMLHTTP");
        }else{
            reqObj = new XMLHttpRequest();
        }
        return reqObj;
    }

    var httpObj = createRequestObject();
    var wfcCounter = 0;
    var wfcLimit = 25;
    var wfcInterval = 5000;
    var wfcTimer;
    var wfcResponse = new Array();
    wfcResponse[0] = 'undefined';
    wfcResponse[1] = 'undefined';
    
    setTimeout('wfc()', wfcInterval);
    
    
    function wfc()
    {               
        if(wfcCounter < wfcLimit)
        {
            httpObj.open('get', 'http://' + baseurl + 'WfcHandler.ashx');
            httpObj.onreadystatechange = handleServerResponse;
            httpObj.send(null);    
            wfcCounter++;           
        }
        else
        {
            window.location = 'error.art?e=' + wfcResponse[0] + '|' + wfcResponse[1];
        }
    }
    
    function handleServerResponse() 
    {            
        if(httpObj.readyState == 4)
        {
            clearInterval(wfcInterval);
            
            try 
            {
                wfcResponse = httpObj.responseText.split("|");

                
                if(wfcResponse[1] == 'password') 
                {
                    window.location = 'youareathreat.art';
                }
                else if(wfcResponse[1] == 'noinput' || wfcResponse[1] == 'nomatch') 
                {
                    window.location = 'error.art?e=' + wfcResponse[0] + '|' + wfcResponse[1];
                }
                else if(wfcResponse[0] == 'failed' || wfcResponse[0] == 'invalid')
                {
                    window.location = 'error.art?e=' + wfcResponse[0] + '|' + wfcResponse[1];
                }
                else
                {
                    wfcTimer = setTimeout('wfc()', wfcInterval);
                }
                
            } catch(e) {}            
        }
    }    
    