$('#showHistoryPage').click(showHistoryPage);
$('#showSupplyPage').click(showSupplyPage);
$('#showStepsPage').click(showStepsPage);
$('#showVideoPage').click(showVideoPage);



//顯示頁面

function showHistoryPage(){
    $('.page').hide();
    $('#HistoryPage').show();
    $('.tab').removeClass('active');
    $('#showHistoryPage').addClass('active');
}



function showSupplyPage(){
    $('.page').hide();
    $('#SupplyPage').show();
    $('.tab').removeClass('active');
    $('#showSupplyPage').addClass('active');
}

function showStepsPage(){
    $('.page').hide();
    $('#StepsPage').show();
    $('.tab').removeClass('active');
    $('#showStepsPage').addClass('active');
}

function showVideoPage(){
    $('.page').hide();
    $('#VideoPage').show();
    $('.tab').removeClass('active');
    $('#showVideoPage').addClass('active');
}
