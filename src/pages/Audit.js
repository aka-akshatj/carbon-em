import React from 'react'
import Card from '../components/Card';

function Audit({form}) {
    return (
      <div className="flex my-20 justify-center items-center">
        <Card props={form.audit}></Card>
      </div>
    );
}

export default Audit