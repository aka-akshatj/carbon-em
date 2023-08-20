import React from 'react'
import Card from '../components/Card';

function Claim({form}) {
    return (
          <div className="flex my-20 justify-center items-center">
      <Card props={form.claim}></Card>
    </div>
    );
  
}

export default Claim