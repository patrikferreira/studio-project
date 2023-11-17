
type Service = {
    title: string,
    description: string,
    price: string
}

const serviceData: Service[] = [
    {title: 'Corte com lavagem e finalização', description: '', price: 'R$ 60,00'},
    {title: 'Corte com hidratação', description: 'Inclui finalização com escova ou cabelos com curvaturas', price: 'R$ 90,00'},
    {title: 'Tratamento capilar', description: 'Quaisquer tipos de cabelos com curvaturas ou não.', price: 'R$ 50,00'},
    {title: 'Botox', description: 'O valor pode variar de acordo com o comprimento e quantidade do cabelo.', price: 'R$ 70,00'},
    {title: 'Orgânica', description: 'O valor pode variar de acordo com o comprimento e quantidade do cabelo.', price: 'R$ 120,00'},
    {title: 'Higienização capilar', description: 'Inclui finalização com escova/cabelos com curvaturas', price: 'R$ 40,00'},
    {title: 'Franja', description: 'Já vir com o cabelo seco e levado', price: 'R$ 15,00'}
]

export default serviceData;