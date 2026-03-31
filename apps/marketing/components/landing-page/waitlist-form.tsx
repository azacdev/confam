"use client";

import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { PiEnvelopeLight } from "react-icons/pi";
import { zodResolver } from "@hookform/resolvers/zod";

import { api } from "@confam/backend";
import { useMutation } from "convex/react";

import {
  Button,
  Field,
  FieldError,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@confam/ui";

// Zod schema for email validation
const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

interface WaitlistFormProps {
  buttonText?: string;
  placeholder?: string;
  className?: string;
}

const WaitlistForm = ({
  buttonText = "Join Waitlist",
  placeholder = "Email address",
  className = "",
}: WaitlistFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const joinWaitlist = useMutation(api.waitlist.join);

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);

    try {
      await joinWaitlist({ email: data.email });

      setIsSuccess(true);
      reset();

      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error: any) {
      console.error("Error submitting form:", error);

      const errorMessage =
        error instanceof Error
          ? error.message
          : "An unexpected error occurred.";

      if (errorMessage.includes("already on the waitlist")) {
        setError("email", {
          type: "manual",
          message: "This email is already part of our waitlist!",
        });
      } else {
        setError("email", {
          type: "manual",
          message: "Could not join waitlist. Please try again later.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center rounded-full bg-indigo-100 px-6 py-3 text-indigo-700">
        <span className="font-medium">🎉 You&apos;re on the list!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <Field data-invalid={!!errors.email}>
        <InputGroup className="h-12 rounded-md bg-white pl-2 pr-1.5 md:!w-[450px]">
          <InputGroupAddon>
            <PiEnvelopeLight className="size-5 text-muted-foreground" />
          </InputGroupAddon>

          <InputGroupInput
            type="email"
            placeholder={placeholder}
            className="text-base placeholder:text-muted-foreground w-full"
            {...register("email")}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-9 px-4 text-sm font-medium md:h-10 md:px-5 md:text-base shrink-0"
          >
            {isSubmitting ? "Joining..." : buttonText}
          </Button>
        </InputGroup>

        {errors.email && (
          <FieldError className="mt-2 text-center text-sm font-medium text-destructive">
            {errors.email.message}
          </FieldError>
        )}
      </Field>
    </form>
  );
};

export default WaitlistForm;
