import { useRouter } from "next/router";

export async function getStaticProps(context) {
    console.log(context);

    return {
        props: {products: []}
    }
}

export default function AdminOrderShowPage() {
    const router = useRouter()
    const {id} = router.query

    return (
        <div>Admin show page {id}</div>
    )
}
