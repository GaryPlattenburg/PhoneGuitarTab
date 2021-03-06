﻿var $vexContent;
//Keep this boolean variable as a 'magic string boolean' as value types can not be exchanged between JS and C#; only magic strings work through browser.invokescript
var isChordPopUpOpen = 'false';

function Chord_onClick(chordName) {
    vex.defaultOptions.className = 'vex-theme-os';
   
    $vexContent = vex.open({
        content: '<div style="text-align: center; padding:10px;">' + constructChord(chordName) + '</div>',

        afterOpen: function () {
            isChordPopUpOpen = 'true';
        },
        afterClose: function () {
            isChordPopUpOpen = 'false';
        }
        });

    chords.replace();

   
}


function getChordPopUpVisibility() {

    return isChordPopUpOpen;
}

//Helper function to close the chord pop-up explicitly with back key navigation.
function closeChordPopUp() {
    if (isChordPopUpOpen == 'true') {
        vex.close($vexContent.data().vex.id);
        isChordPopUpOpen = 'false';
    }     
}

//constructs the chord with the given chord name
function constructChord(chordName) {
    return '<chord name="' + chordName + '" positions="' + getChordPositions(chordName) + '" fingers="' + getFingers(chordName) + '" size="4"></chord>';
}

function getChordPositions(chord) {
   
    switch (chord) {
        //A 
        case 'A':
        case 'Amaj':
            return 'X02220';
        case 'A5':
            return 'X022XX';
        case 'A6':
            return 'X02222';
        case 'A7':
            return 'X02020';
        case 'A9':
            return 'X02423';
        case 'Amaj7':
            return 'X02120';
        case 'Amaj9':
            return 'X02424';
        case 'Amaj13':
            return 'X02122';
        case 'A11':
            return 'X00020';
        case 'A13':
            return 'X02022';      
        case 'Am':
            return 'X02210';
        case 'Am6':
            return 'X02212';
        case 'Am7':
            return 'X02010';
        case 'Am9':
            return '532000';
        case 'Am11':
            return 'X00010';
        case 'Am13':
            return 'X02012';
        case 'Asus2':
            return 'X02200';
        case 'Asus4':
        case 'Asus':
            return 'X02230';

        //A# & Bb
        case 'A#':
        case 'A#maj':
        case 'Bbmaj':
        case 'Bb':
            return 'X13331';
        case 'A#5':
        case 'Bb5':
            return 'X133XX';
        case 'A#6':
        case 'Bb6':
            return 'X13333';
        case 'A#7':
        case 'Bb7':
            return 'X13131';
        case 'A#maj7':
        case 'Bbmaj7':
            return 'X13231';
        case 'A#9':
        case 'Bb9':
            return 'X10111';
        case 'A#maj9':
        case 'Bbmaj9':
            return 'X10211';
        case 'A#11':
        case 'Bb11':
            return 'X11131';
        case 'A#13':
        case 'Bb13':
            return 'X1X133';
        case 'A#maj13':
        case 'Bbmaj13':
            return 'X1X233';
        case 'A#m':
        case 'Bbm':
            return 'X13321';
        case 'A#m6':
        case 'Bbm6':
            return 'X1302X';
        case 'A#m7':
        case 'Bbm7':
            return 'X13121';
        case 'A#m9':
        case 'Bbm9':
            return '6x6668';
        case 'A#m11':
        case 'Bbm11':
            return 'X11123';
        case 'A#m13':
        case 'Bbm13':
            return 'X1X213';
        case 'A#sus2':
        case 'Bbsus2':
            return 'X13311';
        case 'A#sus4':
        case 'Bbsus4':
        case 'A#sus':
        case 'Bbsus':
            return 'X11341';

            //B
        case 'B':
        case 'Bmaj':
            return 'X24442';
        case 'B5':
            return 'X244XX';
        case 'B6':
            return '22110X';
        case 'B7':
            return 'X21202';
        case 'Bmaj7':
            return '22130X';
        case 'B9':
            return 'X21222';    
        case 'Bmaj9':
            return 'X21322';
        case 'B11':
            return 'X21220';
        case 'B13':
            return 'X21224';
        case 'Bmaj13':
            return 'X2X344';        
        case 'Bm':
            return 'X24432';
        case 'Bm6':
            return 'X2X132';
        case 'Bm7':
            return 'X20202';
        case 'Bm9':
            return 'X20222';
        case 'Bm11':
            return 'X22232';
        case 'Bm13':
            return 'X2X234';
        case 'Bsus2':
            return 'X24422';
        case 'Bsus4':
        case 'Bsus':
            return 'X24452';

            //C
        case 'C':
        case 'Cmaj':
            return 'X32010';
        case 'C5':
            return 'X355XX';
        case 'C6':
            return '3X221X';
        case 'C7':
            return 'X3231X';
        case 'Cmaj7':
            return 'X32000';
        case 'C9':
            return 'X32333';
        case 'Cmaj9':
            return 'X35430';
        case 'C11':
            return 'X32311';
        case 'C13':
            return 'X1221X';
        case 'Cmaj13':
            return 'X3X455';
        case 'Cm':
            return 'X3101X';
        case 'Cm6':
            return 'X01013';
        case 'Cm7':
            return 'XX1313';
        case 'Cm9':
            return 'X3133X';
        case 'Cm11':
            return 'X33343';
        case 'Cm13':
            return 'X3X345';
        case 'Csus2':
            return 'X30013';
        case 'Csus4':
        case 'Csus':
            return 'X3301X';

            //C# & Db
        case 'C#':
        case 'C#maj':
        case 'Dbmaj':
        case 'Db':
            return 'X43121';
        case 'C#5':
        case 'Db5':
            return 'XXX124';
        case 'C#6':
        case 'Db6':
            return 'XX3324';
        case 'C#7':
        case 'Db7':
            return 'X4342X';
        case 'C#maj7':
        case 'Dbmaj7':
            return 'X43111';
        case 'C#9':
        case 'Db9':
            return 'X43444';
        case 'C#maj9':
        case 'Dbmaj9':
            return 'X41111';
        case 'C#11':
        case 'Db11':
            return 'X43422';
        case 'C#13':
        case 'Db13':
            return 'X21224';
        case 'C#maj13':
        case 'Dbmaj13':
            return 'X1X233';
        case 'C#m':
        case 'Dbm':
            return 'X13321';
        case 'C#m6':
        case 'Dbm6':
            return 'X4X354';
        case 'C#m7':
        case 'Dbm7':
            return 'X42100';
        case 'C#m9':
        case 'Dbm9':
            return 'X4244X';
        case 'C#m11':
        case 'Dbm11':
            return 'X41441';
        case 'C#m13':
        case 'Dbm13':
            return 'X1X123';
        case 'C#sus2':
        case 'Dbsus2':
            return 'XX112X';
        case 'C#sus4':
        case 'Dbsus4':
        case 'C#sus':
        case 'Dbsus':
            return 'X46674';
      

            //D
        case 'D':
        case 'Dmaj':
            return 'XX0232';
        case 'D5':
            return 'XX023X';
        case 'D6':
            return 'XX0202';
        case 'D7':
            return 'XX0212';
        case 'Dmaj7':
            return 'X54222';
        case 'D9':
            return 'X54210';
        case 'Dmaj9':
            return 'X52222';
        case 'D11':
            return 'XX0012';
        case 'D13':
            return 'X3443X';
        case 'Dmaj13':
            return 'X5X677';
        case 'Dm':
            return 'XX0231';
        case 'Dm6':
            return 'XX0201';
        case 'Dm7':
            return 'XX0211';
        case 'Dm9':
            return 'X5355X';
        case 'Dm11':
            return 'XX0011';
        case 'Dm13':
            return 'XX0311';
        case 'Dsus2':
            return 'XX0230';
        case 'Dsus4':
        case 'Dsus':
            return 'XX0233';

            //D# & Eb
        case 'D#':
        case 'D#maj':
        case 'Ebmaj':
        case 'Eb':
            return 'XX1343';
        case 'D#5':
        case 'Eb5':
            return 'XX134X';
        case 'D#6':
        case 'Eb6':
            return 'XX1314';
        case 'D#7':
        case 'Eb7':
            return 'XX1324';
        case 'D#maj7':
        case 'Ebmaj7':
            return 'XX1333';
        case 'D#9':
        case 'Eb9':
            return 'XX1021';
        case 'D#maj9':
        case 'Ebmaj9':
            return 'XX1031';
        case 'D#11':
        case 'Eb11':
            return 'XX1123';
        case 'D#13':
        case 'Eb13':
            return 'X1221X';
        case 'D#maj13':
        case 'Ebmaj13':
            return 'X21344';
        case 'D#m':
        case 'Ebm':
            return '2X134X';
        case 'D#m6':
        case 'Ebm6':
            return 'XX1312';
        case 'D#m7':
        case 'Ebm7':
            return 'XX1322';
        case 'D#m9':
        case 'Ebm9':
            return '2X1321';
        case 'D#m11':
        case 'Ebm11':
            return 'X11122';
        case 'D#m13':
        case 'Ebm13':
            return 'X1X123';
        case 'D#sus2':
        case 'Ebsus2':
            return 'XX1341';
        case 'D#sus4':
        case 'Ebsus4':
        case 'D#sus':
        case 'Ebsus':
            return 'XX1344';

            //E
        case 'E':
        case 'Emaj':
            return '022100';
        case 'E5':
            return '022XXX';
        case 'E6':
            return '022120';
        case 'E7':
            return '020100';
        case 'Emaj7':
            return '021100';
        case 'E9':
            return '020102';
        case 'Emaj9':
            return '024444';
        case 'E11':
            return '002132';
        case 'E13':
            return '020122';
        case 'Emaj13':
            return '021122';
        case 'Em':
            return '022000';
        case 'Em6':
            return '022020';
        case 'Em7':
            return '022030';
        case 'Em9':
            return '020002';
        case 'Em11':
            return '00000';
        case 'Em13':
            return '020022';
        case 'Esus2':
            return 'XX2452';
        case 'Esus4':
        case 'Esus':
            return '022200';


            //F
        case 'F':
        case 'Fmaj':
            return '133211';
        case 'F5':
            return '133XXX';
        case 'F6':
            return '13X23X';
        case 'F7':
            return '131211';
        case 'Fmaj7':
            return '1X221X';
        case 'F9':
            return '131213';
        case 'Fmaj9':
            return '10202X';
        case 'F11':
            return '111213';
        case 'F13':
            return '131231';
        case 'Fmaj13':
            return '1X223X';
        case 'Fm':
            return '133111';
        case 'Fm6':
            return 'XX0111';
        case 'Fm7':
            return '133141';
        case 'Fm9':
            return '1X1113';
        case 'Fm11':
            return '111111';
        case 'Fm13':
            return '131131';
        case 'Fsus2':
            return 'XX3011';
        case 'Fsus4':
        case 'Fsus':
            return '133311';

            //F# & Gb
        case 'F#':
        case 'F#maj':
        case 'Gbmaj':
        case 'Gb':
            return '244322';
        case 'F#5':
        case 'Gb5':
            return '244XXX';
        case 'F#6':
        case 'Gb6':
            return '2X132X';
        case 'F#7':
        case 'Gb7':
            return 'XX4320';
        case 'F#maj7':
        case 'Gbmaj7':
            return 'XX4321';
        case 'F#9':
        case 'Gb9':
            return 'X12122';
        case 'F#maj9':
        case 'Gbmaj9':
            return '2X33X4';
        case 'F#11':
        case 'Gb11':
            return '222324';
        case 'F#13':
        case 'Gb13':
            return 'XX2342';
        case 'F#maj13':
        case 'Gbmaj13':
            return '211121';
        case 'F#m':
        case 'Gbm':
            return '244222';
        case 'F#m6':
        case 'Gbm6':
            return '2X1222';
        case 'F#m7':
        case 'Gbm7':
            return '2X222X';
        case 'F#m9':
        case 'Gbm9':
            return '20212X';
        case 'F#m11':
        case 'Gbm11':
            return '222222';
        case 'F#m13':
        case 'Gbm13':
            return '242242';
        case 'F#sus2':
        case 'Gbsus2':
            return '2XX122';
        case 'F#sus4':
        case 'Gbsus4':
        case 'F#sus':
        case 'Gbsus':
            return '244422';


            //G
        case 'G':
        case 'Gmaj':
            return '320003';
        case 'G5':
            return 'XX0033';
        case 'G6':
            return '320000';
        case 'G7':
            return '320001';
        case 'Gmaj7':
            return '320002';
        case 'G9':
            return '3X0201';
        case 'Gmaj9':
            return '3X0202';
        case 'G11':
            return '320211';
        case 'G13':
            return 'XX3000';
        case 'Gmaj13':
            return '322232';
        case 'Gm':
            return '310033';
        case 'Gm6':
            return 'XX2333';
        case 'Gm7':
            return 'X1303X';
        case 'Gm9':
            return '3X3335';
        case 'Gm11':
            return '333333';
        case 'Gm13':
            return '353353';
        case 'Gsus2':
            return 'XX3011';
        case 'Gsus4':
        case 'Gsus':
            return '300233';

            //G# & Ab
        case 'G#':
        case 'G#maj':
        case 'Abmaj':
        case 'Ab':
            return '43111X';
        case 'G#5':
        case 'Ab5':
            return 'XX1144';
        case 'G#6':
        case 'Ab6':
            return 'XX1111';
        case 'G#7':
        case 'Ab7':
            return 'XX1112';
        case 'G#maj7':
        case 'Abmaj7':
            return 'XX1113';
        case 'G#9':
        case 'Ab9':
            return '4X431X';
        case 'G#maj9':
        case 'Abmaj9':
            return '43534X';
        case 'G#11':
        case 'Ab11':
            return 'X31122';
        case 'G#13':
        case 'Ab13':
            return '4X4311';
        case 'G#maj13':
        case 'Abmaj13':
            return '433343';
        case 'G#m':
        case 'Abm':
            return 'X21144';
        case 'G#m6':
        case 'Abm6':
            return '4X344X';
        case 'G#m7':
        case 'Abm7':
            return '464474';
        case 'G#m9':
        case 'Abm9':
            return 'X24344';
        case 'G#m11':
        case 'Abm11':
            return '444444';
        case 'G#m13':
        case 'Abm13':
            return '4X447X';
        case 'G#sus2':
        case 'Absus2':
            return 'X11144';
        case 'G#sus4':
        case 'Absus4':
        case 'G#sus':
        case 'Absus':
            return 'XX1124';


        default:
            return '------';
    }
  
}

function getFingers(chord) {

    switch (chord) {
        //A
        case 'A':
        case 'Amaj':
            return '--123-';           
        case 'A7':
            return '--1-2-';
        case 'Am':
            return '--231-';
        case 'Am7':
            return '--2-1-';
        case 'Amaj7':
            return '--213-';
        case 'A5':
            return '--23--';
        case 'A6':
            return '--1111';  
        case 'A9':
            return '--1312';         
        case 'Amaj9':
            return '--1314';
        case 'Amaj13':
            return '--2134';
        case 'A11':
            return '----1-';
        case 'A13':
            return '--2-34';   
        case 'Am6':
            return '--2314';      
        case 'Am9':
            return '421---';
        case 'Am11':
            return '----1-';
        case 'Am13':
            return '--2-13';
        case 'Asus2':
            return '--12--';
        case 'Asus4':
        case 'Asus':
            return '--123-';

            //A# & Bb
        case 'A#':
        case 'A#maj':
        case 'Bbmaj':
        case 'Bb':
            return '-12341';
        case 'A#5':
        case 'Bb5':
            return '-134--';
        case 'A#6':
        case 'Bb6':
            return '-13333';
        case 'A#7':
        case 'Bb7':
            return '-13131';
        case 'A#maj7':
        case 'Bbmaj7':
            return '-12341';
        case 'A#9':
        case 'Bb9':
            return '-2-333';
        case 'A#maj9':
        case 'Bbmaj9':
            return '-1-423';
        case 'A#11':
        case 'Bb11':
            return '-11131';
        case 'A#13':
        case 'Bb13':
            return '-1-244';
        case 'A#maj13':
        case 'Bbmaj13':
            return '-1-234';
        case 'A#m':
        case 'Bbm':
            return '-14321';
        case 'A#m6':
        case 'Bbm6':
            return '-13-2-';
        case 'A#m7':
        case 'Bbm7':
            return '-13121';
        case 'A#m9':
        case 'Bbm9':
            return '2-3334';
        case 'A#m11':
        case 'Bbm11':
            return '-11121';
        case 'A#m13':
        case 'Bbm13':
            return '-1-234';
        case 'A#sus2':
        case 'Bbsus2':
            return '-13411';
        case 'A#sus4':
        case 'Bbsus4':
        case 'A#sus':
        case 'Bbsus':
            return '-11341';

            //B
        case 'B':
        case 'Bmaj':
            return '-12341';
        case 'B5':
            return '-134--';
        case 'B6':
            return '3412--';
        case 'B7':
            return '-21304';
        case 'Bmaj7':
            return '2314--';       
        case 'B9':
            return '-21333';
        case 'Bmaj9':
            return '-21433';
        case 'B11':
            return '-2134-';
        case 'B13':
            return '-21334';
        case 'Bmaj13':
            return '-1-234';
        case 'Bm':
            return '-14321';
        case 'Bm6':
            return '-2-143';
        case 'Bm7':
            return '-2-3-4';        
        case 'Bm9':
            return '-2-333';
        case 'Bm11':
            return '-11121';
        case 'Bm13':
            return '-1-234';
        case 'Bsus2':
            return '-13411';
        case 'Bsus4':
        case 'Bsus':
            return '-12341';

            //C
        case 'C':
        case 'Cmaj':
            return '-32-1-';
        case 'C5':
            return '-123--';
        case 'C6':
            return '4-231-';
        case 'C7':
            return '-3241-';
        case 'Cmaj7':
            return '-32---';
        case 'C9':
            return '-21333';
        case 'Cmaj9':
            return '-1432-';
        case 'C11':
            return '-32411';
        case 'C13':
            return '-1342-';
        case 'Cmaj13':
            return '-1-234';
        case 'Cm':
            return '-42-1-';
        case 'Cm6':
            return '--1-24';
        case 'Cm7':
            return '--1314';
        case 'Cm9':
            return '-2134-';
        case 'Cm11':
            return '-11121';
        case 'Cm13':
            return '-1-234';
        case 'Csus2':
            return '-3--14';
        case 'Csus4':
        case 'Csus':
            return '-34-1-';

            //C# & Db
        case 'C#':
        case 'C#maj':
        case 'Dbmaj':
        case 'Db':
            return '-43121';
        case 'C#5':
        case 'Db5':
            return '---124';
        case 'C#6':
        case 'Db6':
            return '--2314';
        case 'C#7':
        case 'Db7':
            return '-3241-';
        case 'C#maj7':
        case 'Dbmaj7':
            return '-43111';
        case 'C#9':
        case 'Db9':
            return '-21333';
        case 'C#maj9':
        case 'Dbmaj9':
            return '-41111';
        case 'C#11':
        case 'Db11':
            return '-32411';
        case 'C#13':
        case 'Db13':
            return '-21334';
        case 'C#maj13':
        case 'Dbmaj13':
            return '-1-234';
        case 'C#m':
        case 'Dbm':
            return '-13421';
        case 'C#m6':
        case 'Dbm6':
            return '-2-143';
        case 'C#m7':
        case 'Dbm7':
            return '-421--';
        case 'C#m9':
        case 'Dbm9':
            return '-2134-';
        case 'C#m11':
        case 'Dbm11':
            return '-21341';
        case 'C#m13':
        case 'Dbm13':
            return '-1-234';
        case 'C#sus2':
        case 'Dbsus2':
            return '--113-';
        case 'C#sus4':
        case 'Dbsus4':
        case 'C#sus':
        case 'Dbsus':
            return '-12341';

            //D
        case 'D':
        case 'Dmaj':
            return '---132';
        case 'D5':
            return '---12-';
        case 'D6':
            return '---2-3';
        case 'D7':
            return '---213';
        case 'Dmaj7':
            return '-43111';
        case 'D9':
            return '-4321-';
        case 'Dmaj9':
            return '-41111';
        case 'D11':
            return '----12';
        case 'D13':
            return '-1342-';
        case 'Dmaj13':
            return '-1-234';
        case 'Dm':
            return '---231';
        case 'Dm6':
            return '---2-1';
        case 'Dm7':
            return '---211';
        case 'Dm9':
            return '-2134-';
        case 'Dm11':
            return '----11';
        case 'Dm13':
            return '---411';
        case 'Dsus2':
            return '---13-';
        case 'Dsus4':
        case 'Dsus':
            return '---134';

            //D# & Eb
        case 'D#':
        case 'D#maj':
        case 'Ebmaj':
        case 'Eb':
            return '--1243';
        case 'D#5':
        case 'Eb5':
            return '--134-';
        case 'D#6':
        case 'Eb6':
            return '--1314';
        case 'D#7':
        case 'Eb7':
            return '--1324';
        case 'D#maj7':
        case 'Ebmaj7':
            return '--1333';
        case 'D#9':
        case 'Eb9':
            return '--1-32';
        case 'D#maj9':
        case 'Ebmaj9':
            return '--1-42';
        case 'D#11':
        case 'Eb11':
            return '--1123';
        case 'D#13':
        case 'Eb13':
            return '-1342-';
        case 'D#maj13':
        case 'Ebmaj13':
            return '-21344';
        case 'D#m':
        case 'Ebm':
            return '2-134-';
        case 'D#m6':
        case 'Ebm6':
            return '--1312';
        case 'D#m7':
        case 'Ebm7':
            return '--1423';
        case 'D#m9':
        case 'Ebm9':
            return '2-1431';
        case 'D#m11':
        case 'Ebm11':
            return '-11133';
        case 'D#m13':
        case 'Ebm13':
            return '-1-234';
        case 'D#sus2':
        case 'Ebsus2':
            return '--1341';
        case 'D#sus4':
        case 'Ebsus4':
        case 'D#sus':
        case 'Ebsus':
            return '--1344';

            //E
        case 'E':
        case 'Emaj':
            return '-231--';
        case 'E5':
            return '--23--';
        case 'E6':
            return '-2314-';
        case 'E7':
            return '-2-1--';
        case 'Emaj7':
            return '-312--';
        case 'E9':
            return '-2-1-3';
        case 'Emaj9':
            return '-13333';
        case 'E11':
            return '--2143';
        case 'E13':
            return '-2-134';
        case 'Emaj13':
            return '-21133';
        case 'Em':
            return '-23---';
        case 'Em6':
            return '-23-4-';
        case 'Em7':
            return '-23-4-';
        case 'Em9':
            return '-2---3';
        case 'Em11':
            return '------';
        case 'Em13':
            return '-2--34';
        case 'Esus2':
            return '--1341';
        case 'Esus4':
        case 'Esus':
            return '-234--';

            //F
        case 'F':
        case 'Fmaj':
            return '134211';
        case 'F5':
            return '134---';
        case 'F6':
            return '13-24-';
        case 'F7':
            return '131211';
        case 'Fmaj7':
            return '1-342-';
        case 'F9':
            return '131214';
        case 'Fmaj9':
            return '1-3-2-';
        case 'F11':
            return '111213';
        case 'F13':
            return '131241';
        case 'Fmaj13':
            return '1-234-';
        case 'Fm':
            return '134111';
        case 'Fm6':
            return '---111';
        case 'Fm7':
            return '123141';
        case 'Fm9':
            return '2-3334';
        case 'Fm11':
            return '111111';
        case 'Fm13':
            return '131141';
        case 'Fsus2':
            return '--3-11';
        case 'Fsus4':
        case 'Fsus':
            return '123411';

            //F# & Gb
        case 'F#':
        case 'F#maj':
        case 'Gbmaj':
        case 'Gb':
            return '134211';
        case 'F#5':
        case 'Gb5':
            return '134---';
        case 'F#6':
        case 'Gb6':
            return '2-143-';
        case 'F#7':
        case 'Gb7':
            return '--321-';
        case 'F#maj7':
        case 'Gbmaj7':
            return '--4321';
        case 'F#9':
        case 'Gb9':
            return '-13244';
        case 'F#maj9':
        case 'Gbmaj9':
            return '1-23-4';
        case 'F#11':
        case 'Gb11':
            return '111213';
        case 'F#13':
        case 'Gb13':
            return '--1231';
        case 'F#maj13':
        case 'Gbmaj13':
            return '211131';
        case 'F#m':
        case 'Gbm':
            return '134111';
        case 'F#m6':
        case 'Gbm6':
            return '2-1333';
        case 'F#m7':
        case 'Gbm7':
            return '2-333-';
        case 'F#m9':
        case 'Gbm9':
            return '2-314-';
        case 'F#m11':
        case 'Gbm11':
            return '111111';
        case 'F#m13':
        case 'Gbm13':
            return '131141';
        case 'F#sus2':
        case 'Gbsus2':
            return '2--134';
        case 'F#sus4':
        case 'Gbsus4':
        case 'F#sus':
        case 'Gbsus':
            return '133311';

            //G
        case 'G':
        case 'Gmaj':
            return '32---4';
        case 'G5':
            return '----33';
        case 'G6':
            return '32----';
        case 'G7':
            return '32---1';
        case 'Gmaj7':
            return '32---1';
        case 'G9':
            return '3--2-1';
        case 'Gmaj9':
            return '3--2-1';
        case 'G11':
            return '42-311';
        case 'G13':
            return '--3---';
        case 'Gmaj13':
            return '211131';
        case 'Gm':
            return '21--34';
        case 'Gm6':
            return '--1333';
        case 'Gm7':
            return '-13-4-';
        case 'Gm9':
            return '2-3334';
        case 'Gm11':
            return '111111';
        case 'Gm13':
            return '131141';
        case 'Gsus2':
            return '2--134';
        case 'Gsus4':
        case 'Gsus':
            return '133311';

            //G# & Ab
        case 'G#':
        case 'G#maj':
        case 'Abmaj':
        case 'Ab':
            return '43111-';
        case 'G#5':
        case 'Ab5':
            return '--1144';
        case 'G#6':
        case 'Ab6':
            return '--1111';
        case 'G#7':
        case 'Ab7':
            return '--1112';
        case 'G#maj7':
        case 'Abmaj7':
            return '--1113';
        case 'G#9':
        case 'Ab9':
            return '3-421-';
        case 'G#maj9':
        case 'Abmaj9':
            return '21413-';
        case 'G#11':
        case 'Ab11':
            return '-41123';
        case 'G#13':
        case 'Ab13':
            return '3-4211';
        case 'G#maj13':
        case 'Abmaj13':
            return '211131';
        case 'G#m':
        case 'Abm':
            return '-21144';
        case 'G#m6':
        case 'Abm6':
            return '2-133-';
        case 'G#m7':
        case 'Abm7':
            return '131141';
        case 'G#m9':
        case 'Abm9':
            return '-13244';
        case 'G#m11':
        case 'Abm11':
            return '111111';
        case 'G#m13':
        case 'Abm13':
            return '2-334-';
        case 'G#sus2':
        case 'Absus2':
            return '-11144';
        case 'G#sus4':
        case 'Absus4':
        case 'G#sus':
        case 'Absus':
            return '--1124';
        default:
            return '------';
    }
   
}