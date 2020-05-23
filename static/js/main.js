let populate = function() {
    let team1 = $('.team-1');
    let team2 = $('.team-2');
    let ground = $('.groundid');

    let countries = [
        {value: " Afghanistan " , text: " Afghanistan " },
        {value: " Australia ", text: " Australia "},
        {value: " Bangladesh ", text: " Bangladesh "},
        //{value: " Bermuda ", text: " Bermuda "},
        //{value: " Canada ", text: " Canada "},
        //{value: " East Africa ", text: " East Africa "},
        {value: " England ", text: " England "},
        //{value: " Hong Kong ", text: " Hong Kong "},
        {value: " India ", text: " India "},
        {value: " Ireland ", text: " Ireland "},
        //{value: " Kenya ", text: " Kenya "},
        {value: " Namibia ", text: " Namibia "},
        {value: " Netherlands ", text: " Netherlands "},
        {value: " New Zealand ", text: " New Zealand "},
        {value: " Oman ", text: " Oman "},
        {value: " P.N.G. ", text: " P.N.G. "},
        {value: " Pakistan ", text: " Pakistan "},
        {value: " Scotland ", text: " Scotland "},
        {value: " South Africa ", text: " South Africa "},
        {value: " Sri Lanka ", text: " Sri Lanka "},
        //{value: " U.A.E. ", text: " U.A.E. "},
        //{value: " U.S.A. ", text: " U.S.A. "},
        {value: " West Indies ", text: " West Indies "}
        //{value: " Zimbabwe ", text: " Zimbabwe "}
        ];

    for(let i = 0; i< countries.length; i++)    {
        let option = document.createElement('option'); 
        option.setAttribute('value', countries[i].value);
        option.appendChild(document.createTextNode(countries[i].text));
        team1.append(option);
    }

    for(let i = 0; i< countries.length; i++)    {
        let option = document.createElement('option'); 
        option.setAttribute('value', countries[i].value);
        option.appendChild(document.createTextNode(countries[i].text));
        team2.append(option);
    }

    console.log("Teams Populated");

    let groundNames = [
        //{value: " Aberdeen " , text: " Aberdeen "},
        {value: " Abu Dhabi " , text: " Abu Dhabi "},
        {value: " Adelaide " , text: " Adelaide "},
        {value: " Ahmedabad " , text: " Ahmedabad "},
        //{value: " Albion " , text: " Albion "},
        //{value: " Albury " , text: " Albury "},
        {value: " Amritsar " , text: " Amritsar "},
        {value: " Amstelveen " , text: " Amstelveen "},
        {value: " Auckland " , text: " Auckland "},
        //{value: " Ayr " , text: " Ayr "},
        //{value: " Ballarat " , text: " Ballarat "},
        {value: " Basseterre " , text: " Basseterre "},
        {value: " Belfast " , text: " Belfast "},
        {value: " Bengaluru " , text: " Bengaluru "},
        //{value: " Benoni " , text: " Benoni "},
        //{value: " Berri " , text: " Berri "},
        {value: " Birmingham " , text: " Birmingham "},
        {value: " Bloemfontein " , text: " Bloemfontein "},
        {value: " Bready " , text: " Bready "},
        {value: " Bridgetown " , text: " Bridgetown "},
        {value: " Brisbane " , text: " Brisbane "},
        {value: " Bristol " , text: " Bristol "},
        //{value: " Bulawayo " , text: " Bulawayo "},
        //{value: " Cairns " , text: " Cairns "},
        {value: " Canberra " , text: " Canberra "},
        //{value: " Canterbury " , text: " Canterbury "},
        {value: " Cape Town " , text: " Cape Town "},
        {value: " Cardiff " , text: " Cardiff "},
        {value: " Carrara " , text: " Carrara "},
        //{value: " Castries " , text: " Castries "},
        {value: " Centurion " , text: " Centurion "},
        {value: " Chattogram " , text: " Chattogram "},
        
        //{value: " Chandigarh " , text: " Chandigarh "},
        //{value: " Chelmsford " , text: " Chelmsford "},
        {value: " Chennai " , text: " Chennai "},
        {value: " Chester " , text: " Chester "},
        //{value: " Chittagong " , text: " Chittagong "},
        {value: " Christchurch " , text: " Christchurch "},
        {value: " Colombo " , text: " Colombo "},
        {value: " Cuttack " , text: " Cuttack "},
        //{value: " Dambulla " , text: " Dambulla "},
        //{value: " Darwin " , text: " Darwin "},
        {value: " Dehradun " , text: " Dehradun "},
        {value: " Delhi " , text: " Delhi "},
        //{value: " Derby " , text: " Derby "},
        
        {value: " Deventer " , text: " Deventer "},
//        {value: " Devonport " , text: " Devonport "},
        {value: " Dhaka " , text: " Dhaka "},
        {value: " Dharamsala " , text: " Dharamsala "},
        {value: " Dubai " , text: " Dubai "},
        {value: " Dublin " , text: " Dublin "},
  //      {value: " Dunedin " , text: " Dunedin "},
        {value: " Durban " , text: " Durban "},
        {value: " East London " , text: " East London "},
        {value: " Edinburgh " , text: " Edinburgh "},
    //    {value: " Faisalabad " , text: " Faisalabad "},
     //   {value: " Faridabad " , text: " Faridabad "},
        {value: " Fatullah " , text: " Fatullah "},
        //{value: " Galle " , text: " Galle "},
        {value: " Geelong " , text: " Geelong "},
        //{value: " Georgetown " , text: " Georgetown "},
        //{value: " Glasgow " , text: " Glasgow "},
        {value: " Greater Noida " , text: " Greater Noida "},
        {value: " Gros Islet " , text: " Gros Islet "},
        //{value: " Gujranwala " , text: " Gujranwala "},
        {value: " Guwahati " , text: " Guwahati "},
        //{value: " Gwalior " , text: " Gwalior "},
        {value: " Hambantota " , text: " Hambantota "},
        {value: " Hamilton " , text: " Hamilton "},
        {value: " Harare " , text: " Harare "},
        {value: " Hobart " , text: " Hobart "},
        //{value: " Hove " , text: " Hove "},
        //{value: " Hyderabad " , text: " Hyderabad "},
        {value: " ICCA Dubai " , text: " ICCA Dubai "},
        {value: " Indore " , text: " Indore "},
        //{value: " Jaipur " , text: " Jaipur "},
        //{value: " Jalandhar " , text: " Jalandhar "},
        //{value: " Jamshedpur " , text: " Jamshedpur "},
        //{value: " Jodhpur " , text: " Jodhpur "},
        {value: " Johannesburg " , text: " Johannesburg "},
        //{value: " Kandy " , text: " Kandy "},
        {value: " Kanpur " , text: " Kanpur "},
        {value: " Karachi " , text: " Karachi "},
        //{value: " Khulna " , text: " Khulna "},
        //{value: " Kimberley " , text: " Kimberley "},
        {value: " King City " , text: " King City "},
        {value: " Kingston " , text: " Kingston "},
        {value: " Kingstown " , text: " Kingstown "},
        //{value: " Kochi " , text: " Kochi "},
        {value: " Kolkata " , text: " Kolkata "},
        //{value: " Kuala Lumpur " , text: " Kuala Lumpur "},
        //{value: " Kwekwe " , text: " Kwekwe "},
        {value: " Lahore " , text: " Lahore "},
        //{value: " Launceston " , text: " Launceston "},
        //{value: " Leeds " , text: " Leeds "},
        //{value: " Leicester " , text: " Leicester "},
        //{value: " Lincoln " , text: " Lincoln "},
        {value: " Lauderhill " , text: " Lauderhill "},
        
        {value: " Lord's " , text: " Lord's "},
        {value: " Lucknow " , text: " Lucknow "},
        {value: " Manchester " , text: " Manchester "},
        //{value: " Margao " , text: " Margao "},
        {value: " Melbourne " , text: " Melbourne "},
        {value: " Mohali " , text: " Mohali "},
        //{value: " Mombasa " , text: " Mombasa "},
        //{value: " Mong Kok " , text: " Mong Kok "},
        //{value: " Moratuwa " , text: " Moratuwa "},
        {value: " Mount Maunganui " , text: " Mount Maunganui "},
        //{value: " Multan " , text: " Multan "},
        {value: " Mumbai " , text: " Mumbai "},
        {value: " Nagpur " , text: " Nagpur "},
        {value: " Nairobi " , text: " Nairobi "},        
        {value: " Napier " , text: " Napier "},
        {value: " Nelson " , text: " Nelson "},
        //{value: " New Delhi " , text: " New Delhi "},
        //{value: " New Plymouth " , text: " New Plymouth "},
        {value: " North Sound " , text: " North Sound "},
        //{value: " Northampton " , text: " Northampton "},
        {value: " Nottingham " , text: " Nottingham "},
        //{value: " Paarl " , text: " Paarl "},
        {value: " Pallekele " , text: " Pallekele "},
        //{value: " Patna " , text: " Patna "},
        {value: " Perth " , text: " Perth "},
        //{value: " Pietermaritzburg " , text: " Pietermaritzburg "},
        {value: " Port Elizabeth " , text: " Port Elizabeth "},
        //{value: " Port Moresby " , text: " Port Moresby "},
        {value: " Port of Spain " , text: " Port of Spain "},
        {value: " Potchefstroom " , text: " Potchefstroom "},
        {value: " Providence " , text: " Providence "},
        {value: " Pune " , text: " Pune "},
        //{value: " Queenstown " , text: " Queenstown "},
        //{value: " Quetta " , text: " Quetta "},
        {value: " Rajkot " , text: " Rajkot "},
        {value: " Ranchi " , text: " Ranchi "},
        //{value: " Rawalpindi " , text: " Rawalpindi "},
        {value: " Roseau " , text: " Roseau "},
        {value: " Rotterdam " , text: " Rotterdam "},
        //{value: " Sahiwal " , text: " Sahiwal "},
        //{value: " Sargodha " , text: " Sargodha "},
        //{value: " Scarborough " , text: " Scarborough "},
        {value: " Sharjah " , text: " Sharjah "},
        //{value: " Sheikhupura " , text: " Sheikhupura "},
        //{value: " Sialkot " , text: " Sialkot "},
        //{value: " Singapore " , text: " Singapore "},
        {value: " Southampton " , text: " Southampton "},
        //{value: " Srinagar " , text: " Srinagar "},
        //{value: " St George's " , text: " St George's "},
        //{value: " St John's " , text: " St John's "},
        //{value: " Swansea " , text: " Swansea" },
        {value: " Sydney " , text: " Sydney "},
        {value: " Sylhet " , text: " Sylhet "},
        //{value: " Tangier " , text: " Tangier "},
        {value: " Taunton " , text: " Taunton "},
        //{value: " Taupo " , text: " Taupo "},
        {value: " The Hague " , text: " The Hague "},
        {value: " The Oval " , text: " The Oval "},
        {value: " Thiruvananthapuram " , text: " Thiruvananthapuram "},
        {value: " Tolerance Oval " , text: " Tolerance Oval "},
        
        //{value: " Toronto " , text: " Toronto "},
        //{value: " Townsville " , text: " Townsville "},
        //{value: " Tunbridge Wells " , text: " Tunbridge Wells "},
        //{value: " Vadodara " , text: " Vadodara "},
        //{value: " Vijayawada " , text: " Vijayawada "},
        {value: " Visakhapatnam " , text: " Visakhapatnam "},
        {value: " Wellington " , text: " Wellington "},
        //{value: " Whangarei " , text: " Whangarei "},
        //{value: " Worcester " , text: " Worcester "}
    ];

    console.log("Created");

    for(let i = 0; i< groundNames.length; i++)    {
        let option = document.createElement('option'); 
        option.setAttribute('value', groundNames[i].value);
        option.appendChild(document.createTextNode(groundNames[i].text));
        ground.append(option);
    }

    console.log("Countries Populated");

var qualifierWinners = {};
var super12Winners = {};
var qualifierWinnersData = [];
var super12WinnersData = [];
qdatatable = $('#qualifierStanding').DataTable( {
   data: qualifierWinnersData,
   "autoWidth": false,
   "fnRowCallback" : function(nRow, aData, iDisplayIndex){
                          var oSettings = this.fnSettings();
                           $("td:first", nRow).html(oSettings._iDisplayStart+iDisplayIndex+1);
                           return nRow;
                },
   "order": [[ 6, "desc" ]]
});

sdatatable = $('#group12standing').DataTable( {
   data: super12WinnersData,
   "autoWidth": false,
   "pageLength": 50,
   "fnRowCallback" : function(nRow, aData, iDisplayIndex){
                          var oSettings = this.fnSettings();
                           $("td:first", nRow).html(oSettings._iDisplayStart+iDisplayIndex+1);
                           return nRow;
                },
   "order": [[ 6, "desc" ]]
});


////////////////////////////////////////////////////////////////////////////
function populatePointTable(qualifierWinners, $tabref){
        //qualifierStanding
        //$tabref = $("#qualifierStanding > table > tbody");
        console.log("called");

        console.log(qualifierWinners);
        var qualifierWinnersDataTemp = {};
        var qualifierLostDataTemp = {};
        var qualifierTieDataTemp = {};
        var qualifierPlayedDataTemp = {};

        $.each( qualifierWinners, function( key, value ) {
            console.log(key);
            console.log(value);
            //count match
            var winTemp = value['winner'];
            if(qualifierWinnersDataTemp.hasOwnProperty(winTemp)){
                qualifierWinnersDataTemp[winTemp]= qualifierWinnersDataTemp[winTemp] + 1;
            }
            else
                qualifierWinnersDataTemp[winTemp]=1;

            var team1Temp = value['team1'].trim();
            var team2Temp = value['team2'].trim();

            if(winTemp == team1Temp){
                if(qualifierLostDataTemp.hasOwnProperty(team2Temp)){
                   qualifierLostDataTemp[team2Temp]= qualifierLostDataTemp[team2Temp] + 1;
                }
                else
                    qualifierLostDataTemp[team2Temp]= 1;
            }


            if(qualifierPlayedDataTemp.hasOwnProperty(team1Temp)){
               qualifierPlayedDataTemp[team1Temp]= qualifierPlayedDataTemp[team1Temp] + 1;
            }
            else
               qualifierPlayedDataTemp[team1Temp]= 1;

             if(qualifierPlayedDataTemp.hasOwnProperty(team2Temp)){
               qualifierPlayedDataTemp[team2Temp]= qualifierPlayedDataTemp[team2Temp] + 1;
            }
            else
               qualifierPlayedDataTemp[team2Temp]= 1;


        });

        console.log(qualifierWinnersDataTemp);
        console.log(qualifierLostDataTemp);
        console.log(qualifierPlayedDataTemp);


        qualifierWinnersData = [];
        idx = 0;
        for (var matchKey in qualifierPlayedDataTemp) {
            console.log(matchKey);
            idx++;
          qualifierWinnersData.push([idx, matchKey, qualifierPlayedDataTemp[matchKey], typeof qualifierWinnersDataTemp[matchKey] == 'undefined' ? 0 : qualifierWinnersDataTemp[matchKey],
           typeof qualifierLostDataTemp[matchKey] == 'undefined' ? 0 : qualifierLostDataTemp[matchKey], 0,
           (typeof qualifierWinnersDataTemp[matchKey] == 'undefined' ? 0 : qualifierWinnersDataTemp[matchKey])*2]);
        }


        var tdatatable = null;
        if($tabref.is($("#qualifierStanding > tbody"))){
            tdatatable = qdatatable;
        }
        else{
            tdatatable = sdatatable;
        }

        tdatatable.clear().draw();
        tdatatable.rows.add(qualifierWinnersData); // Add new data
        tdatatable.columns.adjust().draw();

        $tabref.find('tr').removeClass('table-success');
        $tabref.find('tr:nth-child(-n + 4)').addClass('table-success');

    }


    function generateQualifier() {

        //match1
        $('#m1-team-1').val(" Sri Lanka ");
        $('#m1-team-2').val(" Ireland ");
        //console.log("Selected Default Team 1");
        $('#m1-groundid').val(" Geelong ");

        $('#m1-innings').val(1);
        $('#m1-venue').val(3);
        $('#m1-choice').val(1);

        $("#winner1Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner1Form").serialize(),
              success: function(html){
                $("#m1-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m1-flagimage").attr("src",newSrc);

                qualifierWinners[1]={
                    "team1":$('#m1-team-1').val(),
                    "team2":$('#m1-team-2').val(),
                    "winner":html
                };
                console.log("dataatatatatta");
                populatePointTable(qualifierWinners, $("#qualifierStanding > tbody"));
              }
            });

        });

        $("#winner1Form").submit();

        //match 2
        $('#m2-team-1').val(" P.N.G. ");
        $('#m2-team-2').val(" Oman ");
        //console.log("Selected Default Team 2");
        $('#m2-groundid').val(" Geelong ");

        $('#m2-innings').val(1);
        $('#m2-venue').val(3);
        $('#m2-choice').val(1);

        $("#winner2Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner2Form").serialize(),
              success: function(html){
                $("#m2-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m2-flagimage").attr("src",newSrc);

                qualifierWinners[2]={
                    "team1":$('#m2-team-1').val(),
                    "team2":$('#m2-team-2').val(),
                    "winner":html
                };
                populatePointTable(qualifierWinners, $("#qualifierStanding > tbody"));
              }
            });

        });

        $("#winner2Form").submit();

        //
        //match 3
        $('#m3-team-1').val(" Bangladesh ");
        $('#m3-team-2').val(" Namibia ");
        //console.log("Selected Default Team 3");
        $('#m3-groundid').val(" Hobart ");

        $('#m3-innings').val(1);
        $('#m3-venue').val(3);
        $('#m3-choice').val(1);

        $("#winner3Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner3Form").serialize(),
              success: function(html){
                $("#m3-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m3-flagimage").attr("src",newSrc);

                qualifierWinners[3]={
                    "team1":$('#m3-team-1').val(),
                    "team2":$('#m3-team-2').val(),
                    "winner":html
                };
                populatePointTable(qualifierWinners, $("#qualifierStanding > tbody"));
              }
            });

        });

        $("#winner3Form").submit();


       //match 4
       $('#m4-team-1').val(" Netherlands ");
        $('#m4-team-2').val(" Scotland ");
        //console.log("Selected Default Team 4");
        $('#m4-groundid').val(" Hobart ");

        $('#m4-innings').val(1);
        $('#m4-venue').val(3);
        $('#m4-choice').val(1);

        $("#winner4Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner4Form").serialize(),
              success: function(html){
                $("#m4-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m4-flagimage").attr("src",newSrc);

                qualifierWinners[4]={
                    "team1":$('#m4-team-1').val(),
                    "team2":$('#m4-team-2').val(),
                    "winner":html
                };
                populatePointTable(qualifierWinners, $("#qualifierStanding > tbody"));
              }
            });

        });

        $("#winner4Form").submit();

        //match 5

        $('#m5-team-1').val(" Ireland ");
        $('#m5-team-2').val(" Oman ");
        //console.log("Selected Default Team 5");
        $('#m5-groundid').val(" Geelong ");

        $('#m5-innings').val(1);
        $('#m5-venue').val(3);
        $('#m5-choice').val(1);

        $("#winner5Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner5Form").serialize(),
              success: function(html){
                $("#m5-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m5-flagimage").attr("src",newSrc);

                qualifierWinners[5]={
                    "team1":$('#m5-team-1').val(),
                    "team2":$('#m5-team-2').val(),
                    "winner":html
                };

                populatePointTable(qualifierWinners, $("#qualifierStanding > tbody"));
              }
            });

        });

        $("#winner5Form").submit();

        //match 6
        $('#m6-team-1').val(" Sri Lanka ");
        $('#m6-team-2').val(" P.N.G. ");
        //console.log("Selected Default Team 6");
        $('#m6-groundid').val(" Geelong ");

        $('#m6-innings').val(1);
        $('#m6-venue').val(3);
        $('#m6-choice').val(1);

        $("#winner6Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner6Form").serialize(),
              success: function(html){
                $("#m6-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m6-flagimage").attr("src",newSrc);

                qualifierWinners[6]={
                    "team1":$('#m6-team-1').val(),
                    "team2":$('#m6-team-2').val(),
                    "winner":html
                };

                populatePointTable(qualifierWinners, $("#qualifierStanding > tbody"));
              }
            });

        });

        $("#winner6Form").submit();

        //match 7
        $('#m7-team-1').val(" Namibia ");
        $('#m7-team-2').val(" Scotland ");
        //console.log("Selected Default Team 7");
        $('#m7-groundid').val(" Hobart ");

        $('#m7-innings').val(1);
        $('#m7-venue').val(3);
        $('#m7-choice').val(1);

        $("#winner7Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner7Form").serialize(),
              success: function(html){
                $("#m7-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m7-flagimage").attr("src",newSrc);

                qualifierWinners[7]={
                    "team1":$('#m7-team-1').val(),
                    "team2":$('#m7-team-2').val(),
                    "winner":html
                };

                populatePointTable(qualifierWinners, $("#qualifierStanding > tbody"));
              }
            });

        });

        $("#winner7Form").submit();


        //match 8
        $('#m8-team-1').val(" Bangladesh ");
        $('#m8-team-2').val(" Netherlands ");
        //console.log("Selected Default Team 8");
        $('#m8-groundid').val(" Hobart ");

        $('#m8-innings').val(1);
        $('#m8-venue').val(3);
        $('#m8-choice').val(1);

        $("#winner8Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner8Form").serialize(),
              success: function(html){
                $("#m8-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m8-flagimage").attr("src",newSrc);

                qualifierWinners[8]={
                    "team1":$('#m8-team-1').val(),
                    "team2":$('#m8-team-2').val(),
                    "winner":html
                };

                populatePointTable(qualifierWinners, $("#qualifierStanding > tbody"));
              }
            });

        });

        $("#winner8Form").submit();

        //match 9
        $('#m9-team-1').val(" P.N.G. ");
        $('#m9-team-2').val(" Ireland ");
        //console.log("Selected Default Team 9");
        $('#m9-groundid').val(" Geelong ");

        $('#m9-innings').val(1);
        $('#m9-venue').val(3);
        $('#m9-choice').val(1);

        $("#winner9Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner9Form").serialize(),
              success: function(html){
                $("#m9-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m9-flagimage").attr("src",newSrc);

                qualifierWinners[9]={
                    "team1":$('#m9-team-1').val(),
                    "team2":$('#m9-team-2').val(),
                    "winner":html
                };

                populatePointTable(qualifierWinners, $("#qualifierStanding > tbody"));
              }
            });

        });

        $("#winner9Form").submit();

        //match 10
        $('#m10-team-1').val(" Sri Lanka ");
        $('#m10-team-2').val(" Oman ");
        //console.log("Selected Default Team 10");
        $('#m10-groundid').val(" Geelong ");

        $('#m10-innings').val(1);
        $('#m10-venue').val(3);
        $('#m10-choice').val(1);

        $("#winner10Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner10Form").serialize(),
              success: function(html){
                $("#m10-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m10-flagimage").attr("src",newSrc);

                qualifierWinners[10]={
                    "team1":$('#m10-team-1').val(),
                    "team2":$('#m10-team-2').val(),
                    "winner":html
                };

                populatePointTable(qualifierWinners, $("#qualifierStanding > tbody"));
              }
            });

        });

        $("#winner10Form").submit();


        //match 11
        $('#m11-team-1').val(" Netherlands ");
        $('#m11-team-2').val(" Namibia ");
        //console.log("Selected Default Team 11");
        $('#m11-groundid').val(" Hobart ");

        $('#m11-innings').val(1);
        $('#m11-venue').val(3);
        $('#m11-choice').val(1);

        $("#winner11Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner11Form").serialize(),
              success: function(html){
                $("#m11-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m11-flagimage").attr("src",newSrc);

                qualifierWinners[11]={
                    "team1":$('#m11-team-1').val(),
                    "team2":$('#m11-team-2').val(),
                    "winner":html
                };

                populatePointTable(qualifierWinners, $("#qualifierStanding > tbody"));
              }
            });

        });

        $("#winner11Form").submit();


        //match 12
        $('#m12-team-1').val(" Bangladesh ");
        $('#m12-team-2').val(" Scotland ");
        //console.log("Selected Default Team 12");
        $('#m12-groundid').val(" Hobart ");

        $('#m12-innings').val(1);
        $('#m12-venue').val(3);
        $('#m12-choice').val(1);

        $("#winner12Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner12Form").serialize(),
              success: function(html){
                $("#m12-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m12-flagimage").attr("src",newSrc);

                qualifierWinners[12]={
                    "team1":$('#m12-team-1').val(),
                    "team2":$('#m12-team-2').val(),
                    "winner":html
                };

                populatePointTable(qualifierWinners, $("#qualifierStanding > tbody"));
              }
            });

        });

        $("#winner12Form").submit();
        }


    generateQualifier();

    //populatePointTable(qualifierWinners, $("#qualifierStanding > table > tbody"));


    function generateSuper12(){

        //match 13 //super
        $('#m13-team-1').val(" Australia ");
        $('#m13-team-2').val(" Pakistan ");
        //console.log("Selected Default Team 13");
        $('#m13-groundid').val(" Sydney ");

        $('#m13-innings').val(1);
        $('#m13-venue').val(1);
        $('#m13-choice').val(1);

        $("#winner13Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner13Form").serialize(),
              success: function(html){
                $("#m13-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m13-flagimage").attr("src",newSrc);

                super12Winners[13]={
                    "team1":$('#m13-team-1').val(),
                    "team2":$('#m13-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner13Form").submit();

        //match14

        $('#m14-team-1').val(" India ");
        $('#m14-team-2').val(" South Africa ");
        //console.log("Selected Default Team 14");
        $('#m14-groundid').val(" Perth ");

        $('#m14-innings').val(1);
        $('#m14-venue').val(3);
        $('#m14-choice').val(1);

        $("#winner14Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner14Form").serialize(),
              success: function(html){
                $("#m14-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m14-flagimage").attr("src",newSrc);

                super12Winners[14]={
                    "team1":$('#m14-team-1').val(),
                    "team2":$('#m14-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner14Form").submit();

         //match15 A1 - Sri Lanka and B2 - Bangladesh

        $('#m15-team-1').val(" Sri Lanka ");
        $('#m15-team-2').val(" Bangladesh ");
        //console.log("Selected Default Team 15");
        $('#m15-groundid').val(" Hobart ");

        $('#m15-innings').val(1);
        $('#m15-venue').val(3);
        $('#m15-choice').val(1);

        $("#winner15Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner15Form").serialize(),
              success: function(html){
                $("#m15-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m15-flagimage").attr("src",newSrc);

                super12Winners[15]={
                    "team1":$('#m15-team-1').val(),
                    "team2":$('#m15-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner15Form").submit();

        //match16

        $('#m16-team-1').val(" New Zealand ");
        $('#m16-team-2').val(" West Indies ");
        //console.log("Selected Default Team 16");
        $('#m16-groundid').val(" Melbourne ");

        $('#m16-innings').val(1);
        $('#m16-venue').val(3);
        $('#m16-choice').val(1);

        $("#winner16Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner16Form").serialize(),
              success: function(html){
                $("#m16-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m16-flagimage").attr("src",newSrc);

                super12Winners[16]={
                    "team1":$('#m16-team-1').val(),
                    "team2":$('#m16-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner16Form").submit();



        //match17 A2 - Ireland

        $('#m17-team-1').val(" Afghanistan ");
        $('#m17-team-2').val(" Ireland ");
        //console.log("Selected Default Team 17");
        $('#m17-groundid').val(" Perth ");

        $('#m17-innings').val(1);
        $('#m17-venue').val(3);
        $('#m17-choice').val(1);

        $("#winner17Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner17Form").serialize(),
              success: function(html){
                $("#m17-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m17-flagimage").attr("src",newSrc);

                super12Winners[17]={
                    "team1":$('#m17-team-1').val(),
                    "team2":$('#m17-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner17Form").submit();


        //match18 B1 - Scotland

        $('#m18-team-1').val(" England ");
        $('#m18-team-2').val(" Scotland ");
        //console.log("Selected Default Team 18");
        $('#m18-groundid').val(" Perth ");

        $('#m18-innings').val(1);
        $('#m18-venue').val(3);
        $('#m18-choice').val(1);

        $("#winner18Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner18Form").serialize(),
              success: function(html){
                $("#m18-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m18-flagimage").attr("src",newSrc);

                super12Winners[18]={
                    "team1":$('#m18-team-1').val(),
                    "team2":$('#m18-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner18Form").submit();


        //match19 B2 - Bangladesh

        $('#m19-team-1').val(" New Zealand ");
        $('#m19-team-2').val(" Bangladesh ");
        //console.log("Selected Default Team 19");
        $('#m19-groundid').val(" Hobart ");

        $('#m19-innings').val(1);
        $('#m19-venue').val(3);
        $('#m19-choice').val(1);

        $("#winner19Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner19Form").serialize(),
              success: function(html){
                $("#m19-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m19-flagimage").attr("src",newSrc);

                super12Winners[19]={
                    "team1":$('#m19-team-1').val(),
                    "team2":$('#m19-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner19Form").submit();


        //match20 B1 - Scotland

        $('#m20-team-1').val(" Afghanistan ");
        $('#m20-team-2').val(" Scotland ");
        //console.log("Selected Default Team 20");
        $('#m20-groundid').val(" Perth ");

        $('#m20-innings').val(1);
        $('#m20-venue').val(3);
        $('#m20-choice').val(1);

        $("#winner20Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner20Form").serialize(),
              success: function(html){
                $("#m20-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m20-flagimage").attr("src",newSrc);

                super12Winners[20]={
                    "team1":$('#m20-team-1').val(),
                    "team2":$('#m20-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner20Form").submit();


        //match21

        $('#m21-team-1').val(" Australia ");
        $('#m21-team-2').val(" West Indies ");
        //console.log("Selected Default Team 21");
        $('#m21-groundid').val(" Perth ");

        $('#m21-innings').val(1);
        $('#m21-venue').val(3);
        $('#m21-choice').val(1);

        $("#winner21Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner21Form").serialize(),
              success: function(html){
                $("#m21-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m21-flagimage").attr("src",newSrc);

                super12Winners[21]={
                    "team1":$('#m21-team-1').val(),
                    "team2":$('#m21-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner21Form").submit();

        //match22 A1 - Sri Lanka

        $('#m22-team-1').val(" Pakistan ");
        $('#m22-team-2').val(" Sri Lanka ");
        //console.log("Selected Default Team 22");
        $('#m22-groundid').val(" Sydney ");

        $('#m22-innings').val(1);
        $('#m22-venue').val(3);
        $('#m22-choice').val(1);

        $("#winner22Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner22Form").serialize(),
              success: function(html){
                $("#m22-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m22-flagimage").attr("src",newSrc);

                super12Winners[22]={
                    "team1":$('#m22-team-1').val(),
                    "team2":$('#m22-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner22Form").submit();


        //match23 A2 - Ireland

        $('#m23-team-1').val(" India ");
        $('#m23-team-2').val(" Ireland ");
        //console.log("Selected Default Team 23");
        $('#m23-groundid').val(" Melbourne ");

        $('#m23-innings').val(1);
        $('#m23-venue').val(3);
        $('#m23-choice').val(1);

        $("#winner23Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner23Form").serialize(),
              success: function(html){
                $("#m23-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m23-flagimage").attr("src",newSrc);

                super12Winners[23]={
                    "team1":$('#m23-team-1').val(),
                    "team2":$('#m23-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner23Form").submit();


        //match24 A2 - Sri lanka

        $('#m24-team-1').val(" England ");
        $('#m24-team-2').val(" South Africa ");
        //console.log("Selected Default Team 24");
        $('#m24-groundid').val(" Melbourne ");

        $('#m24-innings').val(1);
        $('#m24-venue').val(3);
        $('#m24-choice').val(1);

        $("#winner24Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner24Form").serialize(),
              success: function(html){
                $("#m24-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m24-flagimage").attr("src",newSrc);

                super12Winners[24]={
                    "team1":$('#m24-team-1').val(),
                    "team2":$('#m24-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner24Form").submit();

        //match25 B2 - Bangladesh

        $('#m25-team-1').val(" West Indies ");
        $('#m25-team-2').val(" Bangladesh ");
        //console.log("Selected Default Team 25");
        $('#m25-groundid').val(" Perth ");

        $('#m25-innings').val(1);
        $('#m25-venue').val(3);
        $('#m25-choice').val(1);

        $("#winner25Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner25Form").serialize(),
              success: function(html){
                $("#m25-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m25-flagimage").attr("src",newSrc);

                super12Winners[25]={
                    "team1":$('#m25-team-1').val(),
                    "team2":$('#m25-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner25Form").submit();


        //match26

        $('#m26-team-1').val(" Pakistan ");
        $('#m26-team-2').val(" New Zealand ");
        //console.log("Selected Default Team 26");
        $('#m26-groundid').val(" Brisbane ");

        $('#m26-innings').val(1);
        $('#m26-venue').val(3);
        $('#m26-choice').val(1);

        $("#winner26Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner26Form").serialize(),
              success: function(html){
                $("#m26-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m26-flagimage").attr("src",newSrc);

                super12Winners[26]={
                    "team1":$('#m26-team-1').val(),
                    "team2":$('#m26-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner26Form").submit();


        //match27 A1 - Sri Lanka

        $('#m27-team-1').val(" Australia ");
        $('#m27-team-2').val(" Sri Lanka ");
        //console.log("Selected Default Team 27");
        $('#m27-groundid').val(" Brisbane ");

        $('#m27-innings').val(1);
        $('#m27-venue').val(3);
        $('#m27-choice').val(1);

        $("#winner27Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner27Form").serialize(),
              success: function(html){
                $("#m27-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m27-flagimage").attr("src",newSrc);

                super12Winners[27]={
                    "team1":$('#m27-team-1').val(),
                    "team2":$('#m27-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner27Form").submit();

        // November Matches

        //match 28

        $('#m28-team-1').val(" South Africa ");
        $('#m28-team-2').val(" Afghanistan ");
        //console.log("Selected Default Team 28");
        $('#m28-groundid').val(" Adelaide ");

        $('#m28-innings').val(1);
        $('#m28-venue').val(3);
        $('#m28-choice').val(1);

        $("#winner28Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner28Form").serialize(),
              success: function(html){
                $("#m28-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m28-flagimage").attr("src",newSrc);

                super12Winners[28]={
                    "team1":$('#m28-team-1').val(),
                    "team2":$('#m28-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner28Form").submit();


         //match 29

        $('#m29-team-1').val(" India ");
        $('#m29-team-2').val(" England ");
        //console.log("Selected Default Team 29");
        $('#m29-groundid').val(" Adelaide ");

        $('#m29-innings').val(1);
        $('#m29-venue').val(3);
        $('#m29-choice').val(1);

        $("#winner29Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner29Form").serialize(),
              success: function(html){
                $("#m29-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m29-flagimage").attr("src",newSrc);

                super12Winners[29]={
                    "team1":$('#m29-team-1').val(),
                    "team2":$('#m29-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner29Form").submit();


       //match 30

        $('#m30-team-1').val(" Ireland ");
        $('#m30-team-2').val(" Scotland ");
        //console.log("Selected Default Team 30");
        $('#m30-groundid').val(" Sydney ");

        $('#m30-innings').val(1);
        $('#m30-venue').val(3);
        $('#m30-choice').val(1);

        $("#winner30Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner30Form").serialize(),
              success: function(html){
                $("#m30-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m30-flagimage").attr("src",newSrc);

                super12Winners[30]={
                    "team1":$('#m30-team-1').val(),
                    "team2":$('#m30-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner30Form").submit();

        //match 31 A1 - Sri Lanka

        $('#m31-team-1').val(" New Zealand ");
        $('#m31-team-2').val(" Sri Lanka ");
        //console.log("Selected Default Team 31");
        $('#m31-groundid').val(" Brisbane ");

        $('#m31-innings').val(1);
        $('#m31-venue').val(3);
        $('#m31-choice').val(1);

        $("#winner31Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner31Form").serialize(),
              success: function(html){
                $("#m31-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m31-flagimage").attr("src",newSrc);

                super12Winners[31]={
                    "team1":$('#m31-team-1').val(),
                    "team2":$('#m31-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner31Form").submit();

        //match 32

        $('#m32-team-1').val(" Pakistan ");
        $('#m32-team-2').val(" West Indies ");
        //console.log("Selected Default Team 32");
        $('#m32-groundid').val(" Adelaide ");

        $('#m32-innings').val(1);
        $('#m32-venue').val(3);
        $('#m32-choice').val(1);

        $("#winner32Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner32Form").serialize(),
              success: function(html){
                $("#m32-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m32-flagimage").attr("src",newSrc);

                super12Winners[32]={
                    "team1":$('#m32-team-1').val(),
                    "team2":$('#m32-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner32Form").submit();

        //match 33 B2 - Bnagladesh

        $('#m33-team-1').val(" Australia ");
        $('#m33-team-2').val(" Bangladesh ");
        //console.log("Selected Default Team 33");
        $('#m33-groundid').val(" Adelaide ");

        $('#m33-innings').val(1);
        $('#m33-venue').val(3);
        $('#m33-choice').val(1);

        $("#winner33Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner33Form").serialize(),
              success: function(html){
                $("#m33-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m33-flagimage").attr("src",newSrc);

                super12Winners[33]={
                    "team1":$('#m33-team-1').val(),
                    "team2":$('#m33-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner33Form").submit();


        //match 34

        $('#m34-team-1').val(" England ");
        $('#m34-team-2').val(" Afghanistan ");
        //console.log("Selected Default Team 34");
        $('#m34-groundid').val(" Brisbane ");

        $('#m34-innings').val(1);
        $('#m34-venue').val(3);
        $('#m34-choice').val(1);

        $("#winner34Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner34Form").serialize(),
              success: function(html){
                $("#m34-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m34-flagimage").attr("src",newSrc);

                super12Winners[34]={
                    "team1":$('#m34-team-1').val(),
                    "team2":$('#m34-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner34Form").submit();

            //match 35 A2 - Ireland

        $('#m35-team-1').val(" South Africa ");
        $('#m35-team-2').val(" Ireland ");
        //console.log("Selected Default Team 35");
        $('#m35-groundid').val(" Adelaide ");

        $('#m35-innings').val(1);
        $('#m35-venue').val(3);
        $('#m35-choice').val(1);

        $("#winner35Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner35Form").serialize(),
              success: function(html){
                $("#m35-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m35-flagimage").attr("src",newSrc);

                super12Winners[35]={
                    "team1":$('#m35-team-1').val(),
                    "team2":$('#m35-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner35Form").submit();

        //match 36 b1 -  Scotland
        $('#m36-team-1').val(" India ");
        $('#m36-team-2').val(" Scotland ");
        //console.log("Selected Default Team 36");
        $('#m36-groundid').val(" Adelaide ");

        $('#m36-innings').val(1);
        $('#m36-venue').val(3);
        $('#m36-choice').val(1);

        $("#winner36Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner36Form").serialize(),
              success: function(html){
                $("#m36-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m36-flagimage").attr("src",newSrc);

                super12Winners[36]={
                    "team1":$('#m36-team-1').val(),
                    "team2":$('#m36-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner36Form").submit();


        //match 37 b2 -  Bangladesh
        $('#m37-team-1').val(" Pakistan ");
        $('#m37-team-2').val(" Bangladesh ");
        //console.log("Selected Default Team 37");
        $('#m37-groundid').val(" Melbourne ");

        $('#m37-innings').val(1);
        $('#m37-venue').val(3);
        $('#m37-choice').val(1);

        $("#winner37Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner37Form").serialize(),
              success: function(html){
                $("#m37-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m37-flagimage").attr("src",newSrc);

                super12Winners[37]={
                    "team1":$('#m37-team-1').val(),
                    "team2":$('#m37-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner37Form").submit();

         //match 38
        $('#m38-team-1').val(" Australia ");
        $('#m38-team-2').val(" New Zealand ");
        //console.log("Selected Default Team 38");
        $('#m38-groundid').val(" Melbourne ");

        $('#m38-innings').val(1);
        $('#m38-venue').val(1);
        $('#m38-choice').val(1);

        $("#winner38Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner38Form").serialize(),
              success: function(html){
                $("#m38-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m38-flagimage").attr("src",newSrc);

                super12Winners[38]={
                    "team1":$('#m38-team-1').val(),
                    "team2":$('#m38-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner38Form").submit();

         //match 39 A2 - Ireland
        $('#m39-team-1').val(" England ");
        $('#m39-team-2').val(" Ireland ");
        //console.log("Selected Default Team 39");
        $('#m39-groundid').val(" Adelaide ");

        $('#m39-innings').val(1);
        $('#m39-venue').val(3);
        $('#m39-choice').val(1);

        $("#winner39Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner39Form").serialize(),
              success: function(html){
                $("#m39-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m39-flagimage").attr("src",newSrc);

                super12Winners[39]={
                    "team1":$('#m39-team-1').val(),
                    "team2":$('#m39-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner39Form").submit();


         //match 40 A1 - Sri Lanka
        $('#m40-team-1').val(" West Indies ");
        $('#m40-team-2').val(" Sri Lanka ");
        //console.log("Selected Default Team 39");
        $('#m40-groundid').val(" Melbourne ");

        $('#m40-innings').val(1);
        $('#m40-venue').val(3);
        $('#m40-choice').val(1);

        $("#winner40Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner40Form").serialize(),
              success: function(html){
                $("#m40-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m40-flagimage").attr("src",newSrc);

                super12Winners[40]={
                    "team1":$('#m40-team-1').val(),
                    "team2":$('#m40-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner40Form").submit();

        //match 41 B1 - Scotland
        $('#m41-team-1').val(" South Africa ");
        $('#m41-team-2').val(" Scotland ");
        //console.log("Selected Default Team 41");
        $('#m41-groundid').val(" Sydney ");

        $('#m41-innings').val(1);
        $('#m41-venue').val(3);
        $('#m41-choice').val(1);

        $("#winner41Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner41Form").serialize(),
              success: function(html){
                $("#m41-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m41-flagimage").attr("src",newSrc);

                super12Winners[41]={
                    "team1":$('#m41-team-1').val(),
                    "team2":$('#m41-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner41Form").submit();


        //match 42
        $('#m42-team-1').val(" India ");
        $('#m42-team-2').val(" Afghanistan ");
        //console.log("Selected Default Team 42");
        $('#m42-groundid').val(" Sydney ");

        $('#m42-innings').val(1);
        $('#m42-venue').val(3);
        $('#m42-choice').val(1);

        $("#winner42Form").submit(function(event){
            event.preventDefault();

            $.ajax({
              url: "checkResults",
              cache: false,
              method: "POST",
              data:$("#winner42Form").serialize(),
              success: function(html){
                $("#m42-winner").html(html);
                var newSrc = "../static/assets/flags/"+html+".jpg";
                jQuery("#m42-flagimage").attr("src",newSrc);

                super12Winners[42]={
                    "team1":$('#m42-team-1').val(),
                    "team2":$('#m42-team-2').val(),
                    "winner":html
                };

                populatePointTable(super12Winners, $("#group12standing > tbody"));
              }
            });

        });

        $("#winner42Form").submit();

    }

    //super12Winners

   generateSuper12();

     //match 43 SemiFinal 1
    $('#m43-team-1').val(" India ");
    $('#m43-team-2').val(" Pakistan ");
    //console.log("Selected Default Team 43");
    $('#m43-groundid').val(" Sydney ");

    $('#m43-innings').val(1);
    $('#m43-venue').val(3);
    $('#m43-choice').val(1);

    $("#winner43Form").submit(function(event){
        event.preventDefault();

        $.ajax({
          url: "checkResults",
          cache: false,
          method: "POST",
          data:$("#winner43Form").serialize(),
          success: function(html){
            $("#m43-winner").html(html);
            var newSrc = "../static/assets/flags/"+html+".jpg";
            jQuery("#m43-flagimage").attr("src",newSrc);
          }
        });

    });

    $("#winner43Form").submit();


     //match 44 SemiFinal 2
    $('#m44-team-1').val(" Australia ");
    $('#m44-team-2').val(" England ");
    //console.log("Selected Default Team 44");
    $('#m44-groundid').val(" Adelaide ");

    $('#m44-innings').val(1);
    $('#m44-venue').val(3);
    $('#m44-choice').val(1);

    $("#winner44Form").submit(function(event){
        event.preventDefault();

        $.ajax({
          url: "checkResults",
          cache: false,
          method: "POST",
          data:$("#winner44Form").serialize(),
          success: function(html){
            $("#m44-winner").html(html);
            var newSrc = "../static/assets/flags/"+html+".jpg";
            jQuery("#m44-flagimage").attr("src",newSrc);
          }
        });

    });

    $("#winner44Form").submit();


     //match 45 Final
    $('#m45-team-1').val(" India ");
    $('#m45-team-2').val(" England ");
    //console.log("Selected Default Team 45");
    $('#m45-groundid').val(" Melbourne ");

    $('#m45-innings').val(1);
    $('#m45-venue').val(3);
    $('#m45-choice').val(1);

    $("#winner45Form").submit(function(event){
        event.preventDefault();

        $.ajax({
          url: "checkResults",
          cache: false,
          method: "POST",
          data:$("#winner45Form").serialize(),
          success: function(html){
            $("#m45-winner").html(html);
            var newSrc = "../static/assets/flags/"+html+".jpg";
            jQuery("#m45-flagimage").attr("src",newSrc);
          }
        });

    });

    $("#winner45Form").submit();


    console.log(qualifierWinners);


}

window.onload = populate();

$('.team-1').on('change', function() {
    console.log('T1'+ this.value);
    var matchId = $(this).attr('id').substring(0,3);
    console.log('T2' + $('#'+matchId+'team-2').val());
    if($('#'+matchId+'team-2').val() == this.value)
    {
        alert("Both teams chosen are same");
        $(':input[type="submit"]').prop('disabled', true);
    }
    else
    {
        $(':input[type="submit"]').prop('disabled', false);
    }
});

$('.team-2').on('change', function() {
    console.log('T2'+ this.value);
    //console.log('T1' + $('#team-1').val());
    var matchId = $(this).attr('id').substring(0,3);
    console.log('T2' + $('#'+matchId+'team-1').val());
    if($('#'+matchId+'team-1').val() == this.value)
    {
        alert("Both teams chosen are same");
        $(':input[type="submit"]').prop('disabled', true);
    }
    else
    {
        $(':input[type="submit"]').prop('disabled', false);
    }
});
