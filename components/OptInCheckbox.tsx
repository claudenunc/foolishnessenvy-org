"use client";

import Link from "next/link";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  required?: boolean;
  name?: string;
};

/**
 * SMS opt-in checkbox required by Twilio A2P 10DLC.
 * MUST start unchecked. MUST link to /sms-terms and /privacy.
 * MUST display the full disclosure text below.
 */
export function OptInCheckbox({ checked, onChange, name = "sms_opt_in" }: Props) {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-5 w-5 rounded border-2 border-neutral-600 bg-transparent accent-neon-blue cursor-pointer"
      />
      <span className="text-xs text-neutral-300 leading-relaxed group-hover:text-neutral-100">
        I agree to receive SMS messages from FOOLISHNESS ENVY INC. Message and data rates may apply.
        Message frequency varies (up to 4 messages per month). Reply STOP to opt out, HELP for help.
        See{" "}
        <Link href="/sms-terms" className="text-neon-blue underline">
          SMS Terms
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-neon-blue underline">
          Privacy Policy
        </Link>
        .
      </span>
    </label>
  );
}
