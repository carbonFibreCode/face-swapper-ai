"use client";
import { AnimatedTabs } from "@/components/ui/animated-tabs";
import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useTheme } from "next-themes";
import { Loader2, Moon, Sun, Monitor } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SettingsDTO, updateProfileSchema } from "@/lib/services/settings-service/types";
import { updateProfile, deleteAccount } from "@/app/actions/settings-actions";
interface SettingsFormProps {
  initialSettings: SettingsDTO;
}
const formSchema = updateProfileSchema;
export function SettingsForm({ initialSettings }: SettingsFormProps) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [isPending, startTransition] = useTransition();
  const [isDeleting, startDeleting] = useTransition();
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialSettings.name || "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    startTransition(async () => {
      const payload = { ...values, theme: theme };
      const result = await updateProfile(payload);
      if (result.success) {
        toast.success("Settings updated successfully");
        router.refresh();
      } else {
        toast.error(result.error || "Failed to update settings");
      }
    });
  };
  const handleDeleteAccount = () => {
    startDeleting(async () => {
      const result = await deleteAccount();
      if (result.success) {
        toast.success("Account deleted. Goodbye!");
        window.location.href = "/";
      } else {
        toast.error(result.error || "Failed to delete account");
      }
    });
  };
  const getInitials = (name: string | null) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };
  return (
    <div className="space-y-6">
      <div className="space-y-0.5">
        <h3 className="text-lg font-medium text-foreground">Profile</h3>
      </div>
      <Separator />
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="glass-card rounded-xl p-6">
          <div className="grid gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="relative flex h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-white/20 bg-muted/50 shadow-sm">
                {initialSettings.image ? (
                  <img
                    className="aspect-square h-full w-full object-cover"
                    src={initialSettings.image}
                    alt={initialSettings.name || "User"}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-primary/10 text-2xl font-semibold text-primary">
                    {getInitials(initialSettings.name)}
                  </div>
                )}
              </div>
              <div className="space-y-1">
                <Label className="text-base">Profile Picture</Label>
              </div>
            </div>
            <div className="grid gap-2 max-w-md">
              <Label htmlFor="name">Display Name</Label>
              <Input
                id="name"
                disabled={isPending}
                {...form.register("name")}
                className="bg-background/50 border-white/10 focus:bg-background/80 transition-colors"
              />
              {form.formState.errors.name && (
                <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>
              )}
            </div>
            <div className="grid gap-2 max-w-md">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={initialSettings.email || ""}
                disabled
                className="bg-muted/50 text-muted-foreground border-white/10"
              />
              <p className="text-[0.8rem] text-muted-foreground">
                Your email address is managed by your login provider.
              </p>
            </div>
          </div>
        </div>
        <Separator />
        <div className="glass-card rounded-xl p-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-foreground">Appearance</h3>
            </div>
            <div className="flex items-center gap-4">
              <AnimatedTabs
                items={[
                  { value: "light", label: <span className="hidden sm:inline">Light</span>, icon: <Sun className="h-4 w-4" /> },
                  { value: "dark", label: <span className="hidden sm:inline">Dark</span>, icon: <Moon className="h-4 w-4" /> },
                  { value: "system", label: <span className="hidden sm:inline">System</span>, icon: <Monitor className="h-4 w-4" /> },
                ]}
                value={theme || "system"}
                onChange={(val) => setTheme(val)}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-start">
          <Button type="submit" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Changes
          </Button>
        </div>
      </form>
      <Separator className="my-6" />
      <div className="space-y-4">
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-6 backdrop-blur-xl transition-all hover:bg-red-500/10">
          <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <div className="space-y-1">
              <h3 className="font-medium text-destructive">Delete Account</h3>
              <p className="text-sm text-destructive/80">
                Permanently delete your account and all associated data. This action cannot be
                undone.
              </p>
            </div>
            <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="destructive" size="sm">
                  Delete Account
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account,
                    credits, and generated videos from our servers.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setDeleteDialogOpen(false)}
                    disabled={isDeleting}
                  >
                    Cancel
                  </Button>
                  <Button variant="destructive" onClick={handleDeleteAccount} disabled={isDeleting}>
                    {isDeleting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Delete Account
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
