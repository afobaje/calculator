import React from 'react'

const Screen = ({display,otherdisplay,result,sign}) => {
  return (
    <div className='
    bg-slate-400
    col-span-4
    p-5
    h-20
    w-11/12
    rounded
    '>
        <div>
          <p>{display||0}{' '}{sign}{' '}{otherdisplay}</p>
          <p>{result}</p>
        </div>
    </div>
  )
}

export default Screen;


