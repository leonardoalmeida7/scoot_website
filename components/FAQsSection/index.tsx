import { FAQContain } from "@/components/FAQContain";


interface FAQ {
  question: string;
  answer: string;
}

interface FAQsProps {
  howItWorks: FAQ[];
  safeDriving: FAQ[];
}


export function FAQsSection({ howItWorks, safeDriving }: FAQsProps) {
    return (
        <article className="text-dark-navy">
          <h2 className="text-3xl font-bold text-center mt-16 mb-8">FAQs</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <FAQContain questionAndAnswers={howItWorks} title="How it works" />
            <FAQContain questionAndAnswers={safeDriving} title="Safe Driving" />
          </div>
        </article>
    )
};