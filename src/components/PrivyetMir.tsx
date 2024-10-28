import { Card } from "@nextui-org/react";

export default function PrivyetMir() {
  return (
    <div className="flex flex-col h-full justify-center">
      <div className="flex flex-row justify-center">
        <Card className="m-6">
          <div className="m-6 flex flex-col gap-2 text-center">
            <p className="text-2xl font-bold">Привет мир!</p>
            <p className="opacity-70">
              Удалите этот компонент и приступайте к созданию!
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
