import { ButtonDefault } from "@/ui/buttonDefault";

interface CareerCardProps {
    title: string;
    location: string;
}

export function CareerCard({ title, location }: CareerCardProps) {
    return (
        <div className="flex flex-col items-center gap-4 p-10 bg-dim-grey/10 ">
            <div className="flex flex-col text-center">
                <span className="text-dark-navy font-semibold text-xl">{title}</span>
                <span className="text-dark-navy">{location}</span>
            </div>
            <ButtonDefault>Apply</ButtonDefault>
        </div>
    )
}