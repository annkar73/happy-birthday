// components/BirthdayCard.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const BirthdayCard = () => {
  return (
    <Card className="mx-auto my-8 max-w-lg p-4 shadow-lg opacity-70 bg-white text-cyan-950 rounded-lg">
      <CardHeader>
        <h2 className="text-xl font-semibold">Ytterligare ett år visare..</h2>
      </CardHeader>
      <Separator />
      <CardContent className="mt-4 text-center">
        <p className="text-lg">...eller åtminstone ett år mer rutinerad på att fira ordentligt!</p>
        <p className="text-lg">Hoppas dagen bjuder på något gott, något glittrigt och gärna lite skratt som känns i magen.</p>
        <p className="text-lg">Ha en fantastisk födlesedag - och kom ihåg: ålder är bara en siffra (i ditt fall en ganska hög siffra!)</p>
        
      </CardContent>
    </Card>
  );
};

export default BirthdayCard;
