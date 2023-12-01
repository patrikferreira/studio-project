"use client"
import { ReactNode, createContext, useState } from "react"

export type Professional = {
    id: string,
    name: string,
    img: string,
    services: Service[]
}

export type contextProvider = {
    professionals: Professional[],
    selectedProfessional: Professional | null,
    setProfessional: (professional: Professional | null) => void,
    services: Service[],
    professionalDataAux: Professional[]
}

type Props = {
    children: ReactNode;
}

type Service = {
    title: string,
    description: string,
    price: string
}



const professionalData: Professional[] = [
    {
        id: "maria",
        name: 'Mária Lima',
        img: 'assets/ficticia-perfil.png',
        services: [
            {title: 'Corte com lavagem e finalização', description: '', price: 'R$ 60,00'},
            {title: 'Corte com hidratação', description: 'Inclui finalização com escova ou cabelos com curvaturas', price: 'R$ 90,00'},
            {title: 'Tratamento capilar', description: 'Quaisquer tipos de cabelos com curvaturas ou não.', price: 'R$ 50,00'},
            {title: 'Botox', description: 'O valor pode variar de acordo com o comprimento e quantidade do cabelo.', price: 'R$ 70,00'},
            {title: 'Orgânica', description: 'O valor pode variar de acordo com o comprimento e quantidade do cabelo.', price: 'R$ 120,00'},
            {title: 'Higienização capilar', description: 'Inclui finalização com escova/cabelos com curvaturas', price: 'R$ 40,00'},
            {title: 'Franja', description: 'Já vir com o cabelo seco e levado', price: 'R$ 15,00'}
        ]
    },
    {
        id: "joyce",
        name: 'Joyce Holanda',
        img: 'assets/ficticia-perfil.png',
        services: [
            {title: 'Maquiagem', description: 'Inclui maquiagem social e maquiagem de festa', price: 'R$ 75,00'},
            {title: 'Maquiagem e Cabelo', description: '', price: 'R$ 100,00'}, // adicionar descricao
            {title: 'Consultoria de imagem e estilo', description: 'Quaisquer tipos de cabelos com curvaturas ou não.', price: 'R$ 300,00'},
        ]
    }
   
]

const concatArray = professionalData[0].services.concat(professionalData[1].services)
export const dataContext = createContext<contextProvider>({} as contextProvider)
export default function DataProvider({children}: Props) {
    const [selectedProfessional, setSelectedProfessional] = useState<Professional | null>(null);
    const [services, setServices] = useState<Service[]>(concatArray);
    const [professionalDataAux, setProfessionalDataAux] = useState<Professional[]>(professionalData)
    return <dataContext.Provider value={{professionals: professionalData, setProfessional: setSelectedProfessional, selectedProfessional: selectedProfessional, services: services, professionalDataAux: professionalDataAux}}>
        {children}
    </dataContext.Provider>
}