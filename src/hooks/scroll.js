import {useEffect, useState} from "react";

export default function Scroll() {
    let [scroll,scrollSet] = useState(0)

    useEffect(()=>{
        const listener = (event) => {
            scrollSet(window.pageYOffset)
            }

            document.addEventListener('scroll', listener)

        return () =>   document.removeEventListener("mousedown", listener);

    },[]);

    return scroll
  }