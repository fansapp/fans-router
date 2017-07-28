import React from 'react';


const paragraphs = [
  'Welcome to the wonderful world of Lorem ipsum dolor sit amet! Consectetur adipiscing elit. Utrum igitur tibi litteram videor an totas paginas commovere? Quantum Aristoxeni ingenium consumptum videmus in musicis? Duo Reges: constructio interrete. Ut in geometria, prima si dederis, danda sunt omnia. Iam illud quale tandem est, bona praeterita non effluere sapienti, mala meminisse non oportere? Summum a vobis bonum voluptas dicitur.',
  'Quis est enim, in quo sit cupiditas, quin recte cupidus dici possit? Quod eo liquidius faciet, si perspexerit rerum inter eas verborumne sit controversia. Iam contemni non poteris. Omnes enim iucundum motum, quo sensus hilaretur. Itaque primos congressus copulationesque et consuetudinum instituendarum voluntates fieri propter voluptatem; Sit hoc ultimum bonorum, quod nunc a me defenditur; Vide, quantum, inquam, fallare, Torquate. An dolor longissimus quisque miserrimus, voluptatem non optabiliorem diuturnitas facit?',
  'Negat esse eam, inquit, propter se expetendam. Propter nos enim illam, non propter eam nosmet ipsos diligimus. Quantum Aristoxeni ingenium consumptum videmus in musicis? Quae quidem sapientes sequuntur duce natura tamquam videntes;',
].map((text, i) => <p key={i.toString()}>{text}</p>);

const Welcome = () => (
  <div className="View">
    <h1>Welcome !</h1>
    {paragraphs}
  </div>
);

export default Welcome;
