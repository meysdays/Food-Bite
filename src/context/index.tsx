import { TopRestuarants } from '@/data';
import React, { createContext, PropsWithChildren, useContext, useState } from 'react'
import { ImageSourcePropType } from 'react-native';
import { CardPropsType } from '../types/types';

// interface CardPropsType {
//   id: number;
//   img: ImageSourcePropType;
//   imgLogo: ImageSourcePropType;
//   foodName: string;
//   restuarant: string;
//   time: string;
//   distance: string;
// }

interface modalContextType {
    data: CardPropsType[]
    openModal: (id: number) => void;
    closeModal: () => void;
    showModal:boolean
}

const AppContext = createContext<modalContextType | null>(null)

export const AppContextProvider = ({children}: PropsWithChildren) => {

    const [showModal, setShowModal] = useState(false);
    const [data, setData] =useState<CardPropsType[]>(TopRestuarants)
    
    // const filterData = (id: number) => {
    //     const filterData = TopRestuarants.filter((item) => item.id === id)
    //     setShowModal
    // }

    const filterData = (id: number) => {
        setData((prevData) => prevData.filter((item) => item.id === id))
    }

    const openModal = (id: number) => {
        filterData(id)
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
        setData(TopRestuarants)
    }

  return (
    <AppContext.Provider value={{openModal, closeModal, showModal, data}}>
        {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error("useAppContext must be used within AppContextProvider");
    }
    return context;
}