import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// Ta funkcja wywołuje się za każdym razem (po stronie serwera)
// /admin/orders
export async function getServerSideProps() {
    // możemy odpytać bazę, api, file system
    const orders = await prisma.order.findMany();
    return {
        props: { orders }
    }
}

const AdminOrders = ({ orders }) => {
    console.log(orders)
    return (
        <div>
            <h2>Recent orders</h2>
        </div>
    )
}

export default AdminOrders;
