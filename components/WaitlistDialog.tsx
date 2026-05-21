"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Hash,
  Sparkles,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const bookingFormSchema = z.object({
  fullname: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(8, "Please enter a valid phone number."),
  city: z.string().min(2, "City is required."),
  postcode: z
    .string()
    .min(4, "Postcode must be 4 digits.")
    .max(4, "Postcode must be 4 digits.")
    .regex(/^\d+$/, "Must contain only numbers."),
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

interface BookingDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WaitListDialog({ city }: { city: string }) {
  const [isOpen, onOpenChange] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      fullname: "",
      email: "",
      phone: "",
      city: city,
      postcode: "",
    },
  });

  // Watch values so we can inject them into the local success screen safely
  const currentValues = form.getValues();

  async function onSubmit(data: BookingFormValues) {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result.error && result.error.toLowerCase().includes("email")) {
          form.setError("email", { type: "server", message: result.error });

          toast.error("Registration Failed", {
            description: result.error,
            position: "top-center",
            duration: 10000,
          });
          return;
        }
        throw new Error(result.error || "Failed to process request.");
      }

      // 1. Trigger the global top-center toast message notification
      toast.success("Spot Secured!", {
        description: `Welcome to the waitlist, ${data.fullname}!`,
        position: "top-center",
        duration: 10000,
      });

      // 2. Set structural flag to switch views inside the dialog window frame
      setIsSuccess(true);
    } catch (error: any) {
      toast.error("Network Error", {
        description: error.message || "Something went wrong. Please try again.",
        position: "top-center",
        duration: 10000,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Intercept dialog dismissals to safely clear standard state buffers
  function handleOpenChange(open: boolean) {
    onOpenChange(open);
    if (!open) {
      // Delay resetting state until close animation completes to prevent visual flashing
      setTimeout(() => {
        setIsSuccess(false);
        form.reset();
      }, 200);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-1.5 bg-primary border border-primary px-3 py-1 rounded-sm mb-3 w-fit">
          <span className="text-[10px] uppercase tracking-[0.2em] text-background font-mono">
            Join Waitlist
          </span>
        </motion.button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-card border border-border rounded-sm shadow-2xl p-6 md:p-8 overflow-hidden z-50 gap-0">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

        {isSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center py-6 relative z-10">
            <CheckCircle2 className="w-16 h-16 text-primary mb-4 stroke-[1.5]" />

            <h2 className="text-3xl font-serif text-foreground mb-3 tracking-wide">
              You are on the List
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-8">
              Hey{" "}
              <span className="text-foreground font-medium">
                {currentValues.fullname}
              </span>
              , your spot for the 2026 tour is secured via{" "}
              <span className="text-foreground font-mono text-xs">
                {currentValues.email}
              </span>
              . We will let you know about the Ticket Release and exclusive
              updates. Stay tuned.
            </p>

            <button
              onClick={() => handleOpenChange(false)}
              className="retro-button w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 text-xs uppercase tracking-widest font-medium rounded-sm shadow-md">
              Close Window
            </button>
          </motion.div>
        ) : (
          /* CONDITION 2: DEFAULT REGISTRATION FORM WINDOW VIEW */
          <>
            <DialogHeader className="mb-6 space-y-0 text-left">
              <div className="inline-flex items-center gap-1.5 bg-background border border-border px-3 py-1 rounded-sm mb-3 w-fit">
                <Sparkles className="w-3 h-3 text-primary" />
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-mono">
                  Secure Your Spot
                </span>
              </div>
              <DialogTitle className="text-3xl font-serif text-foreground leading-tight font-normal">
                Join the <span className="text-primary">Revival</span>
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                Australia Tour 2026 Registration
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 relative z-10">
                {/* Full Name */}
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem className="space-y-1.5">
                      <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground block font-mono">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            disabled={isSubmitting}
                            placeholder="e.g., Jimi Hendrix"
                            className="bg-background border-border focus-visible:ring-0 focus-visible:border-primary pl-10 uppercase tracking-wide placeholder:lowercase placeholder:text-muted-foreground/40"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs text-destructive font-mono" />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-1.5">
                      <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground block font-mono">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            type="email"
                            disabled={isSubmitting}
                            placeholder="name@domain.com"
                            className="bg-background border-border focus-visible:ring-0 focus-visible:border-primary pl-10 placeholder:text-muted-foreground/40"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs text-destructive font-mono" />
                    </FormItem>
                  )}
                />

                {/* Phone */}
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="space-y-1.5">
                      <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground block font-mono">
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            type="tel"
                            disabled={isSubmitting}
                            placeholder="+61 400 000 000"
                            className="bg-background border-border focus-visible:ring-0 focus-visible:border-primary pl-10 font-mono placeholder:text-muted-foreground/40"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage className="text-xs text-destructive font-mono" />
                    </FormItem>
                  )}
                />

                {/* City & Postcode Row */}
                <div className="grid grid-cols-2 gap-4">
                  {/* City */}
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground block font-mono">
                          City
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              disabled
                              placeholder="e.g., Melbourne"
                              className="bg-background border-border focus-visible:ring-0 focus-visible:border-primary pl-10 placeholder:text-muted-foreground/40"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs text-destructive font-mono" />
                      </FormItem>
                    )}
                  />

                  {/* Postcode */}
                  <FormField
                    control={form.control}
                    name="postcode"
                    render={({ field }) => (
                      <FormItem className="space-y-1.5">
                        <FormLabel className="text-[10px] uppercase tracking-widest text-muted-foreground block font-mono">
                          Postcode
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                            <Input
                              maxLength={4}
                              disabled={isSubmitting}
                              placeholder="3000"
                              className="bg-background border-border focus-visible:ring-0 focus-visible:border-primary pl-10 font-mono placeholder:text-muted-foreground/40"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="text-xs text-destructive font-mono" />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Action Footer */}
                <div className="flex gap-3 pt-4 border-t border-border mt-6">
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => handleOpenChange(false)}
                    className="flex-1 py-3 text-xs uppercase tracking-widest border border-border text-muted-foreground hover:bg-background hover:text-foreground transition-colors rounded-sm disabled:opacity-50">
                    Cancel
                  </button>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={isSubmitting ? {} : { scale: 1.02 }}
                    whileTap={isSubmitting ? {} : { scale: 0.98 }}
                    className="flex-1 retro-button bg-primary text-primary-foreground py-3 text-xs uppercase tracking-widest font-medium rounded-sm shadow-md flex items-center justify-center gap-2 disabled:opacity-70">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Confirm Request"
                    )}
                  </motion.button>
                </div>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
