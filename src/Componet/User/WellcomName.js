import React, { useState } from 'react'

export default function WellcomName() {
    const name = localStorage.getItem("RegisterUserData");
    const rename = JSON.parse(name)
    const [time, settime] = useState(rename);
    setTimeout(() => {
        settime(false)
    }, 3000);
    return (
        <div>
            <div className="row">
                {
                  time ? <div className="alert alert-success text-center h5 sticky-top text-black " style={{ position: "fixed" }
                  } role="alert">
                      wellcome {JSON.parse(time).name}
                  </div> : null
              }
            </div>
        </div>
    )
}
