// JScript File

function getContent(threadId) {
    switch (threadId) {
        case 0:
            document.getElementById("threadText").src = 'about.htm';
            document.getElementById("thread1").innerHTML = '<a href="javascript:swapContent(\'about.htm\');addHeader(\'about\');">About</a>';
            document.getElementById("thread2").innerHTML = '<a href="javascript:swapContent(\'support.htm\');addHeader(\'support\');">Support</a>';
            document.getElementById("thread3").innerHTML = '<a href="javascript:swapContent(\'socials.htm\');addHeader(\'socials\');">Socials</a>';
            document.getElementById("thread4").innerHTML = '';
            document.getElementById("thread5").innerHTML = '';
            document.getElementById("thread6").innerHTML = '';
            document.getElementById("heading").innerHTML = '<span style="font-size:11px; font-family:Arial; color:#cccccc; font-style:italic;">Ongoing:   </span><span style="font-family:Arial; font-size:14px; font-weight:bold;">About</span>';
            break;

        case 1:
            document.getElementById("threadText").src = 'sites_01.htm';
            document.getElementById("thread1").innerHTML = '<a href="javascript:swapContent(\'sites_01.htm\');">01</a>';
            document.getElementById("thread2").innerHTML = '<a href="javascript:swapContent(\'sites_02.htm\');">02</a>';
            document.getElementById("thread3").innerHTML = '';
            document.getElementById("thread4").innerHTML = '';
            document.getElementById("thread5").innerHTML = '';
            document.getElementById("thread6").innerHTML = '';
            document.getElementById("heading").innerHTML = '';
            break;

        case 2:
            document.getElementById("threadText").src = 'malletrings.htm';
            document.getElementById("thread1").innerHTML = '';
            document.getElementById("thread2").innerHTML = '';
            document.getElementById("thread3").innerHTML = '';
            document.getElementById("thread4").innerHTML = '';
            document.getElementById("thread5").innerHTML = '';
            document.getElementById("thread6").innerHTML = '';
            document.getElementById("heading").innerHTML = '<span style="font-family:Arial; font-size:14px; font-weight:bold;">Mallet Rings | </span><span style="font-size:11px; font-family:Arial; color:#cccccc; ">Updated:  Thurs 2/10</span>';
            break;

        case 3:
            document.getElementById("threadText").src = 'subsystem.htm';
            document.getElementById("thread1").innerHTML = '';
            document.getElementById("thread2").innerHTML = '';
            document.getElementById("thread3").innerHTML = '';
            document.getElementById("thread4").innerHTML = '';
            document.getElementById("thread5").innerHTML = '';
            document.getElementById("thread6").innerHTML = '';
            document.getElementById("heading").innerHTML = '<span style="font-family:Arial; font-size:14px; font-weight:bold;">EPR Subsystem | </span><span style="font-size:11px; font-family:Arial; color:#cccccc; ">Updated:  Thurs 2/10</span>';
            break;

        case 4:
            document.getElementById("threadText").src = 'power.htm';
            document.getElementById("thread1").innerHTML = '';
            document.getElementById("thread2").innerHTML = '';
            document.getElementById("thread3").innerHTML = '';
            document.getElementById("thread4").innerHTML = '';
            document.getElementById("thread5").innerHTML = '';
            document.getElementById("thread6").innerHTML = '';
            document.getElementById("heading").innerHTML = '<span style="font-family:Arial; font-size:14px; font-weight:bold;">Power | </span><span style="font-size:11px; font-family:Arial; color:#cccccc; ">Updated:  Thurs 2/10</span>';
            break;

        case 5:
            document.getElementById("threadText").src = 'comm.htm';
            document.getElementById("thread1").innerHTML = '';
            document.getElementById("thread2").innerHTML = '';
            document.getElementById("thread3").innerHTML = '';
            document.getElementById("thread4").innerHTML = '';
            document.getElementById("thread5").innerHTML = '';
            document.getElementById("thread6").innerHTML = '';
            document.getElementById("heading").innerHTML = '<span style="font-family:Arial; font-size:14px; font-weight:bold;">Comm | </span><span style="font-size:11px; font-family:Arial; color:#cccccc; ">Updated:  Thurs 2/10</span>';
            break;

        case 6:
            document.getElementById("threadText").src = 'ringtones.htm';
            document.getElementById("thread1").innerHTML = '<a href="javascript:swapContent(\'ringtones.htm\');addHeader(\'ringtones\');">Ringtones</a>';
            document.getElementById("thread2").innerHTML = '';
            document.getElementById("thread3").innerHTML = '';
            document.getElementById("thread4").innerHTML = '';
            document.getElementById("thread5").innerHTML = '';
            document.getElementById("thread6").innerHTML = '';
            document.getElementById("heading").innerHTML = '<span style="font-size:11px; font-family:Arial; color:#cccccc; font-style:italic;">Ongoing:   </span><span style="font-family:Arial; font-size:14px; font-weight:bold;">Ringtones</span>';
            break;
    }
}

function addHeader(headerId) {
    switch (headerId) {
        case 'about':
            document.getElementById("heading").innerHTML = '<span style="font-size:11px; font-family:Arial; color:#cccccc; font-style:italic;">Ongoing:   </span><span style="font-family:Arial; font-size:14px; font-weight:bold;">About</span>';
            break;

        case 'support':
            document.getElementById("heading").innerHTML = '<span style="font-size:11px; font-family:Arial; color:#cccccc; font-style:italic;">Ongoing:   </span><span style="font-family:Arial; font-size:14px; font-weight:bold;">Support</span>';
            break;

        case 'socials':
            document.getElementById("heading").innerHTML = '<span style="font-size:11px; font-family:Arial; color:#cccccc; font-style:italic;">Ongoing:   </span><span style="font-family:Arial; font-size:14px; font-weight:bold;">Socials</span>';
            break;
        case 'ringtones':
            document.getElementById("heading").innerHTML = '<span style="font-size:11px; font-family:Arial; color:#cccccc; font-style:italic;">Ongoing:   </span><span style="font-family:Arial; font-size:14px; font-weight:bold;">Ringtones</span>';
            break;
    }
}

function swapContent(who) {
    document.getElementById('threadText').src = who;
    document.getElementById('heading').innerHTML = "";
}


function swapImage(path) {
    document.getElementById('sharedImages').innerHTML = '<img alt="" src="images/' + path + '.jpg">';
} 