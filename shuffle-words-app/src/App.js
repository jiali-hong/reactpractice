import React from 'react';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import useAppStates from './components/useAppStates'
import restfulMethods from './components/restfulMethods'

/*
let testObj = {
  Commonly_Misspelled_Words: 'absence, accept, acceptable, accessible, accidentally, accommodate, achieved, acquainted, acquiescence, acquire, acquit, acknowledge, aerial, aggravate, agreeable, all right, alright, a lot, amateur, ambiguous, amendment, analysis, ancillary, apparent, appearance, approximate, argument, arrangement, ascend, atheist, baffled, beginning, benefited, believe, briefly, business, calculator, calendar, category, ceiling, cecemetery, changeable, chaotic, choice, colleagues, collectible, college, commission, commitment, committed, committee, companion, compensate, competitively, completely, concede, conceding, connoisseur, conscience, conscientious, conscious, consistent, convenient, correspondents, counterfeit, courteous, courtesy, criticism, crucial, dabble, debriefing, deceive, decipher, deficient, definite, definitely, description, desirable, deterrent, develop, disappear, disappointed, discipline, discrepancy, dissatisfied, dissertation, drunkenness, eccentric, econoomic, embarrass, embarrassment, emphasise, equipped, equipment, especially, essential, exaggerate, excellent, except, exercise, existence, expenses, extremely, exhilarate, exceed, existence, experience, faithfully, feasible, fiery, foreign, fordfeit, forty, fourth, fulfilled, fulfilment, frivolous, gauge, generally, generalisation, government, grammar, grievance, grateful, guarantee, guardian harrass, height, hierarchy ignorance, immediate, immediate.y immensity, independent, indispensable, inoculate, intelligence, irrational, irrelevant, irreparable, judgement, kindly, knowledge, knowledgeable, leisure, liaise, library, lightning, maitenance, manoeuvre, mathematics, memento, millenium, miniature, minuscule, mischievous, miscellaneous, misspell, mationally, necessary, negotiate, niece, noticeable, occasion, occasionally, occupant, occur, occurred, occurrence, official, omission, omitted, parallel, particularly, parliament, pastime, permanenet, permutation, perserverance, pigeon, possession, precede proferable, preference, preliminary, principal, principle, privilege, procedure, proceed, professor, proprietary, psychology, questionnaire, reasonable, receive, recommend, referred, reference, regrettable, relevant, relief, relieve, religious, repetition, restaurant, ridiculous, rhythm, sacrilegious, sandal schedule, science, scissorrs, secretaries, sensible, separate, separately, seize, similar, sincerely, sovereign, special, stationary, stationery, success, supersede, surprising, tomorrow, transferred, twelfth, twentieth, tyranny, undoubtedly, unnecessary, until, unwritten, vacuum, vicious, visible, weather, weird, withdrawn, withhold',
  Common_Names: 'Alice, Henry, Helen, James, John, Peter, Anna, Robert, Jennifer, Michael, Linda, William, Elizabeth, David,	Barbara, Richard, Susan, Joseph, Jessica',
  English_Alphabet: 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z',
  English_Capital_Letters: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z',
  Greek_Alphabet: 'Α α, Β β, Γ γ, Δ δ, Ε ε, Ζ ζ, Η η, Θ θ, Ι ι, Κ κ, Λ λ, Μ μ, Ν ν, Ξ ξ, Ο ο, Π π, Ρ ρ, Σ σ/ς, Τ τ, Υ υ, Φ φ, Χ χ, Ψ ψ, Ω ω',
  German_Alphabet: 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, ß, ä, ö, ü',
};
*/

function App(props) {
  const {
    title,
    setTitle,
    words,
    setWords,
    key,
    setKey,
    wordStatus,
    setWordStatus,
  } = useAppStates();

  let {
    postWords,
    deleteWords
  } = restfulMethods;

  const obj = {
    setWords,
    words,
    setTitle,
    title,
    setKey,
    key,
    setWordStatus,
    wordStatus,
    postWords,
    deleteWords,
  };

  const changeTitle = (newTitle) => {
      setTitle(newTitle);
      setWordStatus("Original");
      setKey(key + 1);
  }

  const editIt = (newTitle) => {
      setTitle(newTitle);
      setWordStatus("Entering");
      setKey(key + 1);
  }

  const deleteIt = (oldTitle) => {
    restfulMethods.deleteWords(oldTitle);
    let dict = Object.assign({}, words);
    delete dict[oldTitle]
    setWords(dict)
    setTitle('');
    setWordStatus("Entering");
    setKey(key + 1);
}

  return(
      <div className="container" >
        <Header title={title} editIt={editIt} deleteIt={deleteIt} wordStatus={wordStatus}/>
        <Body obj={obj} key={key}/>
        <Footer words={words} changeTitle={changeTitle}/>
      </div>
  );
}

export default App;
