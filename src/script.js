angular.module('ionic.example', ['ionic'])

    .controller('MapCtrl', function($scope, $ionicLoading, $compile) {
      function initialize() {
        var myLatlng = new google.maps.LatLng(39.677956, -75.750900);
        
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"),
            mapOptions);
        
        //Marker + infowindow + angularjs compiled ng-click
        var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
        var compiled = $compile(contentString)($scope);

        var infowindow = new google.maps.InfoWindow({
          content: compiled[0]
        });

        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });
        
        
        
        
        (function() {
    var json = {
  
  "message": "found 75 incident entries",
  "data": [
    {
      "entry_id": 693,
      "tier": 1,
      "type": "Burglary",
      "type_img": "3.svg",
      "description": "OFFENSIVE TOUCHING/OTHER ASSAULTS/NON-AGGRAVATED",
      "location": "200 BLOCK SW S. MAIN ST",
      "latitude": 39.67795000000005,
      "longitude": -75.76198999999995,
      "agency": "Newark Police",
      "report_date": "2022-11-11 00:00:00",
      "entry_time": "2022-11-18 18:23:05.195"
    },
    {
      "entry_id": 694,
      "tier": 1,
      "type": "Burglary",
      "type_img": "3.svg",
      "description": "SIMPLE ASSAULT/NON-FAMILY/OTHER ASSAULTS/NON-AGGRAVATED",
      "location": "100 BLOCK E. MAIN ST",
      "latitude": 39.68352000000004,
      "longitude": -75.74684999999995,
      "agency": "Newark Police",
      "report_date": "2022-11-11 01:26:00",
      "entry_time": "2022-11-18 18:23:05.306"
    },
    {
      "entry_id": 695,
      "tier": 1,
      "type": "Weapons",
      "type_img": "15.svg",
      "description": "LARCENY/FROM VEHICLE/NOT ATTACHED",
      "location": "MARROWS S RD & OGLETOWN RD",
      "latitude": 39.68277000000003,
      "longitude": -75.73167999999998,
      "agency": "Newark Police",
      "report_date": "2022-11-11 12:38:00",
      "entry_time": "2022-11-18 18:23:05.418"
    },
    {
      "entry_id": 696,
      "tier": 1,
      "type": "Drugs / Alcohol Violations",
      "type_img": "5.svg",
      "description": "DISORDERLY CONDUCT/UNRELATED TO LIQUOR",
      "location": "MARROWS RD",
      "latitude": 39.67502000000009,
      "longitude": -75.72858,
      "agency": "Newark Police",
      "report_date": "2022-11-11 14:56:00",
      "entry_time": "2022-11-18 18:23:05.529"
    },
    {
      "entry_id": 697,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/FROM BUILDING",
      "location": "600 BLOCK OGELTOWN RD",
      "latitude": 39.685100000000034,
      "longitude": -75.73314000100001,
      "agency": "Newark Police",
      "report_date": "2022-11-11 15:48:00",
      "entry_time": "2022-11-18 18:23:05.642"
    },
    {
      "entry_id": 698,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/FROM BUILDING",
      "location": "200 BLOCK W DELAWARE AVE",
      "latitude": 39.68208000000005,
      "longitude": -75.74400999999999,
      "agency": "Newark Police",
      "report_date": "2022-11-11 16:44:00",
      "entry_time": "2022-11-18 18:23:05.751"
    },
    {
      "entry_id": 699,
      "tier": 1,
      "type": "DUI",
      "type_img": "6.svg",
      "description": "BUY/PURCHASE/GIVE LIQUOR TO PERSONS UNDERAGE",
      "location": "400 BLOCK S NEW LONDON RD",
      "latitude": 39.68886000000006,
      "longitude": -75.76016999999999,
      "agency": "Newark Police",
      "report_date": "2022-11-11 19:10:00",
      "entry_time": "2022-11-18 18:23:05.860"
    },
    {
      "entry_id": 700,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/SHOPLIFTING",
      "location": "600 BLOCK OGLETOWN RD",
      "latitude": 39.68501000000005,
      "longitude": -75.73305999999995,
      "agency": "Newark Police",
      "report_date": "2022-11-12 00:33:00",
      "entry_time": "2022-11-18 18:23:05.972"
    },
    {
      "entry_id": 701,
      "tier": 1,
      "type": "Drugs / Alcohol Violations",
      "type_img": "5.svg",
      "description": "DISTURBING THE PEACE/PUBLIC NUISANCE",
      "location": "000 BLOCK BENNY ST",
      "latitude": 39.67775999999999,
      "longitude": -75.74560999999991,
      "agency": "Newark Police",
      "report_date": "2022-11-12 01:32:00",
      "entry_time": "2022-11-18 18:23:06.173"
    },
    {
      "entry_id": 702,
      "tier": 1,
      "type": "Drugs / Alcohol Violations",
      "type_img": "5.svg",
      "description": "DISTURBING THE PEACE/PUBLIC NUISANCE",
      "location": "100 BLOCK KELLS AVE",
      "latitude": 39.67331000000007,
      "longitude": -75.74761999999996,
      "agency": "Newark Police",
      "report_date": "2022-11-12 02:10:00",
      "entry_time": "2022-11-18 18:23:06.283"
    },
    {
      "entry_id": 703,
      "tier": 1,
      "type": "Weapons",
      "type_img": "15.svg",
      "description": "LARCENY/FROM VEHICLE/NOT ATTACHED",
      "location": "000 BLOCK W CLEVELAND AVE",
      "latitude": 39.68623000000006,
      "longitude": -75.75111999999997,
      "agency": "Newark Police",
      "report_date": "2022-11-12 08:55:00",
      "entry_time": "2022-11-18 18:23:06.382"
    },
    {
      "entry_id": 704,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/BICYCLES",
      "location": "200 BLOCK E E. MAIN ST",
      "latitude": 39.68377000000002,
      "longitude": -75.74354999999994,
      "agency": "Newark Police",
      "report_date": "2022-11-12 11:58:00",
      "entry_time": "2022-11-18 18:23:06.483"
    },
    {
      "entry_id": 705,
      "tier": 1,
      "type": "Drugs / Alcohol Violations",
      "type_img": "5.svg",
      "description": "DISTURBING THE PEACE/PUBLIC NUISANCE",
      "location": "000 BLOCK W PARK PL",
      "latitude": 39.67436000000003,
      "longitude": -75.75084999999993,
      "agency": "Newark Police",
      "report_date": "2022-11-12 14:22:00",
      "entry_time": "2022-11-18 18:23:06.587"
    },
    {
      "entry_id": 706,
      "tier": 1,
      "type": "Vehicle Break-In / Theft",
      "type_img": "14.svg",
      "description": "DAMAGE/PRIVATE PROPERTY",
      "location": "100 BLOCK E LOVETT AVE",
      "latitude": 39.67924000000004,
      "longitude": -75.74577999999995,
      "agency": "Newark Police",
      "report_date": "2022-11-12 14:45:00",
      "entry_time": "2022-11-18 18:23:06.683"
    },
    {
      "entry_id": 707,
      "tier": 1,
      "type": "Drugs / Alcohol Violations",
      "type_img": "5.svg",
      "description": "DISTURBING THE PEACE/PUBLIC NUISANCE",
      "location": "200 BLOCK PARK PL",
      "latitude": 39.67433000000002,
      "longitude": -75.74706999899992,
      "agency": "Newark Police",
      "report_date": "2022-11-12 15:34:00",
      "entry_time": "2022-11-18 18:23:06.780"
    },
    {
      "entry_id": 708,
      "tier": 1,
      "type": "Fraud",
      "type_img": "7.svg",
      "description": "DRIVING UNDER THE INFLUENCE/LIQUOR",
      "location": "ON PRIVATE PROPERTY WITHIN NEWARK MUNICIPALITY. 27.40 FEET",
      "latitude": 39.66707000000006,
      "longitude": -75.75307000000001,
      "agency": "Newark Police",
      "report_date": "2022-11-12 17:28:00",
      "entry_time": "2022-11-18 18:23:06.895"
    },
    {
      "entry_id": 709,
      "tier": 1,
      "type": "Drugs / Alcohol Violations",
      "type_img": "5.svg",
      "description": "DISTURBING THE PEACE/PUBLIC NUISANCE",
      "location": "100 BLOCK COLLEGE AVE",
      "latitude": 39.688170000000085,
      "longitude": -75.75394999999995,
      "agency": "Newark Police",
      "report_date": "2022-11-12 17:31:00",
      "entry_time": "2022-11-18 18:23:06.995"
    },
    {
      "entry_id": 710,
      "tier": 1,
      "type": "DUI",
      "type_img": "6.svg",
      "description": "LIQUOR/FREE TEXT",
      "location": "200 BLOCK DELAWARE AVE",
      "latitude": 39.682200000000044,
      "longitude": -75.74389999999995,
      "agency": "Newark Police",
      "report_date": "2022-11-12 20:30:00",
      "entry_time": "2022-11-18 18:23:07.116"
    },
    {
      "entry_id": 711,
      "tier": 1,
      "type": "Burglary",
      "type_img": "3.svg",
      "description": "OFFENSIVE TOUCHING/OTHER ASSAULTS/NON-AGGRAVATED",
      "location": "100 BLOCK MAIN ST",
      "latitude": 39.68363000000002,
      "longitude": -75.74685999999997,
      "agency": "Newark Police",
      "report_date": "2022-11-12 22:49:00",
      "entry_time": "2022-11-18 18:23:07.226"
    },
    {
      "entry_id": 712,
      "tier": 1,
      "type": "Vehicle Break-In / Theft",
      "type_img": "14.svg",
      "description": "DAMAGE/PRIVATE PROPERTY",
      "location": "000 BLOCK NE INDEPENDENCE CIR",
      "latitude": 39.68312000000001,
      "longitude": -75.74046999999996,
      "agency": "Newark Police",
      "report_date": "2022-11-12 23:30:00",
      "entry_time": "2022-11-18 18:23:07.329"
    },
    {
      "entry_id": 713,
      "tier": 1,
      "type": "Drugs / Alcohol Violations",
      "type_img": "5.svg",
      "description": "DISTURBING THE PEACE/PUBLIC NUISANCE",
      "location": "100 BLOCK MAIN ST",
      "latitude": 39.68370000000004,
      "longitude": -75.75808000099997,
      "agency": "Newark Police",
      "report_date": "2022-11-13 00:28:00",
      "entry_time": "2022-11-18 18:23:07.438"
    },
    {
      "entry_id": 714,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/SHOPLIFTING",
      "location": "600 BLOCK OGLETOWN RD",
      "latitude": 39.685250000000025,
      "longitude": -75.73308999999992,
      "agency": "Newark Police",
      "report_date": "2022-11-13 00:32:00",
      "entry_time": "2022-11-18 18:23:07.562"
    },
    {
      "entry_id": 715,
      "tier": 1,
      "type": "DUI",
      "type_img": "6.svg",
      "description": "DISORDERLY CONDUCT/LIQUOR INVOLVEMENT",
      "location": "000 BLOCK MAIN ST",
      "latitude": 39.68308000000008,
      "longitude": -75.75244,
      "agency": "Newark Police",
      "report_date": "2022-11-13 01:05:00",
      "entry_time": "2022-11-18 18:23:07.681"
    },
    {
      "entry_id": 716,
      "tier": 1,
      "type": "DUI",
      "type_img": "6.svg",
      "description": "CONSUMPTION OF LIQUOR/UNDERAGE",
      "location": "300 BLOCK HAINES ST",
      "latitude": 39.67655000000005,
      "longitude": -75.74673999899993,
      "agency": "University of Delaware Police",
      "report_date": "2022-11-13 03:05:00",
      "entry_time": "2022-11-18 18:23:07.794"
    },
    {
      "entry_id": 717,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/VEHICLE PARTS/FROM AUTO/ATTACHED",
      "location": "100 BLOCK W MAIN ST",
      "latitude": 39.68360000000005,
      "longitude": -75.74593999999998,
      "agency": "Newark Police",
      "report_date": "2022-11-13 11:26:00",
      "entry_time": "2022-11-18 18:23:07.983"
    },
    {
      "entry_id": 718,
      "tier": 1,
      "type": "Fraud",
      "type_img": "7.svg",
      "description": "DRIVING UNDER THE INFLUENCE/LIQUOR",
      "location": "ON PRIVATE PROPERTY WITHIN NEWARK MUNICIPALITY. 134.05 FEET",
      "latitude": 39.68448000000004,
      "longitude": -75.73982999999994,
      "agency": "Newark Police",
      "report_date": "2022-11-13 17:43:00",
      "entry_time": "2022-11-18 18:23:08.080"
    },
    {
      "entry_id": 719,
      "tier": 1,
      "type": "Weapons",
      "type_img": "15.svg",
      "description": "LARCENY/FROM VEHICLE/NOT ATTACHED",
      "location": "000 BLOCK CLEVELAND AVE",
      "latitude": 39.68639000000009,
      "longitude": -75.75042999999997,
      "agency": "Newark Police",
      "report_date": "2022-11-13 20:16:00",
      "entry_time": "2022-11-18 18:23:08.226"
    },
    {
      "entry_id": 720,
      "tier": 1,
      "type": "Disturbing the Peace",
      "type_img": "4.svg",
      "description": "BURGLARY/FORCED ENTRY/NONRESIDENCE",
      "location": "1000 BLOCK COLLEGE AVE",
      "latitude": 39.65268000000001,
      "longitude": -75.75039999999998,
      "agency": "Newark Police",
      "report_date": "2022-11-14 04:39:00",
      "entry_time": "2022-11-18 18:23:08.334"
    },
    {
      "entry_id": 721,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/SHOPLIFTING",
      "location": "600 BLOCK W OGLETOWN RD",
      "latitude": 39.68520000000005,
      "longitude": -75.73362999999993,
      "agency": "Newark Police",
      "report_date": "2022-11-14 08:29:00",
      "entry_time": "2022-11-18 18:23:08.457"
    },
    {
      "entry_id": 722,
      "tier": 1,
      "type": "Vehicle Break-In / Theft",
      "type_img": "14.svg",
      "description": "DAMAGE/PRIVATE PROPERTY",
      "location": "1000 BLOCK FOUNTAINVIEW CIR",
      "latitude": 39.673880000000004,
      "longitude": -75.73446999999997,
      "agency": "Newark Police",
      "report_date": "2022-11-14 10:47:00",
      "entry_time": "2022-11-18 18:23:08.583"
    },
    {
      "entry_id": 723,
      "tier": 1,
      "type": "Weapons",
      "type_img": "15.svg",
      "description": "LARCENY/FROM VEHICLE/NOT ATTACHED",
      "location": "000 BLOCK W AMSTEL AVE",
      "latitude": 39.68005000000002,
      "longitude": -75.75457999999995,
      "agency": "Newark Police",
      "report_date": "2022-11-14 11:24:00",
      "entry_time": "2022-11-18 18:23:08.736"
    },
    {
      "entry_id": 724,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/BICYCLES",
      "location": "000 BLOCK EASTON CT",
      "latitude": 39.685050000000054,
      "longitude": -75.74355999999995,
      "agency": "Newark Police",
      "report_date": "2022-11-14 14:24:00",
      "entry_time": "2022-11-18 18:23:08.846"
    },
    {
      "entry_id": 725,
      "tier": 1,
      "type": "Drugs / Alcohol Violations",
      "type_img": "5.svg",
      "description": "DISORDERLY CONDUCT/UNRELATED TO LIQUOR",
      "location": "600 BLOCK COLLEGE AVE",
      "latitude": 39.66070000000009,
      "longitude": -75.75292000000002,
      "agency": "Newark Police",
      "report_date": "2022-11-15 02:30:00",
      "entry_time": "2022-11-18 18:23:08.957"
    },
    {
      "entry_id": 726,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/VEHICLE PARTS/FROM AUTO/ATTACHED",
      "location": "200 BLOCK CLEVELAND AVE",
      "latitude": 39.686990000000044,
      "longitude": -75.74176000100003,
      "agency": "Newark Police",
      "report_date": "2022-11-16 14:08:00",
      "entry_time": "2022-11-18 18:23:09.055"
    },
    {
      "entry_id": 727,
      "tier": 1,
      "type": "Disturbing the Peace",
      "type_img": "4.svg",
      "description": "BURGLARY/NO FORCED ENTRY/RESIDENCE",
      "location": "300 BLOCK HAINES ST",
      "latitude": 39.67636000000003,
      "longitude": -75.74678999999993,
      "agency": "University of Delaware Police",
      "report_date": "2022-11-17 05:07:00",
      "entry_time": "2022-11-18 18:23:09.189"
    },
    {
      "entry_id": 728,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/FROM BUILDING",
      "location": "1000 BLOCK SUBURBAN DR",
      "latitude": 39.66587000000002,
      "longitude": -75.77568999999988,
      "agency": "Newark Police",
      "report_date": "2022-11-17 11:50:00",
      "entry_time": "2022-11-18 18:23:10.078"
    },
    {
      "entry_id": 729,
      "tier": 1,
      "type": "Homicide",
      "type_img": "8.svg",
      "description": "FRAUD BY WIRE",
      "location": "100 BLOCK NE S. MAIN ST",
      "latitude": 39.67892000000007,
      "longitude": -75.7608499999999,
      "agency": "Newark Police",
      "report_date": "2022-11-17 14:16:00",
      "entry_time": "2022-11-18 18:23:10.211"
    },
    {
      "entry_id": 730,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/FROM BUILDING",
      "location": "800 BLOCK DISTRICT DR",
      "latitude": 39.6698900000001,
      "longitude": -75.77648999999992,
      "agency": "Newark Police",
      "report_date": "2022-11-17 16:00:00",
      "entry_time": "2022-11-18 18:23:10.320"
    },
    {
      "entry_id": 731,
      "tier": 1,
      "type": "DUI",
      "type_img": "6.svg",
      "description": "CONSUMPTION OF LIQUOR/UNDERAGE",
      "location": "800 BLOCK SCHOLAR DR",
      "latitude": 39.681980000000095,
      "longitude": -75.74463999999999,
      "agency": "University of Delaware Police",
      "report_date": "2022-11-17 18:50:00",
      "entry_time": "2022-11-18 18:23:10.428"
    },
    {
      "entry_id": 732,
      "tier": 1,
      "type": "DUI",
      "type_img": "6.svg",
      "description": "DISORDERLY CONDUCT/LIQUOR INVOLVEMENT",
      "location": "100 BLOCK MAIN ST",
      "latitude": 39.68378000000008,
      "longitude": -75.74576,
      "agency": "Newark Police",
      "report_date": "2022-11-17 21:15:00",
      "entry_time": "2022-11-18 18:23:10.520"
    },
    {
      "entry_id": 733,
      "tier": 1,
      "type": "DUI",
      "type_img": "6.svg",
      "description": "CONSUMPTION OF LIQUOR/UNDERAGE",
      "location": "200 BLOCK DAVID HOLLOWELL DR",
      "latitude": 39.687830000000076,
      "longitude": -75.75616999999993,
      "agency": "University of Delaware Police",
      "report_date": "2022-11-18 00:55:00",
      "entry_time": "2022-11-18 18:23:10.620"
    },
    {
      "entry_id": 734,
      "tier": 1,
      "type": "Drugs / Alcohol Violations",
      "type_img": "5.svg",
      "description": "DISTURBING THE PEACE/PUBLIC NUISANCE",
      "location": "000 BLOCK THORN LN",
      "latitude": 39.67430000000005,
      "longitude": -75.76744999999994,
      "agency": "Newark Police",
      "report_date": "2022-11-18 01:40:00",
      "entry_time": "2022-11-18 18:23:10.743"
    },
    {
      "entry_id": 735,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/FROM ALL OTHER YARDS",
      "location": "200 BLOCK S HAINES ST",
      "latitude": 39.677110000000006,
      "longitude": -75.74663999999993,
      "agency": "University of Delaware Police",
      "report_date": "2022-11-18 20:38:00",
      "entry_time": "2022-11-22 18:54:58.525"
    },
    {
      "entry_id": 736,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/FROM ALL OTHER YARDS",
      "location": "200 BLOCK DAVID HOLLOWELL DR",
      "latitude": 39.68868000000001,
      "longitude": -75.75604999999999,
      "agency": "University of Delaware Police",
      "report_date": "2022-11-18 20:39:00",
      "entry_time": "2022-11-22 18:54:58.661"
    },
    {
      "entry_id": 737,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/FROM ALL OTHER YARDS",
      "location": "100 BLOCK DAVID HOLLOWELL DR",
      "latitude": 39.689800000000034,
      "longitude": -75.75664,
      "agency": "University of Delaware Police",
      "report_date": "2022-11-18 20:51:00",
      "entry_time": "2022-11-22 18:54:58.792"
    },
    {
      "entry_id": 738,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/FROM ALL OTHER YARDS",
      "location": "400 BLOCK W ACADEMY ST",
      "latitude": 39.67520000000004,
      "longitude": -75.74852,
      "agency": "University of Delaware Police",
      "report_date": "2022-11-18 21:37:00",
      "entry_time": "2022-11-22 18:54:58.922"
    },
    {
      "entry_id": 739,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/FROM ALL OTHER YARDS",
      "location": "400 BLOCK ACADEMY ST",
      "latitude": 39.67537000000003,
      "longitude": -75.75076000099995,
      "agency": "University of Delaware Police",
      "report_date": "2022-11-18 22:04:00",
      "entry_time": "2022-11-22 18:54:59.057"
    },
    {
      "entry_id": 740,
      "tier": 1,
      "type": "Vehicle Break-In / Theft",
      "type_img": "14.svg",
      "description": "DAMAGE/PUBLIC PROPERTY",
      "location": "400 BLOCK ACADEMY ST",
      "latitude": 39.67557000000009,
      "longitude": -75.75085999999996,
      "agency": "University of Delaware Police",
      "report_date": "2022-11-18 22:29:00",
      "entry_time": "2022-11-22 18:54:59.166"
    },
    {
      "entry_id": 741,
      "tier": 1,
      "type": "Drugs / Alcohol Violations",
      "type_img": "5.svg",
      "description": "DISTURBING THE PEACE/PUBLIC NUISANCE",
      "location": "000 BLOCK NW THORN LA",
      "latitude": 39.67431000000004,
      "longitude": -75.76833999999998,
      "agency": "Newark Police",
      "report_date": "2022-11-19 00:24:00",
      "entry_time": "2022-11-22 18:54:59.295"
    },
    {
      "entry_id": 742,
      "tier": 1,
      "type": "Fraud",
      "type_img": "7.svg",
      "description": "DRIVING UNDER THE INFLUENCE/LIQUOR",
      "location": "ON W. PARK PLACE  75.83 FEET  EAST FROM INDIAN ROAD  WITHIN",
      "latitude": 39.67449000000006,
      "longitude": -75.75481999999994,
      "agency": "Newark Police",
      "report_date": "2022-11-19 02:24:00",
      "entry_time": "2022-11-22 18:54:59.411"
    },
    {
      "entry_id": 743,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/CITY/STATE/TOWN/PROPERTY FROM ALL OTHER YARDS",
      "location": "200 BLOCK HAINES ST",
      "latitude": 39.677700000000065,
      "longitude": -75.74799999999995,
      "agency": "University of Delaware Police",
      "report_date": "2022-11-19 10:11:00",
      "entry_time": "2022-11-22 18:54:59.533"
    },
    {
      "entry_id": 744,
      "tier": 1,
      "type": "Vehicle Break-In / Theft",
      "type_img": "14.svg",
      "description": "DAMAGE/PRIVATE PROPERTY",
      "location": "100 BLOCK GROVE LA",
      "latitude": 39.684350000000066,
      "longitude": -75.73478999900001,
      "agency": "Newark Police",
      "report_date": "2022-11-19 15:38:00",
      "entry_time": "2022-11-22 18:54:59.643"
    },
    {
      "entry_id": 745,
      "tier": 1,
      "type": "DUI",
      "type_img": "6.svg",
      "description": "DISORDERLY CONDUCT/LIQUOR INVOLVEMENT",
      "location": "1200 BLOCK WOOLEN WAY",
      "latitude": 39.68871000000005,
      "longitude": -75.74675999999997,
      "agency": "Newark Police",
      "report_date": "2022-11-20 03:09:00",
      "entry_time": "2022-11-22 18:54:59.756"
    },
    {
      "entry_id": 746,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/VEHICLE PARTS/FROM AUTO/ATTACHED",
      "location": "600 BLOCK N COLLEGE AVE",
      "latitude": 39.659780000000076,
      "longitude": -75.75190999999992,
      "agency": "Newark Police",
      "report_date": "2022-11-20 09:38:00",
      "entry_time": "2022-11-22 18:54:59.867"
    },
    {
      "entry_id": 747,
      "tier": 1,
      "type": "Drugs / Alcohol Violations",
      "type_img": "5.svg",
      "description": "DISTURBING THE PEACE/PUBLIC NUISANCE",
      "location": "000 BLOCK NE BRIAR LA",
      "latitude": 39.68639000000009,
      "longitude": -75.76847999999998,
      "agency": "Newark Police",
      "report_date": "2022-11-20 10:08:00",
      "entry_time": "2022-11-22 18:54:59.977"
    },
    {
      "entry_id": 748,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/SHOPLIFTING",
      "location": "400 BLOCK NEW LONDON RD",
      "latitude": 39.694150000000036,
      "longitude": -75.76453000000001,
      "agency": "Newark Police",
      "report_date": "2022-11-20 15:03:00",
      "entry_time": "2022-11-22 18:55:00.078"
    },
    {
      "entry_id": 749,
      "tier": 1,
      "type": "Weapons",
      "type_img": "15.svg",
      "description": "LARCENY/FROM VEHICLE/NOT ATTACHED",
      "location": "300 BLOCK E CANNONS WAY",
      "latitude": 39.65701000000002,
      "longitude": -75.74721999999991,
      "agency": "Newark Police",
      "report_date": "2022-11-20 18:58:00",
      "entry_time": "2022-11-22 18:55:00.179"
    },
    {
      "entry_id": 750,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/SHOPLIFTING",
      "location": "200 BLOCK SW S. MAIN ST",
      "latitude": 39.67795000000005,
      "longitude": -75.76196999999992,
      "agency": "Newark Police",
      "report_date": "2022-11-21 00:31:00",
      "entry_time": "2022-11-22 18:55:00.277"
    },
    {
      "entry_id": 751,
      "tier": 1,
      "type": "Burglary",
      "type_img": "3.svg",
      "description": "AGGRAVATED ASSAULT/FAMILY OTHER DANGEROUS WEAPON",
      "location": "800 BLOCK S COLLEGE AVE",
      "latitude": 39.653990000000064,
      "longitude": -75.75098999999993,
      "agency": "Newark Police",
      "report_date": "2022-11-21 21:12:00",
      "entry_time": "2022-11-22 18:55:00.366"
    },
    {
      "entry_id": 752,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/BICYCLES",
      "location": "3300 BLOCK WOOLEN WAY",
      "latitude": 39.68811000000006,
      "longitude": -75.74614999900001,
      "agency": "Newark Police",
      "report_date": "2022-11-21 22:37:00",
      "entry_time": "2022-11-22 18:55:00.455"
    },
    {
      "entry_id": 753,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/SHOPLIFTING",
      "location": "200 BLOCK S. MAIN ST",
      "latitude": 39.67787000000004,
      "longitude": -75.76204999999997,
      "agency": "Newark Police",
      "report_date": "2022-11-22 01:57:00",
      "entry_time": "2022-11-22 18:55:00.542"
    },
    {
      "entry_id": 754,
      "tier": 1,
      "type": "Weapons",
      "type_img": "15.svg",
      "description": "LARCENY/FROM VEHICLE/NOT ATTACHED",
      "location": "000 BLOCK W E. CLEVELAND",
      "latitude": 39.686530000000076,
      "longitude": -75.74971999999998,
      "agency": "Newark Police",
      "report_date": "2022-11-22 10:28:00",
      "entry_time": "2022-11-29 18:17:37.156"
    },
    {
      "entry_id": 755,
      "tier": 1,
      "type": "Robbery",
      "type_img": "10.svg",
      "description": "VEHICLE THEFT LOCALLY STOLEN-LOCALLY RECOVER",
      "location": "ORCHARD RD",
      "latitude": 39.681540000000034,
      "longitude": -75.75532999999997,
      "agency": "Newark Police",
      "report_date": "2022-11-23 01:02:00",
      "entry_time": "2022-11-29 18:17:37.301"
    },
    {
      "entry_id": 756,
      "tier": 1,
      "type": "Sex Crimes",
      "type_img": "11.svg",
      "description": "ROBBERY/CARJACKING/GUN HIGHWAY/STREET/ALLEY",
      "location": "100 BLOCK GROVE LA",
      "latitude": 39.68419000000002,
      "longitude": -75.73448999999991,
      "agency": "Newark Police",
      "report_date": "2022-11-24 12:32:00",
      "entry_time": "2022-11-29 18:17:37.418"
    },
    {
      "entry_id": 757,
      "tier": 1,
      "type": "Vehicle Break-In / Theft",
      "type_img": "14.svg",
      "description": "DAMAGE/BUSINESS PROPERTY",
      "location": "100 BLOCK SANDY DR",
      "latitude": 39.655910000000084,
      "longitude": -75.77977999999993,
      "agency": "Newark Police",
      "report_date": "2022-11-24 13:42:00",
      "entry_time": "2022-11-29 18:17:37.535"
    },
    {
      "entry_id": 758,
      "tier": 1,
      "type": "Homicide",
      "type_img": "8.svg",
      "description": "FRAUD/FREE TEXT",
      "location": "000 BLOCK E SUNSET RD",
      "latitude": 39.676500000000004,
      "longitude": -75.75636000000002,
      "agency": "Newark Police",
      "report_date": "2022-11-25 16:16:00",
      "entry_time": "2022-11-29 18:17:37.654"
    },
    {
      "entry_id": 759,
      "tier": 1,
      "type": "Weapons",
      "type_img": "15.svg",
      "description": "LARCENY/FROM VEHICLE/NOT ATTACHED",
      "location": "300 BLOCK PAPER MILL RD",
      "latitude": 39.69340000000003,
      "longitude": -75.75023999999996,
      "agency": "Newark Police",
      "report_date": "2022-11-25 17:53:00",
      "entry_time": "2022-11-29 18:17:37.792"
    },
    {
      "entry_id": 760,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/FROM BUILDING",
      "location": "600 BLOCK W OGLETOWN RD",
      "latitude": 39.68524000000004,
      "longitude": -75.73360999999989,
      "agency": "Newark Police",
      "report_date": "2022-11-26 00:49:00",
      "entry_time": "2022-11-29 18:17:37.963"
    },
    {
      "entry_id": 761,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/FROM ALL OTHER YARDS",
      "location": "000 BLOCK THORN LA",
      "latitude": 39.67457000000009,
      "longitude": -75.76809999999999,
      "agency": "Newark Police",
      "report_date": "2022-11-26 13:03:00",
      "entry_time": "2022-11-29 18:17:38.095"
    },
    {
      "entry_id": 762,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/FROM BUILDING",
      "location": "000 BLOCK E MAIN ST",
      "latitude": 39.68307000000006,
      "longitude": -75.75239999999994,
      "agency": "Newark Police",
      "report_date": "2022-11-27 01:31:00",
      "entry_time": "2022-11-29 18:17:38.205"
    },
    {
      "entry_id": 763,
      "tier": 1,
      "type": "Fraud",
      "type_img": "7.svg",
      "description": "DRIVING UNDER THE INFLUENCE/LIQUOR/DRUGS",
      "location": "ON WESTBOUND S. MAIN STREET SR273 27.76 FEET  SOUTH WEST FRO",
      "latitude": 39.68291000000004,
      "longitude": -75.75616000000001,
      "agency": "Newark Police",
      "report_date": "2022-11-27 02:31:00",
      "entry_time": "2022-11-29 18:17:38.330"
    },
    {
      "entry_id": 764,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/FROM ALL OTHER YARDS",
      "location": "300 BLOCK SUBURBAN DR",
      "latitude": 39.66833,
      "longitude": -75.77779000000001,
      "agency": "Newark Police",
      "report_date": "2022-11-27 18:06:00",
      "entry_time": "2022-11-29 18:17:38.452"
    },
    {
      "entry_id": 765,
      "tier": 1,
      "type": "Fraud",
      "type_img": "7.svg",
      "description": "DRIVING UNDER THE INFLUENCE/LIQUOR",
      "location": "ON WESTBOUND ELKTON ROAD SR279 0.50 MILES  NORTH EAST FROM M",
      "latitude": 39.660950000000035,
      "longitude": -75.78139000099998,
      "agency": "Newark Police",
      "report_date": "2022-11-27 21:31:00",
      "entry_time": "2022-11-29 18:17:38.588"
    },
    {
      "entry_id": 766,
      "tier": 1,
      "type": "Weapons",
      "type_img": "15.svg",
      "description": "LARCENY/FROM VEHICLE/NOT ATTACHED",
      "location": "200 BLOCK MAIN ST",
      "latitude": 39.68377000000002,
      "longitude": -75.74380999999997,
      "agency": "Newark Police",
      "report_date": "2022-11-28 17:09:00",
      "entry_time": "2022-11-29 18:17:38.710"
    },
    {
      "entry_id": 767,
      "tier": 1,
      "type": "Vandalism",
      "type_img": "13.svg",
      "description": "LARCENY/SHOPLIFTING",
      "location": "100 BLOCK MAIN ST",
      "latitude": 39.68341000000001,
      "longitude": -75.74833000099993,
      "agency": "Newark Police",
      "report_date": "2022-11-28 20:18:00",
      "entry_time": "2022-11-29 18:17:38.820"
    }
  ]
}
    const infoWindow = new google.maps.InfoWindow();
    var iLength = json.data.length;
 
    for (var i = 0; i < iLength; i++) {
      let lati = json.data[i].latitude;
      let lati1 = parseFloat(lati);
      let long = json.data[i].longitude; 
      let long1 = parseFloat(long); 
      let titl = json.data[i].type; 
      let lab = json.data[i].description; 
      let id = json.data[i].entry_id.toString(); 
      let locat = json.data[i].location; 
      let report = json.data[i].report_date; 
      let tier = json.data[i].tier.toString(); 
      
      
      
       var marker3 = new google.maps.Marker({
          position: {lat:lati1, lng:long1},
          map: map, 
         content: titl + lab,
         label :  id,
         label2: locat,
         label3: report,
         label4: tier,
          optimized: false
        });
        google.maps.event.addListener(marker3, "click", function() {
     infoWindow.close();
      infoWindow.setContent('<b>' + titl + '</b>' + '<br\>' + lab + '<br\>Location: ' + locat + '<br\>Time: ' + report + '<br\>Tier: ' + tier );
      infoWindow.open(marker3.map, this);
          
    });
    }; 

 })();

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });
       
        

        $scope.map = map;
        }
      google.maps.event.addDomListener(window, 'load', initialize);
      
      $scope.centerOnMe = function() {
        if(!$scope.map) {
          return;
        }

        $scope.loading = $ionicLoading.show({
          content: 'Getting current location...',
          showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function(pos) {
          $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          $scope.loading.hide();
        }, function(error) {
          alert('Unable to get location: ' + error.message);
        });
      };
      
      $scope.clickTest = function() {
        alert('Example of infowindow with ng-click')
      };
      
    });