class adventure {
    constructor(title, body) {
        this.title = title;
        this.body = body;
    }
}

var adventures = [
    new adventure(
        "Adventure 1: Caverns and Kobolds",
    `Caelynn, Lokt, Ordrin, Emerald, Verna, Galant, and Adara traveled to Renston to investigate a kobold problem. There they raided the lizard's cave, eliminating many of the creatures.
    <p>In the depths they fought a shaman like kobold who commanded a pair of ogres. With the foes defeated, the party took their pick of a treasure hoard. They left the egg clutch intact with a warning and departed for home.
    <p>- Recorded by Ordrin`),

    new adventure(
        "Adventure 2 : After Andrews",
    `Ordrin, Lokt, Thalion and Verna team up to bring in Andrews and his gang. After a close encounter with a waterfall, Verna lets Ordrin take the role of navigator.
    <p>They find the coast and make camp, but that night a powerful storm forces them to seek shelter. An old couple allow them to stay in their home. The next morning they continue tracking the hoofprints of the bandit troupe.
    <p>They were side tracked by exploring a sea cave. The home of a sea beast and a mysterious door. After becoming cornered by the beast and an encroaching tide, they managed to defeat the creature. Failing to open the door however, they decided to continue down the coast.
    <p>At the base of a rocky cliff they were ambushed by the gang. Arrows rained from above as they tried to slip away. It was an uphill battle. Though three of the gang managed to escape, two were captured and another killed. All three were taken back to Northreach.`),
    new adventure(
        "Adventure 3: Squirrel Shenanigans",
    `Caelynn, Lokt, Ordrin, Emerald, Verna, Thalion, and Adara set out from town to begin investigating the copper-thieving squirrels. After spending some time wandering the woods, setting out copper as bait, and only catching glimpses of the fast creatures they finally met one. Thalion killed one of the shapeshifting squirrels (and is now in very bad standing with them) but managed to catch the next one he saw. Emerald then befriended the creature, who she named chip.
    <p>Emerald was able to communicate to Chip to lead us to where they take the copper. On the journey Caelynn fell in a large pit, where the party then fought and defeated four giant spiders.
    <p>Arriving at the home of the squirrel sprites more copper was given, and the squirrels rushed to a well. Upon throwing coins in the well the party found the coins magically disappeared, and the giver was gifted with an enhanced ability.
    <p>Swimming down the well the party found an open (dry) room, with another mysterious door at the end. Four lights on the wall were shown to be eye-like constructs acting as sentries telling the group to stay back from the door. Lokt and Ordrin were able to communicate with the sentries in draconic, receiving translations of the undercommon writings found on the doors and well. They were told this place was the Alms House of Il'manieri, and were given a point on the map of the Temple of Il'manieri. This temple being where to get proper permission to enter the doors, the party decided not to fight the sentries but headed back to town.`)
];

loadXMLDoc();
function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xmlhttp.open("GET", "/Resources/adventures.xml", true);
    xmlhttp.send();
  }
  
  function myFunction(xml) {
    var x, i, xmlDoc, txt;
    xmlDoc = xml.responseXML;
    txt = "";
    x = xmlDoc.getElementsByTagName("collection");
    for (i = 0; i< x.length; i++) {
      txt += x[i].childNodes[0].nodeValue + "<br>";
    }
    document.getElementById("demo").innerHTML = txt;
  }

inject('articles');
function inject(into) {
    var i = adventures.length-1
    for (adventure in adventures) {
        document.getElementById(into).innerHTML += `<div id = 'cont' class='articleContainer'>
        <h3 class='articleTitle'>${adventures[i].title}<div class='lh'></div></h3>
        <div class='articleText'>${adventures[i].body}</div>
        </div>`;
        i--;
    }
}