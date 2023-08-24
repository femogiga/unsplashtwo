import { useEffect, useState } from "react"

export const useHandleModalDisplay = () => {
    const [active, setActive] = useState<boolean>(false)

    useEffect(() => {
        const addPhoto = document.getElementById('submit') as HTMLButtonElement
        addPhoto.style.display = 'none'
    },[active])


    return [active, setActive]
}
