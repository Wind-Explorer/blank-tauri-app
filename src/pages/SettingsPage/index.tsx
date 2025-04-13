import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

export default function SettingsPage() {
  const navigate = useNavigate();
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Beginning of starter */}
      <div className="p-8 flex flex-col gap-4">
        <div className="flex flex-col">
          <p className="text-xl">App Settings</p>
          <p className="opacity-70">A page to contain settings for this app.</p>
        </div>
        <Button onPress={() => navigate(-1)} className="w-max">
          Back
        </Button>
      </div>
      {/* End of starter */}
    </div>
  );
}
