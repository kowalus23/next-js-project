import { PrismaClient } from '@prisma/client'
import useSWR from 'swr'

const prisma = new PrismaClient()// /admin/orders
export async function getServerSideProps() {
    // możemy odpytać bazę, api, file system
    const orders = await prisma.order.findMany();
    return {
        props: { orders }
    }
}

const fetcher = url => fetch(url).then(r => r.json())

const AdminOrders = ({ orders }) => {
    // Komponent dostaje początkowe dane z serwera i nasłuchuje na zmiany
    const { data, error } = useSWR('/api/admin/orders', fetcher, {
        initialData: orders,
        refreshInterval: 3000
    })

    // Możesz odpytywać api Nexta (serwer musi działać) lub zewnętrzne serwisy

    return (
        <div>
            <h2>Recent orders</h2>
            {data.map(item => <p>{item.mobilePhone}, {item.status}</p>)}
        </div>
    )
}

export default AdminOrders;
