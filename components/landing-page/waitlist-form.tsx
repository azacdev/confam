"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PiEnvelopeLight } from "react-icons/pi";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Field, FieldError } from "@/components/ui/field";

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
    formState: { errors },
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API call
      console.log("Submitting email:", data.email);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSuccess(true);
      reset();

      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex items-center justify-center rounded-full bg-emerald-100 px-6 py-3 text-emerald-700">
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
            className="h-9 px-4 text-sm font-medium md:h-10 md:px-5 md:text-base"
          >
            {isSubmitting && "Joining..."}
            {!isSubmitting && <>{buttonText}</>}
          </Button>
        </InputGroup>

        {errors.email && (
          <FieldError className="mt-2 text-center">
            {errors.email.message}
          </FieldError>
        )}
      </Field>
    </form>
  );
};

export default WaitlistForm;
