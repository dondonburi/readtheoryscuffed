// ==UserScript==
// @name         readtheory answer bot
// @version      1.0
// @description  no need to read. only works fro gr 12 quizzes. 
// @author       Regreton
// @match        https://readtheory.org/app/student/quiz
// @grant        none
// @run-at       document-ready
// ==/UserScript==


(function() {
    'use strict';

        console.clear();

        // console.log("%cReadtheory Bot", "color: white; -webkit-text-stroke: .5px black; font-size:15px; font-weight:bold;");

    setTimeout(() => {
        //Grade 12 quizzes
        const Paints = {quiztitle: '"Paints"', quizanswers: ["E","B","C","A","E","C","A","C"]};
        const ABeetleBox = {quiztitle: "A Beetle in a Box", quizanswers: ["C","D","B","B"]};
        const AGoodDeath = {quiztitle: "A Good Death", quizanswers: ["C","D","B","C","B","E","C","E"]};
        const ALackBias = {quiztitle: "A Lack of Bias", quizanswers: ["E","D","A","B","C"]};
        const APresTrad = {quiztitle: "A Presidential Tradition: Reaching the People", quizanswers: ["C","A","E","B","D","C","C","A"]};
        const AStreetcarDesire = {quiztitle: "A Streetcar Named Desire: Two Viewpoints", quizanswers: ["D","C","A","E","C"]};
        const AmericanFamily = {quiztitle: "American Family", quizanswers: ["C","E","D","A","B","C"]};
        const Antibiotic = {quiztitle:"Antibiotic Resistance", quizanswers: ["C","B","A","E","C","A","C","E","C"]};
        const Antonio = {quiztitle:"Antonio's Revenge", quizanswers: ["C","B","E","C","A","B","D"]};
        const ArguePos = {quiztitle:"Arguing Their POsition", quizanswers: ["C","B","D","E","A"]};
        const Autism = {quiztitle:"Autism and Vaccines: No Link", quizanswers: ["C","E","E","D","A","D","C"]};
        const BioAdapt = {quiztitle:"Biological Adaptation", quizanswers: ["A","B","E","D","C"]};
        const BonCly = {quiztitle:"Bonnie and Clyde", quizanswers: ["E","D","B","C","D","E","C"]};
        const BookRec = {quiztitle:"Book of Records", quizanswers: ["A","D","C","E","B","E"]};
        const Bovine = {quiztitle:"Bocine Somatotropin", quizanswers: ["C","E","E","D","B","E","D","A"]};
        const Chronic = {quiztitle:"Chronic Traumatic Encephalopathy", quizanswers: ["D","C","E","A","D","E","B"]};
        const Concentrated = {quiztitle:"Concentrated Animal Feeding Operations", quizanswers: ["A","D","C","E","B","A","C","B"]};
        const Concepts = {quiztitle:"Concenpts of Country", quizanswers: ["E","B","A","E","C","B"]};
        const Dismissed = {quiztitle:"Dismissed", quizanswers: ["A","D","A","D"]};
        const Dracula = {quiztitle:"Deacula and the Question of Authorship", quizanswers: ["B","C","A"]};
        const Easter = {quiztitle:"Easter Island Moai", quizanswers: ["B","D","E","A","C"]};
        const EPCOT = {quiztitle:"EPCOT", quizanswers: ["B","C","D","D"]};
        const Eric = {quiztitle:"Eric Johnson's Dream: Postwar American Cinema", quizanswers: ["B","E","E","C","C","C"]};
        const Even = {quiztitle:"Even Oddities: The Mütter Museum", quizanswers: ["D","A","A","B","A","C","C"]};
        const Experiment = {quiztitle:"Experimenting with the Novel", quizanswers: ["A","C","D","A","B","A"]};
        const Food = {quiztitle:"Food Deserts", quizanswers: ["C","D","A","E","A","B"]};
        const Freedom = {quiztitle:"Freedom of the Press", quizanswers: ["C","C","E","B","E","A"]};
        const Friendly = {quiztitle:"Friendly Fire", quizanswers: ["A","C","D","B","E","C","E"]};
        const Frigg = {quiztitle:"Friggatriskaidekaphobia", quizanswers: ["E","D","C","A","C"]};
        const From = {quiztitle:"From Necessity to Pastime", quizanswers: ["C","B","E","E","C"]};
        const Ghost = {quiztitle:"Ghost Shows", quizanswers: ["D","B","E","D","A"]};
        const Giant = {quiztitle:"Giant Pandas: Endangered", quizanswers: ["E","D","C","D","A","B"]};
        const Grammar = {quiztitle:"Grammar in the Classroom", quizanswers: ["B","B","C","E","D"]};
        const Helmet = {quiztitle:"Helmet Law", quizanswers: ["D","B","A","D","E","B"]};
        const Hiroshima = {quiztitle:"Hiroshima and Nagasaki", quizanswers: ["E","C","D","A","E","E","D","C","D","A"]};
        const Home = {quiztitle:"Home Sales News", quizanswers: ["A","A","D"]};
        const InImagined = {quiztitle:"In an Imagined Past", quizanswers: ["B","E","C","D"]};
        const InJeopardy = {quiztitle:"In Jeopard: The Louisian Coast", quizanswers: ["D","B","E","C"]};
        const IntAug = {quiztitle:"Intelligence Augmentation", quizanswers: ["C","C","B","D","B","B"]};
        const ItsJeep = {quiztitle:"It's a Jeep", quizanswers: ["E","D","E","B","E","D","C"]};
        const Killer = {quiztitle:"Killer Bees", quizanswers: ["A","C","A","E","B","D","C","C"]};
        const LibArts = {quiztitle:"Liberal Arts: Breadth in Curriculum", quizanswers: ["E","D","B","D","D","B","D","B"]};
        const Maintain = {quiztitle:"Maintaining Our Parks", quizanswers: ["A","A","B","D","C","C"]};
        const Mary = {quiztitle:"Mary Celeste:Ghost Ship", quizanswers: ["C","E","D","A","E","A","A"]};
        const McCarthy = {quiztitle:"McCarthy at Wheeling", quizanswers: ["A","C","C","E","E","B","A","D"]};
        const Minimal = {quiztitle:"Minimal Footwear", quizanswers: ["E","E","B","E","C","C","D"]};
        const Modern = {quiztitle:"Modern Justice", quizanswers: ["E","B","A","D","B","C","E","D"]};
        const Moths = {quiztitle:"Moths: Early Adaptation", quizanswers: ["C","E","A","C","C","C"]};
        const MtnTop = {quiztitle:"Mountaintop Removal Mining", quizanswers: ["D","D","C","B","E","B","A"]};
        const New = {quiztitle:"New Hollywood", quizanswers: ["C","D","B","E","A","D"]};
        const Novel = {quiztitle:"Novels and Novelists", quizanswers: ["E","A","D","A","B","E"]};
        const Offspring = {quiztitle:"Offspring of a Legend", quizanswers: ["E","C","D","D","D","C","A","E"]};
        const OverAuth = {quiztitle: "Overstepping Authority", quizanswers: ["C","E","D","A","B"]};
        const Plague = {quiztitle:"Plague:Body and Mind", quizanswers: ["C","D","B","B","E","E","D","A"]};
        const PTSD = {quiztitle:"Post-Traumatic Stress Disorder", quizanswers: ["E","E","C","E","D","A","D"]};
        const Predicting = {quiztitle:"Predicting Disaster", quizanswers: ["E","A","E","D","B","C"]};
        const PresMuseum = {quiztitle:"Presidential Museums", quizanswers: ["E","B","E","A","A","D"]};
        const Retreads = {quiztitle:"Retreads", quizanswers: ["C","B","A","B","E"]};
        const Revenge = {quiztitle:"Revenge Tragedy", quizanswers: ["C","D","D","E","E","C","A"]};
        const Scrimshaw = {quiztitle:"Scrimshaw", quizanswers: ["B","B","D","E","A"]};
        const TheBard = {quiztitle:"The Bard of Avon?", quizanswers: ["A","D","C","B","E","D"]};
        const TheBends = {quiztitle:"The Bends", quizanswers: ["D","B","C","C","D","B","E","A"]};
        const TheBrave = {quiztitle:"The Bravery of Benjamin Lay", quizanswers: ["A","B","E","A","D"]};
        const TheElectoral = {quiztitle:"The Electoral College", quizanswers: ["D","E","B","A","E"]};
        const TheEnd = {quiztitle:"The End of the Space Shuttle Program", quizanswers: ["CDDEB"]};
        const TheGreat = {quiztitle:"The Great Debates", quizanswers: ["E","E","C","C","B"]};
        const TheIrish = {quiztitle:"The Irish Potato Famine: A Harsh Reality", quizanswers: ["B","E","C","A","B"]};
        const TheLegend = {quiztitle:"The Legend of Krampus", quizanswers: ["A","B","A","E","D"]};
        const ThePsalms = {quiztitle:"The Psalms: Popular and Troubling", quizanswers: ["D","E","A","C","A","B","D"]};
        const TheRoots = {quiztitle:"The Roots of Blues Music", quizanswers: ["E","A","B","C","B"]};
        const TheScyth = {quiztitle:"The Scythians", quizanswers: ["E","C","C","A","D","D","A"]};
        const Theater = {quiztitle:"Theater of the Absurd", quizanswers: ["A","D","C","D","B","E"]};
        const Tick = {quiztitle:"Tick Tock", quizanswers: ["C","D","A","E","B"]};
        const Timeless = {quiztitle:"Timelessness in Purple", quizanswers: ["E","D","A","B","C","C","D","E"]};
        const TransFats = {quiztitle:"Trans Fats", quizanswers: ["C","A","C","A","C","B","D"]};
        const Turbines = {quiztitle:"Turbines in the Backyard", quizanswers: ["B","A","E","C"]};
        const Unconscious = {quiztitle:"Unconsius Racial Bias", quizanswers: ["B","E","C","B","A","D","D"]};
        const Veisalgia = {quiztitle:"Veisalgia", quizanswers: ["B","A","D","A","E","C"]};
        const WDFard = {quiztitle:"W.D. Fard, the Prophet of the Nation of Islamd", quizanswers: ["E","B","C","A","E","D"]};
        const WhoWrote = {quiztitle:"Who Wrote Shakespeare?", quizanswers: ["D","C","A","A","E","C","D"]};
        const Wind = {quiztitle:"Wind Energy: Under Attack", quizanswers: ["D","B","E","A","E"]};
        const Wright = {quiztitle:"Wright and Nature", quizanswers: ["D","A","E","C","C"]};
        const a = {quiztitle:"", quizanswers: [""]};



        const testTitle = document.querySelector("h2.quiz-header-title").textContent;
        const alltests = [Paints, ABeetleBox, AGoodDeath,ALackBias,APresTrad,AStreetcarDesire,AmericanFamily,Antibiotic,Antonio,ArguePos,Autism,BioAdapt,BonCly,BookRec, Bovine, Chronic, Concentrated, Concepts,Dismissed,Dracula,
                          Easter, EPCOT, Eric,Even, Experiment, Food,Freedom,Friendly,Frigg,From,Ghost,Giant,Grammar,Helmet,Hiroshima,Home, InImagined, InJeopardy, IntAug, ItsJeep, Killer, LibArts, Maintain, Mary,McCarthy,Minimal, Modern, Moths, MtnTop,
                          New, Novel, Offspring,OverAuth,Plague,PTSD,Predicting,PresMuseum];

        for (let quiz of alltests) {
            let actualtitle = quiz;
            if (quiz.quiztitle == testTitle) {
                console.log(quiz.quiztitle);
                let num = 0
                for (let ans of quiz.quizanswers) {
                    num += 1
                    console.log(num,". ",ans);
                }
            }
        }

    }, 1000);
    // Your code here...
})();