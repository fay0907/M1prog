let rls = require('readline-sync');

begin();

function begin() {
    let Beginquestion = ['Yes', 'No'];
    console.log('Do you want to play a game?');
    let beginchoice = rls.keyInSelect(Beginquestion, '', { cancel: false });

    switch (beginchoice) {
        case 0:
            optie1();
            break;
        case 1:
            console.log('Maybe next time. Goodbye!');
            break;
    }
}
//Optie 1 A
function optie1() {
    console.log('1');
    console.log('In the dimly ligt, enigmatic basement');
    console.log('you find yourself confronted by a weakened yet menacing dragon.');
    console.log('Its enormous form looms ominously in the shadows,');
    console.log('and a heavy silence fills the air.');
    console.log('Uncertainty gnaws at you, and your heart races as you ponder your next move.');

    let choices = ['A. Accuse the dragon of being the monster'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B stay still' });
2

    if (choiceIndex === -1) {
        console.log('Choosing to stay sill,');
        console.log('the dragon attacks with fiery breath,');
        console.log('engulfing the basement in flames.');
        console.log('You struggle to escape in the intense heat,');
        console.log('facing dire consequences due to your hesitation.');
        console.log('The dragon remains a deadly threat.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('');
            optie2();
            break;
    } 
}
//Optie 2 A
function optie2() {
    console.log('2');
    console.log('"YOU," you point at Mister Dragon, "Mister Dragon,YOU ARE THE MONSTER!!" I add.');
    

    let choices = ['A. Confront the dragon further.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B. Retreat and reconsider your options.'});

    if (choiceIndex === -1) {
        console.log('The dragon continues to menace the camp,');
        console.log('and your delay allows it to cause more chaos.');
        console.log('The situation worsens, and the dragons grip on the camp tightens as you hesitate.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('summoning your courage to confront the dragon.');
            console.log('The dragon acknowledges your accusation with a maniacal laugh,');
            console.log('revealing its long, sharp, ugly teeth.');
            console.log('Tension fills the room, setting the stage for a face-off with the formidable beast.');
            optie3();
            break;
    } 
}
//Optie 3 B
function optie3() {
    console.log('3');
    console.log('"I see you have finally figured it out," he answers with a maniacal laugh,');
    console.log('revealing his long, sharp, ugly teeth.');
    
    let choices = ['A.Stay quiet'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B. Respond defiantly'});

    if (choiceIndex === -1) {
        console.log('you choose to stay quiet after the dragons sinister revelation. ');
        console.log('The atmosphere becomes tense as you withhold your response.');
        console.log('The dragons maniacal laughter lingers, leaving the situation unresolved as you remain silent.');
        return;
    }


    switch (choiceIndex) {
        case 0:
            console.log('');
            optie4();
            break;
    } 
}
//Optie 4 B
function optie4() {
    console.log('4');
    console.log('"I am só done with your crap!!!" I scream at him.');

    let choices = ['A. Continue to express your anger.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B Think about your next move.' });

    if (choiceIndex === -1) {
        console.log('Your confrontation with the dragon takes a deadly turn.');
        console.log('Enraged by your accusations, the dragon breathes a torrent of fire, and you meet a fiery demise.');
        console.log(' In this tragic ending, your boldness leads to a fatal confrontation with the formidable dragon.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('you take a deep breath and consider your next move, momentarily setting aside your anger.');
            console.log('The dragon watches your hesitation, its eyes locked onto you, waiting for your decision.');
            console.log('Your pause creates an uncertain moment in the confrontation.');
            optie5();
            break;
    } 
}
//Optie 5 
function optie5() {
    console.log('5');
    console.log('You walk over to where Murphy is standing.');

    let choices = ['A. Ask Murphy for advice.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B ' });
 
    if (choiceIndex === -1) {
        console.log('you walk over to Murphy and ask for advice.');
        console.log('He quickly advises you to find a glove before touching the electric shock device.');
        console.log('Triumphantly, I turn the knob to the highest setting of 300 volts with the protection of the glove.');
        console.log('The dragon begins to scream as electricity courses through its body.');
        console.log('Eventually, the dragon is overwhelmed and crumbles into a pile of dust.');
        console.log('We have defeated the dragon and freed the summer campers.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('');
            optie6();
            break;
    } 
}
//Optie 6
function optie6() {
    console.log('6');
    console.log('You reach out to the knob on the electric shock device. ');
    
    let choices = ['A. Proceed to turn the knob without hesitation.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B Pause and consider the consequences.' });

    if (choiceIndex === -1) {
        console.log('As I reach for the knob, doubts creep in.');
        console.log('I pause, considering the consequences of my actions.');
        console.log('The dragon watches, a sinister grin on its face.');
        console.log('Seconds turn into an eternity.');
        console.log('Before I can act, the dragon breathes fire, engulfing me in flames.');
        console.log('In the end, my hesitation proves fatal, a poignant reminder of the cost of indecision.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('');
            optie7();
            break;
    } 
}
//Optie 7
function optie7() {
    console.log('7');
    console.log('Before you can turn the knob, Murphy says with a panicked voice: "What are you doing!? You need a glove-"');
    
    

    let choices = ['A. Disregard Murphys advice and continue without a glove.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B Listen to Murphys warning and find a glove.' });

    if (choiceIndex === -1) {
        console.log('You find a glove and put it one.')
        console.log('Triumphantly, You turn the knob to the highest setting of 300 volts.');
        console.log('The dragon begins to scream as electricity courses through its body.');
        console.log('Eventually, the dragon is overwhelmed and crumbles into a pile of dust.');
        console.log('We have defeated the dragon and freed the summer campers.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('');
            optie8();
            break;
    } 
}
//Optie 8
function optie8() {
    console.log('8');
    console.log('Without listening to him, you turn the knob to 300 volts.');
   
    let choices = ['A. Stand your ground and brace for the consequences.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B Panic and try to undo your action.' });

    if (choiceIndex === -1) {
        console.log('Ignoring Murphys warning, you twist the knob to 300 volts.');
        console.log('Panic grips me as sparks fly, and excruciating electricity courses through your body.');
        console.log('Desperate to undo your rash action, your vision fades, and the world goes dark.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('');
            optie9();
            break;
    } 
}
//Optie 9
function optie9() {
    console.log('9');
    console.log('Without heeding Murphys warning, I turn the knob to 300 volts.');
    console.log('As sparks fly everywhere and electricity courses through my body, I grit my teeth and try to endure the pain.');
    console.log('The dragon screams, but I stand my ground and turn the knob even higher.');
    console.log('Time feels like it slows down.');

    let choices = ['A. Try to maintain your composure.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B  Succumb to fear and panic.' });

    if (choiceIndex === -1) {
        console.log('Panic grips me as sparks fly, and excruciating electricity courses through your body.');
        console.log('Desperate to undo your rash action, your vision fades, and the world goes dark.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('');
            optie10();
            break;
    } 
}
//Optie 10
function optie10() {
    console.log('10');
    console.log(' Sparks fly off the knob, and electricity shocks through the veins of your left hand.');

    let choices = ['A. Power through the pain. '];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B Recoil in agony.' });

    if (choiceIndex === -1) {
        console.log('Panic grips me as sparks fly, and excruciating electricity courses through your body.');
        console.log('Desperate to undo your rash action, your vision fades, and the world goes dark.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('');
            optie11();
            break;
    } 
}
//Optie 11
function optie11() {
    console.log('11');
    console.log('The dragon begins to screech as if its a Pterosaur.');

    let choices = ['A. Continue your course of action.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B Hesitate and reconsider.' });

    if (choiceIndex === -1) {
        console.log('Panic grips me as sparks fly, and excruciating electricity courses through your body.');
        console.log('Desperate to undo your rash action, your vision fades, and the world goes dark.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('');
            optie12();
            break;
    } 
}
//Optie 12
function optie12() {
    console.log('12');
    console.log('Between all of this, you hear the dragon scream.');
   
    let choices = ['A. Stay focused on your task.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B Get overwhelmed by the situation.' });

    if (choiceIndex === -1) {
        console.log('Panic grips me as sparks fly, and excruciating electricity courses through your body.');
        console.log('Desperate to undo your rash action, your vision fades, and the world goes dark.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('');
            optie13();
            break;
    } 
}
//Optie 13
function optie13() {
    console.log('13');
    console.log('"This is.. what you.. get.. for hurting the people I care about!!!!"');
    console.log('She says this while turning the knob, which is filled with electricity.');
   
    let choices = ['A. Embrace the moment and show no mercy.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B Second-guess your actions.' });

    if (choiceIndex === -1) {
        console.log('');
        console.log('Panic grips me as sparks fly, and excruciating electricity courses through your body.');
        console.log('Desperate to undo your rash action, your vision fades, and the world goes dark.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('');
            optie14();
            break;
    } 
}
//Optie 14
function optie14() {
    console.log('14');
    console.log('I grit my teeth, and turn the knob to 400 volts.');
 
    let choices = ['A. Show determination and keep going.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B Regret your decision.' });

    if (choiceIndex === -1) {
        console.log('Panic grips me as sparks fly, and excruciating electricity courses through your body.');
        console.log('Desperate to undo your rash action, your vision fades, and the world goes dark.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('');
            optie15();
            break;
    } 
}
//Optie 15
function optie15() {
    console.log('15');
    console.log('More sparks fly off the knob, and I can feel the electricity now going through both of my arms.');

    let choices = ['A. Push through the pain.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B Consider stopping.' });

    if (choiceIndex === -1) {
        console.log('Panic grips me as sparks fly, and excruciating electricity courses through your body.');
        console.log('Desperate to undo your rash action, your vision fades, and the world goes dark.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('');
            optie16();
            break;
    } 
}
//Optie 16
function optie16() {
    console.log('16');
    console.log('The dragon growls so hard that the basement shakes like theres an earthquake.');
    
    let choices = ['A. Stand your ground.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B Feel overwhelmed.' });

    if (choiceIndex === -1) {
        console.log('You feel overwhelmed, the situation escalates.');
        console.log('In a final, desperate attempt,');
        console.log(' you try to stand your ground but are ultimately overpowered by the unstoppable force of the dragon.');
        console.log('Your journey ends in a tragic demise.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('');
            optie17();
            break;
    } 
}
//Optie 17
function optie17() {
    console.log('17');
    console.log('One last time, I turn the knob to 500 volts.');

    let choices = ['A. Deliver the final blow.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B Doubt your choice.' });

    if (choiceIndex === -1) {
        
        console.log('You feel overwhelmed, the situation escalates.');
        console.log('In a final, desperate attempt,');
        console.log(' you try to stand your ground but are ultimately overpowered by the unstoppable force of the dragon.');
        console.log('Your journey ends in a tragic demise.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('');
            optie18();
            break;
    } 
}
//Optie 18
function optie18() {
    console.log('18');
    console.log('My vision flickers like a light switch that gets turned on and off.');

    let choices = ['A. Continue your mission.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B Begin to lose consciousness.' });

    if (choiceIndex === -1) {
        console.log('You feel overwhelmed, the situation escalates.');
        console.log('In a final, desperate attempt,');
        console.log('you try to stand your ground but are ultimately overpowered by the unstoppable force of the dragon.');
        console.log('Your journey ends in a tragic demise.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('');
            optie19();
            break;
    } 
}
//Optie 19
function optie19() {
    console.log('19');
    console.log('My body begins to shock like I have a seizure.');

    let choices = ['A. Fight through the pain.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B Surrender to the agony.' });

    if (choiceIndex === -1) {
        console.log('The pain intensifies, and your body convulses uncontrollably.');
        console.log('Overwhelmed, you lose consciousness, and your adventure concludes in darkness and suffering.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('');
            optie20();
            break;
    } 
}
//Optie 20
function optie20() {
    console.log('20');
    console.log('Panic creeps into my body, and I let go of the knob.');

    let choices = ['A. Try to regain control.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B Collapse from exhaustion.' });

    if (choiceIndex === -1) {
        console.log('The pain intensifies, and your body convulses uncontrollably.');
        console.log('Overwhelmed, you lose consciousness, and your adventure concludes in darkness and suffering.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('');
            optie21();
            break;
    } 
}
//Optie 21
function optie21() {
    console.log('21');
    console.log('Before I fall, Murphy catches me in his arms.');

    let choices = ['A. Thank Murphy for his support.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B Ignore Murphys presence.' });

    if (choiceIndex === -1) {
        console.log('As you turn the knob to 500 volts and the dragon continues to suffer, you start to doubt your decision.');
        console.log('The dragons growls become deafening, and you eventually let go of the knob in panic.');
        console.log('While youre saved by Murphy, the dragon remains a threat, and the outcome remains uncertain.');
        return;
    }

    switch (choiceIndex) {
        case 0:
            console.log('');
            optie22();
            break;
    } 
}
//Optie 22
function optie22() {
    console.log('22');
    console.log('"Thank you," you say, looking into his eyes, exhausted.');

    let choices = ['A. Einde'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B Einde' });

    if (choiceIndex === -1) {
        console.log('As you turn the knob to 500 volts and the dragon continues to suffer, you start to doubt your decision.');
        console.log('The dragons growls become deafening, and you eventually let go of the knob in panic.');
        console.log('While youre saved by Murphy, the dragon remains a threat, and the outcome remains uncertain.');
        return;
    }

   
}
//Einde

