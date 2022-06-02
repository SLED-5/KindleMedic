var curIdx = 0;
function kindleMedic () {
    curIdx++;
    $('input.hideItem_myx')[curIdx].click();
    $('ul button.myx-button-text')[curIdx].click();
    console.log("Downloading:".concat(curIdx + 1).concat(" out of ").concat($('input.hideItem_myx').length));
    setTimeout(function () { $('.myx-popover-inner .transcludedContent_myx .contentDetails_myx #contentAction_download_myx').click(); }, 1500);
    setTimeout(function () { $('.dialog_myx .myx-button-primary').click(); }, 1500);
    /* 
    You can change the timeout below to start downloading new book faster.
    But some books may fail to download with a very short timeout.
    */
    if (curIdx < $('input.hideItem_myx').length){
        setTimeout(kindleMedic, 30000);
    } else {
        window.alert("RIP Kindle in China 2013 - 2022")
    }
   
}
kindleMedic();