import { Card } from "@/components/card";
import Link from "next/link";

export default function ArchievedNotifications(){
    return (
        <Card>
            <div>Archieved Notifications</div>
            <div>
                <Link href="/dashboard">Default</Link>
            </div>
        </Card>
    )
}

