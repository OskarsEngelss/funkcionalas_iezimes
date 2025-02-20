import React from 'react';

function Questions_answers() {
    return [
        {
          question: "Kas un kāpēc ir funkcionālā iezīme",
          answer: "Funkcionālā iezīme ir funkcionālās iezīmes virsraksts un vismaz viens scenārijs. Tā pastāv, lai varētu skaidri izskaidrot to, ko dara sistēma. Dod iespēju izmantot automātiskos koda verifikācijas rīkus.",
          type: "longAnswer"
        },
        {
            question: "Lietotājstāstu formāts",
            answer: [
                "Es kā [lietotājs/admins]",
                "Vēlos [specifiskas sistēmas darbības]",
                "Lai panāktu [kādu mērķi]"
            ],
            type: "formatExample"
        },
        {
            question: "Scenāriju formāts",
            answer: [
                "Kad [stāvoklis]",
                "Ja [tiek izsaukta darbība]",
                "Tad [gaidāmais rezultāts]"
            ],
            type: "formatExample"
        },
        {
          question: "Rubika kuba vizualizācija",
          answer: "Funkcionālās iezīmes var vizualizēt tāpat, kā rubika kubu. Uz to (funk. iezīmi) skatoties no vairākiem skatu punktiem, mainās mūsu uzskats un izpratne, bet pati funkcionālā iezīme nemainās. Mainās tikai tas, kā tā adaptējas.",
          type: "longAnswer"
        },
        {
          question: "Kas ir veiksmīgā iznākuma scenārijs",
          answer: "Tas ir scenārijs, kad tiek panākts mērķis, bez jebkādām problēmām.",
          type: "longAnswer"
        },
    ];
}

export default Questions_answers;