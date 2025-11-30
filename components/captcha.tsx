import { useState } from "react";
import Turnstile from "react-turnstile"

const Captca=()=>{
    const [verified, setVerified] = useState(false);
    return(
        <>
          {!verified && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
          <div className="p-6 bg-white rounded shadow text-center">
            <h2 className="text-xl mb-4 font-semibold">
              Security Verification
            </h2>

            <Turnstile
              sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
              onVerify={() => setVerified(true)}
              theme="light"
            />
          </div>
        </div>
      )}</>
    )
}
export default Captca