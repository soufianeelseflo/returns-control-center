import { ReturnStatus } from "@/lib/types";
const label:Record<ReturnStatus,string>={requested:"Requested",approved:"Approved",in_transit:"In transit",received:"Received",refunded:"Refunded",rejected:"Rejected"};
export function StatusPill({status}:{status:ReturnStatus}){return <span className="chip">{label[status]}</span>}
