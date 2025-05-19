// JScript File

function getContent(threadId){
    switch(threadId)
    {
        case 0:
            document.getElementById("threadText").src = 'sympathetic.htm';
            document.getElementById("thread1").innerHTML = '<a href="javascript:swapContent(\'sympathetic.htm\');addHeader(\'sympathetic\');">Sympathetic Resonance</a>';
            document.getElementById("thread2").innerHTML = '<a href="javascript:swapContent(\'workarounds.htm\');addHeader(\'workarounds\');">Workarounds</a>';
            document.getElementById("thread3").innerHTML = '<a href="javascript:swapContent(\'tangent.htm\');addHeader(\'tangent\');">SR Tangent - Depth</a>';
            document.getElementById("thread4").innerHTML = '';
            document.getElementById("thread5").innerHTML = '';
            document.getElementById("thread6").innerHTML = '';
            document.getElementById("heading").innerHTML = '<span style="font-size:11px; font-family:Arial; color:#cccccc; font-style:italic;">Ongoing:   </span><span style="font-family:Arial; font-size:14px; font-weight:bold;">Sympathetic Resonance</span>';
            break;
        
        case 1:
            document.getElementById("threadText").src = 'locating_01.htm';
            document.getElementById("thread1").innerHTML = '<a href="javascript:swapContent(\'locating_01.htm\');">01</a>';
            document.getElementById("thread2").innerHTML = '<a href="javascript:swapContent(\'locating_02.htm\');">02</a>';
            document.getElementById("thread3").innerHTML = '';
            document.getElementById("thread4").innerHTML = '';
            document.getElementById("thread5").innerHTML = '';
            document.getElementById("thread6").innerHTML = '';
            document.getElementById("heading").innerHTML = '';
            break;    
            
        case 2:
            document.getElementById("threadText").src = 'usage.htm';
            document.getElementById("thread1").innerHTML = '<a href="javascript:swapContent(\'usage.htm\');addHeader(\'usage\');">Usage Request</a>';
            document.getElementById("thread2").innerHTML = '<a href="javascript:swapContent(\'upgrade.htm\');addHeader(\'upgrade\');">Upgrade Request</a>';
            document.getElementById("thread3").innerHTML = '<a href="javascript:swapContent(\'sysupdate.htm\');addHeader(\'system\');">System Update</a>';
            document.getElementById("thread4").innerHTML = '<a href="javascript:swapContent(\'testprep.htm\');addHeader(\'test\');">Test Prep</a>';
            document.getElementById("thread5").innerHTML = '';
            document.getElementById("thread6").innerHTML = '';            
            document.getElementById("heading").innerHTML = '<span style="font-family:Arial; font-size:14px; font-weight:bold;">Usage Request</span>';
            break;          
            
        case 3:
            document.getElementById("threadText").src = 'malletrings.htm';
            document.getElementById("thread1").innerHTML = '';
            document.getElementById("thread2").innerHTML = '';
            document.getElementById("thread3").innerHTML = '';
            document.getElementById("thread4").innerHTML = '';
            document.getElementById("thread5").innerHTML = '';
            document.getElementById("thread6").innerHTML = '';            
            document.getElementById("heading").innerHTML = '<span style="font-family:Arial; font-size:14px; font-weight:bold;">Mallet Rings | </span><span style="font-size:11px; font-family:Arial; color:#cccccc; ">Updated:  Thurs 2/10</span>';
            break;                     
                    
        case 4:
            document.getElementById("threadText").src = 'subsystem.htm';
            document.getElementById("thread1").innerHTML = '';
            document.getElementById("thread2").innerHTML = '';
            document.getElementById("thread3").innerHTML = '';
            document.getElementById("thread4").innerHTML = '';
            document.getElementById("thread5").innerHTML = '';
            document.getElementById("thread6").innerHTML = '';            
            document.getElementById("heading").innerHTML = '<span style="font-family:Arial; font-size:14px; font-weight:bold;">EPR Subsystem | </span><span style="font-size:11px; font-family:Arial; color:#cccccc; ">Updated:  Thurs 2/10</span>';
            break;  
            
        case 5:
            document.getElementById("threadText").src = 'power.htm';
            document.getElementById("thread1").innerHTML = '';
            document.getElementById("thread2").innerHTML = '';
            document.getElementById("thread3").innerHTML = '';
            document.getElementById("thread4").innerHTML = '';
            document.getElementById("thread5").innerHTML = '';
            document.getElementById("thread6").innerHTML = '';            
            document.getElementById("heading").innerHTML = '<span style="font-family:Arial; font-size:14px; font-weight:bold;">Power | </span><span style="font-size:11px; font-family:Arial; color:#cccccc; ">Updated:  Thurs 2/10</span>';
            break;      
            
        case 6:
            document.getElementById("threadText").src = 'comm.htm';
            document.getElementById("thread1").innerHTML = '';
            document.getElementById("thread2").innerHTML = '';
            document.getElementById("thread3").innerHTML = '';
            document.getElementById("thread4").innerHTML = '';
            document.getElementById("thread5").innerHTML = '';
            document.getElementById("thread6").innerHTML = '';            
            document.getElementById("heading").innerHTML = '<span style="font-family:Arial; font-size:14px; font-weight:bold;">Comm | </span><span style="font-size:11px; font-family:Arial; color:#cccccc; ">Updated:  Thurs 2/10</span>';
            break;                  
                    
                               
                                          
            
        
   
   
   
   
   } 


}

function addHeader(headerId){
    switch(headerId)
   {
        case 'sympathetic':
            document.getElementById("heading").innerHTML = '<span style="font-size:11px; font-family:Arial; color:#cccccc; font-style:italic;">Ongoing:   </span><span style="font-family:Arial; font-size:14px; font-weight:bold;">Sympathetic Resonance</span>';
            break;

        case 'workarounds':
            document.getElementById("heading").innerHTML = '<span style="font-size:11px; font-family:Arial; color:#cccccc; font-style:italic;">Ongoing:   </span><span style="font-family:Arial; font-size:14px; font-weight:bold;">Workarounds</span>';
            break;     
            
        case 'tangent':
            document.getElementById("heading").innerHTML = '<span style="font-size:11px; font-family:Arial; color:#cccccc; font-style:italic;">Ongoing:   </span><span style="font-family:Arial; font-size:14px; font-weight:bold;">SR Tangent - Depth</span>';
            break;  
            
        case 'usage':
            document.getElementById("heading").innerHTML = '<span style="font-family:Arial; font-size:14px; font-weight:bold;">Usage Request</span>';
            break;     
            
        case 'upgrade':
            document.getElementById("heading").innerHTML = '<span style="font-family:Arial; font-size:14px; font-weight:bold;">Upgrade Request</span>';
            break;  
            
        case 'system':
            document.getElementById("heading").innerHTML = '<span style="font-family:Arial; font-size:14px; font-weight:bold;">System Update</span>';
            break;              
            
        case 'test':
            document.getElementById("heading").innerHTML = '<span style="font-family:Arial; font-size:14px; font-weight:bold;">Test Prep</span>';
            break;                          
                                      
            
            
   }
} 

function swapContent(who){
    document.getElementById('threadText').src = who;
    document.getElementById('heading').innerHTML = ""; 
}


function swapImage(path){
    document.getElementById('sharedImages').innerHTML = '<img alt="" src="images/' + path + '.jpg">';
} 