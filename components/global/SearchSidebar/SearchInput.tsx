'use client'

import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import Image from 'next/image'


import styles from './searchsidebar.module.sass'

interface iDefault {
    defaultValue: string | null
}


export const SearchInput = ({ defaultValue }: iDefault) => {
    // initiate the router from next/navigation

    const router = useRouter()

    // We need to grab the current search parameters and use it as default value for the search input

    const [inputValue, setValue] = useState(defaultValue)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{

        const inputValue = event.target.value;

        setValue(inputValue);

    }



    // If the user clicks enter on the keyboard, the input value should be submitted for search 

    // We are now routing the search results to another page but still on the same page


    const handleSearch = () => {

        if (inputValue) return router.push(`/?q=${inputValue}`);

        if (!inputValue) return router.push("/")

    }


    const handleKeyPress = (event: { key: any; }) => {

        if (event.key === "Enter") return handleSearch()

    }



    return (

        <div className={styles.searchinput}>
            <Image
                src='/search.svg'
                alt="Search"
                height={18}
                width={18}
            />
            <input type="text"
                id="inputId"
                placeholder="Search"
                value={inputValue ?? ""} onChange={handleChange}
                onKeyDown={handleKeyPress}
            />


        </div>

    )
}