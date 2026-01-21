import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getSettings } from "@/app/actions/settings-actions";
import { SettingsForm } from "./settings-form-component";
export const metadata: Metadata = {
  title: "Settings | FaceSwapper.ai",
  description: "Manage your profile and account settings",
};

export default async function SettingsPage() {
  const result = await getSettings();

  if (!result.success && result.code === "UNAUTHORIZED") {
    redirect("/login");
  }

  if (!result.success) {
    return (
      <div className="p-8 text-center text-destructive">
        Failed to load settings: {result.error}
      </div>
    );
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Settings</h2>
      </div>
      <div className="flex h-full flex-1 flex-col space-y-8">
        <SettingsForm initialSettings={result.data} />
      </div>
    </div>
  );
}
