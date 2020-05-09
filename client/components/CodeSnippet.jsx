import React, { Component, useState, useEffect } from 'react';
import InputField from './InputField.jsx'



const CodeSnippet = props => {

  const fetchSnippet = () => {
    //do stuff
  }

  return (
    <div>

      <div id="snippet">
        {/* fill this area with the text that is returned from the query */}
        <p id='snippetText'>as;lfkjas;ldfkjas;ldfkjas;dlkfja;sldkfjaihtuhalsifunaispunfasoiugnba;siuogbn;auiotbga;siuotb;asub;asouib;iauosbg;uaisgba;souidhf;aosuht;aousbf
          asoiufhas;ogtha;ougba;ugb;aurgba;urgb;aourgb;agbu;aobga;uosgb;aosurgh;aourhgairughialuerbgiauebrgaiurgb;aorgb;oarbgaourbgaog
          aseg;foiuairbg;oarng;aorgba;orgib;aorigbn;oarbg;oairbg;oaurbg;orgbao;rghoirhgoidrhg
          argo;airng;oirngao;irgno;rnag;ongrnaoisrngaoingoing;orgn;aosigna;oirng;oairng;oainrgoairng;aoingr
          ayroingaOUgn;oaireng;aoigrn;aorigna;oergn;aorg;oarubg;aoebrg;oaebrg;oebgr;oaeinbgiobrea;igb
        </p>
      </div>

      <div>
        < InputField />
      </div>

    </div>
  )
}

export default CodeSnippet;