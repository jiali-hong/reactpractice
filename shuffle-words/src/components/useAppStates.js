import {useState} from 'react';
// import restfulMethods from './restfulMethods'

const useAppStates = () => {
    let WORDS = JSON.parse(localStorage.getItem('WORDS'));
    if (WORDS===null||undefined){
      localStorage.setItem('WORDS', JSON.stringify({Common_Names: "Alice, Henry, Helen, James, John, Peter, Anna, Robert, Jennifer, Michael, Linda, William, Elizabeth, David, Barbara, Richard, Susan, Joseph, Jessica",German_Alphabet: "a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, \u00df, \u00e4, \u00f6, \u00fc",Commonly_Misspelled_Words: "absence, accept, acceptable, accessible, accidentally, accommodate, achieved, acquainted, acquiescence, acquire, acquit, acknowledge, aerial, aggravate, agreeable, all right, alright, a lot, amateur, ambiguous, amendment, analysis, ancillary, apparent, appearance, approximate, argument, arrangement, ascend, atheist, baffled, beginning, benefited, believe, briefly, business, calculator, calendar, category, ceiling, cecemetery, changeable, chaotic, choice, colleagues, collectible, college, commission, commitment, committed, committee, companion, compensate, competitively, completely, concede, conceding, connoisseur, conscience, conscientious, conscious, consistent, convenient, correspondents, counterfeit, courteous, courtesy, criticism, crucial, dabble, debriefing, deceive, decipher, deficient, definite, definitely, description, desirable, deterrent, develop, disappear, disappointed, discipline, discrepancy, dissatisfied, dissertation, drunkenness, eccentric, econoomic, embarrass, embarrassment, emphasise, equipped, equipment, especially, essential, exaggerate, excellent, except, exercise, existence, expenses, extremely, exhilarate, exceed, existence, experience, faithfully, feasible, fiery, foreign, forfeit, forty, fourth, fulfilled, fulfilment, frivolous, gauge, generally, generalisation, government, grammar, grievance, grateful, guarantee, guardian, harass, height, hierarchy, ignorance, immediate, immediately, immensity, independent, indispensable, inoculate, intelligence, irrational, irrelevant, irreparable, judgement, kindly, knowledge, knowledgeable, leisure, liaise, library, lightning, maintenance, manoeuvre, mathematics, memento, millenium, miniature, minuscule, mischievous, miscellaneous, misspell, mationally, necessary, negotiate, niece, noticeable, occasion, occasionally, occupant, occur, occurred, occurrence, official, omission, omitted, parallel, particularly, parliament, pastime, permanenet, permutation, perserverance, pigeon, possession, precede, proferable, preference, preliminary, principal, principle, privilege, procedure, proceed, professor, proprietary, psychology, questionnaire, reasonable, receive, recommend, referred, reference, regrettable, relevant, relief, relieve, religious, repetition, restaurant, ridiculous, rhythm, sacrilegious, scandal, schedule, science, scissorrs, secretaries, sensible, separate, separately, seize, similar, sincerely, sovereign, special, stationary, stationery, success, supersede, surprising, tomorrow, transferred, twelfth, twentieth, tyranny, undoubtedly, unnecessary, until, unwritten, vacuum, vicious, visible, weather, weird, withdrawn, withhold",Greek_Alphabet: "\u0391 \u03b1, \u0392 \u03b2, \u0393 \u03b3, \u0394 \u03b4, \u0395 \u03b5, \u0396 \u03b6, \u0397 \u03b7, \u0398 \u03b8, \u0399 \u03b9, \u039a \u03ba, \u039b \u03bb, \u039c \u03bc, \u039d \u03bd, \u039e \u03be, \u039f \u03bf, \u03a0 \u03c0, \u03a1 \u03c1, \u03a3 \u03c3/\u03c2, \u03a4 \u03c4, \u03a5 \u03c5, \u03a6 \u03c6, \u03a7 \u03c7, \u03a8 \u03c8, \u03a9 \u03c9"}));
      WORDS = JSON.parse(localStorage.getItem('WORDS'));
    }
    const [title, setTitle] = useState('');
    const [words, setWords] = useState(WORDS);
    const [key, setKey] = useState(1);
    const [wordStatus, setWordStatus] = useState('Entering');

    // localStorage.setItem('WORDS',JSON.stringify(words))
    
    // const setWordsfunc = async() => {
    //   let ret = await restfulMethods.getWords();
    //   if (Object.keys(words).length === 0){
    //     setWords(ret);
    //   }
    // }
    // setWordsfunc();

    return {
      title,
      setTitle,
      words,
      setWords,
      key,
      setKey,
      wordStatus,
      setWordStatus,
    };
  }

export default useAppStates;