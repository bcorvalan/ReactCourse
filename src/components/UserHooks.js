import React, {useEffect} from 'react'

export default function UserHooks() {
    useEffect(() => {
        console.log("Wow useEffect");
        return () => {
            alert('Este usuario fue eliminado')
        }
    }, [])
    return (
        <div>
            
        </div>
    )
}
