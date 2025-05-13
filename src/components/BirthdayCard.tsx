// components/BirthdayCard.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const BirthdayCard = () => {
  return (
    <Card className="mx-auto my-8 max-w-lg p-4 shadow-lg opacity-70 bg-white text-cyan-950 rounded-lg">
      <CardHeader>
        <h2 className="text-3xl font-semibold lora">Ännu ett år klokare..</h2>
      </CardHeader>
      <Separator />
      <CardContent className="mt-4 text-center">
        <p className="text-lg lora pb-1">...eller åtminstone ett år mer rutinerad på att fira ordentligt!</p>
        <p className="text-lg lora pb-3">Hoppas dagen bjuder på något gott, något glittrigt och gärna lite skratt som känns i magen.</p>
        <div className="text-xl lora">Ha en fantastisk födelsedag och kom ihåg att ålder är bara en siffra. <p className="text-lg lora pb-3 text-cyan-800 italic">I ditt fall en ganska hög siffra, men ändå...</p></div>
        
      </CardContent>
    </Card>
  );
};

export default BirthdayCard;
